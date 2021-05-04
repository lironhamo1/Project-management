var email;
var name;
var msg;


function Func() {
    email = document.getElementById("email").value;
    name = document.getElementById("name").value;
    msg = document.getElementById("msg").value;


    var tempParams={
        to_mail:"gotravek128712@gmail.com",
        from_name:name,
        to_name:"GoTravel",
        message:"hello "+msg+" my email is :"+email+" please contact me soon"

    };
    console.log("sendin to" +name+msg+email)
    emailjs.send('service_ulj3sfb','template_j0fld69',tempParams).then(function(res) {
        console.log("success",res.status);
        return true;

    })


}

window.onload=function (){
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


}






