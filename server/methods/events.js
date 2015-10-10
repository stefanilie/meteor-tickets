Meteor.methods({
  'createEvent': function(usr_id, title, date, location, poster){
    var eventId = Events.insert({
      usr_id: usr_id,
      title: title,
      date: date,
      location: location,
      poster: poster
    })
    return eventId;
  },
  'editEvent': function(){
    console.log("vaporware");
  },
  'createTicket': function(eventId, ){

  }
})
