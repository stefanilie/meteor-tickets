Template.home.rendered = function() {

};

Template.home.helpers({
  events: function() {
    console.log("ma cac in ciorba2");
    console.log(Events.find());
    return Events.find();
  }
});

Template.home.events({
  'click #buttonDetail': function(event) {
		var text = "Location: "+this.location+"\nDate: "+this.date+"\nSpots left: "+this.ticket_type.spots+"\nSale end: "+this.ticket_type.end_date+"\nPrice: "+this.ticket_type.price;
    swal({
      title: this.title,
      text: text,
      html: true
    });
  }
});
