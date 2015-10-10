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

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'createEvent']
});
