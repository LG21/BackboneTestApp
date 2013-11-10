define(function () {
  var PortfolioItem = Backbone.Model.extend({
    'defaults':{
      id:"1",
      title:"Test title",
      imgName:"pure",
      description:"Desc"
    }
  });
  return PortfolioItem;
});