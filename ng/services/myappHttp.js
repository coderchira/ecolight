(function(){
  var myappHttp = angular.module("myapp").service("myappHttp",function($http, $q,$timeout){
    this.baseUrl = "http://localhost:8005/ng/"
    this.getUser = function(id){
      var deferred = $q.defer();
      $http.get(this.baseUrl+"datamodel.json").then(function(response){
        var filteredUser = response.data.data.users.filter(function(el,index){
          return el.id == id;
        })[0];
        $timeout(function(){
          deferred.resolve(filteredUser);
        },2500)
      },function(response){
        deferred.reject({});
      })
      return deferred.promise;

    }
  })
})()
