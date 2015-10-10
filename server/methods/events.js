Meteor.methods({
  'createEvent': function(usr_id, title, date, location, poster){
    Events.insert({
      usr_id: usr_id,
      title: title,
      date: date,
      location: location,
      poster: poster
    })
  },
})
