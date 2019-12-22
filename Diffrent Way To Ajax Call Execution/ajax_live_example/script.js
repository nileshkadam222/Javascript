$("#search").keyup(function() {
	var searchField = $("#search").val();
	console.log(searchField);
	var myExpr = new RegExp(searchField,"i");

	$.getJSON('data.json',function (data) {
	// body...
	console.dir(data);
	var output = '<ul class="searchresults">';
	$.each(data,function(key,val) {
		if((val.name.search(myExpr) != -1) || (val.bio.search(myExpr) != -1)){
			output += '<li>';
			output += '<h2>'+val.name+'</h2>';
			output += '<img src="images/'+val.shortname+'_tn.jpg" alt="'+val.name+'">'
			output += '<p>'+val.bio+'</p>';
			output += '</li>';
		}
	})
	output += '</ul>';
	$("#update").html(output);
})
})

