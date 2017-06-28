var AJAX = {
	getByXHR: function(args){
		// create a XMLHttpRequest object
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
						new ActiveXObject("Microsoft.XMLHTTP");

		// initializes the request:
		xhr.open("GET", args.url, true);

		// EventHandler, that will be fired each time when the xhr state changes
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				args.fn(this.responseText);
			};
		};

		// sends the request:
		xhr.send();
	},
};


var lyricsURLs = ['data/pictures_of_you.txt', 'data/hey_you.txt','data/charlotte_sometimes.txt' ];

var dataSourcesTriggers = [
	{
		url: 'data/charlotte_sometimes.txt',
		triger:'images/theCure-CharlotteSometimes.jpg',
	},
	{
		url: 'data/hey_you.txt',
		triger:'images/floyd_HeyYou.jpg'
	},
	{
		url: 'data/pictures_of_you.txt',
		triger:'images/theCure-PicturesOfYou.jpg'
	}
];


var lyricsOutputNode= document.querySelector('.lyricsWrapper pre');

var atachEvents = function() {
	// dynamically attach event using the dataSourcesTriggers array
	dataSourcesTriggers.forEach((obj)=>{
		var triggerNode = document.querySelector(`img[src="${obj.triger}"]`);
		triggerNode.addEventListener('click', updateContentHandler(obj.url, lyricsOutputNode));
	})
};

var updateContentHandler  = function(url, node){
	return function(){
		AJAX.getByXHR( {
			url: url,
			fn: function(content){
				node.innerHTML = content;
			}
		} );
	}
}

// nodes.getDataBtn.addEventListener('click', updateContentHandler(url, nodes.output) );


atachEvents();