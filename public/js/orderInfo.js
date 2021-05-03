
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

    var status;

    function read() {
        status = document.getElementById("status").value;
        alert(status.toString());
    }


    //change status at data base
    function Func(){
        var data;
        fetch("/liron", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(function(response) {
                if (response.ok) {
                    console.log('got data: ', response.data);
                }
                else throw new Error('Request failed.');
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    var btn = document.getElementById("submit");
    btn.addEventListener("click", read);
}


