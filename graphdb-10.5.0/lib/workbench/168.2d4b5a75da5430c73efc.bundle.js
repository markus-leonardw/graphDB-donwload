(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{252:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='\x3c!-- Start save graph modal --\x3e\n\n<div class="modal-header">\n    <button type="button" class="close" ng-click="cancel()"></button>\n    <h3 ng-if="isNew" class="modal-title">{{\'add.label.add.autocomplete\' | translate}}</h3>\n    <h3 ng-if="!isNew" class="modal-title">{{\'add.label.edit.autocomplete\' | translate}}</h3>\n</div>\n<div class="modal-body">\n    <form name="form" id="addLabelForm">\n\n        <input id="wb-autocomplete-iri" required type="text" ng-model="label.labelIri" class="form-control" ng-readonly="!isNew"\n               placeholder= "{{\'add.label.enter.iri\' | translate}}" autofocus/>\n\n        <div class="mt-1 mb-2 templates">\n            <span class="tag tag-default" ng-click="setTemplate(\'http://www.w3.org/2000/01/rdf-schema#label\')">rdfs:label</span>\n            <span class="tag tag-default" ng-click="label.labelIri = \'http://www.w3.org/2004/02/skos/core#prefLabel\'; $(\'#wb-autocomplete-languages\').focus()">skos:prefLabel</span>\n            <span class="tag tag-default" ng-click="label.labelIri = \'http://xmlns.com/foaf/0.1/name\'; $(\'#wb-autocomplete-languages\').focus()">foaf:name</span>\n        </div>\n\n        <input id="wb-autocomplete-languages" type="text" ng-model="label.languages" class="form-control"\n               placeholder="{{\'add.label.enter.comma.separated\' | translate}}"/>\n    </form>\n</div>\n<div class="modal-footer">\n    <button type="button" class="btn btn-secondary" ng-click="cancel()">{{\'common.cancel.btn\' | translate}}</button>\n    <button id="wb-autocomplete-savegraph-submit" form="addLabelForm" class="btn btn-primary" ng-click="ok()" type="submit">{{\'common.ok.btn\' | translate}}</button>\n</div>\n\n\x3c!-- End save graph modal --\x3e\n\n';return __p}}}]);