define(function(require){

  var tmpl = require("stache!templates/staticpage");
  
  var StaticPage = Backbone.View.extend({
    tagName:"article",
    tmpl: tmpl,
    className:"itemDetail",
    initialize:function(){
      this.$el = App.ContentEl;
      this.render();
    },
    render:function(){
      this.$el.html( this.tmpl( this.model.toJSON() ) );
      return this;
    }
  });

  return StaticPage;
});