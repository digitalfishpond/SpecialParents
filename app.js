var specialParentsApp = angular.module('specialParentsApp', ['ngRoute', 'ngResource']);

specialParentsApp.controller("mainController", ['$scope' , function($scope){

	$scope.myDataRef = new Firebase('https://wklkeuwy3lh.firebaseio-demo.com/');
		
	$scope.checkEnter = function(keyEvent) {
        if (keyEvent.which === 13) {
          $scope.myDataRef.push({user: $scope.nameInput , text: $scope.messageInput});
          $scope.messageInput = "";
		}
	};
	
	$scope.myDataRef.on('value' , function(snapshot) {
		console.log(snapshot.val());
		$scope.messages = snapshot.val();

		
	});

}]);
