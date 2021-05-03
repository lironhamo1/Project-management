var user="AviNeelavi@gmail.com";

window.onload = function () {
    console.log(localStorage);
    var name = localStorage.getItem("user");
    document.getElementById("hello").innerText = 'hello, ' + name;

    const btn1 = document.getElementById("hello");
    if (localStorage.getItem("type") == "agent") {
        btn1.addEventListener("click", agentPage);
    } if (localStorage.getItem("type") == "client") {
        btn1.addEventListener("click", clientPage);
    } if (localStorage.getItem("type")==null) {
        document.getElementById("hello").innerText='Hello,guest '
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
        for(var i=0;i<obj.length;i++){
            console.log(obj[i].location);

            let row = document.createElement('tr');
            let col2 = document.createElement('td');
            let col3 = document.createElement('td');
            row.appendChild(col3);
            row.appendChild(col2);
            col3.innerHTML = obj[i]['location']; // put data in first column
            if(obj[i]['register']==null){
                col2.innerHTML ="there is no registrations"
            }
            else{
                col2.innerHTML = obj[i]['register']; // put data in first column

            }

            let table = document.getElementById("table");
            table.appendChild(row);
        }
    }
    readDB()
    function readDB() {
        var data;
        fetch("/readReg", {
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
                    addObjectForDisplay(response.data);
                } else {
                    console.log("error");
                    throw new Error('Request failed.');
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }


}

