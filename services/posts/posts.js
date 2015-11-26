Posts = new Meteor.Collection( 'posts' );

PostsSchema = new SimpleSchema({
  "title": {
    type: String,
    label: "Title"
  },
  "description": {
    type: String,
    label: "Description"
  },
  createdAt: {
    type: Date,
    label: "Creation Date"
  },
  updatedAt: {
    type: Date,
    label: "Last Updated"
  },
  "ownerId": {
    type: String,
    label: "Post Author"
  }
});

Posts.attachSchema( PostsSchema );
