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
            document.getElementById("empty").innerHTML = "There is no packages in wishlist";
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
                    document.getElementById("title_").innerHTML = database[i]['firstname'] + " WishList Page";
                    equal(database[i]);
                }
            }
        });


    }



    function readTrip() {
        console.log("enter readTrip()")
        let myPromise = new Promise((resolve, reject) => {
            var data;
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


    function equal(obj) {
        readTrip().then((database) => {
            var i;
            for (i = 0; i < database.length; i++) {
                if (database[i]['serial'] == obj['wishlist']) {
                    addObjectForDisplay(database[i]);
                    count++;
                }
            }
            visual()

        });
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
        let col11 = document.createElement('td');

        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        row.appendChild(col7);
        row.appendChild(col8);
        row.appendChild(col9);
        row.appendChild(col10);
        row.appendChild(col11);


        col2.innerHTML = obj['locations']; // put data in first column
        col3.innerHTML = obj['area'];
        col4.innerHTML = obj['trip_start'];
        col5.innerHTML = obj['trip_end'];
        col6.innerHTML = obj['cost'];
        col7.innerHTML = obj['hotel'];
        col8.innerHTML = obj['star'];
        col9.innerHTML = obj['flight'];
        col10.innerHTML = obj['packageType'];
        col11.innerHTML = obj['about'];

        let table = document.getElementById("table");
        table.appendChild(row);


        // function updateWishlist(){
        //     var myHeaders = new Headers();
        //     myHeaders.append("Content-Type", "application/json");
        //
        //     var raw = JSON.stringify({
        //         "mail":mail,
        //         "newPass": newPass
        //     });
        //
        //     var requestOptions = {
        //         method: 'POST',
        //         headers: myHeaders,
        //         body: raw,
        //         redirect: 'follow'
        //     };
        //
        //     fetch("update", requestOptions)
        //         .then(response => response.text())
        //         .then(result => console.log(result))
        //         .catch(error => console.log('error', error));
        //
        // }
        // }
    }
}

