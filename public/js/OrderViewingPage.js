/**
 * Functionality for scaling, showing by media query, and navigation between multiple pages on a single page.
 * Code subject to change.
 **/



if (window.console==null) { window["console"] = { log : function() {} } }; // some browsers do not set console

window.onload=function() {
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

    var packageID;
    function processOrderID()
    {
        var parameters = location.search.substring(1).split("&");
        console.log(parameters);
        var temp = parameters[0].split("=");
        var id = unescape(temp[1]);
        packageID=id;
    }

    function makingtable(listing) {
        $("#fname").text(listing[0]);
        $("#lname").text(listing[1]);
        $("#uid").text(listing[2]);
        $("#email").text(listing[3]);
        $("#phone").text(listing[4]);
        $("#creditcd").text(listing[5]);
        $("#ltd").text(listing[6]);
        $("#expdate").text(listing[7]);
        $("#ptype").text(listing[8]);
        $("#passnum").text(listing[9]);
        $("#price").text(listing[10]);
        $("#dates").text(listing[11]);
    }

    function FieldsArng(listing) {
        var arng = [];
        if (listing['User Name'] !== undefined)
            arng.push(listing['User Name']);
        else arng.push('0');
        if (listing['Last Name'] !== undefined)
            arng.push(listing['Last Name']);
        else arng.push('0');
        if (listing['UID'] !== undefined)
            arng.push(listing['UID']);
        else arng.push('0')
        if (listing['Email'] !== undefined)
            arng.push(listing['Email']);
        else arng.push('0');
        if (listing['Phone'] !== undefined)
            arng.push(listing['Phone']);
        else arng.push('0');
        if (listing['CCD'] !== undefined)
            arng.push(listing['CCD']);
        else arng.push('0');
        if (listing['LTD'] !== undefined)
            arng.push(listing['LTD']);
        else arng.push('0');
        if (listing['Expiration'] !== undefined)
            arng.push(listing['Expiration']);
        else arng.push('0');
        if (listing['Package Type'] !== undefined)
            arng.push(listing['Package Type']);
        else arng.push('0');
        if (listing['TravelsNum'] !== undefined)
            arng.push(listing['TravelsNum']);
        else arng.push('0');
        if (listing['Price'] !== undefined)
            arng.push(listing['Price']);
        else arng.push('0');
        if (listing['Dates'] !== undefined)
            arng.push(listing['Dates']);
        return arng
    }
    function loadPackgeUserInfoDb() {
        if(packageID.length===0) {
            alert("Somthing went wrong");
            window.moveTo("/homePage");
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var data=JSON.stringify({
            "pid":packageID,
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };
        fetch("/LoadPackageUserIfno",requestOptions)
            .then(response => response.json())
            .then(function(response) {

                if (response.ok) {
                    console.log(response.data.package[0]);
                    //LOAD LABELS ACCORDING TO DB
                    var rdy=FieldsArng(response.data.package[0])
                    makingtable(rdy)
                }
                else throw new Error('Request failed.');
            })
            .catch(function(error) {
                console.log(error);
            });

    }
    processOrderID();
    loadPackgeUserInfoDb();
};

