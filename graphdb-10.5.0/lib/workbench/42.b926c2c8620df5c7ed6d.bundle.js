(window.webpackJsonp=window.webpackJsonp||[]).push([[42,73],{152:function(t,e,o){"use strict";o.r(e);o(83);angular.module("graphdb.framework.chatgpt",["ngRoute","graphdb.framework.chatgpt.controllers"])},83:function(t,e){angular.module("graphdb.framework.chatgpt.controllers",["toastr","graphdb.framework.utils.localstorageadapter"]).controller("ChatGptCtrl",o).controller("ChatGptSettingsCtrl",n),o.$inject=["$scope","$http","$timeout","$translate","$uibModal","$repositories","toastr","ModalService","LocalStorageAdapter"];function o(t,e,o,n,r,s,i,a,c){function l(){o(()=>{document.getElementById("messages-scrollable").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},0)}function u(){t.history=[],t.askSettings={queryTemplate:{query:"string"},groundTruths:[],echoVectorQuery:!1,topK:5};const e=c.get("ttyg"),o=s.getActiveRepository();if(e&&e[o]){const n=e[o];n.history&&(t.history=n.history),t.connectorID=n.connectorID,n.askSettings&&(t.askSettings=n.askSettings)}l()}function g(){const e=c.get("ttyg")||{};e[s.getActiveRepository()]={history:t.history,connectorID:t.connectorID,askSettings:t.askSettings},c.set("ttyg",e)}t.helpTemplateUrl="js/angular/chatgpt/templates/chatInfo.html",t.getIcon=function(t){return"question"===t?"user":"assistant"===t?"data":"help"},t.ask=function(){if(!t.question.trim())return;const o=t.history.filter(t=>!t.error),n={connectorID:t.connectorID,question:t.question,askSettings:t.askSettings,history:o},r={role:"question",content:t.question};e.post("rest/chat/retrieval?repositoryID="+s.getActiveRepository(),n).then(e=>{t.history.pop(),e.data.forEach(e=>t.history.push(e))}).catch(t=>{r.error=!0,i.error(getError(t,0,100))}).finally(()=>{t.loader=!1,l(),g()}),t.history.push(r),t.loader=!0,l(),t.question=""},t.clear=function(){a.openSimpleModal({title:n.instant("common.confirm"),message:n.instant("ttyg.clear.history.confirmation"),warning:!0}).result.then((function(){t.history=[],g()}))},t.openSettings=function(){r.open({templateUrl:"js/angular/chatgpt/templates/modal/settings.html",controller:"ChatGptSettingsCtrl",size:"lg",resolve:{data:function(){return{askSettings:t.askSettings,connectorID:t.connectorID}}}}).result.then((function(e){t.connectorID=e.connectorID,t.askSettings=e.askSettings,g()}))},t.$on("repositoryIsSet",(function(){u()})),s.getActiveRepository()&&u()}function n(t,e,o,n){t.dialogTitle=e.instant("ttyg.settings.title"),t.save=function(){if(t.form.$valid){const e={queryTemplate:JSON.parse(t.queryTemplate),groundTruths:t.groundTruths.split("\n"),topK:t.topK,echoVectorQuery:t.echoVectorQuery};o.close({askSettings:e,connectorID:t.connectorID})}},t.cancel=function(){o.dismiss("cancel")},t.connectorID=n.connectorID,t.queryTemplate=JSON.stringify(n.askSettings.queryTemplate,null,"  "),t.topK=n.askSettings.topK,t.echoVectorQuery=n.askSettings.echoVectorQuery,t.groundTruths=n.askSettings.groundTruths.map(t=>t.trim()).filter(t=>""!==t).join("\n")}n.$inject=["$scope","$translate","$uibModalInstance","data"]}}]);