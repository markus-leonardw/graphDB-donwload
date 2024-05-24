(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{127:function(e,a,s){"use strict";s.r(a);s(7),s(24),s(22),s(28);const n=angular.module("graphdb.framework.namespaces.controllers",["ui.bootstrap","graphdb.framework.core.services.repositories","graphdb.framework.core.services.jwtauth","graphdb.framework.rest.repositories.service","graphdb.framework.rest.rdf4j.repositories.service","toastr"]),t=function(){const e="[A-Z]|[a-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]",a="[A-Z]|[a-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]|_|-|[0-9]|·|[̀-ͯ]|[‿-⁀]";return new RegExp("^(?:"+e+")(?:(?:"+a+"|\\.)*(?:"+a+"))?$")}();n.controller("NamespacesCtrl",["$scope","$http","$repositories","toastr","$uibModal","ModalService","RepositoriesRestService","RDF4JRepositoriesRestService","$translate",function(e,a,s,n,c,r,i,o,p){function l(a,t){let c;c="object"==typeof a?a.prefix:a,o.deleteNamespacePrefix(s.getActiveRepository(),c).success((function(){t&&t.length>0?l(a=t.shift(),t):(e.selectedAll=!1,e.namespace={},e.getNamespaces(),e.searchNamespaces="",e.haveSelected=!1,e.loader=!1,e.displayedNamespaces=[],void 0===t?n.success(p.instant("namespace.prefix.deleted.successfully",{prefix:c}),""):n.success(p.instant("namespace.selected.namespaces.deleted.successfully"),""))})).error((function(a){const s=getError(a);n.error(s,p.instant("common.error")),e.loader=!1}))}function m(e,a){return function(e){return""===e||e.match(t)}(e)?!angular.isUndefined(a)&&""!==a||(n.error(p.instant("namespace.warning.provide.namespace"),p.instant("common.error")),!1):(n.error(p.instant("namespace.invalid.prefix",{prefix:e},p.instant("common.error"))),!1)}e.namespaces={},e.namespace={},e.loader=!1,e.haveSelected=!1,e.pageSizeOptions=[10,20,50,100],e.page=1,e.pageSize=e.pageSizeOptions[0],e.displayedNamespaces=[],e.getNamespaces=function(){s.getActiveRepository()&&(e.loader=!0,e.namespaces={},o.getNamespaces(s.getActiveRepository()).success((function(a){e.namespaces=a.results.bindings.map((function(e){return{prefix:e.prefix.value,namespace:e.namespace.value}})),e.namespaces.length>0&&(e.namespaces.sort((function(e,a){const s=e.prefix.toUpperCase(),n=a.prefix.toUpperCase();return s<n?-1:s>n?1:0})),e.matchedElements=e.namespaces,e.changePagination()),0===e.namespaces.length&&(e.loader=!1)})).error((function(a){const s=getError(a);n.error(s),e.loader=!1})))},e.changePagination=function(){angular.isDefined(e.namespaces)&&(e.displayedNamespaces=e.namespaces.slice(e.pageSize*(e.page-1),e.pageSize*e.page))},e.changePageSize=function(a){$(".ot-graph-page-size").removeClass("active"),e.page=1,e.searchNamespaces="",a&&(e.getNamespaces(),e.pageSize=a)},e.$watch("matchedElements",(function(){angular.isDefined(e.matchedElements)&&(e.displayedNamespaces=e.matchedElements.slice(e.pageSize*(e.page-1),e.pageSize*e.page))})),e.$watch((function(){return s.getActiveRepository()}),(function(){e.searchNamespaces="",e.getNamespaces(),e.selectedAll=!1})),e.onNamespaceSearch=function(){e.haveSelected=!1,e.selectedAll=!1,e.matchedElements=[],e.deselectAll(),e.filterResults()},e.filterResults=function(){angular.forEach(e.namespaces,(function(a){-1===a.namespace.indexOf(e.searchNamespaces)&&-1===a.prefix.indexOf(e.searchNamespaces)||e.matchedElements.push(a)}))},e.saveNamespace=function(a,t){return e.loader=!0,o.updateNamespacePrefix(s.getActiveRepository(),t,a).success((function(){e.getNamespaces(),n.success(p.instant("namespace.saved")),e.loader=!1})).error((function(a){const s=getError(a);n.error(s,p.instant("common.error")),e.loader=!1}))},e.editPrefix=function(a,t){e.loader=!0,i.getPrefix(s.getActiveRepository(),{from:a,to:t,location:s.getActiveRepositoryObject().location}).success((function(){e.getNamespaces(),e.loader=!1})).error((function(a){const s=getError(a);n.error(s,p.instant("common.error")),e.loader=!1}))},e.confirmReplace=function(e,a){r.openSimpleModal({title:p.instant("namespace.confirm.replace"),message:p.instant("namespace.already.exists.msg"),warning:!0}).result.then(e,a)},e.editPrefixAndNamespace=function(a,s,n){if(angular.isUndefined(a)&&(a=""),!m(a,s))return"";let t=!1;const c=n.prefix;angular.forEach(e.namespaces,(function(e){e.prefix===a&&c!==a&&(t=!0)})),t?e.confirmReplace((function(){e.saveNamespace(c,s).then((function(){c!==a&&e.editPrefix(c,a)}))}),(function(){e.getNamespaces()})):angular.isDefined(t)&&e.saveNamespace(c,s).then((function(){c!==a&&e.editPrefix(c,a)}))},e.addNamespace=function(){if(angular.isUndefined(e.namespace.prefix)&&(e.namespace.prefix=""),!m(e.namespace.prefix,e.namespace.namespace))return;e.selectedAll=!1;let a=!1;for(let s=0;s<e.namespaces.length;s++)e.namespaces[s].prefix===e.namespace.prefix&&(a=!0);a?e.confirmReplace((function(){e.saveNamespace(e.namespace.prefix,e.namespace.namespace),e.namespace.namespace="",e.namespace.prefix="",setTimeout(()=>{e.form.$setUntouched(),e.form.$setPristine()})})):(e.saveNamespace(e.namespace.prefix,e.namespace.namespace),e.namespace.namespace="",e.namespace.prefix="",setTimeout(()=>{e.form.$setUntouched(),e.form.$setPristine()}))},e.removeNamespace=function(e){r.openSimpleModal({title:p.instant("common.confirm.delete"),message:p.instant("namespace.warning.delete.msg",{prefix:e.prefix}),warning:!0}).result.then((function(){l(e)}))},e.checkAll=function(){angular.forEach(e.displayedNamespaces,(function(a){a.selected=e.selectedAll}))},e.deleteSelected=function(){let a=!1;angular.forEach(e.displayedNamespaces,(function(s){a||s.selected&&(a=!0,r.openSimpleModal({title:p.instant("common.confirm.delete"),message:p.instant("namespace.warning.delete.selected"),warning:!0}).result.then((function(){e.loader=!0;const a=[];angular.forEach(e.displayedNamespaces,(function(e){e.selected&&a.push(e)})),l(a.shift(),a),e.selectedAll=!1}),(function(){e.getNamespaces(),e.selectedAll=!1,e.searchNamespaces=""})))}))},e.checkIfSelectedNamespace=function(){e.haveSelected=!1,angular.forEach(e.namespaces,(function(a){a.selected&&(e.haveSelected=!0)}))},e.deselectAll=function(){angular.forEach(e.namespaces,(function(e){e.selected=!1}))}}]),n.controller("StandartModalCtrl",["$scope","$uibModalInstance",function(e,a){e.ok=function(){a.close(!0)},e.cancel=function(){a.dismiss("cancel")}}])}}]);