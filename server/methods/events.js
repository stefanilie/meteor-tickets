Meteor.methods({
  'createEvent': function(usr_id, title, date, location) {
    var uniqueID = new Meteor.Collection.ObjectID();
    Events.insert({
      _id: uniqueID,
      usr_id: usr_id,
      title: title,
      date: date,
      location: location,
    })
    return uniqueID;
  },
  'editEvent': function() {
    console.log("vaporware");
  },
  'createTicket': function(eventId, spots, price, end_date, ticket) {
    var object = Events.findOne({
      _id: eventId
    });
    Events.update({
      _id: eventId
    }, {
      usr_id: object['usr_id'],
      title: object['title'],
      date: object['date'],
      location: object['location'],
      ticket_type: {
        spots: spots,
        price: price,
        end_date: end_date,
        ticket: {
          uid: new Meteor.Collection.ObjectID(),
          sold: false
        }
      }
    });
  }
})
