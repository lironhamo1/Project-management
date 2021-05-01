var user="AviNeelavi@gmail.com";

window.onload = function () {

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