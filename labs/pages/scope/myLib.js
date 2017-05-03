function scope1( ){ // scope1
	var x = 5;

	function scope2(){
		// var x2  = 6;
		console.log("x in scope 2:", x);
	}

	scope2();
	console.log("x in scope 1:", x);
}

scope1();
