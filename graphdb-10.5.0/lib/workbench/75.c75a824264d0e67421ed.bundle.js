(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{88:function(n,o){angular.module("graphdb.framework.clustermanagement.controllers.add-location",[]).controller("AddLocationFromClusterCtrl",t),t.$inject=["$scope","$uibModalInstance","toastr","productInfo","$translate"];function t(n,o,t,e,i){n.newLocation={uri:"",authType:"signature",username:"",password:"",active:!1},n.docBase=function(n){return"https://graphdb.ontotext.com/documentation/"+n.productShortVersion}(e),n.isValidLocation=function(){return(n.newLocation.uri.length<6||0===n.newLocation.uri.indexOf("http:")||0===n.newLocation.uri.indexOf("https:"))&&n.newLocation.uri.indexOf("/repositories")<=-1},n.ok=function(){n.newLocation?o.close(n.newLocation):t.error(i.instant("location.cannot.be.empty.error"))},n.cancel=function(){o.dismiss("cancel")}}}}]);