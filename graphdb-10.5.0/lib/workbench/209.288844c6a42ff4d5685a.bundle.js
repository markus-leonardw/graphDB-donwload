(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{293:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<h1>\n    {{title}}\n</h1>\n<div core-errors></div>\n<div ng-show="getActiveRepository()">\n    <table class="table table-striped" aria-describedby="Role mappings table">\n        <thead>\n        <th id="mappingsColumn"><strong>{{\'security.mapping.header\' | translate}}</strong></th>\n        <th ng-repeat="role in roles" id="rolesColumn">\n            <strong>{{role}}</strong>\n        </th>\n        </thead>\n        <tbody>\n        <tr ng-repeat="mapping in mappings">\n            <td><span>{{mapping}}</span></td>\n            <td ng-repeat="role in roles">\n                <span ng-style="{\'color\': roleMappings[role][mapping] ? \'green\' : \'red\'}">\n                {{roleMappings[role][mapping]}}</span> <span role="button" ng-click="debugMapping(role, mapping)" class="menu-item-icon icon-help"></span></td>\n        </tr>\n        </tbody>\n    </table>\n\n</div>\n';return __p}}}]);