define(function(require){

  var tmpl = require("stache!templates/productItem");
  
  var ItemView = Backbone.View.extend({
    tagName:"div",
    tmpl: tmpl,
    className:"portfolioItem",
    initialize:function(){
      console.log("view init");
    },
    render:function(){

      if( localStorage.getItem(this.model.cid) != null){
        this.$el.html(localStorage.getItem(this.model.cid));
        return this;
      }
      else {
        this.$el.html( this.tmpl( this.model.toJSON() ) );
        this.saveOnLocal(this.$el.html());
        return this;  
      }

    },
    saveOnLocal:function(tmpl){
      localStorage.setItem(this.model.cid, tmpl);
    }
  });

  return ItemView;
});