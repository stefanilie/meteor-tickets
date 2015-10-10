CreateEventController = AppController.extend({
  waitOn: function() {
    return this.subscribe('events');
  },
  data: {
    typesSchema1: {
                    typeTest: {
                      type: Date,
                      optional: true,
                      autoform: {
                        afFieldInput: {
                          type: "date"
                        }
                      }
                    }
                  },
    Events: Events.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Create Event');
  }
});

CreateEventController.events({
  'click #create-new-event': function () {
    var usr_id = Meteor.userId();
    var title = $('#event-title').value;
    var location = $('#event-address').value;
    var date = $('#datepicker').value;
    Meteor.call('createEvent', usr_id, title, date, location);
  }
});
