require.config({
  paths: {
    'use':'libs/use',
    'jquery':'libs/jquery',
    'underscore':'libs/underscore',
    'Backbone':'/js/libs/backbone',
    'Mustache':'libs/Mustache',
    'text':'libs/text',
    'stache':'libs/stache',
  },
  "packages": ["models", "views", "collections", "templates"],
  use: {
    backbone: {
      deps: ['underscore', 'jquery'],
      attach: 'Backbone'
    }
  }
});

require(['jquery', 'use!backbone'], function($,  Backbone) {
  window.App = {};
  App.ContentEl = $("#content");
  App.FilterEl = $("#filter");
  App.FilterItems = App.FilterEl.children('.filterItems');

  require(['bootstrapData'], function(Bootstrap){
    App.Items = Bootstrap.Items;
    App.Categories = Bootstrap.Categories;
    App.Pages = Bootstrap.Pages;
    App.Routes = {};
    var AppRouter = Backbone.Router.extend({
      routes:{
        "": "index",
        "!index":"index",
        "!index/cat/:id":"index",
        "!item/:id": "item",
        "!static/:slug":"page",
        "*actions": "index"
      },
      index:function(id){
        var id = id || null;
        if (!App.Routes.Index){
          require(["routes/index"], function(Index){
            Index.init( id );
            App.Routes.Index = Index.init;
          }); 
        } 
        else {
          App.Routes.Index( id );
        }
        
      },
      item:function(id){
        if (!App.Routes.Item){
          require(["routes/item"], function(Item){
            Item.init(id);
            App.Routes.Item = Item.init;
          }); 
        }
        else {
          App.Routes.Item(id);
        }      
      },
      page:function(slug){
        if (!App.Routes.Page){
          require(["routes/static"], function(Page){
            Page.init(slug);
            App.Routes.Page = Page.init;
          }); 
        }
        else {
          App.Routes.Page(slug);
        }      
      },
      defaultRoute:function(params){
        console.log("defaultRoute", params);
      }
    });

    App.Router = new AppRouter;
    Backbone.history.start();
  });

});