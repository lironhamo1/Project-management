var user="Ohad5855@gmail.com";
var flag=true;

window.onload = function () {
    var userId = 1;

    function logout() {
        user = null;
        flag=false;
        alert("logout success");
    }
    var btn = document.getElementById("Logout");
    btn.addEventListener("click",logout);



}