Template.createEvent.rendered = function() {
	var picker = new Pikaday({ field: document.getElementById('datepicker') });
};

Template.createEvent.events({
  'click #create-new-event': function () {
	    var usr_id = Meteor.userId();
	    var title = $('#event-title').val();
	    var location = $('#event-address').val();
	    var date = $('#datepicker').val();
	    if ( title === '' || location === '' || date === '' ){
	    	swal("Oops...", "Please make sure there is no empty field!", "error");
	    	}
	    else{
		    Meteor.call('createEvent', usr_id, title, date, location, function(err, results){
		    	console.log(results['_str']);
		    });
			Meteor.defer(function() { Router.go('dashboard'); });
		}
	}
});
