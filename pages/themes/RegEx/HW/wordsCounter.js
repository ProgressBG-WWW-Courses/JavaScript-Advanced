'use strict';
var NumSorter = function(){
	// methods
	keysByValuesDesc = function(obj){
		 return Object.keys(obj).sort((a,b)=>obj[b]-obj[a]);
	};
	keysByValuesAsc = function(obj){
		 return Object.keys(obj).sort((a,b)=>obj[a]-obj[b]);
	};
	keysByKeysDesc = function(obj){
		 return Object.keys(obj).sort((a,b)=> b-a);
	};
	// interface
	return{
		keysByKeysDesc: keysByKeysDesc,
		keysByValuesAsc: keysByValuesAsc,
		keysByValuesDesc: keysByValuesDesc,
	}
}
var Matcher = function(text, pattern) {
	// data
	var pattern  = pattern || /\b[a-z]{3,}?\b/g,
		text  = text || "",
		matched =  {};
	// getters/setters
	var getText = ()=>text;
	var getMatched = ()=>matched;
	// methods
	var init = function(text){
		// if we change text => genrate matches
		console.log(`init matcher`);
		try{
			if (this.text ){
				throw "We already have text!"
			}else{
				this.text = text;
				this.matched = this.text.match(pattern);
				// TODO:  throw error on empty mathched?
			}
		}catch(e){
			console.log(`ERROR: ${e}`);
		}
	};
	// interface
	return{
		getText:getText,
		getMatched:getMatched,
		init:init,
	}
}
var Counter  = function(){
	// data

	// methods
	var countAllWords= function(){
		console.log(`countAllWords() started`);
		var wordsCount = 0;
	};
	var countSeparateWords= function(wordsObj){
		console.log(`countAllWords starts`);

		var wordList = {};

		wordsObj.forEach( (word)=>wordList[word]++ || (wordList[word] = 1) );

		// sort the keys array
		var sorted = numSorter.keysByValuesDesc(wordList);

		// display results:
		sorted.forEach(key=>{

			console.log(`${key}: ${wordList[key]}`)
		});
	}
	// interface
	return{
		countAllWords: countAllWords,
		countSeparateWords: countSeparateWords
	}
}
var Presenter = function(output, obj){
	// data

	// methods
	var asTable = function(){
		var table = document.createElement('table');
		var i = 0; // row index

		obj.forEach(key=>{
			var j = 0; // column index
			var row = table.insertRow(i++);

			var cell = row.insertCell(j++);
			cell.innerHTML = key;
			cell = row.insertCell(j++);
			cell.innerHTML = obj[key];
		})

		output.appendChild(table);
	}
	// interface
	return{
		asTable: asTable,
	}
}

var main = function(){
	function getNodes(){
		var nodes = {};
		console.log(`getNodes starts`);

		nodes.textarea = document.querySelector('#wordsCounter  textarea');
		nodes.select = document.querySelector('#wordsCounter  select');
		nodes.button = document.querySelector('#wordsCounter  button');
		nodes.results = document.querySelector('#results');

		return nodes;
	};

	function atachEventListener(node, eventName, listener){
		console.log(`atachEventListener starts`);
		node.addEventListener( eventName, listener, false );
	}

	function onDOMContentLoaded(){
		console.log(`DOMContentLoaded fired!`);
		// attach events to elements
		atachEventListener(nodes.button, "click", performSelectedAction);
	}

	function getSelectedOption(select){
		console.log(`getSelectedOption() started`);
		try{
			return select[select.selectedIndex].value;
		}catch(e){
			console.warn(`Error: can not getSelectedOption: ${e}`);
		}
	}

	// function getSelectedAction(event){
	// 	if(!event.target.value) {
	// 		console.log(`Please, select an action!`);
	// 	}else{
	// 		console.log(`action: ${event.target.value}`);
	// 	}
	// }

	function performSelectedAction(){
		console.log(`performSelectedAction started`);
		console.dir(counter);

		var action = getSelectedOption(nodes.select);

		// if there is no text processed so far => get and match the new text:
		var text = matcher.getText();
		var matched;
		if ( !text){
			var newText = nodes.textarea.value;
			if ( newText ){
				matcher.init(newText);
				matched = matched.getMatched();
			}else{
				alert("Plese, enter text to be processed!")
				throw "Error: no text";
			}
		}

		// perform action
		if (  action == undefined || action == ""){
			alert("Choose an action first!");
		}else{
			console.log(`action: ${action}`);
			if ( typeof counter[action] == 'function'){
				counter[action](matcher.matched);
			}else{
				console.warn(`Action ${action} is not a function!`);
			}
		}
	}

	// main
	var nodes = getNodes();
	var matcher = Matcher();
	var counter = Counter();
	atachEventListener(document, "DOMContentLoaded", onDOMContentLoaded);

}();



