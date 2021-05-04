/**
 * Functionality for scaling, showing by media query, and navigation between multiple pages on a single page.
 * Code subject to change.
 **/



if (window.console==null) { window["console"] = { log : function() {} } }; // some browsers do not set console

window.onload=function() {
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
    } if (type=="null") {
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

    var rowCount=0;
    //arrange the fields in a list
    function FieldsArng(listing,i) {
        var arng=[];
        if (listing['_id']!==undefined)
            arng.push(i.toString());
        if (listing['Status']!==undefined)
            arng.push(listing['Status']);
        else arng.push('0');
        if (listing['Dates']!==undefined)
            arng.push(listing['Dates']);
        else arng.push('0');
        if (listing['Destination']!==undefined)
            arng.push(listing['Destination']);
        else arng.push('0');
        if (listing['User Name']!==undefined)
            arng.push(listing['User Name']);
        else arng.push('0');
        if (listing['Phone']!==undefined)
            arng.push(listing['Phone']);
        else arng.push('0');
        if (listing['Email']!==undefined)
            arng.push(listing['Email']);
        else arng.push('0');
        if (listing['Price']!==undefined)
            arng.push(listing['Price']);
        else arng.push('0');
        if (listing['Package Type']!==undefined)
            arng.push(listing['Package Type']);
        else arng.push('0');
        arng.push(listing["_id"]);
        return arng

    }
    //Adds product to table
    function productsAdd(data) {
        var fakeid="6081c5c14aad6e5254642488"
        var id="status"+data[0].toString();
        var hid="hid"+data[0].toString();
        var myhref="/OrderDisplay?pid="+data[9]+"&uid="+fakeid;
        $("#package_table tbody").append("<tr>" +
            "<td><a href="+myhref+">"+data[0]+"</a></td>" +
            "<td contenteditable='true' id="+id+">"+data[1]+"</td>" +
            "<td>"+data[2]+"</td>" +
            "<td>"+data[3]+"</td>" +
            "<td>"+data[4]+"</td>" +
            "<td>"+data[5]+"</td>" +
            "<td>"+data[6]+"</td>" +
            "<td>"+data[7]+"</td>" +
            "<td>"+data[8]+"</td>" +
            "<td hidden id="+hid+">"+data[9]+"</td>"+
            "</tr>");
    }
    //Load information from database a insert to table
    function loadfromDb() {
        var rdy;
        var dataset=[];
        var data;
        fetch("/LoadAllFromOrders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(function(response) {

                if (response.ok) {
                    console.log('got data');
                    var i;
                    for (i=0;i<response.data.length;i++){
                        rdy = FieldsArng(response.data[i],i+1);
                        rowCount++;
                        productsAdd(rdy);
                    }
                    document.getElementById("package_table").dataset=dataset;
                }
                else throw new Error('Request failed.');
            })
            .catch(function(error) {
                console.log(error);
            });

    }
    //After commit function
    function commitChanges() {
        var changes =[];
        var mytuple=[];
        var i, id, ele,ele2,listid;
        for (i = 0; i < rowCount; i++) {
            id = 'status' + (i + 1).toString();
            listid='hid'+(i+1).toString();
            ele = document.getElementById(id).innerText;
            ele2=document.getElementById(listid).innerText;
            mytuple=[ele,ele2]
            changes.push(mytuple)
        }
        update(changes)
    }
    //Sends update to data base
    function update(upd){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "data":upd,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("UpdateAllOrderStatus", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }


    loadfromDb();
    var temp = document.getElementById("add");
    temp.addEventListener("click", commitChanges);
}

// eslint-disable-next-line no-unused-vars
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("package_table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}