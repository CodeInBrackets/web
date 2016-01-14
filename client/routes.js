FlowRouter.route('/',
{
  name: 'home',
  action(){
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
