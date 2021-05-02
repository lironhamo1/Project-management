var fname;
var lname;
var phone;
var mail;
var loc;

window.onload=function() {
    // eslint-disable-next-line no-unused-vars
    function read() {
        fname = document.getElementById("fname").value;
        lname = document.getElementById("lname").value;
        phone = document.getElementById("phone").value;
        mail = document.getElementById("mail").value;
        loc=document.getElementById("locate").value
        call()
    }

    function call() {
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




