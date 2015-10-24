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

var CarView = Backbone.View.extend({
	tagName: "li",

	events: {
		"click": "onClick"
	},

	onClick: function(){
		console.log("removed");
	},

	render: function(){
		this.$el.html(this.model.get("registrationNumber") + " <button>Remove</button>");

		return this;
	}
});

var CarsView = Backbone.View.extend({
	render: function(){
		var self = this;
		this.model.each(function(car){
			var carView = new CarView({ model: car});

			self.$el.append(carView.render().$el)
		})
	}
})


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

var carsView = new CarsView({el: "#cars", model: cars});
carsView.render();

// Create the required Backbone views to display a list of Vehicles.
// Each Vehicle should be displayed as an LI with the class vehicle. Inside the LI display
// the registration number of the vehicle followed by a button called Delete.
// Each list item should have the HTML5 data attribute data-color.
// When the delete button is clicked, remove the corresponding LI from the DOM.