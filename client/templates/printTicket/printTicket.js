Template.printTicket.rendered = function() {

};

Template.printTicket.helpers({
	uids: function(){
		return Session.get('printingUIDS');
	},
	title: function(){
		return Session.get('printingTitle');
	},
	date: function(){
		return Session.get('printingDate');
	},
	location: function(){
		return Session.get('printingLocation');
	}
});


Template.printTicket.events({
  'click .create-ticket-type': function () {
  	var id = this._id.toHexString();
	Session.set('currentEventId', id);
	Meteor.defer(function() { Router.go('createTickets'); });

	},
  'click .print-ticket': function (event) {
  		console.log($(event.target).parent().parent().html());
  		var ticketContent = $(event.target).parent().parent();
	  	
    },	
  'click .delete-ticket-type': function () {
	// var id = this._id.toHexString();
	// Meteor.call('deleteEvent', id);
  }
});
