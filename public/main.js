let demoApp = angular.module('demo',[]); //defining angular module

//defining a service which can be used by components
demoApp.factory('todoWebService',['$http',function($http){
  return {
    get: function()
    {
      return $http.get('/api')
    },
    post: function(item)
    {
      let temp = {"item":item};
      return $http.post('/api',JSON.stringify(temp),{"Content-Type":"application/json"});
    },
    delete: function(name)
    {
      return $http.delete('/api/' + name);
    }
  }
}]);
