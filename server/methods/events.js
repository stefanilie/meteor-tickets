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
  'createTicket': function(eventId, spots, price, end_date, capacity) {
    var object = Events.findOne({
      _id: eventId
    });
    var ticket = [];
    for (var i = 0; i < spots.length; i++) {
      ticket.push({
        "uid": new Meteor.Collection.ObjectID(),
        "sold": false
      });
    }
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
        ticket: ticket,
        capacity: capacity
      }
    });
  },
  'buyTicket': function(eventId, ticketCount) {
    var events = Events.findOne({
      _id: eventId
    });
    var spots = events['ticket_type']['spots'];
    var ticket = events['ticket_type']['ticket'];
    while (ticketCount > 0) {
      ticket[spots]['sold'] = true;
      ticketCount--;
      spots--;
    }
    Events.update({
      _id: eventId
    }, {
      usr_id: events['usr_id'],
      title: events['title'],
      date: events['date'],
      location: events['location'],
      ticket_type: {
        spots: spots,
        price:  events['price'],
        end_date: events['end_date'],
        ticket: ticket,
        capacity: events['capacity']
      }
    });
  }
})
