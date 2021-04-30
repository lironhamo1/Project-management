var passOld;
var passVar;
var newPass;
var mail;
var obj;
window.onload = function () {

    function read() {
        console.log("enter to read()")
        mail = document.getElementById("email").value;
        passOld = document.getElementById("passOld").value;
        passVar = document.getElementById("passVar").value;
        newPass = document.getElementById("newPass").value;
        obj = {
            pOld:passOld,
            pVar:passVar,
            pNew:newPass,
            pMail:mail};
        findAccount(obj);
    }


    const btn = document.getElementById("submit");
    btn.addEventListener("click", read);

    function readDB() {
        let myPromise = new Promise((resolve, reject)=>{
            var data={
                name: "dana"
            };
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
        // console.log(obj);
        // console.log("enter to readDB()");


    }


    function findAccount(obj) {
        readDB().then((database)=>{
            console.log(database);
            var flag=0
            var i;
            for (i = 0; i < database.length; i++) {
                if (database[i]['email'] == obj.pMail && database[i]['password'] == obj.pOld) {
                    console.log("the user is " + database[i]['email'] + ' ' + database[i]['password']);
                    if (obj.pNew !== obj.pVar) {
                        alert("the passwords must be equal")
                    } else {
                        flag = 1;
                        userPas = obj.pNew;
                        alert("the new password is:" + userPas);
                        update();
                    }
                    break;
                } else if (database[i]['email'] == obj.pMail && database[i]['password'] != obj.pOld) {
                    alert("your password is incorrect try again");
                    location.reload();
                }
            }
            if (flag==0){
                alert("user not found");
                location.reload();
            }
            document.getElementById("email").innerHTML=''
            document.getElementById("passOld").innerHTML=''
            document.getElementById("passVar").innerHTML=''
            document.getElementById("newPass").innerHTML=''
        });

        console.log("enter to findAccount()")
    }


    function update(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "mail":mail,
            "newPass": newPass
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("update", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
}









