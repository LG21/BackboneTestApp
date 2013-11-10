define(function () {
  var Category = Backbone.Model.extend({
    'defaults':{
      id:"1",
      name:"Test title",
      description:"Desc"
    }
  });
  return Category;
});