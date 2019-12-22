let printData = ()=>{
debugger;
	let xmlHttp;
	if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}else{
		xmlHttp = new ActiveXObject();
	}

	xmlHttp.onreadystatechange = ()=>{
		debugger;
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
		debugger;
			console.log(xmlHttp.responseText);
		}
	}

	xmlHttp.open("GET","https://api.github.com/users",false);
	xmlHttp.send();
}

printData()
console.log("data");






