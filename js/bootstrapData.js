define(function(require) {
  var ItemModel = require("models/PortfolioItem"),
      Items = require("collections/PortfolioItems"),
      CateogryModel = require("models/Category"),
      Categories = require("collections/Categories"),
      data = itemsData,
      dataCat = categoriesData,
      items,
      categories;
      bootstrap = {};

      items = new Items({model: new ItemModel});
      items.reset(data);

      categories = new Categories({ model: new CateogryModel })
      categories.reset(dataCat);

      bootstrap.Items = items;
      bootstrap.Categories = categories;

    return bootstrap;
});