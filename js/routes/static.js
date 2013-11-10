define(function(require) {
  var pageSlug,
      pageModel,
      StaticPageView = require("views/StaticPage"),
      staticPageView,
      filter = require("modules/Filter");

  return {
    init:function(slug){
      pageSlug = slug;
      pageModel = App.Pages.findWhere({ slug: pageSlug });
      staticPageView = new StaticPageView({ model:pageModel });
      filter.destroy();
    }
  }
});