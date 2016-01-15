Meteor.publish('playlist', function(){
  return Videos.find({author: this.userId});
});

Meteor.publish('playlist-details', function(id){
  check(id,String);
  return Videos.find({_id: id});
});
