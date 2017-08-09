var digControllers = angular.module('digControllers', []);

digControllers.controller('MainController', function($scope, $http) {
  $http.get("js/data.json").then(function (response) {
    $scope.digs = response.data.data;
  });
  $scope.load = function() {
		$(document).ready(function(){
		  // tile hover

		  $('.image1').on('mouseenter', function () {
		    $('.descr1').css('display', 'block');
		  });
		  $('.image1').on('mouseout', function () {
		    $('.descr1').css('display', 'none');
		  });

		  $('.image2').on('mouseenter', function () {
		    $('.descr2').css('display', 'block');
		  });
		  $('.image2').on('mouseout', function () {
		    $('.descr2').css('display', 'none');
		  });

		  $('.image3').on('mouseenter', function () {
		    $('.descr3').css('display', 'block');
		  });
		  $('.image3').on('mouseout', function () {
		    $('.descr3').css('display', 'none');
		  });

		  $('.image4').on('mouseenter', function () {
		    $('.descr4').css('display', 'block');
		  });
		  $('.image4').on('mouseout', function () {
		    $('.descr4').css('display', 'none');
		  });

		  $('.image5').on('mouseenter', function () {
		    $('.descr5').css('display', 'block');
		  });
		  $('.image5').on('mouseout', function () {
		    $('.descr5').css('display', 'none');
		  });
		});
   };

   $scope.load();
});

digControllers.controller('MyDigController', function($scope, $http, $routeParams) {
  $http.get("js/data.json").then(function (response) {
    $scope.digs = response.data.data;
    $scope.whichItem = $routeParams.itemId;
  });

});
