Template.createTickets.rendered = function() {
};

Template.createTickets.events({
  'click #create-new-ticket': function () {
	    var usr_id = Meteor.userId();
	    var spots = $('#ticket-spots').val();
	    var price = $('#ticket-price').val();
	    var end_date = $('#datepicker').val();
	    if ( spots === '' || price === '' || end_date === '' ){
	    	swal("Oops...", "Please make sure there is no empty field!", "error");
	    	}
	    else{
		    Meteor.call('createTicket', Session.get('currentEventId'), spots, price, end_date, spots);
			Meteor.defer(function() { Router.go('dashboard'); });
		}
	}
});