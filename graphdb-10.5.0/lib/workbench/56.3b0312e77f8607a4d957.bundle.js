(window.webpackJsonp=window.webpackJsonp||[]).push([[56,139],{123:function(t,e,a){"use strict";a.r(e),a.d(e,"ClusterHealthChart",(function(){return r}));var s=a(56);class r extends s.ChartData{constructor(t){super(t,!0,!1),this.nodesCount=0}createDataHolder(){const[t,e,a,s]=r.COLORS;return[{name:this.translateService.instant("resources.cluster_health.in_sync"),type:"line",stack:"nodes",showSymbol:!1,step:"middle",areaStyle:{},lineStyle:{width:0},color:t,data:[]},{name:this.translateService.instant("resources.cluster_health.syncing"),type:"line",stack:"nodes",showSymbol:!1,step:"middle",areaStyle:{},lineStyle:{width:0},color:a,data:[]},{name:this.translateService.instant("resources.cluster_health.out_sync"),type:"line",stack:"nodes",showSymbol:!1,step:"middle",areaStyle:{},lineStyle:{width:0},color:e,data:[]},{name:this.translateService.instant("resources.cluster_health.disconnected"),type:"line",stack:"nodes",showSymbol:!1,step:"middle",areaStyle:{},lineStyle:{width:0},color:s,data:[]}]}addNewData(t,e,a){const s=a.nodesStats;this.nodesCount=s.nodesInCluster;const[r,i,n,l]=t;this.latestData={nodesInSync:s.nodesInCluster,nodesOutOfSync:s.nodesOutOfSync,nodesDisconnected:s.nodesDisconnected,nodesSyncing:s.nodesSyncing,term:a.term,failureRecoveriesCount:a.failureRecoveriesCount,failedTransactionsCount:a.failedTransactionsCount},r.data.push({value:[e,s.nodesInSync]}),n.data.push({value:[e,s.nodesOutOfSync]}),l.data.push({value:[e,s.nodesDisconnected]}),i.data.push({value:[e,s.nodesSyncing]}),this.configureSubtitle()}translateLabels(){const[t,e,a,s]=this.dataHolder;t.name=this.translateService.instant("resources.cluster_health.in_sync"),e.name=this.translateService.instant("resources.cluster_health.syncing"),a.name=this.translateService.instant("resources.cluster_health.out_sync"),s.name=this.translateService.instant("resources.cluster_health.disconnected"),this.configureSubtitle()}updateRange(t,e){this.chartOptions.yAxis.max=this.nodesCount,this.chartOptions.yAxis.splitNumber=this.nodesCount}configureSubtitle(){const t=[{label:this.translateService.instant("resource.cluster_health.leader_elections"),value:this.latestData.term},{label:this.translateService.instant("resource.cluster_health.recoveries"),value:this.latestData.failureRecoveriesCount},{label:this.translateService.instant("resource.cluster_health.failed_transactions"),value:this.latestData.failedTransactionsCount}];this.setSubTitle(t)}}},56:function(t,e,a){"use strict";a.r(e),a.d(e,"ChartData",(function(){return r}));var s=a(310);class r{static get DEFAULT_MULTIPLIER(){return 1.2}static get MAXIMUM_DIVISIONS(){return 10}static get COLORS(){return[r.cssVar("--secondary-color"),r.cssVar("--primary-color"),r.cssVar("--tertiary-color"),r.cssVar("--gray-color")]}static get AREA_BAR_OPACITY(){return.5}static cssVar(t){return getComputedStyle(document.documentElement).getPropertyValue(t)}constructor(t,e,a,s){this.filter=s,this.disableRangeUpdate=e,this.disableOldDataRemoval=a,this.translateService=t,this.refreshHandlers=[],this.initialChartSetup()}registerRefreshHandler(t){this.refreshHandlers.push(t)}unregisterRefreshHandler(t){const e=this.refreshHandlers.indexOf(t);e>-1&&this.refreshHandlers.splice(e,1)}initialChartSetup(t=!0){this.range=150,this.chartOptions=this.getDefaultChartOptions(this.translateService),t&&(this.dataHolder=this.createDataHolder(),this.chartOptions.series=this.dataHolder,this.firstLoad=!0),this.chartSetup(this.chartOptions)}refresh(t=!1){t||(this.chartSetup(this.chartOptions),this.updateRange(this.dataHolder)),this.refreshHandlers.forEach(t=>t(this.chartOptions))}setSubTitle(t,e=0){this.chartOptions.title.show=!0;let a="";t.forEach((s,r)=>{if(Array.isArray(s.value)&&!s.value.length)return;const i=Array.isArray(s.value)?s.value.join("/"):s.value;a+=`{a|${s.label}}`,void 0!==i&&(a+=`{b|${i}}`),r+1<t.length&&(a+=e>0&&(r+1)%e==0?"\n":"{a| · }")}),this.chartOptions.title.text=a}chartSetup(t){}createDataHolder(){throw new Error("Must implement data holder creation")}addData(t,e){this.removeOldData(this.dataHolder,this.range),this.addNewData(this.dataHolder,t,e,this.isFirstLoad()),this.hasSelectedSeries()&&(this.updateRange(this.dataHolder),this.firstLoad&&(this.firstLoad=!1),this.refresh(!0))}hasSelectedSeries(){return!this.selectedSeries||Object.values(this.selectedSeries).some(t=>!0===t)}removeOldData(t,e){this.disableOldDataRemoval||t[0].data.length>e&&t.forEach(t=>t.data.shift())}addNewData(t,e,a,s){}setSelectedSeries(t){this.selectedSeries=t}updateRange(t,e){if(this.disableRangeUpdate)return;const[a]=r.calculateMaxChartValueAndDivisions(t,e,this.selectedSeries);this.chartOptions.yAxis.max=a}isFirstLoad(){return this.firstLoad}getDefaultChartOptions(){return{title:{show:!1,text:"",left:"center",textStyle:{overflow:"breakAll",rich:{a:{fontWeight:400,fontSize:14},b:{color:r.cssVar("--secondary-color"),fontWeight:400,fontSize:14}}}},animation:!1,color:r.COLORS,legend:{right:"15%",top:"6%",textStyle:{overflow:"truncate"},icon:"circle"},tooltip:{trigger:"axis",axisPointer:{animation:!1,label:{formatter:function(t){return s.b.format(t.value,"{HH}:{mm}:{ss}",!1)}}}},grid:{containLabel:!0,left:40},xAxis:{type:"time",splitLine:{show:!0},axisLabel:{hideOverlap:!0,padding:8,formatter:{hour:"{bold|{HH}:{mm}}",minute:"{bold|{HH}:{mm}}",second:"{HH}:{mm}:{ss}"},color:r.cssVar("--gray-color-dark"),rich:{bold:{fontWeight:500}}}},yAxis:{type:"value",splitLine:{show:!0},axisLabel:{color:r.cssVar("--gray-color-dark")},axisTick:{lineStyle:{type:"solid"}}},textStyle:{fontFamily:r.cssVar("--main-font"),fontWeight:400}}}static getMaxValueFromDataHolder(t,e){const a=t.filter(t=>!e||angular.isUndefined(e[t.name])||!0===e[t.name]).map(t=>r.getMaxValueForDataSeries(t));return Math.max(1,...a)}static getMaxValueForDataSeries(t){return Math.max(...t.data.map(t=>t.value[1]))}static calculateMaxChartValueAndDivisions(t,e,a){let s;s=Array.isArray(t)?r.getMaxValueFromDataHolder(t,a):r.getMaxValueForDataSeries(t);const i=Math.ceil(s*(e||r.DEFAULT_MULTIPLIER))||1;return[i,Math.ceil(i/r.MAXIMUM_DIVISIONS)]}static getIntegerRangeForValues(t,e,a){const[s,i]=r.calculateMaxChartValueAndDivisions(t,e,a);return[s,i]}static formatBytesValue(t,e,a){let s=t;e&&(s=r.getMaxValueFromDataHolder(e,a));const i=Math.floor(Math.log(s)/Math.log(1024));return`${(parseFloat(t)/Math.pow(1024,i)).toFixed(2)} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}`}formatNumber(t){if(!angular.isUndefined(t)&&this.filter)return this.filter("currency")(t,"",0)}}}}]);