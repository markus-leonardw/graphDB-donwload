(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{137:function(e,t,r){"use strict";r.r(t);var i=r(321),n=r.n(i),s=r(0),a=r(69);function c(e,t,r,i,c,o,l,u,p,d,y,h,m){const g="http://www.ontotext.com/graphdb/similarity/",f="http://www.ontotext.com/graphdb/similarity/psi/",S=f+"any";e.pluginName="similarity",e.pluginIsActive=!0,e.setPluginIsActive=function(t){e.pluginIsActive=t};const x=function(e){return'"'+e+'"'},v=function(e){return void 0===e||e.startsWith("<<")&&e.endsWith(">>")?e:"<"+e+">"};function b(){return!e.getActiveRepository()||e.isActiveRepoFedXType()||e.isActiveRepoOntopType()}let w;function I(){c.isLicenseValid()&&(e.getAutocompletePromise=p.checkAutocompleteStatus())}e.info=d,e.getActiveRepository=function(){return i.getActiveRepository()},b()||u.getSearchQueries().success((function(t){e.searchQueries=t})).error((function(e){const t=getError(e);r.error(t,h.instant("similarity.could.not.get.search.queries.error"))})),e.encodeURIComponent=function(e){return encodeURIComponent(e)},e.getSimilarityIndexes=function(){!b()&&e.pluginIsActive&&u.getIndexes().success((function(t){e.similarityIndexes=t})).error((function(e){const t=getError(e);r.error(t,h.instant("similarity.could.not.get.indexes.error"))}))},e.pullList=function(){e.getSimilarityIndexes();const r=t((function(){e.$broadcast("checkIsActive"),"false"!==$("#indexes-table").attr("aria-expanded")&&e.getSimilarityIndexes()}),5e3);e.$on("$destroy",(function(){t.cancel(r)}))},e.getActiveRepository()&&c.isLicenseValid()&&e.pullList(),e.$watch((function(){return i.getActiveRepository()}),(function(){!e.getActiveRepository()||e.isActiveRepoOntopType()||e.isActiveRepoFedXType()||(e.getNamespacesPromise=y.getNamespaces(e.getActiveRepository()).success((function(t){I(),e.usedPrefixes={},t.results.bindings.forEach((function(t){e.usedPrefixes[t.prefix.value]=t.namespace.value})),e.$on("$destroy",(function(){w&&w.destroy()})),w=n()(document.getElementById("yasr"),{getUsedPrefixes:e.usedPrefixes,persistency:!1,hideHeader:!0,pluginsOptions:a.YasrUtils.getYasrConfiguration()})})).error((function(e){r.error(getError(e),h.instant("get.namespaces.error.msg"))})))})),e.$on("autocompleteStatus",(function(){I()})),e.loading=!1,e.selected=void 0,e.searchType="searchTerm",e.resultType="termResult",e.$watch("searchType",(function(){e.empty=!0})),e.goToSimilarityIndex=function(t){"BUILT"!==t.status&&"OUTDATED"!==t.status&&"REBUILDING"!==t.status||(e.empty=!0,e.selected!==t&&(e.lastSearch=void 0,e.selected=t),"text"===t.type?e.searchType="searchTerm":"predication"===t.type&&(e.searchType="searchEntity"),"text"!==t.type&&"predication"!==t.type||$("#indexes-table").collapse("hide"))};const A=function(t){const r=angular.element(document.getElementById("yasr-inner")),i=angular.element(document.getElementById("results-loader"));t?(e.loading=!0,r.addClass("opacity-hide"),i.removeClass("opacity-hide")):(e.loading=!1,r.removeClass("opacity-hide"),i.addClass("opacity-hide"))};e.performSearch=function(t,n,s,a,c){A(!0);let o=n;e.lastSearch={},e.lastSearch.type=s,"searchEntityPredicate"===s&&(o=e.psiSubject,e.lastSearch.predicate=n),o="searchTerm"===s?x(o):v(o),e.lastSearch.termOrSubject=o;let l;l="searchAnalogical"===s?e.selected.analogicalQuery?e.selected.analogicalQuery:e.searchQueries.analogical:e.selected.searchQuery?e.selected.searchQuery:e.searchQueries[e.selected.type];const u={query:l,$index:v("http://www.ontotext.com/graphdb/similarity/instance/"+t),$query:o,$searchType:v(("text"===e.selected.type?g:f)+("searchEntityPredicate"===s?"searchEntity":s)),$resultType:v("text"===e.selected.type?g+a:f+"entityResult"),$parameters:x(c)};"searchEntityPredicate"===s&&(u.$psiPredicate=e.lastSearch.predicate?v(e.lastSearch.predicate):v(S)),"searchAnalogical"===s&&(e.searchSubject=n,u.$givenSubject=v(e.analogicalSubject),u.$givenObject=v(e.analogicalObject),u.$searchSubject=v(n)),m({method:"GET",url:"repositories/"+i.getActiveRepository(),params:u,headers:{Accept:"application/x-sparqlstar-results+json, application/sparql-results+json;q=0.9, */*;q=0.8"}}).then((function({data:e,textStatus:t,jqXhrOrErrorString:r}){A(!1),w.setResponse(e,t,r)})).catch((function(e){r.error(getError(e),h.instant("similarity.get.resource.error")),A(!1)}))},e.viewSearchQuery=function(){let t;t="searchAnalogical"===e.lastSearch.type?e.selected.analogicalQuery?e.selected.analogicalQuery:e.searchQueries.analogical:e.selected.searchQuery?e.selected.searchQuery:e.searchQueries[e.selected.type];let r=[],i="";r=t.match(/[a-zA-Z0-9-]+:<http:\/\/www.ontotext.com\/graphdb\/similarity\/instance\/>/),i=null==r?"similarity-index":r[0].substring(0,r[0].indexOf(":"));const n=t.replace("?index",i+":"+e.selected.name).replace("?query",e.lastSearch.termOrSubject).replace("?searchType",("text"===e.selected.type?":":"psi:")+("searchEntityPredicate"===e.lastSearch.type?"searchEntity":e.lastSearch.type)).replace("?resultType","text"===e.selected.type?":"+e.resultType:"psi:entityResult").replace("?parameters",x(e.searchParameters?e.searchParameters:"")).replace("?psiPredicate",e.lastSearch.predicate?v(e.lastSearch.predicate):v(S)).replace("?givenSubject",v(e.analogicalSubject)).replace("?givenObject",v(e.analogicalObject)).replace("?searchSubject",v(e.searchSubject));l.open({templateUrl:"pages/viewQuery.html",controller:"ViewQueryCtrl",resolve:{query:function(){return n}}})},e.deleteIndex=function(t){o.openSimpleModal({title:h.instant("common.confirm"),message:h.instant("similarity.delete.index.warning",{name:t.name}),warning:!0}).result.then((function(){u.deleteIndex(t).then((function(){e.getSimilarityIndexes()}),(function(e){r.error(getError(e))}))}))},e.viewCreateQuery=function(e){u.getQuery({indexName:e.name,indexOptions:e.options,query:e.selectQuery,indexStopList:e.stopList,queryInference:e.infer,querySameAs:e.sameAs,viewType:e.type,indexAnalyzer:e.analyzer}).success((function(e){l.open({templateUrl:"pages/viewQuery.html",controller:"ViewQueryCtrl",resolve:{query:function(){return e}}})}))},e.rebuildIndex=function(t){t.searchQuery||(t.searchQuery=t.type?e.searchQueries[t.type]:e.searchQueries.text),o.openSimpleModal({title:h.instant("common.confirm"),message:Object(s.decodeHTML)(h.instant("similarity.rebuild.index.warning",{name:t.name})),warning:!0}).result.then((function(){t.status="REBUILDING",u.rebuildIndex(t).then((function(e){}),(function(e){r.error(getError(e))}))}))},e.copyToClipboardResult=function(e){o.openCopyToClipboardModal(e)},e.trimIRI=function(e){return _.trim(e,"<>")}}angular.module("graphdb.framework.similarity.controllers.list",[]).controller("SimilarityCtrl",c),c.$inject=["$scope","$interval","toastr","$repositories","$licenseService","ModalService","$uibModal","SimilarityRestService","AutocompleteRestService","productInfo","RDF4JRepositoriesRestService","$translate","$http"]}}]);