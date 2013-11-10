define(function(require){

  var tmpl = require("stache!templates/productItemDetails");
  
  var ItemDetailView = Backbone.View.extend({
    tagName:"article",
    tmpl: tmpl,
    className:"itemDetail",
    initialize:function(){
      console.log("view init");
      this.$el = App.ContentEl;
      this.render();
    },
    render:function(){
      this.$el.html( this.tmpl( this.model.toJSON() ) );
      return this;
    }
  });

  return ItemDetailView;
});