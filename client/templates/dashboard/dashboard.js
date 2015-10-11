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
  'click .print-ticket': function () {
	var id = this._id.toHexString();
	var title = this.title;
	var date = this.date;
	var location = this.location;
	var number = $("#sel1").val();
	Meteor.call('buyTicket', id, number, function(err, results){
		console.log(results);
		Session.set('printingUIDS', results);
		Session.set('printingTitle', title);
		Session.set('printingDate', date);
		Session.set('printingLocation', location);
		Meteor.defer(function() { Router.go('printTicket'); });
	});
    },
  'click .delete-ticket-type': function () {
	var id = this._id.toHexString();
	Meteor.call('deleteEvent', id);
  }
});
