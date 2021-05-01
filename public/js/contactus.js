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




