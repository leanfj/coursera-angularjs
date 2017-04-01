( function () {
'use strict';

angular.module('meuPrimeiroApp', [])

.controller('MeuPrimeiroController', function ($scope) {

  $scope.nome = "Leandro";
  $scope.digaola = function () {
    return "Olá Leandro";
  }
  console.log($scope);
});

})();
