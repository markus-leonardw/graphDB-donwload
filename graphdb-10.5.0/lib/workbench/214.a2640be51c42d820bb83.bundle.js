(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{300:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='\x3c!-- Start addRemoteMember.html --\x3e\n<div class="modal-header" ng-if="mode === \'remote\'">\n    <button ng-click="cancel();" class="close" aria-hidden="true" data-dismiss="dialog">\n    </button>\n    <h3 class="modal-title" ng-if="!model.editMode">{{\'add.remote.repo\' | translate}}</h3>\n    <h3 class="modal-title" ng-if="model.editMode">{{\'edit.remote.repo\' | translate}}</h3>\n</div>\n<div class="modal-header" ng-if="mode === \'local\'">\n    <button ng-click="cancel();" class="close" aria-hidden="true" data-dismiss="dialog">\n    </button>\n    <h3 class="modal-title">{{\'edit.local.repo\' | translate}}</h3>\n</div>\n<div class="modal-body" ng-if="mode === \'remote\'">\n    <form id="addFedXRepositoryForm" novalidate name="form">\n        <label> <input type="radio" name="model.store" ng-model="model.store" ng-disabled="model.editMode" id="graphdb-server" value="RemoteRepository">\n            {{\'gdb.rdf4j.server\' | translate}}</label>\n        <label class="padding-label"> <input type="radio" name="model.store" ng-model="model.store" ng-disabled="model.editMode" id="sparql-endpoint" value="SPARQLEndpoint">\n            {{\'generic.sparql.endpoint\' | translate}}</label>\n        <div ng-if="model.store === \'RemoteRepository\'">\n            <div class="form-group row">\n                <label for="server-url" class="col-lg-3 col-form-label">{{\'server.url\' | translate}}</label>\n                <div class="col-lg-8">\n                    <input name="model.repositoryServer" ng-model="model.repositoryServer" type="text" id="server-url" class="form-control" ng-disabled="model.editMode" ng-required=\'!model.sparqlEndpoint\'>\n                </div>\n            </div>\n            <div class="form-group row">\n                <label for="repository-id" class="col-lg-3 col-form-label">{{\'repo.id\' | translate}}</label>\n                <div class="col-lg-8">\n                    <input name="model.repositoryName" ng-model="model.repositoryName" type="text" id="repository-id" class="form-control" ng-disabled="model.editMode" ng-required=\'!model.sparqlEndpoint\'>\n                </div>\n            </div>\n        </div>\n        <div ng-if="model.store === \'SPARQLEndpoint\'">\n            <div class="form-group row">\n                <label for="url-endpoint" class="col-lg-3 col-form-label">{{\'endpoint.url\' | translate}}</label>\n                <div class="col-lg-8">\n                    <input name="model.sparqlEndpoint" ng-model="model.sparqlEndpoint" type="text" id="url-endpoint" class="form-control" ng-disabled="model.editMode" ng-required=\'!model.repositoryServer\' ng-required=\'!model.repositoryName\'>\n                </div>\n            </div>\n            <div class="form-group row indented-div">\n                <label for="ask-queries" class="col-lg-7 offset-xs-2">\n                    <input name = "model.supportsASKQueries" ng-model = "model.supportsASKQueries" type="checkbox" id="ask-queries" ng-true-value="\'true\'" ng-false-value="\'false\'">  {{\'supports.ask.queries\' | translate}}\n                </label>\n            </div>\n        </div>\n        <div id="auth-credentials">\n            <p> <strong>{{\'authentication.credentials\' | translate}}</strong> </p>\n            <div id="username" class="form-group row">\n                <label for="username-credentials" class=" col-lg-3 col-form-label">{{\'username\' | translate}}</label>\n                <div class="col-lg-8">\n                    <input type="text" id="username-credentials" class="form-control" placeholder="my-user" ng-model="model.username">\n                </div>\n            </div>\n            <div id="password" class="form-group row">\n                <label for="password-credentials" class="col-lg-3 col-form-label">{{\'pass\' | translate}}</label>\n                <div class="col-lg-8">\n                    <input type="password" id="password-credentials" class="form-control" placeholder="my-password" ng-model="model.password">\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<div class="modal-body" ng-if="mode === \'local\'">\n    <form id="addFedXRepositoryForm" novalidate name="form">\n        <div id="respect">\n            <input type="radio" name="model.respectRights" ng-model="model.respectRights" id="respect_access" value="true">\n            <label for="respect_access" style="font-size: 1.3em; display:inline">{{\'respect.repo.access.rights\' | translate}}</label>\n            <p class="indented-div">{{\'no.access.to.repo.users.warning\' | translate}}</p>\n        </div>\n        <div id="ignore">\n            <input type="radio" name="model.respectRights" ng-model="model.respectRights" id="ignore_access" value="false">\n            <label for="ignore_access" style="font-size: 1.3em; display:inline">{{\'ignore.repo.access.rights\' | translate}}</label>\n            <p class="indented-div">{{\'regardless.repo.rights.federated.view.warning\' | translate}}</p>\n        </div>\n    </form>\n</div>\n<div class="modal-footer">\n    <button type="submit" form="addFedXRepositoryForm" ng-click="ok();" class="btn btn-primary"\n            ng-disabled="form.$invalid" ng-if="!model.editMode"> {{\'common.add\' | translate}}\n    </button>\n    <button type="submit" form="addFedXRepositoryForm" ng-click="ok();" class="btn btn-primary"\n            ng-disabled="form.$invalid" ng-if="model.editMode"> {{\'edit\' | translate}}\n    </button>\n    <button type="button" ng-click="cancel();" class="btn btn-secondary" data-dismiss="modal">{{\'common.cancel.btn\' | translate}}</button>\n</div>\n';return __p}}}]);