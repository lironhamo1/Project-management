window.onload=function () {

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

}