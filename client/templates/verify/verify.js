Template.verify.rendered = function() {

};

Template.verify.helpers({
	events: function() {
		console.log(Template.instance().data);
		return Events.find();
	}
});
