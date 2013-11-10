define(function () {
  var StaticPage = Backbone.Model.extend({
    'defaults':{
      id:"1",
      title:"",
      slug:"",
      content:""
    }
  });
  return StaticPage;
});