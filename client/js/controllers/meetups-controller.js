app.controller("meetupsController", MeetupsController)
MeetupsController.$inject = ["$scope", "$resource"];

function MeetupsController($scope, $resource) {
	 var Meetup =  $resource('api/meetups');
	 
	 Meetup.query(function(result){
	 	$scope.meetups = result;
	 });

	 $scope.meetups = [];

	 $scope.CreateMeetUp = function() {
	 	var meetup = new Meetup();
	 	meetup.name = $scope.meetupName;
	 	meetup.$save(function(result){
	 		$scope.meetups.push(result);
	 		$scope.meetupName = '';
	 	});
	 }
};


