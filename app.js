(function(){
  var app = angular.module('store', [])

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    }
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    }
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '. . .',
      canPurchase: true,
      images: [
         'images/gem-01.gif',
         'images/gem-02.gif',
         'images/gem-03.gif'
        ]
    },
    {
      name: 'Pentagonal gem',
      price: 5.25,
      description: '. . .',
      canPurchase: true,
    }
  ]
})();
