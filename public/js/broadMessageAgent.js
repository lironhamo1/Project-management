window.onload = function () {
    var message;
    var user = localStorage.getItem("user")

    var name = localStorage.getItem("name");
    document.getElementById("hello").innerText = 'hello, ' + name;
    var type = localStorage.getItem("type");
    console.log(type)


    const btn1 = document.getElementById("hello");
    if (localStorage.getItem("type") == "agent") {
        btn1.addEventListener("click", agentPage);
    }
    if (localStorage.getItem("type") == "client") {
        btn1.addEventListener("click", clientPage);
    }
    if (type == "null" || type == undefined) {
        document.getElementById("hello").innerText = 'hello, guest';
        btn1.addEventListener("click", nullP);
    }

    function clientPage() {
        window.open('costumerPersonalPage');
    }

    function agentPage() {
        window.open('AgentPersonalPage');
    }

    function nullP() {
        alert("please login first");
    }





    function readDB() {
        let myPromise = new Promise((resolve, reject) => {
            var data = {
                name: "dana"
            };
            fetch("/password", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(function (response) {
                    if (response.ok) {
                        console.log('got data: ', response.data);
                        resolve(response.data);
                        // findAccount(response.data);
                    } else {
                        console.log("error");
                        throw new Error('Request failed.');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        });
        return myPromise
    }

    function findAccount() {
        message=document.getElementById("msg").value;
        readDB().then((database)=>{
            var i;
            for (i = 0; i < database.length; i++) {
                if (database[i]['type'] == 'client') {
                    update(database[i]['email'] )
                }
            }
        });
    }
    function update(email){

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "mail":email,
            "message":message
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("broadMessage", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    const btn = document.getElementById("submitBTN");
    btn.addEventListener("click", findAccount);
}


