Template.dashboard.rendered = function() {

};

Template.dashboard.helpers({
	events: function() { 
		return Events.find();
	}
});


Template.dashboard.events({
  'click .create-ticket-type': function () {
  	var id = this._id.toHexString();
	Session.set('currentEventId', id);
	Meteor.defer(function() { Router.go('createTickets'); });

	},
  'click .delete-ticket-type': function () {
	var id = this._id.toHexString();
  }
});