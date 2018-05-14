app.controller('mainCtrl', function($scope, $timeout){
  console.log('test control');

  $scope.createBooking = function(booking) {
    console.log('create booking fn has : ', booking);
    $scope.showBooking = false;
    $scope.showSuccessMessage = true;
    $scope.booking = {};
    $scope.bookingForm.$setPristine();

    $timeout(function(){
      if ($scope.showSuccessMessage == true) {
        $scope.showSuccessMessage = false;
        console.log('we are done counting now!');
      }
      else {
        console.log('we have already closed the box, man.');
      }
    }, 10000)

  }
})
