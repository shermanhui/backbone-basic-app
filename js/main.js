var Song = Backbone.Model.extend({
	defaults: {
		genre: "Rock"
	},

	validate: function(attrs){
		if (!attrs.title){
			return "Title is required!";
		}
	},

	initialize: function(){
		console.log("New Song has been created!")
	}
});

var song = new Song({
	title: "Back In Black",
	artist: "ACDC",
	publishYear: "1980"
});