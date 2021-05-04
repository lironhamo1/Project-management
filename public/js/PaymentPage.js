/**
 * Functionality for scaling, showing by media query, and navigation between multiple pages on a single page.
 * Code subject to change.
 **/



if (window.console==null) { window["console"] = { log : function() {} } }; // some browsers do not set console
window.onload=function() {
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

    var packageID;
    function processOrderID()
    {
        var parameters = location.search.substring(1).split("&");
        var temp = parameters[0].split("=");
        var id = unescape(temp[1]);
        packageID=id;
        console.log("packageId:"+id)
        // eslint-disable-next-line no-undef
        $("#table tbody").append("<tr>" +
            "<td hidden><input type='text' name='pid' id=pid value="+packageID+">"+"ZIbi"+"</td>"+
            "</tr>");
    }
    processOrderID();

};

// eslint-disable-next-line no-unused-vars
function Validateinfo() {
    var name=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var id=document.getElementById("uid").value;
    var ccn=document.getElementById("ccd").value;
    var ltd=document.getElementById("ltd").value;
    var regName = /^[a-zA-Z]+$/;
    if(!regName.test(name)){
        console.log(name)
        alert('Invalid name given.');
        return false;
    }
    if(!regName.test(lname)){
        alert('Invalid last name given.');
        return false;
    }
    if(id.length<9||id.length>9){
        alert("Please enter a valid ID");
        return false;
    }
    if(ccn.length<16||ccn.length>16){
        alert("Please enter a valid Card number");
        return false;
    }
    if(ltd.length<3||ltd.length>3){
        alert("Please enter a valid last 3 digits");
        return false;
    }
    return true;
}