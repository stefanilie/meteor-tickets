HomeController = AppController.extend({
  waitOn: function() {
    return this.subscribe('events');
  },
  data: {
	  events: Events.find({})
  }
});
