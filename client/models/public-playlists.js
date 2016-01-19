Template.PublicPlaylist.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('playlist');
  });
});

Template.PublicPlaylist.helpers({
  playlist: () => {
    return Videos.find({isPublic: true});
  }
});
