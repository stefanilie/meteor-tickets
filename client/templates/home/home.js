Template.home.rendered = function() {

};

Template.home.helpers({
	events: function() {
		console.log("ma cac in ciorba2");
		console.log(Events.find());
		return Events.find();
	}
});
