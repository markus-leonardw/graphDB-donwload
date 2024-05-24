(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{202:function(e,t,n){"use strict";n.r(t);n(7),n(23),n(144),n(24),n(322);angular.module("graphdb.framework.security",["toastr","ui.bootstrap","ngRoute","graphdb.framework.security.controllers","graphdb.framework.core.interceptors.unauthorized","graphdb.framework.core.interceptors.authentication","graphdb.framework.core.services.jwtauth"])},322:function(e,t){
/*! ngTagsInput v3.2.0 License: MIT */!function(){"use strict";var e=8,t=9,n=13,i=27,a=32,r=38,o=40,s=37,u=39,l=46,c=188,g=9007199254740991,d=["text","email","url"],p=angular.module("ngTagsInput",[]);p.directive("tagsInput",["$timeout","$document","$window","$q","tagsInputConfig","tiUtil",function(t,i,r,o,p,f){function m(e,t,n,i){var a,r,s,u,l={};return a=function(t){return f.safeToString(t[e.displayProperty])},r=function(t,n){t[e.displayProperty]=n},s=function(t){var i=a(t),r=i&&i.length>=e.minLength&&i.length<=e.maxLength&&e.allowedTagsPattern.test(i)&&!f.findInObjectArray(l.items,t,e.keyProperty||e.displayProperty);return o.when(r&&n({$tag:t})).then(f.promisifyValue)},u=function(e){return o.when(i({$tag:e})).then(f.promisifyValue)},l.items=[],l.addText=function(e){var t={};return r(t,e),l.add(t)},l.add=function(n){var i=a(n);return e.replaceSpacesWithDashes&&(i=f.replaceSpacesWithDashes(i)),r(n,i),s(n).then((function(){l.items.push(n),t.trigger("tag-added",{$tag:n})})).catch((function(){i&&t.trigger("invalid-tag",{$tag:n})}))},l.remove=function(e){var n=l.items[e];return u(n).then((function(){return l.items.splice(e,1),l.clearSelection(),t.trigger("tag-removed",{$tag:n}),n}))},l.select=function(e){0>e?e=l.items.length-1:e>=l.items.length&&(e=0),l.index=e,l.selected=l.items[e]},l.selectPrior=function(){l.select(--l.index)},l.selectNext=function(){l.select(++l.index)},l.removeSelected=function(){return l.remove(l.index)},l.clearSelection=function(){l.selected=null,l.index=-1},l.getItems=function(){return e.useStrings?l.items.map(a):l.items},l.clearSelection(),l}function h(e){return-1!==d.indexOf(e)}return{restrict:"E",require:"ngModel",scope:{tags:"=ngModel",text:"=?",templateScope:"=?",tagClass:"&",onTagAdding:"&",onTagAdded:"&",onInvalidTag:"&",onTagRemoving:"&",onTagRemoved:"&",onTagClicked:"&"},replace:!1,transclude:!0,templateUrl:"ngTagsInput/tags-input.html",controller:["$scope","$attrs","$element",function(e,t,n){e.events=f.simplePubSub(),p.load("tagsInput",e,t,{template:[String,"ngTagsInput/tag-item.html"],type:[String,"text",h],placeholder:[String,"Add a tag"],tabindex:[Number,null],removeTagSymbol:[String,String.fromCharCode(215)],replaceSpacesWithDashes:[Boolean,!0],minLength:[Number,3],maxLength:[Number,g],addOnEnter:[Boolean,!0],addOnSpace:[Boolean,!1],addOnComma:[Boolean,!0],addOnBlur:[Boolean,!0],addOnPaste:[Boolean,!1],pasteSplitPattern:[RegExp,/,/],allowedTagsPattern:[RegExp,/.+/],enableEditingLastTag:[Boolean,!1],minTags:[Number,0],maxTags:[Number,g],displayProperty:[String,"text"],keyProperty:[String,""],allowLeftoverText:[Boolean,!1],addFromAutocompleteOnly:[Boolean,!1],spellcheck:[Boolean,!0],useStrings:[Boolean,!1]}),e.tagList=new m(e.options,e.events,f.handleUndefinedResult(e.onTagAdding,!0),f.handleUndefinedResult(e.onTagRemoving,!0)),this.registerAutocomplete=function(){return n.find("input"),{addTag:function(t){return e.tagList.add(t)},getTags:function(){return e.tagList.items},getCurrentTagText:function(){return e.newTag.text()},getOptions:function(){return e.options},getTemplateScope:function(){return e.templateScope},on:function(t,n){return e.events.on(t,n,!0),this}}},this.registerTagItem=function(){return{getOptions:function(){return e.options},removeTag:function(t){e.disabled||e.tagList.remove(t)}}}}],link:function(o,g,d,p){var m,h,v=[n,c,a,e,l,s,u],T=o.tagList,y=o.events,$=o.options,x=g.find("input"),b=["minTags","maxTags","allowLeftoverText"];m=function(){p.$setValidity("maxTags",T.items.length<=$.maxTags),p.$setValidity("minTags",T.items.length>=$.minTags),p.$setValidity("leftoverText",!(!o.hasFocus&&!$.allowLeftoverText)||!o.newTag.text())},h=function(){t((function(){x[0].focus()}))},p.$isEmpty=function(e){return!e||!e.length},o.newTag={text:function(e){return angular.isDefined(e)?(o.text=e,void y.trigger("input-change",e)):o.text||""},invalid:null},o.track=function(e){return e[$.keyProperty||$.displayProperty]},o.getTagClass=function(e,t){var n=e===T.selected;return[o.tagClass({$tag:e,$index:t,$selected:n}),{selected:n}]},o.$watch("tags",(function(e){if(e){if(T.items=f.makeObjectArray(e,$.displayProperty),$.useStrings)return;o.tags=T.items}else T.items=[]})),o.$watch("tags.length",(function(){m(),p.$validate()})),d.$observe("disabled",(function(e){o.disabled=e})),o.eventHandlers={input:{keydown:function(e){y.trigger("input-keydown",e)},focus:function(){o.hasFocus||(o.hasFocus=!0,y.trigger("input-focus"))},blur:function(){t((function(){var e=i.prop("activeElement"),t=e===x[0],n=g[0].contains(e);(t||!n)&&(o.hasFocus=!1,y.trigger("input-blur"))}))},paste:function(e){e.getTextData=function(){var t=e.clipboardData||e.originalEvent&&e.originalEvent.clipboardData;return t?t.getData("text/plain"):r.clipboardData.getData("Text")},y.trigger("input-paste",e)}},host:{click:function(){o.disabled||h()}},tag:{click:function(e){y.trigger("tag-clicked",{$tag:e})}}},y.on("tag-added",o.onTagAdded).on("invalid-tag",o.onInvalidTag).on("tag-removed",o.onTagRemoved).on("tag-clicked",o.onTagClicked).on("tag-added",(function(){o.newTag.text("")})).on("tag-added tag-removed",(function(){o.tags=T.getItems(),p.$setDirty(),h()})).on("invalid-tag",(function(){o.newTag.invalid=!0})).on("option-change",(function(e){-1!==b.indexOf(e.name)&&m()})).on("input-change",(function(){T.clearSelection(),o.newTag.invalid=null})).on("input-focus",(function(){g.triggerHandler("focus"),p.$setValidity("leftoverText",!0)})).on("input-blur",(function(){$.addOnBlur&&!$.addFromAutocompleteOnly&&T.addText(o.newTag.text()),g.triggerHandler("blur"),m()})).on("input-keydown",(function(t){var i,r,g,d,p=t.keyCode,m={};f.isModifierOn(t)||-1===v.indexOf(p)||(m[n]=$.addOnEnter,m[c]=$.addOnComma,m[a]=$.addOnSpace,i=!$.addFromAutocompleteOnly&&m[p],r=(p===e||p===l)&&T.selected,d=p===e&&0===o.newTag.text().length&&$.enableEditingLastTag,g=(p===e||p===s||p===u)&&0===o.newTag.text().length&&!$.enableEditingLastTag,i?T.addText(o.newTag.text()):d?(T.selectPrior(),T.removeSelected().then((function(e){e&&o.newTag.text(e[$.displayProperty])}))):r?T.removeSelected():g&&(p===s||p===e?T.selectPrior():p===u&&T.selectNext()),(i||g||r||d)&&t.preventDefault())})).on("input-paste",(function(e){if($.addOnPaste){var t=e.getTextData().split($.pasteSplitPattern);t.length>1&&(t.forEach((function(e){T.addText(e)})),e.preventDefault())}}))}}}]),p.directive("tiTagItem",["tiUtil",function(e){return{restrict:"E",require:"^tagsInput",template:'<ng-include src="$$template"></ng-include>',scope:{$scope:"=scope",data:"="},link:function(t,n,i,a){var r=a.registerTagItem(),o=r.getOptions();t.$$template=o.template,t.$$removeTagSymbol=o.removeTagSymbol,t.$getDisplayText=function(){return e.safeToString(t.data[o.displayProperty])},t.$removeTag=function(){r.removeTag(t.$index)},t.$watch("$parent.$index",(function(e){t.$index=e}))}}}]),p.directive("autoComplete",["$document","$timeout","$sce","$q","tagsInputConfig","tiUtil",function(e,a,s,u,l,c){function g(e,t,n){var i,a,r,o={};return r=function(){return t.tagsInput.keyProperty||t.tagsInput.displayProperty},i=function(e,n){return e.filter((function(e){return!c.findInObjectArray(n,e,r(),(function(e,n){return t.tagsInput.replaceSpacesWithDashes&&(e=c.replaceSpacesWithDashes(e),n=c.replaceSpacesWithDashes(n)),c.defaultComparer(e,n)}))}))},o.reset=function(){a=null,o.items=[],o.visible=!1,o.index=-1,o.selected=null,o.query=null},o.show=function(){t.selectFirstMatch?o.select(0):o.selected=null,o.visible=!0},o.load=c.debounce((function(n,s){o.query=n;var l=u.when(e({$query:n}));a=l,l.then((function(e){l===a&&(e=c.makeObjectArray(e.data||e,r()),e=i(e,s),o.items=e.slice(0,t.maxResultsToShow),o.items.length>0?o.show():o.reset())}))}),t.debounceDelay),o.selectNext=function(){o.select(++o.index)},o.selectPrior=function(){o.select(--o.index)},o.select=function(e){0>e?e=o.items.length-1:e>=o.items.length&&(e=0),o.index=e,o.selected=o.items[e],n.trigger("suggestion-selected",e)},o.reset(),o}return{restrict:"E",require:"^tagsInput",scope:{source:"&",matchClass:"&"},templateUrl:"ngTagsInput/auto-complete.html",controller:["$scope","$element","$attrs",function(e,t,n){e.events=c.simplePubSub(),l.load("autoComplete",e,n,{template:[String,"ngTagsInput/auto-complete-match.html"],debounceDelay:[Number,100],minLength:[Number,3],highlightMatchedText:[Boolean,!0],maxResultsToShow:[Number,10],loadOnDownArrow:[Boolean,!1],loadOnEmpty:[Boolean,!1],loadOnFocus:[Boolean,!1],selectFirstMatch:[Boolean,!0],displayProperty:[String,""]}),e.suggestionList=new g(e.source,e.options,e.events),this.registerAutocompleteMatch=function(){return{getOptions:function(){return e.options},getQuery:function(){return e.suggestionList.query}}}}],link:function(e,a,s,u){var l,g=[n,t,i,r,o],d=e.suggestionList,p=u.registerAutocomplete(),f=e.options,m=e.events;f.tagsInput=p.getOptions(),l=function(e){return e&&e.length>=f.minLength||!e&&f.loadOnEmpty},e.templateScope=p.getTemplateScope(),e.addSuggestionByIndex=function(t){d.select(t),e.addSuggestion()},e.addSuggestion=function(){var e=!1;return d.selected&&(p.addTag(angular.copy(d.selected)),d.reset(),e=!0),e},e.track=function(e){return e[f.tagsInput.keyProperty||f.tagsInput.displayProperty]},e.getSuggestionClass=function(t,n){var i=t===d.selected;return[e.matchClass({$match:t,$index:n,$selected:i}),{selected:i}]},p.on("tag-added tag-removed invalid-tag input-blur",(function(){d.reset()})).on("input-change",(function(e){l(e)?d.load(e,p.getTags()):d.reset()})).on("input-focus",(function(){var e=p.getCurrentTagText();f.loadOnFocus&&l(e)&&d.load(e,p.getTags())})).on("input-keydown",(function(a){var s=a.keyCode,u=!1;if(!c.isModifierOn(a)&&-1!==g.indexOf(s))return d.visible?s===o?(d.selectNext(),u=!0):s===r?(d.selectPrior(),u=!0):s===i?(d.reset(),u=!0):(s===n||s===t)&&(u=e.addSuggestion()):s===o&&e.options.loadOnDownArrow&&(d.load(p.getCurrentTagText(),p.getTags()),u=!0),u?(a.preventDefault(),a.stopImmediatePropagation(),!1):void 0})),m.on("suggestion-selected",(function(e){!function(e,t){var n=e.find("li").eq(t),i=n.parent(),a=n.prop("offsetTop"),r=n.prop("offsetHeight"),o=i.prop("clientHeight"),s=i.prop("scrollTop");s>a?i.prop("scrollTop",a):a+r>o+s&&i.prop("scrollTop",a+r-o)}(a,e)}))}}}]),p.directive("tiAutocompleteMatch",["$sce","tiUtil",function(e,t){return{restrict:"E",require:"^autoComplete",template:'<ng-include src="$$template"></ng-include>',scope:{$scope:"=scope",data:"="},link:function(n,i,a,r){var o=r.registerAutocompleteMatch(),s=o.getOptions();n.$$template=s.template,n.$index=n.$parent.$index,n.$highlight=function(n){return s.highlightMatchedText&&(n=t.safeHighlight(n,o.getQuery())),e.trustAsHtml(n)},n.$getDisplayText=function(){return t.safeToString(n.data[s.displayProperty||s.tagsInput.displayProperty])}}}}]),p.directive("tiTranscludeAppend",(function(){return function(e,t,n,i,a){a((function(e){t.append(e)}))}})),p.directive("tiAutosize",["tagsInputConfig",function(e){return{restrict:"A",require:"ngModel",link:function(t,n,i,a){var r,o,s=e.getTextAutosizeThreshold();(r=angular.element('<span class="input"></span>')).css("display","none").css("visibility","hidden").css("width","auto").css("white-space","pre"),n.parent().append(r),o=function(e){var t,a=e;return angular.isString(a)&&0===a.length&&(a=i.placeholder),a&&(r.text(a),r.css("display",""),t=r.prop("offsetWidth"),r.css("display","none")),n.css("width",t?t+s+"px":""),e},a.$parsers.unshift(o),a.$formatters.unshift(o),i.$observe("placeholder",(function(e){a.$modelValue||o(e)}))}}}]),p.directive("tiBindAttrs",(function(){return function(e,t,n){e.$watch(n.tiBindAttrs,(function(e){angular.forEach(e,(function(e,t){n.$set(t,e)}))}),!0)}})),p.provider("tagsInputConfig",(function(){var e={},t={},n=3;this.setDefaults=function(t,n){return e[t]=n,this},this.setActiveInterpolation=function(e,n){return t[e]=n,this},this.setTextAutosizeThreshold=function(e){return n=e,this},this.$get=["$interpolate",function(i){var a={};return a[String]=function(e){return e},a[Number]=function(e){return parseInt(e,10)},a[Boolean]=function(e){return"true"===e.toLowerCase()},a[RegExp]=function(e){return new RegExp(e)},{load:function(n,r,o,s){var u=function(){return!0};r.options={},angular.forEach(s,(function(s,l){var c,g,d,p,f,m;c=s[0],g=s[1],d=s[2]||u,p=a[c],f=function(){var t=e[n]&&e[n][l];return angular.isDefined(t)?t:g},m=function(e){r.options[l]=e&&d(e)?p(e):f()},t[n]&&t[n][l]?o.$observe(l,(function(e){m(e),r.events.trigger("option-change",{name:l,newValue:e})})):m(o[l]&&i(o[l])(r.$parent))}))},getTextAutosizeThreshold:function(){return n}}}]})),p.factory("tiUtil",["$timeout","$q",function(e,t){var n={debounce:function(t,n){var i;return function(){var a=arguments;e.cancel(i),i=e((function(){t.apply(null,a)}),n)}},makeObjectArray:function(e,t){if(!angular.isArray(e)||0===e.length||angular.isObject(e[0]))return e;var n=[];return e.forEach((function(e){var i={};i[t]=e,n.push(i)})),n},findInObjectArray:function(e,t,i,a){var r=null;return a=a||n.defaultComparer,e.some((function(e){return a(e[i],t[i])?(r=e,!0):void 0})),r},defaultComparer:function(e,t){return n.safeToString(e).toLowerCase()===n.safeToString(t).toLowerCase()},safeHighlight:function(e,t){if(e=n.encodeHTML(e),!(t=n.encodeHTML(t)))return e;var i=new RegExp("&[^;]+;|"+function(e){return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}(t),"gi");return e.replace(i,(function(e){return e.toLowerCase()===t.toLowerCase()?"<em>"+e+"</em>":e}))},safeToString:function(e){return angular.isUndefined(e)||null==e?"":e.toString().trim()},encodeHTML:function(e){return n.safeToString(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},handleUndefinedResult:function(e,t){return function(){var n=e.apply(null,arguments);return angular.isUndefined(n)?t:n}},replaceSpacesWithDashes:function(e){return n.safeToString(e).replace(/\s/g,"-")},isModifierOn:function(e){return e.shiftKey||e.ctrlKey||e.altKey||e.metaKey},promisifyValue:function(e){return e=!!angular.isUndefined(e)||e,t[e?"when":"reject"]()},simplePubSub:function(){var e={};return{on:function(t,n,i){return t.split(" ").forEach((function(t){e[t]||(e[t]=[]),(i?[].unshift:[].push).call(e[t],n)})),this},trigger:function(t,i){return(e[t]||[]).every((function(e){return n.handleUndefinedResult(e,!0)(i)})),this}}}};return n}]),p.run(["$templateCache",function(e){e.put("ngTagsInput/tags-input.html",'<div class="host" tabindex="-1" ng-click="eventHandlers.host.click()" ti-transclude-append><div class="tags" ng-class="{focused: hasFocus}"><ul class="tag-list"><li class="tag-item" ng-repeat="tag in tagList.items track by track(tag)" ng-class="getTagClass(tag, $index)" ng-click="eventHandlers.tag.click(tag)"><ti-tag-item scope="templateScope" data="::tag"></ti-tag-item></li></ul><input class="input" autocomplete="off" ng-model="newTag.text" ng-model-options="{getterSetter: true}" ng-keydown="eventHandlers.input.keydown($event)" ng-focus="eventHandlers.input.focus($event)" ng-blur="eventHandlers.input.blur($event)" ng-paste="eventHandlers.input.paste($event)" ng-trim="false" ng-class="{\'invalid-tag\': newTag.invalid}" ng-disabled="disabled" ti-bind-attrs="{type: options.type, placeholder: options.placeholder, tabindex: options.tabindex, spellcheck: options.spellcheck}" ti-autosize></div></div>'),e.put("ngTagsInput/tag-item.html",'<span ng-bind="$getDisplayText()"></span> <a class="remove-button" ng-click="$removeTag()" ng-bind="::$$removeTagSymbol"></a>'),e.put("ngTagsInput/auto-complete.html",'<div class="autocomplete" ng-if="suggestionList.visible"><ul class="suggestion-list"><li class="suggestion-item" ng-repeat="item in suggestionList.items track by track(item)" ng-class="getSuggestionClass(item, $index)" ng-click="addSuggestionByIndex($index)" ng-mouseenter="suggestionList.select($index)"><ti-autocomplete-match scope="templateScope" data="::item"></ti-autocomplete-match></li></ul></div>'),e.put("ngTagsInput/auto-complete-match.html",'<span ng-bind-html="$highlight($getDisplayText())"></span>')}])}()}}]);