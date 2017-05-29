module.exports = function(label) {
	if(process.env.NODE_ENV === 'development') {
		return new Profiler(label);
	} else if(process.env.NODE_ENV === 'production') {
		return {
			start: function() {},
			end: function() {}
		}
	} else {
		throw new Error('Must set NODE_ENV');
	}
};