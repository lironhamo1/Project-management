var obj;
var email;
var password;
var type;

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


	function login() {


		email = document.getElementById("email").value;
		password = document.getElementById("password").value;
		fun(email,password);
		alert("Have you already signed up for our newsletter service?")



	}

	var name = localStorage.getItem("user");
	document.getElementById("hello").innerText= 'hello, '+name;

	const btns=document.getElementById("hello");
	if (localStorage.getItem("type") == "agent") {
		btns.addEventListener("click",agentPage);
	} else{
		btns.addEventListener("click",clientPage);
	}
	function clientPage(){window.open('costumerPersonalPage');}
	function agentPage(){window.open('AgentPersonalPage');}


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

							var user = response.data[i]['firstname'];
							console.log(user)
							localStorage.setItem("user", user);
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
