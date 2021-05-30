var count=0;
var serial;
var rate;

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
        let col10 = document.createElement('td');



        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        row.appendChild(col7);
        row.appendChild(col8);
        row.appendChild(col9);
        row.appendChild(col10);


        col2.innerHTML = obj['Status']; // put data in first column
        col3.innerHTML = obj['Dates'];
        col4.innerHTML = obj['Destination'];
        col5.innerHTML = obj['User Name'];
        col6.innerHTML = obj['Phone'];
        col7.innerHTML = obj['Email'];
        col8.innerHTML = obj['Price'];
        col9.innerHTML = obj['Package Type'];
        col9.innerHTML = obj['Package Type'];
        serial=obj['serial'];
        col10.innerHTML = 'press for rate the package';
        col10.addEventListener("click",ratePackage);
        col10.setAttribute('id',serial);
        // if (status=='undefined'){
        //     count=1;
        //     if (count == 0) {

        //
        //     })
        let table = document.getElementById("table");
        table.appendChild(row);
    }

    function ratePackage (){

        rate = prompt("enter a rate 1-5", "0");
        switch(rate) {
            case "1":
                findpackagefromDB(this.id,rate);
                break;
            case "2":
                findpackagefromDB(this.id,rate);
                break;
            case "3":
                findpackagefromDB(this.id,rate);
                break;
            case "4":
                findpackagefromDB(this.id,rate);
                break;
            case "5":
                findpackagefromDB(this.id,rate);
                break;
            default:
                alert("you mast enter a rate between 1-5,good bey");
        }


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

    function findpackagefromDB(serial,rate) {
        readDBforPackage().then((database)=>{
            var i;
            for (i = 0; i < database.length; i++) {
                let  today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                let yyyy = today.getFullYear();

                today = yyyy+ '-' + mm + '/' + dd;
                if (database[i]['serial'] == serial ){
                    if(database[i]['trip_end']<today ) {
                       //  let newrate=database[i]['arrayRate'].length;
                       //  alert(newrate);
                       //  let sum=0;
                       // for(let j=0;j<newrate;j++){
                       //     sum=sum+database[i]['arrayRate'][j];
                       // }
                       // sum=sum+rate;

                       //updatePacakgeRate(serial, Math.floor(Math.random() * (1 - 5 + 1)) + 1/(Math.floor(Math.random() * 11)+1),rate);
                        updatePacakgeRate(serial,rate,rate);
                    }

                    else{
                    alert("You must end your vacation in order to give a rating")
                    }
                }

            }
        });


    }


    function updatePacakgeRate(serial,rate,newrate){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "serial":serial,
            "rate": newrate,
            //"arrayRate":rate,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("updatePacakgeRate", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }


    function readDBforPackage() {
        let myPromise = new Promise((resolve, reject)=>{
            var data={
                name: "dana"
            };
            fetch("/wishlist", {
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
        // console.log(obj);

}
    readDB();
}

