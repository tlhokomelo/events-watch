$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.make.search(myExp) != -1) ||
			(val.price.search(myExp) != -1) ||
			(val.warranty.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>'+ val.make +'</h2>';
				output += '<img src="images/'+val.make+'_tn.jpg" alt="'+ val.make +'" />';
				output += '<p>'+ val.price +'</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});
