Router.route('/', {
  name: 'home'
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

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'createEvent']
});
