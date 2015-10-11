Template.verify.rendered = function() {
	console.log(this.data.params['eid']);
	console.log(this.data.params['_id']);
	var eventId = this.data.params['_id'];
	var ticketId = this.data.params['eid'];
	Meteor.call('verify', eventId, ticketId, function(err, result){
		console.log(result);
		if (result===true){
	    	swal("OK", "Valid ticket!", "success");
		}
		else{
	    	swal("Oops...", "Invalid ticket!", "error");
		}
	});

};

Template.verify.helpers({
	events: function() {
		// console.log(Template.instance().data);
		return Events.find();
	}
});
