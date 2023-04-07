(function(){

    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
$scope.name='';
$scope.message = "";
       $scope.CheckIfTooMuch = function(){

        var  strInput =  $scope.name.split(',');
        var itemCount = strInput.filter(item => item !== '').length;
        if (itemCount === 0 )
         {
            $scope.message = "Please enter data first";
            console.log('Please enter data first');
           
        } else if(itemCount <= 3) {
            $scope.message ="Enjoy!";
        }
      else{
        $scope.message = "Too Much!"
      }
           
        }
    }

})();