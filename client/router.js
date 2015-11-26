Router.configure({
    layoutTemplate: 'main',
    notFoundTemplate: 'notFound'
});


Router.route('/post/:_id', function () {
  let params = this.params;
  let id = params._id;
  this.render('post');
});



Router.route('/blog/:_id', function () {
  let params = this.params;
  let id = params._id;
  this.render('blog');
});





Router.route('/dashboard', function () {
    this.render('dashboard');
});




// Default home route
Router.route('/', function () {
  this.render('home');
});
