Events = new Mongo.Collection('events');

Events.helpers({

});

Events.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
