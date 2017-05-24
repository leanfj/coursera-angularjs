(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.text = "";
    $scope.message = "";

    $scope.verifyLunch = function () {

      var arrayOfText = $scope.text.split(/\s*,\s*/);

      var validItems = [];
      for (var i = 0; i < arrayOfText.length; i++) {
        if (arrayOfText[i] !== "") {
          validItems.push(arrayOfText[i]);
        }
      }

      if (!$scope.text) {
        $scope.message = "Please enter data first";
      } else {
        if (validItems.length > 3) {
          $scope.message = "Too much!";
        } else {
          $scope.message = "Enjoy!";
        }
      }
      console.log(arrayOfText);
      console.log(validItems);
    }




  }
})();
