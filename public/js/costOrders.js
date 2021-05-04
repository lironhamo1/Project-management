var count=0;

window.onload = function () {
    var user = localStorage.getItem("user")
    var name = localStorage.getItem("name");
    document.getElementById("title_").innerHTML=name+" Orders";
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
        let col3 = document.createElement('td');
        let col4 = document.createElement('td');
        let col5 = document.createElement('td');
        let col6 = document.createElement('td');
        let col7 = document.createElement('td');
        let col8 = document.createElement('td');
        let col9 = document.createElement('td');

        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        row.appendChild(col7);
        row.appendChild(col8);
        row.appendChild(col9);


        col2.innerHTML = obj['Status']; // put data in first column
        col3.innerHTML = obj['Dates'];
        col4.innerHTML = obj['Destination'];
        col5.innerHTML = obj['User Name'];
        col6.innerHTML = obj['Phone'];
        col7.innerHTML = obj['Email'];
        col8.innerHTML = obj['Price'];
        col9.innerHTML = obj['Package Type'];
        // if (status=='undefined'){
        //     count=1;
        //     if (count == 0) {

        //
        //     })
        let table = document.getElementById("table");
        table.appendChild(row);
    }

    function readDB() {
        var data;
        fetch("/readOrders", {
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
                    readOrders(response.data);

                } else {
                    console.log("error");
                    throw new Error('Request failed.');
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    function readOrders(database) {
        var i;
        for (i = 0; i < database.length; i++) {
            if (database[i]['Email'] == user) {
                count = 1;
                document.getElementById("title_").innerHTML = database[i]['User Name'] + " Orders";
                addObjectForDisplay(database[i]);
            }
        }
        if (count == 0) {
            document.getElementById("table").innerHTML = "There is no orders yet";
            document.getElementsByClassName("titles_table").hidden = "hidden"

        }
    }
    readDB();

}

