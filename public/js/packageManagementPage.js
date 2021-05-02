window.onload=function() {
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
	var updatPackage;//id of package that is update
	var generalobject;


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
		let col1= document.createElement('td');
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
		row.appendChild(col1); // append  column to row
		row.appendChild(col2); // append  column to row
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

		col.innerHTML = '<i class="far fa-square" </i>';
		col.addEventListener("click",switchIcone);
		col1.innerHTML = '<i class="fas fa-user-edit" </i>';
		col1.setAttribute('id',obj.serial);
		col1.addEventListener("click",WritingFieldsScreen);
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

		col17.innerHTML='<img src=obj.img>';



		let table = document.getElementById("tableToModify"); // find table to append to
		table.appendChild(row); // append row to table

	}
	function WritingFieldsScreen(){
		let objToUpdate=this.parentNode.childNodes;
		document.getElementById("area").value=value=objToUpdate[2].innerHTML;
		document.getElementById("location").value=objToUpdate[3].innerHTML;
		//document.getElementById("start").value=objToUpdate[4].innerHTML;
		//document.getElementById("end").value=objToUpdate[5].innerHTML;
		document.getElementById("cost").value=objToUpdate[6].innerHTML;;
		document.getElementById("travelsNum").value=objToUpdate[7].innerHTML;;
		document.getElementById("left").value=objToUpdate[8].innerHTML;
		document.getElementById("hotel").value=objToUpdate[9].innerHTML;
		document.getElementById("stars").value=objToUpdate[10].innerHTML;
		document.getElementById("purchased").value=objToUpdate[15].innerHTML;
		document.getElementById("flight").value=objToUpdate[11].innerHTML;
		document.getElementById("typePackage").value=objToUpdate[12].innerHTML;
		document.getElementById("about").value=objToUpdate[13].innerHTML;
		document.getElementById("info").value=objToUpdate[14].innerHTML;
		// document.getElementById("img").value=objToUpdate[17].innerHTML;
		updatPackage=this.id;

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
	function switchIcone(){
		if(flagIcon==false){
			this.innerHTML='<i class="far fa-check-square"></i>';
			flagIcon=true;
		}
		else{
			this.innerHTML='<i class="far fa-square"></i>';
			flagIcon=false;
		}



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
		img=document.getElementById("fileUpload").value;



		let myObj=CreatePackage(area, locations,trip_end,trip_start,cost,travelsNum,packages_left,hotel,star,purchased,
			flight,packageType,about,info,img,serial);
		serial=serial+1;
		generalobject=myObj;
		writingToMongo(myObj);
		packageList.push(myObj);
		addObjectForDesply(myObj);
		readFromMongoDB();
		clearFields();

	}
	function writingToMongo(obj){
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		var raw = JSON.stringify({
			"locations":obj.locations,
			"area":obj.area,
			"trip_start":obj.trip_start,
			"trip_end":obj.trip_end,
			"cost":obj.cost,
			"travelsNum":obj.travelsNum,
			"packages_left":obj.packages_left,
			"hotel":obj.hotel,
			"star":obj.star,
			"purchased":obj.purchased,
			"flight":obj.flight,
			"info":obj.info,
			"about":obj.about,
			"img":obj.img,
			"serial":obj.serial,
		});
		console.log(raw);
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};
		fetch("addNewPacakage", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

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
		for (i = deletelist.length-1; i >= 0  ; i--) {//delete from display
			deletelist[i].parentElement.parentElement.remove();
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
		readFromMongoDB().then((result)=> {
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

	function UpdatPackage(){

		let rowToBeUpdare=document.getElementById(updatPackage).parentElement.childNodes;
		rowToBeUpdare[2].innerHTML=document.getElementById("area").value;
		rowToBeUpdare[3].innerHTML=document.getElementById("location").value;
		rowToBeUpdare[4].innerHTML=document.getElementById("start").value;
		rowToBeUpdare[5].innerHTML=document.getElementById("end").value;
		rowToBeUpdare[6].innerHTML=document.getElementById("cost").value;
		rowToBeUpdare[7].innerHTML=document.getElementById("travelsNum").value;
		rowToBeUpdare[8].innerHTML=document.getElementById("left").value;
		rowToBeUpdare[9].innerHTML=document.getElementById("hotel").value;
		rowToBeUpdare[10].innerHTML=document.getElementById("stars").value;
		rowToBeUpdare[11].innerHTML=document.getElementById("flight").value;
		rowToBeUpdare[12].innerHTML=document.getElementById("typePackage").value;
		rowToBeUpdare[13].innerHTML=document.getElementById("about").value;
		rowToBeUpdare[14].innerHTML=document.getElementById("info").value;
		rowToBeUpdare[15].innerHTML=document.getElementById("purchased").value;
		//rowToBeUpdare[17].innerHTML=document.getElementById("img").value;
		findPackageFromDB();

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
	////////////////////////////////////////////
	function findPackageFromDB(){
		readFromMongoDB().then((result)=> {
			var i;
			for (i = 0; i < result.length; i++) {
				if (result[i]['serial'] == updatPackage) {
					locations=document.getElementById("location").value;
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
					info=document.getElementById("info").value;
					about=document.getElementById("about").value;
					//img=document.getElementById("img").value;
					update(locations,area,trip_start,trip_end,cost,travelsNum,packages_left,hotel,star,purchased,flight,info,about,img);
					clearFields();
				}
			}
		});
	}

	function update(locations,area,trip_start,trip_end,cost,travelsNum,packages_left,hotel,star,purchased,flight,info,about,img){
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"locations":locations,
			"area":area,
			"trip_start":trip_start,
			"trip_end":trip_end,
			"cost":cost,
			"travelsNum":travelsNum,
			"packages_left":packages_left,
			"hotel":hotel,
			"star":star,
			"purchased":purchased,
			"flight":flight,
			"info":info,
			"about":about,
			"img":img,
			"serial":updatPackage,

		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch("updateP", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

	}




	const btnAdd = document.getElementById("add");
	btnAdd.addEventListener("click", addPackage);
	const btnSearch=document.getElementById("search");
	btnSearch.addEventListener("click",generalSearch);
	const btnDelets = document.getElementById("delete");
	btnDelets.addEventListener("click", deletePackage);
	const btnUpdate=document.getElementById("update");
	btnUpdate.addEventListener("click",UpdatPackage);


	main();


}

