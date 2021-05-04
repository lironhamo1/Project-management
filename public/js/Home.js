window.onload=function() {
	console.log(localStorage)
	var name = localStorage.getItem("name");
	document.getElementById("hello").innerText = 'hello, ' + name;
	var type = localStorage.getItem("type");
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



	var area;
	var locations;
	var trip_end;
	var trip_start;
	var cost;
	var travelsNum;
	var packages_left;
	var hotel;
	var star;
	var purchased;
	var flight;
	var packageType;
	var info;
	var about;
	var img;
	var serial;
	var packageList=[];
	var flagIcon=false;
	var generalFilter;


	function filterArea(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("area").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].area.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}
	function filterlocation(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("location").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].locations.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}
	function filterstart(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("start").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].trip_start.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}
	function filterend(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("end").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].trip_end.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}
	function filtercost(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("cost").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].cost.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}
	function filtertravelsNum(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("travelsNum").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].travelsNum.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}
	function filterleft(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("left").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].packages_left.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}
	function filterstars(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("stars").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].star.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}
	function filterpurchased(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("purchased").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].purchased.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}
	function filterflight(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("flight").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].flight.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}
	function filtertypePackage(){
		let temp =  readFromMongoDB().then((result)=>
		{
			clearDisplayFildes();
			generalFilter=document.getElementById("typePackage").value;
			for(let i=0;i<result.length;i++)
			{
				if(generalFilter.toLocaleLowerCase()==result[i].packageType.toLocaleLowerCase()){
					readFromDBToPackageMangmentPage(result[i]);

				}
			}
		});
	}



	function clearFields(){
		locations = document.getElementById("location").value="";
		area=document.getElementById("area").value;
		trip_start=document.getElementById("start").value;
		trip_end=document.getElementById("end").value;
		cost=document.getElementById("cost").value;
		travelsNum=document.getElementById("travelsNum").value="";
		packages_left=document.getElementById("left").value="";
		hotel=document.getElementById("hotel").value="";
		star=document.getElementById("stars").value;
		purchased=document.getElementById("purchased").value="";
		flight=document.getElementById("flight").value;
		packageType=document.getElementById("typePackage").value;
		about=document.getElementById("about").value="";
		info=document.getElementById("info").value="";

		//img=document.getElementById("img");
		//clear the slection fildes!!

	}

	function toString(obj){
		let srt="area "+obj.area+"\n"+"locations  "+obj.locations+"\n"+"trip_start  "+obj.trip_start+"\n"+"trip_end "+obj.trip_end+"\n"+
			"cost "+obj.cost+"\n"+"travelsNum "+obj.travelsNum+"\n"+"packages_left  "+obj.packages_left+"\n"+"hotel  "+obj.hotel+"\n"+
			+"star "+obj.star+"\n"+"purchased "+obj.purchased+"\n"+"flight  "+obj.flight+"\n"+"packageType  "+obj.packageType+"\n"+
			"info  "+obj.info+"\n"+"about  "+obj.about+"\n"+"serial: "+obj.serial;

		return srt;

	}

	function addObjectForDesply(obj){
		let row = document.createElement('tr'); // create row node
		let col = document.createElement('td'); //
		let col1 = document.createElement('td'); //
		let col2 = document.createElement('td'); //
		let col3 = document.createElement('td'); //
		let col4 = document.createElement('td'); //
		let col5 = document.createElement('td'); //
		let col6 = document.createElement('td'); //
		let col7 = document.createElement('td'); //
		let col8 = document.createElement('td'); //
		let col9 = document.createElement('td');//
		let col10 = document.createElement('td'); //
		let col11 = document.createElement('td'); //
		let col12 = document.createElement('td'); //
		let col13 = document.createElement('td'); //
		let col14 = document.createElement('td'); //
		let col15 = document.createElement('td'); //
		let col16 = document.createElement('td'); //
		let col17 = document.createElement('td'); //


		row.appendChild(col); // append first column to row
		row.appendChild(col1)
		row.appendChild(col2); // append second column to row
		row.appendChild(col3);
		row.appendChild(col4);
		row.appendChild(col5);
		row.appendChild(col6);
		row.appendChild(col7);
		row.appendChild(col8);
		row.appendChild(col9);
		row.appendChild(col10);
		row.appendChild(col11);
		row.appendChild(col12);
		row.appendChild(col13);
		row.appendChild(col14);
		row.appendChild(col15);
		row.appendChild(col16);
		row.appendChild(col17);

		col.innerHTML = '<i class="far fa-heart"></i>';
		col.addEventListener("click",like);

		col1.innerHTML = '<i class="fas fa-mouse"></i>';
		col1.setAttribute('id',obj.serial);
		col1.addEventListener("click",goToorderPage);

		col2.innerHTML =obj.area; // put data in first column
		col3.innerHTML=obj.locations;
		col4.innerHTML=obj.trip_start;
		col5.innerHTML=obj.trip_end;
		col6.innerHTML=obj.cost;
		col7.innerHTML = obj.travelsNum; // put data in first column
		col8.innerHTML =obj.packages_left; // put data in second column
		col9.innerHTML=obj.locations;
		col10.innerHTML=obj.trip_start;
		col11.innerHTML=obj.trip_end;
		col12.innerHTML=obj.cost;
		col13.innerHTML=obj.about;
		col14.innerHTML=obj.info;
		col15.innerHTML=obj.purchased;
		col16.innerHTML=obj.serial;
		col17.innerHTML=obj.img;

		let table = document.getElementById("tableToModify"); // find table to append to
		table.appendChild(row); // append row to table



	}
	function like(){
		if(flagIcon==false){
			this.innerHTML='<i class="fas fa-heart"></i>';
			flagIcon=true;
			packID=this.parentElement.children[1].id
			updateWish(packID);
		}
		else{
			this.innerHTML='<i class="far fa-heart"></i>';
			packID=this.parentElement.children[1].id
			flagIcon=false;
			removeFromWishlist(packID);

		}

	}
//class package
	function CreatePackage(area, locations,trip_end,trip_start,cost,travelsNum,packages_left,hotel,star,purchased,
						   flight,packageType,about,info,image,serial) {
		let myObject = {
			area: area,
			locations: locations,
			trip_start: trip_start,
			trip_end: trip_end,
			cost: cost,
			travelsNum: travelsNum,
			packages_left: packages_left,
			hotel: hotel,
			star: star,
			flight: flight,
			packageType : packageType,
			about: about,
			info: info,
			img: image,
			purchased:purchased,
			serial: 1+serial,


		};
		return myObject;
	}

	function addImageToDirctory(img){
		const path='views\images';

	}
	function goToorderPage(){
		window.location.href = "PaymentPage?id="+this.id;

	}

	function addPackage() {
		//take care of the split btn values

		locations = document.getElementById("location").value;
		area=document.getElementById("area").value;
		trip_start=document.getElementById("start").value;
		trip_end=document.getElementById("end").value;
		cost=document.getElementById("cost").value;
		travelsNum=document.getElementById("travelsNum").value;
		packages_left=document.getElementById("left").value;
		hotel=document.getElementById("hotel").value;
		star=document.getElementById("stars").value;
		purchased=document.getElementById("purchased").value;
		flight=document.getElementById("flight").value;
		packageType=document.getElementById("typePackage").value;
		about=document.getElementById("about").value;
		info=document.getElementById("info").value;
		img=document.getElementById("myfile").value;



		//alert(img);

		let myObj=CreatePackage(area, locations,trip_end,trip_start,cost,travelsNum,packages_left,hotel,star,purchased,
			flight,packageType,about,info,img,serial);
		serial=serial+1;
		//writingToMongo(myObj);
		packageList.push(myObj);
		addObjectForDesply(myObj);
		readFromMongoDB();
		clearFields();

	}


	function writingToMongo(obj){
		let jsonObj=JSON.stringify(obj);
		const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
		var mongoose = require('mongodb').MongoClient;
		mongoose.connect(url, function(err, db) {
			if (err) throw err;
			//Choosing DB
			var dbo = db.db("GoTravel");

			//Extracting data from accounts collection
			// eslint-disable-next-line no-unused-vars
			dbo.collection('Package management').insertOne({jsonObj}).toArray(function(err, result) {
				temp=true
				//res.render('OrdersManagementPage',{temp: true})
				if (err) throw err;
				db.close();
			});
		});


	}


	function readFromMongoDB() {
		let myPromise=new Promise((resolve,reject)=>{
			let data;
			fetch("/dani", {
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
						resolve(response.data);


						//readFromDBToPackageMangmentPage(response.data);

					}
					else throw new Error('Request failed.');
				})
				.catch(function(error) {
					console.log(error);
				});

		});
		return myPromise;
	}



	function deletePackage(){
		let deletelist=document.getElementsByClassName("far fa-check-square");
		let i=0;
		//let seralListToDelete;
		for (i = deletelist.length; i > 0  ; i--) {//delete from display
			alert(deletelist.valueOf());
			if(deletelist[i].closest()!=null){
				deletelist[i].closest().remove();
			}
			else{
				alert("doesnt work");
			}


		}
		//packageList.splice(i,1);//delet from list
		//delet from db* need to be done


	}




	function readFromDBToPackageMangmentPage(packageListFromDB){
		for(let i=0;i<packageListFromDB.length;i++){

			addObjectForDesply(packageListFromDB[i]);
		}
		serial=packageListFromDB.length-1;
		if(packageListFromDB.length===undefined){
			addObjectForDesply(packageListFromDB);

		}
	}


	function main() {
		let temp =  readFromMongoDB().then((result)=>{
			readFromDBToPackageMangmentPage(result);
		});


	}

	function clearDisplayFildes(){
		let table = document.getElementById("result");
		let totalRowCount = table.rows.length-1;
		for(let i=totalRowCount;i>0;i--){
			document.getElementById("result").deleteRow(i);

		}


	}

	function generalSearch(){
		let filter=document.getElementById("filter").value;
		switch(filter) {
			case "location":
				filterlocation();
				break;
			case "start":
				filterstart();
				break;
			case "end":
				filterend();
				break;
			case "cost":
				filtercost();
				break;
			case "travelsNum":
				filtertravelsNum();
				break;
			case "left":
				filterleft();
				break;
			case "stars":
				filterstars();
				break;
			case "purchased":
				filterpurchased();
				break;
			case "area":
				filterArea();
				break;
			case "flight":
				filterflight();
				break;
			case "typePackage":
				filtertypePackage()
			default:
				clearDisplayFildes();

		}

	}

	const btnSearch=document.getElementById("search");
	btnSearch.addEventListener("click",generalSearch);


	main();
	function updateWish(){
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"mail":user1,
			"wishlist": packID
		});
		console.log(raw);
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};
		fetch("wishListUP", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

	}
	function removeFromWishlist(){
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"mail":user1,
			"wishlist": ' '
		});
		console.log(raw);
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};
		fetch("wishListUP", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

	}

	function findType(user){
		console.log(user);
		let temp =  readAccountsDB().then((result)=>{
			var i;
			for(i=0;i<result.length;i++) {
				if (result[i]['email'] == user)
					if (result[i]['type'] == 'agent') {
						location.href = 'AgentPersonalPage';
					} else location.href = 'costumerPersonalPage';
			}
		});
	}

	function  readAccountsDB(){
		let myPromise=new Promise((resolve,reject)=>{
			let data;
			fetch("/password", {
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
						resolve(response.data);
						//readFromDBToPackageMangmentPage(response.data);
					}
					else throw new Error('Request failed.');
				})
				.catch(function(error) {
					console.log(error);
				});

		});
		return myPromise;
	}

	const btnPorsnalPage=document.getElementById("person");
	// document.getElementById("person").addEventListener("click", findType(user));
	btnPorsnalPage.addEventListener("click", function(){ findType(user); });

	// btnPorsnalPage.addEventListener('onclick', findType(user))



}

