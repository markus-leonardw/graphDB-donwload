(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{99:function(e,n){angular.module("graphdb.framework.graphexplore.services.rdfsdetails",[]).factory("RdfsLabelCommentService",(function(){return{processAndFilterLabelAndComment:function(e){function n(e){const n={};for(let r in e)if(e.hasOwnProperty(r)){let a=r;r.indexOf(":")>-1&&(a=r,r=r.split(":")[1].toLowerCase()),n[r]=e[a]}return n}const r=e.results.bindings,a=[],t=[];_.each(r,(function(e){let r;angular.isUndefined(e.label)||(r=n(e.label),a.push(r)),angular.isUndefined(e.comment)||(r=n(e.comment),t.push(r))}));const l=function(e){return"en"===e.lang||"de"===e.lang},o=$.grep(a,l)[0],i=$.grep(t,l)[0],s=angular.isUndefined(o)?a.length>0?a[0].value:void 0:o.value,d=angular.isUndefined(i)?t.length>0?t[0].value:void 0:i.value;return{rdfsLabel:s,rdfsComment:d}}}}))}}]);