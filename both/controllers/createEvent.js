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
});
