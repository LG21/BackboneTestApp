define(function(require) {
  var FiltersView = require("views/CategoriesFilterView"),
      filtersView;

  return {
    init:function(){
      if( !App.FiltersView ){
        filtersView = new FiltersView( App.Categories );
        App.FiltersView = filtersView;
      }
      else {
        App.FiltersView.show();
      }
     
    },
    destroy:function(){
      if ( App.FiltersView ){
        App.FiltersView.hide();
      }
    }
  };
});