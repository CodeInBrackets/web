Template.Videos.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('playlist');
  });
});

Template.Videos.helpers({
  videos: () => {
    return Videos.find({});
  }
});

Template.Videos.events({
  'click .new-playlist': () => {
    Session.set('NewPlaylist', true);
  }
});

Template.PlaylistDetails.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('playlist-details', id);
  });
});

Template.PlaylistDetails.helpers({
  playlist: () => {
    var id = FlowRouter.getParam('id');
    return Videos.findOne({_id: id});
  }
});
