(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{170:function(e,t){PluginRegistry.add("guide.step",[{guideBlockName:"execute-sparql-query",getSteps:(e,t)=>{const r=t.GuideUtils,n=t.toastr,o=t.$translate,i=t.$interpolate,l=t.$location,s=t.$route;e.mainAction="execute-sparql-query";const u=document.createElement("code"),c=document.createElement("button");c.className="btn btn-sm btn-secondary",c.innerText=o.instant("guide.step_plugin.execute-sparql-query.copy-to-editor.button"),c.setAttribute("ng-click","copyQuery()");const a=[{guideBlockName:"click-main-menu",options:angular.extend({},{menu:"sparql",showIntro:!0},e)}],p={"-1":'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nselect * where { \n\t?s ?p ?o .\n?o rdf:type ""\n} limit 100 '};let d=!1;return e.queries.forEach((m,h)=>{const q=m.query;p[h]=q,u.innerText=q,e.queryAsHtmlCodeElement='<div class="shepherd-code">'+u.outerHTML+c.outerHTML+"</div>";const g=r.getSparqlEditorSelector();a.push({guideBlockName:"input-element",options:angular.extend({},{content:"guide.step_plugin.execute-sparql-query.query-editor.content",url:"/sparql",elementSelector:g,beforeShowPromise:()=>new Promise((function(e,n){r.deferredShow(10)().then(()=>{r.waitFor(g,3).then(()=>e()).catch(e=>{t.toastr.error(t.$translate.instant("guide.unexpected.error.message")),n(e)})})})),onNextValidate:()=>{const t=r.removeWhiteSpaces(window.editor.getValue());if(t!==r.removeWhiteSpaces(q)){if("select*where{?s?p?o.}limit100"!==t&&!d)return r.noNextErrorToast(n,o,i,"guide.step_plugin.execute-sparql-query.query-not-same.error",e),!1;window.editor.setValue(q)}return d=!0,!0},initPreviousStep:()=>new Promise((e,t)=>{if(0===h)window.editor.setValue("select * where { \n\t?s ?p ?o .\n} limit 100 \n"),e();else{const n="/sparql"!==l.url();r.executeSparqlQuery(l,s,q,n).then(()=>e()).catch(e=>t(e))}}),scrollToHandler:r.scrollToTop,extraContent:m.queryExtraContent,onScope:e=>{e.copyQuery=()=>{window.editor.setValue(q)}}},e)}),a.push({guideBlockName:"clickable-element",options:angular.extend({},{content:"guide.step_plugin.execute-sparql-query.run-sparql-query.content",url:"/sparql",elementSelector:r.getGuideElementSelector("runSparqlQuery"),onNextClick:e=>r.clickOnGuideElement("runSparqlQuery")().then(()=>e.next()),scrollToHandler:r.scrollToTop,canBePaused:!1,initPreviousStep:(e,t)=>new Promise((n,o)=>{const i=e.ShepherdService.getPreviousStepFromHistory(t);i.options.initPreviousStep(e,i.options.id).then(()=>{e.ShepherdService.getCurrentStepId()===t?n():r.clickOnGuideElement("runSparqlQuery")().then(()=>n()).catch(e=>o(e))}).catch(e=>o(e))})},e)}),a.push({guideBlockName:"read-only-element",options:angular.extend({},{content:"guide.step_plugin.execute-sparql-query.result-explain.content",url:"/sparql",placement:"top",elementSelector:r.getSparqlResultsSelector(),fileName:e.fileName,scrollToHandler:r.scrollToTop,extraContent:m.resultExtraContent,canBePaused:!1,initPreviousStep:(e,t)=>new Promise((n,o)=>{if("/sparql"!==l.url())r.executeSparqlQuery(l,s,q,!0).then(()=>n()).catch(e=>o(e));else{const r=e.ShepherdService.getPreviousStepFromHistory(t);r.options.initPreviousStep(e,r.options.id).then(()=>{window.editor.setValue(q),n()}).catch(e=>o(e))}})},e)})}),a}}])}}]);