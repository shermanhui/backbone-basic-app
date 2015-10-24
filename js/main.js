var Vehicle = Backbone.Model.extend({

	idAttribute: "registrationNumber",

	urlRoot: "/api/vehicles",

	defaults: {
		registrationNumber: 0
	},

	validate: function(attrs){
		if (!attrs.registrationNumber){
			return "Registration Number is required.";
		}
	},

	start: function(){
		console.log("Vehicle Started");
	}
});


var Car = Vehicle.extend({
	start: function(){
		console.log("Car with registration number " + this.get("registrationNumber") + " and color " + this.get("color") + " started.");
	}
});

var Cars = Backbone.Collection.extend({
	model: Car
});

var cars = new Cars([
	new Car({
		registrationNumber: "XLI887",
		colour: "Blue"
	}),
	new Car({
		registrationNumber: "ZNP123",
		colour: "Blue"
	}),
	new Car({
		registrationNumber: "XUV456",
		colour: "Gray"
	})
]);

var matchedCar = cars.where({registrationNumber: "XLI887"});
console.log("XLI887 Car", matchedCar);
cars.remove(matchedCar);

var blueCars = cars.filter(function(car){
	return car.get("colour") == "Blue";
});

console.log("Blue Cars", blueCars);

console.log("Collection of Cars: ", cars.toJSON());

cars.each(function(car){
	console.log(car);
})


// Find all the Blue colours and log them in the console.
// Find the car with the registration number XLI887 and log it in the console.
// Remove this car from the collection.
// Convert the collection to a JSON object and log it in the console.
// Iterate the collection and log each car in the console.