define(function(require){
  var tmpl = require("stache!templates/category");
  
  var CategoriesFilterView = Backbone.View.extend({
    events: {
      "click .filterItem": 'toggleState'
    },
    initialize: function(items) {
      this.collection = items;
      this.tmpl = tmpl;
      this.$rootEl = App.FilterEl,
      this.$el = App.FilterItems,
      this.render();
    },
    render: function() {
      var _this = this;
      _this.$el.html("");
      _.each(_this.collection.models, function( item ) {
        _this.renderCategory( item );
      });

      return this;
    },
    renderCategory: function( item ) {
      this.$el.append( this.tmpl( item.toJSON() ) );
    },
    show:function(){
      this.$el.show();
      this.$rootEl.show();
      console.log( this );
    },
    hide:function(){
      this.$el.hide();
      this.$rootEl.hide();
    },
    toggleState:function(e){
      var thisEl;
      this.$el.children(".filterItem").removeClass("active");
      thisEl = $(e.currentTarget);
      thisEl.addClass("active");
    }
  });

  return CategoriesFilterView;

});