(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{107:function(e,t,n){"use strict";n.r(t);var r=n(318),a=n(324),i=n(316),o=n(317);n(10);function s(e,t,n,s,c,l,d,u,f,h,p,y,v){return{restrict:"AE",template:'<div id="classChart"></div>',scope:{classHierarchyData:"=",flattenedClassNames:"=",selectedClass:"=",currentSliderValue:"=",showClassInfoPanel:"=",showExternalElements:"=",hidePrefixes:"=",currentBrowserLimit:"="},link:function(d,g,m){!function(d,g){var m,x,w=d3.pack().size([780,780]),S=d3.scaleLinear().domain([0,4]).range(["hsl(19, 70%, 90%)","hsl(19, 70%, 50%)"]).interpolate(d3.interpolateHcl),C=d3.select("#classChart").insert("svg:svg","h2").attr("viewBox","0 0 800 800").attr("preserveAspectRatio","xMidYMid meet").on("dblclick.zoom",null);function E(){return C.append("svg:g").attrs({id:"main-group",transform:"translate(400,400)"})}function T(){return"true"===p.get(y.CLASS_HIERARCHY_HIDE_PREFIXES)}function R(){var e=o.a.Export.getCSSRules("css/rdf-class-hierarchy-labels.css?v=2.5.0");d3.selectAll("#main-group").append("defs"),$("defs").append('<style type="text/css"><![CDATA['+e+"]]></style>"),d3.selectAll("g").style("opacity",1);var t=o.a.Export.generateBase64ImageSource("#classChart svg");d3.select(this).attrs({href:t,download:"class-hierarchy-"+l.getActiveRepository()+".svg"})}d.hidePrefixes=T();var A,H,P=E();if(!d.classHierarchyData.classCount&&l.getActiveRepository()&&!l.isSystemRepository()){e.loader=!0,e.hierarchyError=!1;const t=p.get("classHierarchy-selectedGraph-"+l.getActiveRepository());n.getClassHierarchyData(null!==t?t.contextID.uri:"").success((function(t,n,r){e.loader=!1,207===n&&u.warning(v.instant("graphexplore.update.diagram"),v.instant("graphexplore.repository.data.changed")),d.classHierarchyData=t,d3.select("#download-svg").on("mouseover",R)})).error((function(t){e.loader=!1,e.hierarchyError=getError(t),u.error(v.instant("graphexplore.error.request.failed",{name:h,error:getError(t)}))}))}var I,b,k,L,N,D,F,z={};function O(n,o,l,u){b&&b(),k&&k(),d3.selectAll("#main-group").remove(),P=E(),a.a.SingleChild.addPlaceholders(n,!0),(x=d3.hierarchy(n)).sum((function(e){return e.size})),I=l||x,w(x);var p,y=x.descendants();I.isInFocusTransitive=!0,a.a.SingleChild.removePlaceholders(y),a.a.SingleChild.centerNodes(y),a.a.SingleChild.makePositionsRelativeToZero(y),m||(m=Object(r.a)().attr("class","d3-tip").customPosition((function(e,t){return{top:"inherit",bottom:s.innerHeight-t.clientY+"px",right:s.innerWidth-t.clientX+"px"}})).html((function(e){return e.data.name})),C.call(m));var v=P.selectAll("circle").data(y).enter().append("g");o.doFade&&v.each((function(e){i.a.Transition.fadeIn(d3.select(this),550)}));var g,T=[],R=v.append("circle").attr("class",(function(e){return e.data.role})).attr("guide-selector",(function(e){return"class-"+e.data.name})).style("fill",(function(e){return e.children?S(e.depth):"#E0D0D0"})).each((function(e){if(e.circle=d3.select(this),e.data.name!==h){var t=e.data.name;T.push({name:t}),z[[t]]=e,e.circle.classed("rdf-class",!0),e.circle.on("mouseover",(function(t){o.noPrefixes||e.textHidden?m.show(e,t):m.hide(e)})),e.circle.on("mouseout",m.hide)}})).on("gdb-focus",(e,t)=>H(t)).on("gdb-zoom",(e,t)=>W(t));function L(e){d3.selectAll(".selected").classed("selected",e.selected=!1),e.circle.classed("selected",e.selected=!0),g=e}function N(){d.showClassInfoPanel=!1}T&&(T=_.uniqBy(T,"name"),d.flattenedClassNames=T);var D=i.a.Click.delayDblClick();d3.selectAll(".parent, .topLevelParent, .child, .root").call(D),H=function(e){W(e),e.data.name===h?(N(),d3.selectAll(".selected").classed("selected",!1)):(L(e),d.selectedClass=g,d.showClassInfoPanel=!0,d.$on("sidePanelClosed",(function(t){d3.selectAll(".selected").classed("selected",e.selected=!1)})))},D.on("click",(function(e,t){t.data.id&&s.history.pushState({id:t.data.id},"classHierarchyPage"+t.data.id,"hierarchy#"+t.data.id),m.hide(),H(t)})),D.on("dblclick",(function(t,r){r!==n&&(m.hide(),L(r),e.$broadcast("goToDomainRangeGraphView",g,I),t.stopPropagation())}));var F=0;C.on("wheel",(function(e){m.hide(),e.preventDefault(),e.stopPropagation();var t=(new Date).getTime();if(t-F>100){F=t;var n="";e.deltaY<=-1?n="in":e.deltaY>=1&&(n="out");var r=e.target.__data__;if(r||(r=I),"in"===n){if(r!==I){for(;r.parent&&!r.parent.isInFocusTransitive;)r=r.parent;r.depth<I.depth&&(r=I)}if(r===I&&r.children){for(var a=r.children[0],i=1;i<r.children.length;i++)r.children[i].sortingRank>a.sortingRank&&(a=r.children[i]);a.children&&(r=a)}else r.children||(r=r.parent);W(r,!0)}else"out"===n&&(r=I.parent)&&W(r,!0);I.data.name===h&&s.history.replaceState({id:1},"classHierarchyPage1","hierarchy#1"),U()}}));var $=P.selectAll("text").data(y).enter().append("text").attr("class",(function(e){return e.children&&e.children.length?"label":"label child-label"})).each((function(e){e.textSel=d3.select(this)}));o.noPrefixes?($.each((function(e){var t=e.data.name.indexOf(":");e.data.name.indexOf("http://")>-1?e.noPrefixName=e.data.name:t>-1&&(e.noPrefixName=e.data.name.substring(t+1))})),$.style("font-size",(function(e){return i.a.Text.calcFontSize(e.noPrefixName,e.r)})).text((function(e){return i.a.Text.getTextWithElipsisIfNeeded(e.noPrefixName,e.r/3)}))):$.style("font-size",(function(e){return i.a.Text.calcFontSize(e.data.name,e.r)})).text((function(e){return i.a.Text.getTextWithElipsisIfNeeded(e.data.name,e.r/3)})),$.style("display",(function(e){return e.parent&&e.parent.data===I.data?(e.textHidden=this.textContent.indexOf("...")+3===this.textContent.length,null):(e.textHidden=!0,"none")})),o.doFade&&!o.keepPrevState&&$.each((function(e){i.a.Transition.fadeIn(d3.select(this),550)})),A=function(){function e(e){e&&R.each((function(t){+e===t.data.id&&H(t)}))}var n=t.hash();s.onpopstate=function(t){t.state&&e(t.state.id)},e(n)};var O=P.selectAll("circle, text");function M(e,t){var n=800/e[2];p=e,O.attr("transform",(function(t){return"translate("+(t.x-e[0])*n+","+(t.y-e[1])*n+")"})),R.attr("r",(function(e){return e.r*n})),t&&$.each((function(e){e.data.fullName!==I.data.topLevelParentUri&&I.data.topLevelParentUri!==h||(e.textSel.style("display","none"),I.children&&I.children.length?_.each(I.children,(function(e){e.textSel.style("display","inline")})):I.textSel.style("display","inline"),I.parent&&_.each(I.parent.children,(function(e){e.data.name!==I.data.name&&e.textSel.style("display","inline")})))})),$.style("font-size",(function(e){return o.noPrefixes?i.a.Text.calcFontSize(e.noPrefixName,e.r*n):i.a.Text.calcFontSize(e.data.name,e.r*n)})).text((function(e){return o.noPrefixes?i.a.Text.getTextWithElipsisIfNeeded(e.noPrefixName,e.r*n/3):i.a.Text.getTextWithElipsisIfNeeded(e.data.name,e.r*n/3)}))}function V(e){var t=2*e+20;return 2*e/t<.3&&(t=2*e+2),t}function B(e){!e.isInFocusTransitive&&e.parent&&e.parent.isInFocusTransitive?(e.textHidden=this.textContent.indexOf("...")+3===this.textContent.length,this.style.display=""):(e.textHidden=!0,this.style.display="none")}function W(e,t){if(c((function(){d.showExternalElements=e.data.name===h})),I!==e&&(e.data.id&&s.history.replaceState({id:e.data.id},"classHierarchyPage"+e.data.id,"hierarchy#"+e.data.id),e.children||(e=e.parent,I!==e))){if(t&&(N(),d3.selectAll(".selected").classed("selected",!1)),I.parent)for(var n=I;n;)n.isInFocusTransitive=!1,n=n.parent;for(n=e;n;)n.isInFocusTransitive=!!n.children,n=n.parent;if(2*(I=e).r/(2*I.r+20)<.3||d.currentSliderValue>d.currentBrowserLimit)M([I.x,I.y,V(I.r)]),$.each((function(e){B.call(this,e)}));else d3.transition().duration(f).tween("zoom",(function(e){var t=d3.interpolateZoom(p,[I.x,I.y,V(I.r)]);return function(e){M(t(e))}})).selectAll("text").each(B)}}M([I.x,I.y,V(I.r)],u),b=d.$on("rootFocus",(function(){s.history.pushState({id:1},"classHierarchyPage1","hierarchy#1"),H(x)})),k=d.$on("classSearch",(function(e){H(e)}))}function U(){const t=d.classHierarchyData.classCount;let n=p.get(y.CLASS_HIERARCHY_CURRENT_SLIDER_VALUE);(!n||n>t)&&(n=t,p.set(y.CLASS_HIERARCHY_CURRENT_SLIDER_VALUE,n)),e.$broadcast("classCount",t,n)}window.addEventListener("resize",U),window.addEventListener("beforeunload",(function e(){window.removeEventListener("resize",U),window.removeEventListener("beforeunload",e)})),d.$watch("classHierarchyData",(function(){L&&L(),N&&N(),D&&D(),F&&F();var e=T();if(d.classHierarchyData.classCount){U();var t=_.cloneDeep(d.classHierarchyData);var n,r,a=function(e){return e.descendants().sort((function(e,t){return e.data.sortingRank>t.data.sortingRank?-1:e.data.sortingRank<t.data.sortingRank||e.data.depth>t.data.depth?1:e.data.depth<t.data.depth?-1:0}))}(d3.hierarchy(t));function i(e,t){const a={keepPrevState:!0,noPrefixes:T()};r=a.noPrefixes,O(n||e,a,I,!0),c((function(){p.set(y.CLASS_HIERARCHY_SWITCH_PREFIXES,t),A()}),70)}function o(e,a,o){if(!e)return;p.set(y.CLASS_HIERARCHY_CURRENT_SLIDER_VALUE,e),n={name:h,children:[]};const s=new Set;for(let t=1;t<=e;t++)s.add(a[t].data.id),a[t].parent===a[0]&&n.children.push(a[t].data);if(function e(t){if(!t.children)return;const n=[];for(const e of t.children)s.has(e.id)&&n.push($.extend({},e));t.children=n;for(const n of t.children)e(n)}(n),o){r=angular.isUndefined(r)?T():r;O(n,{noPrefixes:r})}else i(t)}var s,l=p.get(y.CLASS_HIERARCHY_CURRENT_SLIDER_VALUE);if(l)o(l,a);else{var u={doFade:!0,keepPrevState:!0,noPrefixes:T()};O(t,u),A()}L=d.$watch("hidePrefixes",(function(n){angular.isUndefined(n)||e?e=void 0:c((function(){!function(e){angular.isUndefined(e)||p.set(y.CLASS_HIERARCHY_HIDE_PREFIXES,e)}(n),i(t,!0)}),50)}),!0),N=d.$watch("currentSliderValue",(function(e){o(e,a,!0)}),!0),F=d.$on("onEnterKeypressSearchAction",(function(e){s&&H(s)})),D=d.$on("searchedClass",(function(e,t){(s=z[t.name])&&H(s)}))}}),!0)}(d)}}}angular.module("graphdb.framework.graphexplore.directives.class",["graphdb.framework.graphexplore.controllers.class","graphdb.framework.utils.localstorageadapter"]).constant("ZOOM_DURATION",500).constant("ROOT_OBJ_NAME","RDF Class Hierarchy").directive("rdfClassHierarchy",s),s.$inject=["$rootScope","$location","GraphDataRestService","$window","$timeout","$repositories","$licenseService","toastr","ZOOM_DURATION","ROOT_OBJ_NAME","LocalStorageAdapter","LSKeys","$translate"]},309:function(e,t,n){var r,a;r=[n(313)],void 0===(a=function(){function e(e,t){return e.each((function(){var e=t.apply(this,arguments),n=select(this);for(var r in e)n.attr(r,e[r])}))}function t(e,t){for(var n in t)e.attr(n,t[n]);return e}return"undefined"==typeof d3&&(d3=n(313)),d3.selection.prototype.attrs=function(n){return("function"==typeof n?e:t)(this,n)},d3.selection.prototype.moveToFront=function(){return this.each((function(){d3.select(this.parentNode.appendChild(this))}))},d3.selection.prototype.moveToBack=function(){return this.each((function(){const e=this.parentNode.firstChild;e&&this.parentNode.insertBefore(this,e)}))},d3}.apply(t,r))||(e.exports=a)},316:function(e,t,n){"use strict";n(309);var r=r||{};r.Text=function(){function e(e,t,n,r){n=n||10;var a=t/3;return"string"==typeof e?(a*=10/(e.substring(0,t/3).length+1.5),a+=1,e.match(/[\u0900-\u0DFF\u1100-\u11FF\u2E80-\u2EFF\u3000-\u9FFF]/)&&(a*=.6),a<n&&(a=n),Math.round(a)):(a<n&&(a=n),Math.round(a))}return{calcFontSizeRaw:e,calcFontSize:function(t,n,r,a){return e(t,n,r)+"px"},getTextWithElipsisIfNeeded:function(e,t){return"string"==typeof e&&e.length>t?e.substring(0,t-3)+"...":e}}}(),r.Transition={fadeIn:function(e,t){e.style("opacity",0).transition().duration(t).style("opacity",1)},fadeOut:function(e,t){e.style("opacity",1).transition().duration(t).style("opacity",0)}},r.Click=function(){const e=function(e,n){let r,a=1,i=arguments.length;for(;++a<i;)r=arguments[a],e[r]=t(e,n,n[r]);return e};function t(e,t,n){return function(){var r=n.apply(t,arguments);return r===t?e:r}}return{delayDblClick:function(){var t=d3.dispatch("click","dblclick");return e((function(e){var n,r=null;e.on("mousedown",(function(){n=d3.pointer(document.body),+new Date})),e.on("mouseup",(function(e,a){var i,o,s;(o=n,s=d3.pointer(document.body),Math.sqrt(Math.pow(o[0]-s[0],2),Math.pow(o[1]-s[1],2))>5)||(r?(window.clearTimeout(r),r=null,t.call("dblclick",e,e,a)):r=window.setTimeout((i=e,function(){t.call("click",i,i,a),r=null}),250))}))}),t,"on")}}}(),t.a=r},317:function(e,t,n){"use strict";n(309);var r=r||{};r.Export={getCSSRules:function(e){const t=$('link[href="'+e+'"]')[0].sheet.rules;let n="";return _.each(t,(function(e){n+=e.cssText})),n},generateBase64ImageSource:function(e){e||(e="svg");const t=d3.selectAll(e).attr("version","1.1").attr("xmlns","http://www.w3.org/2000/svg").node().parentNode.innerHTML;return"data:image/svg+xml;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(t)))}},t.a=r},318:function(e,t,n){"use strict";t.a=function(){var e=function(){return"n"},t=function(){return[0,0]},n=function(){return" "},r=u(),a=null,i=null,o=null,s=null;function c(e){var t;a="svg"===(t=(t=e).node()).tagName.toLowerCase()?t:t.ownerSVGElement,i=a.createSVGPoint(),document.body.appendChild(r)}c.show=function(){var r=Array.prototype.slice.call(arguments);r[r.length-1]instanceof SVGElement&&(o=r.pop());var a,i=n.apply(this,r),u=t.apply(this,r),h=e.apply(this,r),p=f(),y=d.length,v=document.documentElement.scrollTop||document.body.scrollTop,g=document.documentElement.scrollLeft||document.body.scrollLeft,m=s.apply(this,r);for(p.html(i).style("opacity",1).style("pointer-events","all");y--;)p.classed(d[y],!1);const x=r.filter(e=>e instanceof Event);return a=l.get(h).apply(this,x),m?Object.keys(m).forEach((function(e){p.style(e,m[e])})):p.classed(h,!0).style("top",a.top+u[0]+v+"px").style("left",a.left+u[1]+g+"px"),c},c.hide=function(){return f().style("opacity",0).style("pointer-events","none"),c},c.attr=function(e,t){if(arguments.length<2&&"string"==typeof e)return f().attr(e);var n=Array.prototype.slice.call(arguments);return d3.selection.prototype.attr.apply(f(),n),c},c.style=function(e,t){if(arguments.length<2&&"string"==typeof e)return f().style(e);var n=Array.prototype.slice.call(arguments);return d3.selection.prototype.style.apply(f(),n),c},c.direction=function(t){return arguments.length?(e=null==t?t:p(t),c):e},c.offset=function(e){return arguments.length?(t=null==e?e:p(e),c):t},c.html=function(e){return arguments.length?(n=null==e?e:p(e),c):n},c.customPosition=function(e){return arguments.length?(s=null==e?e:p(e),c):s},c.destroy=function(){return r&&(f().remove(),r=null),c};var l=new Map(Object.entries({n:function(e){var t=h(e);return{top:t.n.y-r.offsetHeight,left:t.n.x-r.offsetWidth/2}},s:function(e){var t=h(e);return{top:t.s.y,left:t.s.x-r.offsetWidth/2}},e:function(e){var t=h(e);return{top:t.e.y-r.offsetHeight/2,left:t.e.x}},w:function(e){var t=h(e);return{top:t.w.y-r.offsetHeight/2,left:t.w.x-r.offsetWidth}},nw:function(e){var t=h(e);return{top:t.nw.y-r.offsetHeight,left:t.nw.x-r.offsetWidth}},ne:function(e){var t=h(e);return{top:t.ne.y-r.offsetHeight,left:t.ne.x}},sw:function(e){var t=h(e);return{top:t.sw.y,left:t.sw.x-r.offsetWidth}},se:function(e){var t=h(e);return{top:t.se.y,left:t.e.x}}})),d=l.keys();function u(){var e=d3.select(document.createElement("div"));return e.style("position","absolute").style("top",0).style("opacity",0).style("pointer-events","none").style("box-sizing","border-box"),e.node()}function f(){return null===r&&(r=u(),document.body.appendChild(r)),d3.select(r)}function h(e){for(var t=o||e.target;void 0===t.getScreenCTM&&"undefined"===t.parentNode;)t=t.parentNode;var n={},r=t.getScreenCTM(),a=t.getBBox(),s=a.width,c=a.height,l=a.x,d=a.y;return i.x=l,i.y=d,n.nw=i.matrixTransform(r),i.x+=s,n.ne=i.matrixTransform(r),i.y+=c,n.se=i.matrixTransform(r),i.x-=s,n.sw=i.matrixTransform(r),i.y-=c/2,n.w=i.matrixTransform(r),i.x+=s,n.e=i.matrixTransform(r),i.x-=s/2,i.y-=c/2,n.n=i.matrixTransform(r),i.y+=c,n.s=i.matrixTransform(r),n}function p(e){return"function"==typeof e?e:function(){return e}}return c}},324:function(e,t,n){"use strict";var r=r||{};r.SingleChild={addPlaceholders:function e(t,n){if(t.children){for(var r=0;r<t.children.length;r++)e(t.children[r]);if(1===t.children.length){var a=1.2*t.size;n&&(a=.1*t.children[0].size),t.children.push({name:"placeholder",size:a})}}},removePlaceholders:function e(t){for(var n=t.length-1;n>=0;n--){var r=t[n];"placeholder"===r.data.name?t.splice(n,1):r.children&&e(r.children)}},centerNodes:function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.children&&1===n.children.length){var r=n.x-n.children[0].x;n.children[0].x+=r,a(n.children[0],r)}}function a(e,t){if(e.children)for(var n=0;n<e.children.length;n++)e.children[n].x+=t,a(e.children[n],t)}},makePositionsRelativeToZero:function(e){for(var t=e[0].x,n=e[0].y,r=0;r<e.length;r++){var a=e[r];a.x-=t,a.y-=n}}},t.a=r}}]);