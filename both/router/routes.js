Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/create', {
  name: 'createEvent',
  controller: 'CreateEventController'
});

Router.route('/create-tickets', {
  name: 'createTickets',
  controller: 'CreateTicketsController'
});

Router.route('/event/:_id/ticket/:eid', {
  name: 'verify',
  controller: "VerifyController"
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'createEvent']
});
