var app = angular.module('contact',[]);
var contact={};
var contacts=[];

contact.name="kavya";
contact.email="kavyamg@gmail.com";
contact.number= 9845704710;

contacts.push(contact);
//console.log(contacts);

var contact={};

contact.name="kav";
contact.email="kav@gmail.com";
contact.number= 9845704711;

contacts.push(contact);
app.controller('contactCtrl',function ($scope,$http) {
  //console.log(contacts);
//  $scope.contacts=contacts;

  function refresh(){
    $http.get('/get').success(function (response){
    //  console.log(response);
      $scope.contacts=response;
    });
  }
  refresh();
$scope.add=function(){
//  console.log($scope.contact);
  var contact=$scope.contact;
  $http.post('/contact',contact).success(function(response){
    //console.log(response);
    refresh();
  });
}

$scope.remove= function(id){
  $http.delete('/contact/'+id).success(function(response){
    console.log(response);
    refresh();
  })
}

});
