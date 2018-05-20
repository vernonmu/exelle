app.service('mainSrv', function($http) {
  console.log('we are served.');
  const self = this;
  self.createBooking = function(booking) {
    console.log('srv is: ', booking);
    return $http.post('/booking', booking)
    // $http.post({})
  }

  self.sendContactMessage = function(message) {
    return $http.post('/contact', message)
  }
})
