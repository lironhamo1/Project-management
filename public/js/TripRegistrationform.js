var fname;
var lname;
var phone;
var mail;

window.onload=function(){
    var organizwdList=[];
    // eslint-disable-next-line no-unused-vars
    function creatObj(fname,lname,phone,mail){
        let myObj={firstName:fname,
                    lastName:lname,
                    phone:phone,
                    mail:mail};
    return myObj;
    }
    function read(){
        fname = document.getElementById("fname").value;
        lname = document.getElementById("lname").value;
        phone = document.getElementById("phone").value;
        mail = document.getElementById("mail").value;
        let obj=creatObj(fname,lname,phone,mail)
        organizwdList.push(obj);
        call()//delete after data base
    }

    function call(){///read array of objects- write this to data Base
        var i;
        for (i = 0; i < organizwdList.length; i++) {
            alert(organizwdList[i].firstName+' '+organizwdList[i].lastName+' '+organizwdList[i].phone+' '+organizwdList[i].mail);
        }
    }
    var btn =document.getElementById("submit");
    btn.addEventListener("click",read);


}




