var obj;
var email;
var password;
var type;

window.onload=function () {
	var name = localStorage.getItem("name");
	document.getElementById("hello").innerText = 'hello, ' + name;
	var type = localStorage.getItem("type");
	// console.log(type)
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
	function login() {
		email = document.getElementById("email").value;
		password = document.getElementById("password").value;
		fun(email,password);

		alert("Have you already signed up for our newsletter service?")
		console.log(localStorage)
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
					console.log(email+' '+password)
					for (i = 0; i < response.data.length; i++) {
						if (response.data[i]['email'] == email && response.data[i]['password'] == password) {
							var user = response.data[i]['firstname'];
							var mail=response.data[i]['email']
							console.log(user)
							console.log(mail)

							localStorage.setItem("name", user);
							localStorage.setItem("user",mail );
							localStorage.setItem("type",response.data[i]['type'])

							//window.location.href = "Home";
							console.log(localStorage);


							//	alert("hello "+response.data[i]['first_name']+" nice to see you again");
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
