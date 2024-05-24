(window.webpackJsonp=window.webpackJsonp||[]).push([[60,139],{118:function(t,e,a){"use strict";a.r(e),a.d(e,"CpuLoadChart",(function(){return s}));var r=a(56);class s extends r.ChartData{constructor(t){super(t,!1,!1)}chartSetup(t){const e={yAxis:{axisLabel:{formatter:t=>t+"%"},min:0,max:function(t){return Math.round(t.max>50?100:2*t.max)}},tooltip:{valueFormatter:function(t){return t+"%"}}};_.merge(t,e)}createDataHolder(){return[{name:this.translateService.instant("resource.system.cpu_load.label"),type:"line",smoothMonotone:"x",showSymbol:!1,smooth:!0,data:[]}]}translateLabels(){const[t]=this.dataHolder;t.name=this.translateService.instant("resource.system.cpu_load.label")}addNewData(t,e,a){t[0].data.push({value:[e,this.formatValue(a.cpuLoad)]})}formatValue(t){return+parseFloat(t).toFixed(4)}updateRange(t){}}},56:function(t,e,a){"use strict";a.r(e),a.d(e,"ChartData",(function(){return s}));var r=a(310);class s{static get DEFAULT_MULTIPLIER(){return 1.2}static get MAXIMUM_DIVISIONS(){return 10}static get COLORS(){return[s.cssVar("--secondary-color"),s.cssVar("--primary-color"),s.cssVar("--tertiary-color"),s.cssVar("--gray-color")]}static get AREA_BAR_OPACITY(){return.5}static cssVar(t){return getComputedStyle(document.documentElement).getPropertyValue(t)}constructor(t,e,a,r){this.filter=r,this.disableRangeUpdate=e,this.disableOldDataRemoval=a,this.translateService=t,this.refreshHandlers=[],this.initialChartSetup()}registerRefreshHandler(t){this.refreshHandlers.push(t)}unregisterRefreshHandler(t){const e=this.refreshHandlers.indexOf(t);e>-1&&this.refreshHandlers.splice(e,1)}initialChartSetup(t=!0){this.range=150,this.chartOptions=this.getDefaultChartOptions(this.translateService),t&&(this.dataHolder=this.createDataHolder(),this.chartOptions.series=this.dataHolder,this.firstLoad=!0),this.chartSetup(this.chartOptions)}refresh(t=!1){t||(this.chartSetup(this.chartOptions),this.updateRange(this.dataHolder)),this.refreshHandlers.forEach(t=>t(this.chartOptions))}setSubTitle(t,e=0){this.chartOptions.title.show=!0;let a="";t.forEach((r,s)=>{if(Array.isArray(r.value)&&!r.value.length)return;const i=Array.isArray(r.value)?r.value.join("/"):r.value;a+=`{a|${r.label}}`,void 0!==i&&(a+=`{b|${i}}`),s+1<t.length&&(a+=e>0&&(s+1)%e==0?"\n":"{a| · }")}),this.chartOptions.title.text=a}chartSetup(t){}createDataHolder(){throw new Error("Must implement data holder creation")}addData(t,e){this.removeOldData(this.dataHolder,this.range),this.addNewData(this.dataHolder,t,e,this.isFirstLoad()),this.hasSelectedSeries()&&(this.updateRange(this.dataHolder),this.firstLoad&&(this.firstLoad=!1),this.refresh(!0))}hasSelectedSeries(){return!this.selectedSeries||Object.values(this.selectedSeries).some(t=>!0===t)}removeOldData(t,e){this.disableOldDataRemoval||t[0].data.length>e&&t.forEach(t=>t.data.shift())}addNewData(t,e,a,r){}setSelectedSeries(t){this.selectedSeries=t}updateRange(t,e){if(this.disableRangeUpdate)return;const[a]=s.calculateMaxChartValueAndDivisions(t,e,this.selectedSeries);this.chartOptions.yAxis.max=a}isFirstLoad(){return this.firstLoad}getDefaultChartOptions(){return{title:{show:!1,text:"",left:"center",textStyle:{overflow:"breakAll",rich:{a:{fontWeight:400,fontSize:14},b:{color:s.cssVar("--secondary-color"),fontWeight:400,fontSize:14}}}},animation:!1,color:s.COLORS,legend:{right:"15%",top:"6%",textStyle:{overflow:"truncate"},icon:"circle"},tooltip:{trigger:"axis",axisPointer:{animation:!1,label:{formatter:function(t){return r.b.format(t.value,"{HH}:{mm}:{ss}",!1)}}}},grid:{containLabel:!0,left:40},xAxis:{type:"time",splitLine:{show:!0},axisLabel:{hideOverlap:!0,padding:8,formatter:{hour:"{bold|{HH}:{mm}}",minute:"{bold|{HH}:{mm}}",second:"{HH}:{mm}:{ss}"},color:s.cssVar("--gray-color-dark"),rich:{bold:{fontWeight:500}}}},yAxis:{type:"value",splitLine:{show:!0},axisLabel:{color:s.cssVar("--gray-color-dark")},axisTick:{lineStyle:{type:"solid"}}},textStyle:{fontFamily:s.cssVar("--main-font"),fontWeight:400}}}static getMaxValueFromDataHolder(t,e){const a=t.filter(t=>!e||angular.isUndefined(e[t.name])||!0===e[t.name]).map(t=>s.getMaxValueForDataSeries(t));return Math.max(1,...a)}static getMaxValueForDataSeries(t){return Math.max(...t.data.map(t=>t.value[1]))}static calculateMaxChartValueAndDivisions(t,e,a){let r;r=Array.isArray(t)?s.getMaxValueFromDataHolder(t,a):s.getMaxValueForDataSeries(t);const i=Math.ceil(r*(e||s.DEFAULT_MULTIPLIER))||1;return[i,Math.ceil(i/s.MAXIMUM_DIVISIONS)]}static getIntegerRangeForValues(t,e,a){const[r,i]=s.calculateMaxChartValueAndDivisions(t,e,a);return[r,i]}static formatBytesValue(t,e,a){let r=t;e&&(r=s.getMaxValueFromDataHolder(e,a));const i=Math.floor(Math.log(r)/Math.log(1024));return`${(parseFloat(t)/Math.pow(1024,i)).toFixed(2)} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}`}formatNumber(t){if(!angular.isUndefined(t)&&this.filter)return this.filter("currency")(t,"",0)}}}}]);