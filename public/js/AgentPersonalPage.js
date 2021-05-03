var flag=true;

window.onload = function () {

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

    //
    // var user1 = user;
    // console.log(user1)
    // localStorage.setItem("user", user1);
    // //window.location.href = "Home";
    // console.log(localStorage);
    // var userId = 1;

    function logout() {
        console.log(localStorage);
        localStorage.setItem("user", null);
        //window.location.href = "Home";
        console.log(localStorage);
        flag=false;
        document.getElementById("hello_").innerHTML="Hello Guest"
        alert("logout success");
    }
    var btn = document.getElementById("Logout");
    btn.addEventListener("click",logout);
    function Func(){
        let myPromise = new Promise((resolve, reject)=>{
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
        Func().then((database)=>{
            console.log(database);
            var i;
            for (i = 0; i < database.length; i++) {
                if(database[i]['email']==user){
                    document.getElementById("hello_").innerHTML=database[i]['firstname']+" Agent Personal Page";
                }
            }
        });
    }
    foundAccount()

}