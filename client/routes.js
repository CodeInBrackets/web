FlowRouter.route('/',
{
  name: 'home',
  action(){
    BlazeLayout.render('home-view');
  }
});

FlowRouter.route('/test',
{
  name: 'test',
  action(){
    BlazeLayout.render('main-view', {main: 'test'});
  }
});
