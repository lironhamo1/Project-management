
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


    function addObjectForDisplay(obj) {
        let row = document.createElement('tr');
        let col2 = document.createElement('td');


        row.appendChild(col2);

        col2.innerHTML = obj['email']; // put data in first column


        let table = document.getElementById("table");
        table.appendChild(row);
    }

    function readDB() {
        var data;
        fetch("/news", {
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
                    addNews(response.data);
                } else {
                    console.log("error");
                    throw new Error('Request failed.');
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    function addNews(database) {
        console.log(database)
        var i;
        for (i = 0; i < database.length; i++) {
            if(database[i]["newsletter"]=="on")
                addObjectForDisplay(database[i])
        }
    }
    readDB()
}