CreateEventController = AppController.extend({
  waitOn: function() {
    return this.subscribe('events');
  },
  data: {
    // Events: Events.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Create Event');
  }
});

CreateEventController.events({
  'click #create-new-event': function () {
    Meteor.call('createEvent');
  }
});
