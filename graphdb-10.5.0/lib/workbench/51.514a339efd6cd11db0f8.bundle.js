(window.webpackJsonp=window.webpackJsonp||[]).push([[51,115],{115:function(e,r,t){"use strict";t.r(r);t(7),t(25);const i=angular.module("graphdb.framework.impex.import.directives",["graphdb.framework.utils.uriutils"]);i.directive("validateUri",["UriUtils",function(e){return{restrict:"A",require:"ngModel",link:function(r,t,i,a){a.$parsers.unshift((function(t){let i=!0;return"named"===r.target&&(i=e.isValidIri(t,t.toString())),a.$setValidity("validateUri",i),t}))}}}]),i.directive("filesTable",(function(){return{restrict:"A",templateUrl:"js/angular/import/templates/filesTable.html"}})),i.directive("filesOntoLoader",(function(){return{link:function(e,r,t){e.$watch("file.status",(function(){"IMPORTING"!==e.file.status&&"UPLOADING"!==e.file.status||!$(r).has("object").length>0&&$(r).append('<object width="'+t.size+'" height="'+t.size+'" data="js/angular/templates/loader/ot-loader.svg?v=2.5.0">{{\'common.loading\' | translate}}</object>')}))}}}))},178:function(e,r,t){"use strict";t.r(r);t(7),t(23),t(143),t(115),t(22),t(53),t(54);angular.module("graphdb.framework.impex.import",["toastr","ngRoute","ngFileUpload","ui.bootstrap","graphdb.framework.impex.import.directives","graphdb.framework.impex.import.controllers","graphdb.framework.core.services.repositories","graphdb.framework.core.directives"])}}]);