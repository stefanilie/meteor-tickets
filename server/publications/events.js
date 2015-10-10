Meteor.publishComposite("events", function() {
  return {
    find: function() {
      return Events.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
