Template.createTickets.rendered = function() {
  var picker = new Pikaday({ field: document.getElementById('datepicker') });
};

Template.createTickets.events({
  'click #create-new-ticket': function() {
    var isOk = true;
    var usr_id = Meteor.userId();
    var spots = $('#ticket-spots').val();
    if (!$.isNumeric(spots)) {
      isOk = false;
    }
    var price = $('#ticket-price').val();
    if (!$.isNumeric(price)) {
      isOk = false;
    }
    var end_date = $('#datepicker').val();
    if (!isOk) {
      swal("Oops...", "Spots and price must be numbers!", "error");
      $('#ticket-spots').val("");
      $('#ticket-price').val("");
    } else if (spots === '' || price === '' || end_date === '') {
      swal("Oops...", "Please make sure there is no empty field!", "error");
    } else {
      Meteor.call('createTicket', Session.get('currentEventId'), spots, price, end_date, spots);
      Meteor.defer(function() {
        Router.go('dashboard');
      });
    }
  }
});
