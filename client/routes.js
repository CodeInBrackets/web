FlowRouter.route('/',
{
  name: 'home',
  action(){
    BlazeLayout.render('home-view');
  }
});

FlowRouter.route('/video-list',
{
  name: 'video-list',
  action(){
    BlazeLayout.render('main-view', {main: 'Videos'});
  }
});
