VerifyController = AppController.extend({
  path: '/event/:_id/ticket/:uid',
  waitOn: function() {
    return this.subscribe('events');
  },
  data: function() {
    return {
      events: Events.findOne({_id: this.params._id}),
      params: this.params
    };
  },
  onAfterAction: function() {
    Meta.setTitle('Verify');
    console.log(this.data.events);
  }
});
