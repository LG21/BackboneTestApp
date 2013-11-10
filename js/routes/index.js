define(function(require) {

  var ItemView = require("views/ItemView"),
      ItemsView =  require("views/ItemsView"),
      filter = require("modules/Filter"),
      itemsView;

  return {
    init:function(id){
      var itemsCollection = App.Items,
          items,
          collectionClone;

      if (id){
        items = itemsCollection.where({category: parseInt(id) });
        collectionClone = itemsCollection.clone();
        collectionClone.reset(items);
        itemsCollection = collectionClone;
      }

      itemsView = new ItemsView(itemsCollection, ItemView);
      filter.init();
      App.ItemView = itemsView;
    }
  }

});