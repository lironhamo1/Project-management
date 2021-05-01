var obj;


var email;
var password;
var user=null;
var type;
window.onload=function () {


	function login() {


		email = document.getElementById("email").value;


		password = document.getElementById("password").value;
		fun(email,password);
		alert("Have you already signed up for our newsletter service?")

	}


	const btn = document.getElementById("loginbtn");
	btn.addEventListener("click", login);




function fun(email,password) {
	if (password != null) {
		var data = {};
		fetch("/loginin", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(function (response) {

				if (response.ok) {
					console.log(response.data)

					for (i = 0; i < response.data.length; i++) {
						if (response.data[i]['email'] == email && response.data[i]['password'] == password) {
							user=email;

							alert("hello "+response.data[i]['first_name']+" nice to see you again");
						//move to home page/personal
						}

					}
				if (user==null){alert("plese register first")}
				} else throw new Error('Request failed.');
			})

			.catch(function (error) {
				console.log(error);
			});

	}

}
}
