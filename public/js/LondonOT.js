var country="London";

window.onload = function () {
    function addObjectForDisplay(obj) {
        let row = document.createElement('tr');
        let col = document.createElement('td');
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


        col2.innerHTML = obj['location']; // put data in first column
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
    }

    function readDB() {
        var data;
        fetch("/OrganizedTrip", {
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
                    readTrip(response.data);
                } else {
                    console.log("error");
                    throw new Error('Request failed.');
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    function readTrip(database) {
        var i;
        for (i = 0; i < database.length; i++) {
            if (database[i]['location'] == country) {
                console.log("enter" + database[i]['location'])

                addObjectForDisplay(database[i]);
            }
            console.log(database[i]['location'])
        }
    }
    readDB();
    document.getElementById("title_").innerHTML = country + " Trip";



}


