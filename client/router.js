Router.configure({
    layoutTemplate: 'main',
    notFoundTemplate: 'notFound'
});


Router.route('/dashboard', function () {
    this.render('dashboard');
});


Router.route('/post/:_id', function () {
  let params = this.params;
  let id = params._id;
  this.render('post');
});





// Default home route
Router.route('/', function () {
  this.render('home');
});
