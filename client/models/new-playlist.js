Template.NewPlaylist.events({
  'click .fa-close': function() {
    Session.set('NewPlaylist', false);
  }
});
