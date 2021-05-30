window.onload = function () {
    var user = localStorage.getItem("user")

    var name = localStorage.getItem("name");
    document.getElementById("hello").innerText = 'hello, ' + name;
    var type = localStorage.getItem("type");
    console.log(type)


    const btn1 = document.getElementById("hello");
    if (localStorage.getItem("type") == "agent") {
        btn1.addEventListener("click", agentPage);
    } if (localStorage.getItem("type") == "client") {
        btn1.addEventListener("click", clientPage);
    } if (type=="null"|| type==undefined) {
        document.getElementById("hello").innerText = 'hello, guest';
        btn1.addEventListener("click", nullP);
    }
    function clientPage() {
        window.open('costumerPersonalPage');
    }
    function agentPage() {
        window.open('AgentPersonalPage');
    }
    function nullP(){
        alert("please login first");
    }


    var count = 0;
    var obj;

    function visual() {
        if (count == 0) {
            document.getElementById("empty").innerHTML = "There is no message for you";
            //document.getElementById("btn_wishList").hidden = "hidden"
            document.getElementById("titles_table").hidden="hidden"
        }
    }
    foundAccount()

    function Func() {
        let myPromise = new Promise((resolve, reject) => {
            var data;
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


    function foundAccount() {
        Func().then((database) => {
            console.log(database);
            var i;
            for (i = 0; i < database.length; i++) {
                if (database[i]['email'] == user) {
                    document.getElementById("title_").innerHTML = database[i]['firstname'] + " messages Page";
                    if(database[i]['messages']==null){
                        visual();
                    }
                    else{
                        count++;
                        readMsg(database[i]['messages']);
                    }
                }
            }
        });


    }

    function readMsg(msgArray) {
        for(var i=0;i<msgArray.length;i++) {
            console.log("in loop "+ msgArray[i]);
            let row = document.createElement('tr');
            let col3 = document.createElement('td');
            row.appendChild(col3);
            col3.innerHTML =msgArray[i]; // put data in first column
            if (msgArray == null) {
                col3.innerHTML = "there is no registrations"
            }
            let table = document.getElementById("table");
            table.appendChild(row);
        }
    }

}

