(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{94:function(e,t){function a(){return{transformToTrig:function(e){let t="";const a={};for(let t=0;t<e.length;t++){const l=e[t];if(void 0===l.context?l.context="":l.context=_.trim(l.context),angular.isUndefined(a[l.context])){const e=[];e.push(l),a[l.context]=e}else a[l.context].push(l)}const l=Object.keys(a);for(let e=0;e<l.length;e++){const n=l[e];t+=""===n?"\n{":"\n<"+n+"> {";const w=a[n];for(let e=0;e<w.length;e++){const a=w[e];t+="\n\t<"+a.subject+"> <"+a.predicate+"> ";let l=a.object.value;"uri"===a.object.type?t+="<"+l+"> .":l.toString().includes('"')?("'"===l[0]&&(l='"'+l.slice(1,l.length)),l[l.length-1]&&(l=l.slice(0,-1)+'"'),t+="'''"+l+"'''"+(a.object.datatype?"^^<"+a.object.datatype+">":a.object.lang?"@"+a.object.lang:"")+" ."):t+='"""'+l+'"""'+(a.object.datatype?"^^<"+a.object.datatype+">":a.object.lang?"@"+a.object.lang:"")+" ."}t+="\n}"}return t},buildStatements:function(e,t){const a=[];if(!_.isEmpty(e.data)){const l=e.data[t],n=Object.keys(l);for(let e=0;e<n.length;e++){const w=n[e],o=l[w];for(let e=0;e<o.length;e++){const l=o[e];for(let e=0;e<l.graphs.length;e++){let n=l.graphs[e];"http://www.ontotext.com/explicit"===n&&(n=""),l.lang&&(l.datatype=""),l.datatype||(l.datatype=""),a.push({subject:t,predicate:w,object:{value:l.value,type:l.type,datatype:l.datatype,lang:l.lang},context:n})}}}}return a},getDatatypeOptions:function(){return[{value:"",label:"string"},{value:"http://www.w3.org/2001/XMLSchema#boolean",label:"boolean"},{value:"http://www.w3.org/2001/XMLSchema#decimal",label:"decimal"},{value:"http://www.w3.org/2001/XMLSchema#integer",label:"integer"},{value:"http://www.w3.org/2001/XMLSchema#double",label:"double"},{value:"http://www.w3.org/2001/XMLSchema#float",label:"float"},{value:"http://www.w3.org/2001/XMLSchema#date",label:"date"},{value:"http://www.w3.org/2001/XMLSchema#time",label:"time"},{value:"http://www.w3.org/2001/XMLSchema#dateTime",label:"date time"},{value:"http://www.w3.org/2001/XMLSchema#byte",label:"byte"},{value:"http://www.w3.org/2001/XMLSchema#short",label:"short"},{value:"http://www.w3.org/2001/XMLSchema#int",label:"int"},{value:"http://www.w3.org/2001/XMLSchema#long",label:"long"},{value:"http://www.w3.org/2001/XMLSchema#unsignedByte",label:"unsigned byte"},{value:"http://www.w3.org/2001/XMLSchema#unsignedShort",label:"unsigned short"},{value:"http://www.w3.org/2001/XMLSchema#unsignedInt",label:"unsigned int"},{value:"http://www.w3.org/2001/XMLSchema#unsignedLong",label:"unsigned long"},{value:"http://www.w3.org/2001/XMLSchema#positoveInteger",label:"positive integer"},{value:"http://www.w3.org/2001/XMLSchema#nonNegativeInteger",label:"non-negative integer"},{value:"http://www.w3.org/2001/XMLSchema#negativeInteger",label:"negative integer"},{value:"http://www.w3.org/2001/XMLSchema#nonPositiveInteger",label:"non-positive integer"},{value:"http://www.w3.org/2001/XMLSchema#gYear",label:"gYear"},{value:"http://www.w3.org/2001/XMLSchema#gMonth",label:"gMonth"},{value:"http://www.w3.org/2001/XMLSchema#gDay",label:"gDay"},{value:"http://www.w3.org/2001/XMLSchema#gYearMonth",label:"gYearMonth"},{value:"http://www.w3.org/2001/XMLSchema#gMonthDay",label:"gMonthDay"},{value:"http://www.w3.org/2001/XMLSchema#duration",label:"duration"},{value:"http://www.w3.org/2001/XMLSchema#hexBinary",label:"hex binary"},{value:"http://www.w3.org/2001/XMLSchema#base64Binary",label:"base64 binary"}]}}}angular.module("graphdb.framework.explore.services",[]).factory("StatementsService",a),a.$inject=[]}}]);