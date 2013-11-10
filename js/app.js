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

  window.debug = true;
  window.App = {};
  App.ContentEl = $("#content");
  App.FilterEl = $("#filter");
  App.FilterItems = App.FilterEl.children('.filterItems');

  require(['bootstrapData'], function(Bootstrap){
    App.Items = Bootstrap.Items;
    App.Categories = Bootstrap.Categories;
    App.Routes = {};
    var AppRouter = Backbone.Router.extend({
      routes:{
        "": "index",
        "!index":"index",
        "!index/cat/:id":"index",
        "!item/:id": "item",
        "*actions": "index"
      },
      index:function(id){
        var id = id || null;
        console.log( "cat id", id);
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
      defaultRoute:function(params){
        console.log("defaultRoute", params);
      }
    });

    App.Router = new AppRouter;
    Backbone.history.start();
  });

});