Template.home.rendered = function() {

};

Template.home.helpers({
	events: function() { 
		console.log(Events.find());
		return Events.find();
	}
});