var Vehicle = Backbone.Model.extend({ // Vehicle Model

	idAttribute: "registrationNumber",

	urlRoot: "/api/vehicles",

	defaults: {
		registrationNumber: "00000",
		colour: "Blue"
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


var Car = Vehicle.extend(); // extension of Vehicle model

var Cars = Backbone.Collection.extend({ // collection of Car Models
	model: Car
});

var CarView = Backbone.View.extend({ // single Car View, renders one Car as a LI element
	tagName: "li",

	className: "vehicle",

	attributes: function() {
		return {
			"data-color": this.model.get("colour"),
			"data-reg-num": this.model.get("registrationNumber")
		}
	},

	events: {
		"click button.remove": "removeCar"
	},

	removeCar: function(){
		cars.remove(this.model);
	},

	render: function(){
		var template = _.template($("#carTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});

var CarsView = Backbone.View.extend({ // iterates over the collection of Cars and wraps each model with a CarView and appends to DOM
	initialize: function(){
		this.model.on("add", this.onCarAdd, this);
		this.model.on("remove", this.onRemove, this);
	},

	onCarAdd: function(car){
		console.log("Car Added");
		var carView = new CarView({model: car});

		this.$el.append(carView.render().$el);
	},

	onRemove: function(car){
		console.log('removed');
		this.$("li[data-reg-num=" + car.get("registrationNumber") + "]").remove();
	},

	render: function(){
		var self = this;
		this.model.each(function(car){
			var carView = new CarView({ model: car});

			self.$el.append(carView.render().$el)
		})
	}
});

var cars = new Cars([ // instantiation of Collection
	new Car({
		id : "1",
		registrationNumber: "XLI887",
		colour: "Blue"
	}),
	new Car({
		id : "2",
		registrationNumber: "ZNP123",
		colour: "Blue"
	}),
	new Car({
		id : "3",
		registrationNumber: "XUV456",
		colour: "Gray"
	})
	]);

var carsView = new CarsView({el: "#cars", model: cars}); // the View
carsView.render();