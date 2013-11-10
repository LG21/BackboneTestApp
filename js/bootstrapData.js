define(function(require) {
  var ItemModel = require("models/PortfolioItem"),
      Items = require("collections/PortfolioItems"),
      CateogryModel = require("models/Category"),
      Categories = require("collections/Categories"),
      StaticPageModel = require("models/StaticPage"),
      StaticPages = require("collections/StaticPages"),
      data = itemsData,
      dataCat = categoriesData,
      items,
      pagesData = staticPages,
      pages,
      categories;
      bootstrap = {};

      items = new Items({model: new ItemModel});
      items.reset(data);

      categories = new Categories({ model: new CateogryModel })
      categories.reset(dataCat);

      pages = new StaticPages({model: new StaticPageModel });
      pages.reset( pagesData );

      bootstrap.Items = items;
      bootstrap.Categories = categories;
      bootstrap.Pages = pages;

    return bootstrap;
});