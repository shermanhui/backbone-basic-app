var Vehicle = Backbone.Model.extend({

	idAttribute: "registrationNumber",

	urlRoot: "/api/vehicles",

	defaults: {
		registrationNumber: 0
	},

	validate: function(attrs){
		if (!attrs.registrationNumber){
			return "Registration Number is required."
		}
	},

	start: function(){
		console.log("Vehicle Started");
	}
});

var Car = Vehicle.extend({
	start: function(){
		//Vehicle.prototype.start.apply(this);

		console.log("Car started")
	}
});

var car = new Car({
	registrationNumber: "XLI887",
	color: "blue"
});

// car.fetch({
// 	success: function(){

// 	},
// 	error: function(){

// 	}
// });

// car.save({}, {
// 	success: function(){

// 	},
// 	error: function(){

// 	}
// });

// car.destroy({
// 	success: function(){

// 	},
// 	error: function(){

// 	}
// })