(function(){
  var loginUser = angular.module("myapp").directive("loginUser",function(myappHttp){
    return {
      restrict : "A",
      replace :false,
      scope: false,
      controller:function($scope,$location){
        $scope.busy = false;
        $scope.warning = {
          disp: false,
          message :""
        };
        var serverBusy = function () {
          console.log("Server busy");
          $scope.busy = true;
        }
        var serverDone = function(){
          console.log("Server done");
          $scope.busy = false;
        }
        var goOnToNext = function(){
          console.log("inside goOnToNext function");
          $location.path("/report");
        }
        var showWarning = function(msg){
          $scope.warning.disp = true;
          $scope.warning.message = msg;
        }
        var clearWarning = function(){
          $scope.warning.disp = false;
          $scope.warning.message = "";
        }
        var validateUserInput = function(){
          var userok = /^[a-zA-Z._]*$/.test($scope.user.id);
          var pinok = /^[0-9]*$/.test($scope.user.password);
          return userok && pinok;
        }
        $scope.user = {id:"",password:""};
        $scope.loginUser = function() {
          clearWarning();
          if (validateUserInput() == true) {
            // initiate server action
            serverBusy();
            myappHttp.getUser($scope.user.id).then(function(data){
              // success in getting the users
              serverDone();
              if (data !== undefined && data !== null) {
                if (data.pin == $scope.user.password) {
                  console.log("authentication successful");
                  goOnToNext();
                }
                else if(data.pin !== $scope.user.password){
                  console.log("user login and password combination not correct");
                  showWarning("user login and password combination not correct");
                }
                else{
                  console.log("invalid input");
                  showWarning("invalid input");
                }
              }
              else{
                showWarning("please enter a username/password");
              }
            },function(){
              serverDone();
              console.log("error in getting the user details");
              showWarning("error in getting the user details");
            })
          }
          else {
            showWarning("Invalid input");
          }
          console.log("We are inside the login user function");
        }
      }
    };

  })
})()
