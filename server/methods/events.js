Meteor.methods({
  'createEvent': function(usr_id, title, date, location) {
    Events.insert({
      _id: new Meteor.Collection.ObjectID(),
      usr_id: usr_id,
      title: title,
      date: date,
      location: location,
    })
  },
  'editEvent': function() {
    console.log("vaporware");
  },
  'createTicket': function(eventId, spots, price, end_date, capacity) {
    var eid = new Meteor.Collection.ObjectID(eventId.toString());
    var object = Events.findOne(eid);
    var ticket = [];
    for (var i = 0; i < spots; i++) {
      ticket.push({
        "uid": new Meteor.Collection.ObjectID(),
        "sold": false,
        "checked": false
      });
    }
    Events.update({
      _id: new Meteor.Collection.ObjectID(eventId)
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
    var eid = new Meteor.Collection.ObjectID(eventId.toString());
    var events = Events.findOne(eid);
    var spots = events['ticket_type']['spots'];
    var ticket = events['ticket_type']['ticket'];
    var ticketUid = [];
    while (ticketCount > 0) {
      ticket[parseInt(spots) - 1].sold = true;
      ticketCount--;
      spots--;
      console.log(ticket[spots].uid);
      ticketUid.push("http://localhost:3000/event/"+eventId+"/ticket/"+ticket[spots].uid.toHexString());
    }
    Events.update({
      _id: new Meteor.Collection.ObjectID(eventId)
    }, {
      usr_id: events['usr_id'],
      title: events['title'],
      date: events['date'],
      location: events['location'],
      ticket_type: {
        spots: spots,
        price: events['price'],
        end_date: events['end_date'],
        ticket: ticket,
        capacity: events['capacity']
      }
    });
    return ticketUid;
  },
  'deleteEvent': function(eventId) {
    Events.remove(new Meteor.Collection.ObjectID(eventId));
  }

})
