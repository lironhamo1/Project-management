var FirstName;
var LastName;
var phone;
var obj;
var email;
var password;
var cpassword;
var type;
var newsletter;


function Validateinfo() {

	console.log("enter to read()")
	email = document.getElementById("email").value;
	LastName = document.getElementById("lastname").value;
	FirstName = document.getElementById("firstname").value;
	phone = document.getElementById("phone").value;
	cpassword = document.getElementById("cpassword").value;
	password = document.getElementById("password").value;
	newsletter = document.getElementById("newsletter").value;
	type = document.getElementById("type").value;
	obj = {
		first_name: FirstName,
		last_name: LastName,
		phone: phone,
		email: email,
		password: password,
		type: type,
		wishlist: ""
	}

	var regName = /^[a-zA-Z]+$/;
	if(!regName.test(FirstName)){
		alert(FirstName+'Invalid name given.');

		return false;
	}
	if(!regName.test(LastName)){
		alert('Invalid last name given.');

		return false;
	}
	if (cpassword != password) {
			alert("your confirm password is difrent from your password");

		return false;
	}
	if (phone <0) {
		alert("your phone number is incorrect");

		return false;
	}
	if (newsletter =="on" && type=="client"){

			var tempParams={
				to_mail:email,
				from_name:"GoTravel",
				to_name:FirstName,
				message:"hello "+FirstName+",\n"+"We're so glad you joined the Go Travel newsletter service!\n" +
					"You can now receive updates on hot deals and discounts directly by email! ",
			};
			emailjs.send('service_ulj3sfb','template_j0fld69',tempParams).then(function(res) {
				console.log("success",res.status);

			})

	}

return true;

	}




