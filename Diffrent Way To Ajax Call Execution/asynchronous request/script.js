
var request;
if(window.XMLHttpRequest){
	request = new XMLHttpRequest();
}else{
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET','data.txt');
request.send();
request.onreadystatechange = function(){
	if(request.status == 200 && request.readyState == 4){
		console.log(request);
		//document.writeln(request.responseText);
		//var modify = document.getElementById("update")
		//modify.innerHTML = request.responseText;

		var modify = document.getElementsByTagName("li")
		modify[2].innerHTML = request.responseText;

	}
}

