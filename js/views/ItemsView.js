define(function() {
  var ItemsView = Backbone.View.extend({
    initialize: function(items, ItemView) {
      this.collection = items;
      this.innerView = ItemView;
      this.$el = App.ContentEl,
      this.render();
      this.collection.on("add", function(_model){
        this.renderItem( _model );
      },this);
    },
    render: function() {
      var _this = this;
      _this.$el.html("");
      _.each(_this.collection.models, function( item ) {
        _this.renderItem( item );
      });

      return this;
    },
    renderItem: function( item ) {
      var innerView = new this.innerView({model:item});
      this.$el.append(innerView.render().el);
    }
  });

  return ItemsView;
});