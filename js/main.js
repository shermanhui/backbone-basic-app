var Song = Backbone.Model.extend({
	initialize: function(){
		console.log("New Song has been created!")
	}
});

var song = new Song();