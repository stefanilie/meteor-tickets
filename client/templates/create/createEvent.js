Template.createEvent.rendered = function() {
	var picker = new Pikaday({ field: document.getElementById('datepicker') });
};

Template.createEvent.events({
  'click #create-new-event': function () {
	    alert(1);
	    var usr_id = Meteor.userId();
	    var title = $('#event-title').value;
	    var location = $('#event-address').value;
	    var date = $('#datepicker').value;
	    Meteor.call('createEvent', usr_id, title, date, location);
  }
});