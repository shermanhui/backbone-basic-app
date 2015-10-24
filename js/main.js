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
		console.log("Car with registration number " + this.get("registrationNumber") + " and color " + this.get("color") + " started.")
	}
});

var car = new Car({
	registrationNumber: "XLI887",
	color: "Blue"
});

car.start();

car.unset("registrationNumber");

if (!car.isValid()){
	console.log(car.validationError);
}

if (car.isValid()){
	console.log("Car is Valid!")
} else {
	console.log(car.validationError);
}


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