Accounts.onLogin(function(){
  FlowRouter.go('video-list')
});

Accounts.onLogout(function(){
  FlowRouter.go('home')
});

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home')
  }
}]);

FlowRouter.route('/',
{
  name: 'home',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('video-list')
    }
    GAnalytics.pageview();
    BlazeLayout.render('home-view');
  }
});

FlowRouter.route('/video-list',
{
  name: 'video-list',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('main-view', {main: 'Videos'});
  }
});

FlowRouter.route('/playlist/:id',
{
  name: 'video',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('main-view', {main: 'PlaylistDetails'});
  }
});
