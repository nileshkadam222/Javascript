function makeAjaxCall(url, methodType){
debugger;
   var promiseObj = new Promise(function(resolve, reject){
      var xhr = new XMLHttpRequest();
      xhr.open(methodType, url, true);
      xhr.send();
      xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
         if (xhr.status === 200){
            console.log("xhr done successfully");
            var resp = xhr.responseText;
            var respJson = JSON.parse(resp);
            resolve(respJson);
         } else {
            reject(xhr.status);
            console.log("xhr failed");
         }
      } else {
         console.log("xhr processing going on");
      }
   }
   console.log("request sent succesfully");
 });
 return promiseObj;
}

 
function processUserDetailsResponse(userData){
 console.log("render user details", userData);
}
function processRepoListResponse(repoList){
 console.log("render repo list", repoList);
}
function errorHandler(statusCode){
 console.log("failed with status", status);
}

var URL = "https://api.github.com/users"
 makeAjaxCall(URL, "GET").then(processUserDetailsResponse, errorHandler);
