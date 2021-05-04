var fname;
var lname;
var phone;
var mail;
var loc;

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

    // eslint-disable-next-line no-unused-vars
    function read() {
        fname = document.getElementById("fname").value;
        lname = document.getElementById("lname").value;
        phone = document.getElementById("phone").value;
        mail = document.getElementById("mail").value;
        loc=document.getElementById("comboLoc").value;

        call()
    }

    function call() {
        alert("register success")
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "loc":loc,
                "mail":mail
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            console.log(raw)
            fetch("writeFile", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

        }

    var btn = document.getElementById("submit");
    btn.addEventListener("click", read);



}




