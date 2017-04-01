( function () {
// 'use strict';
// Interface para confirguração de módulos do AngularJS
angular.module('calculadoraDeNome', [])

// Definição de controller utilizando constructor function para controle de dados
.controller('CalculadoraDeNomeController', function ($scope) {

  $scope.nome = "";
  $scope.valorTotal = 0;

  // scope com function para ser executado na diretiva ng-keyup
  $scope.mostraNumero = function () {
    // coloca o valor digitado para ser executado pela function
    var valorTotalNome = calculaNumericoParaString($scope.nome);
    // valor executado pela function dentro do scope
    $scope.valorTotal = valorTotalNome;

  };

  function calculaNumericoParaString(string) {
    var stringValorTotal = 0;
    for (var i = 0; i < string.length; i++) {
      // soma o valor Unicode de cada letra na var stringValorTotal
      stringValorTotal += string.charCodeAt(i);
    }

    return stringValorTotal;
  }

});

})();
