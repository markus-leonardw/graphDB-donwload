(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{82:function(o,e){function n(o,e,n){o.loading=!1,o.initialized=!1,o.backupAndRestoreInfos=void 0,o.hasClusterOperation=!1,o.paused=!1;let a=void 0;o.hasToShowValue=o=>"boolean"==typeof o||!!o,o.togglePause=()=>{o.paused=!o.paused};const i=()=>{o.loading||o.paused||(o.loading=!0,n.monitorBackup().then(e=>{o.backupAndRestoreInfos=e,o.initialized=!0,o.hasClusterOperation=o.backupAndRestoreInfos.some(o=>o.nodePerformingClusterBackup)}).finally(()=>o.loading=!1))};o.$on("$destroy",()=>{a&&e.cancel(a)}),i(),a=e(()=>i(),2e3)}angular.module("graphdb.framework.monitoring.backupandrestore.controllers",[]).controller("BackupAndRestoreCtrl",n),n.$inject=["$scope","$interval","MonitoringRestService"]}}]);