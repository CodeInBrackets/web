Meteor.publish('playlist', function(){
  return Videos.find({author: this.userId});
});
