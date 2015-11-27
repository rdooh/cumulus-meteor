Router.configure({
    layoutTemplate: 'main',
    notFoundTemplate: 'notFound'
});




Router.route('/dashboard', function () {
    this.render('dashboard');
});

//
// Router.route('/post/:_id', function () {
//   let params = this.params;
//   let id = params._id;
//   this.render('post');
// });
//
//
//
Router.route('/:blogName', function () {
  let params = this.params;
  let blogName = params.blogName;
  this.render('blog',{
    data: {
      blog: blogName
    }
  });
});


Router.route('/:blogName/:postName', function () {
  let params = this.params;
  let blogName = params.blogName;
  let postName = params.postName;
  this.render('post',{
    data: {
      blog: blogName,
      post: postName
    }
  });
});





// Default home route
Router.route('/', function () {
  this.render('home');
});
