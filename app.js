(function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope){
    $scope.name ="";
    $scope.totalValue = 0;
    $scope.displayNumeric = function () {//function to display numeric
      var totalNameValue = calculatNumericForString($scope.name); //get the total value
      $scope.totalValue = totalNameValue;
    };
    $scope.sayHello = function () {
      return "Hello Cop"; //create function with $scope
    };
    function calculatNumericForString(string) {
      var totalStringValue = 0;
      for (var i=0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      };
      return totalStringValue;
    }
  });

})();
