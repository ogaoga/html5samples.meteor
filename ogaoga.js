if (Meteor.is_client) {
  //
  // Routing
  //
  var AppRouter = Backbone.Router.extend({
    routes: {
      "*actions": "defaultRoute" // matches http://example.com/#anything-here
    },
    defaultRoute: function( actions ){
      // The variable passed in matches the variable in the route definition "actions"
      if ( actions == 'css' ) {
        $('article').html(Template.section_css());
      }
      else {
        $('article').html(Template.home());
      }
    },
  });
  // Initiate the router
  var app_router = new AppRouter;
  // Start Backbone history a neccesary step for bookmarkable URL's
  Backbone.history.start();

  // 
  // breadcrumbs
  //
  Template.breadcrumbs.pages = function() {
    return [
      {path: "/", label: "Home"},
      {path: null, label: "CSS Styling"},
    ];
  };
  Meteor.ui.render(function() {
    var html = Template.breadcrumbs({pages: [
      {path: "/", label: "Home"},
      {path: null, label: "CSS Styling"},
    ]});
    console.log(html);
  })

  /*
  // template
  Template.hello.greeting = function () {
    return "Welcome to ogaoga.";
  };
  Template.hello.events = {
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  };
  */
}

/*
if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/
