Meteor.subscribe('playlist');

Template.Videos.helpers({
  videos: () => {
    return Videos.find({});
  }
});
