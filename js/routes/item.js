define(function(require) {
  var itemId,
      itemModel,
      ItemDetailView = require("views/ItemDetailView"),
      itemDetailView,
      filter = require("modules/Filter");



  return {
    init:function(id){
      itemId = id;
      itemModel = App.Items.findWhere({ id:itemId });
      itemDetailView = new ItemDetailView({ model:itemModel });
      console.log( "filter", filter );
      filter.destroy();
    }
  }
});