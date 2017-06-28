var dataURL = 'loremIpsum.txt';

var getByJQuery = function(){
	$(".getDataBtn").click(function(){
		$.get(dataURL, function(data, status){
			// do something with data:
			$(".output").html(data);
		});
	});
}

var loadByJQuery = function(){
	$(".getDataBtn").click(function(){
	    $(".output").load(dataURL);
	});
}

loadByJQuery();

