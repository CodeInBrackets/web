Videos = new Mongo.Collection('playlist');

Videos.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

VideoSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  url: {
    type: String,
    label: "URL"
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date();
    },
    autoform:{
      type: "hidden"
    }
  }
});

PlaylistSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  isPublic: {
    type: Boolean,
    defaultValue: true,
    optional: true,
    autoform:{
      type: "hidden"
    }
  },
  videos: {
    type: [VideoSchema]
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId;
    },
    autoform:{
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date();
    },
    autoform:{
      type: "hidden"
    }
  }
})

Videos.attachSchema(PlaylistSchema);
