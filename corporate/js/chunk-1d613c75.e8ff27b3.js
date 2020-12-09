(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d613c75"],{"0d28":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-container"}},[r("Report"+t.dataLayout,{key:Date.now(),tag:"component",attrs:{parent:this}})],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nv-card",[r("vs-table",{staticClass:"mb-base",attrs:{data:t.parent.reportTableData,noDataText:t.parent.reportTableNoDataText,sst:!0,search:""},on:{search:t.parent.filterReportTable,sort:t.parent.orderReportTable},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,function(e,o){return r("vs-tr",{key:o,attrs:{data:e}},[r("vs-td",{attrs:{data:a[o].reportName}},[r("router-link",{attrs:{to:{name:"RunReport",params:{id:a[o].reportId}}}},[t._v(t._s(a[o].reportName))])],1),r("vs-td",{attrs:{data:a[o].categoryName}},[t._v("\n          "+t._s(t._f("placeholder")(a[o].categoryName,"-"))+"\n        ")])],1)})}}])},[r("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[r("div",{staticClass:"flex flex-wrap-reverse items-center"},[r("vs-button",{staticClass:"p-3",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.parent.reportTableBusy},on:{click:t.parent.refreshReportTable}},[t._v(t._s(t.$t("REFRESH")))])],1),r("div",{staticClass:"flex justify-end mr-4"},[r("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[r("span",{staticClass:"mx-2"},[t._v(t._s(t.parent.reportTablePagingInfo))]),r("vs-dropdown",{staticClass:"cursor-pointer mr-2",attrs:{"vs-trigger-click":""}},[r("span",{staticClass:"far fa-angle-down text-primary"}),r("vs-dropdown-menu",t._l(t.parent.tablePageOptions,function(e,a){return r("vs-dropdown-item",{key:a,on:{click:function(r){t.parent.reportTablePerPage=e}}},[r("span",[t._v(t._s(e))])])}),1)],1)],1)])]),r("template",{slot:"thead"},[r("vs-th",{attrs:{"sort-key":"reportName"}},[t._v("\n        "+t._s(this.$t("REPORT_NAME"))+"\n      ")]),r("vs-th",{attrs:{"sort-key":"categoryName"}},[t._v("\n        "+t._s(this.$t("CATEGORY"))+"\n      ")])],1)],2),r("vs-pagination",{attrs:{total:t.parent.reportTableTotalPages,max:t.parent.maxPaginationItems},model:{value:t.parent.reportTableCurrentPage,callback:function(e){t.$set(t.parent,"reportTableCurrentPage",e)},expression:"parent.reportTableCurrentPage"}})],1)},n=[],i=r("9ed1"),l={name:"report-list-layout",mixins:[i["a"]],props:{parent:{type:Object,required:!0}}},p=l,c=r("2877"),u=Object(c["a"])(p,s,n,!1,null,null,null),d=u.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nv-card",{staticClass:"mb-base"},[r("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between"},[r("div",{staticClass:"flex flex-wrap-reverse items-center"},[r("vs-button",{staticClass:"p-3",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.parent.reportTableBusy},on:{click:t.parent.refreshReportTable}},[t._v(t._s(t.$t("REFRESH")))])],1),r("div",{staticClass:"flex justify-end"},[r("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[r("span",{staticClass:"mx-2"},[t._v(t._s(t.parent.reportTablePagingInfo))])])])])]),t._l(t.reportCategories,function(e,a){return r("div",{key:a,staticClass:"nv-row"},[r("div",{staticClass:"nv-col w-full mb-base"},[r("h3",[t._v(t._s(a))])]),t._l(e,function(e,a){return r("div",{key:a,staticClass:"nv-col w-full sm:w-1/2"},[r("nv-card",{staticClass:"mb-base"},[r("div",{staticClass:"mb-4"},[r("h4",[e.iconClass?r("i",{class:[e.iconClass,"mr-1"]}):t._e(),t._v(" "+t._s(t._f("placeholder")(e.reportName,"-")))])]),r("div",[e.browseNotes?r("div",{staticClass:"nv-row mb-4"},[r("div",{staticClass:"nv-col w-full"},[r("div",{staticClass:"text-grey-dark"},[t._v(t._s(e.browseNotes))])])]):t._e()]),r("vs-divider"),r("div",{staticClass:"flex justify-end"},[r("vs-button",{staticClass:"p-3 ml-4",attrs:{type:"filled",iconPack:"far",icon:"fa-play"},on:{click:function(r){return t.reportRun(e.reportId)}}},[t._v(t._s(t.$t("RUN")))])],1)],1)],1)})],2)}),r("vs-pagination",{attrs:{total:t.parent.reportTableTotalPages,max:t.parent.maxPaginationItems},model:{value:t.parent.reportTableCurrentPage,callback:function(e){t.$set(t.parent,"reportTableCurrentPage",e)},expression:"parent.reportTableCurrentPage"}})],2)},f=[],T={name:"report-card-layout",mixins:[i["a"]],props:{parent:{type:Object,required:!0}},methods:{reportRun:function(t){this.$router.push({name:"RunReport",params:{id:t}})}},computed:{reportCategories:function(){for(var t={},e=0;e<this.parent.reportTableData.length;e++){var r=this.parent.reportTableData[e].categoryName;t.hasOwnProperty(r)?t[r].push(this.parent.reportTableData[e]):t[r]=[this.parent.reportTableData[e]]}return t}}},m=T,h=Object(c["a"])(m,b,f,!1,null,null,null),v=h.exports,g=r("4013"),y=r("93b8"),C=r("b664"),_={mixins:[C["a"],y["a"]],props:{defaultReportTableFilter:{type:String,default:null},defaultReportTableOrderBy:{type:String,default:null}},data:function(){return{reportTableData:[],reportTableFilterTimer:null,reportTableFilter:this.defaultReportTableFilter,reportTableOrderBy:this.defaultReportTableOrderBy,reportTableContainer:"loading-container",reportTableBusy:!1,reportTableTotalRows:0,reportTableCurrentPage:1,reportTablePerPage:10}},computed:{reportTableNoDataText:function(){return this.reportTableBusy?this.$t("LOADING")+" ...":this.$t("NO_DATA_FOUND")},reportTableTotalPages:function(){return Math.ceil(this.reportTableTotalRows/this.reportTablePerPage)},reportTablePagingInfo:function(){return this.pagingInfo(this.reportTableCurrentPage,this.reportTablePerPage,this.reportTableTotalRows)}},methods:{loadReportTableData:function(t){var e=this;this.reportTableBusy=!0,this.reportTableContainer=t||this.reportTableContainer,this.startLoading(this.reportTableContainer),g["a"].reportApps({pageIndex:this.reportTableCurrentPage-1,pageSize:this.reportTablePerPage,filter:this.reportTableFilter,orderByField:this.reportTableOrderBy,appId:this.$store.getters.appId,runnableOnly:!0}).then(function(t){e.stopLoading(e.reportTableContainer),e.reportTableBusy=!1,e.reportTableTotalRows=t.data.totalRows,e.reportTableData=t.data.reportAppList||[]}).catch(function(t){e.stopLoading(e.reportTableContainer),e.reportTableBusy=!1,e.$emit("show-alert","danger",t.response.data.errors)})},refreshReportTable:function(){this.loadReportTableData()},filterReportTable:function(t){var e=this;this.reportTableFilter!==t?(clearTimeout(this.reportTableFilterTimer),this.reportTableFilterTimer=setTimeout(function(){e.reportTableFilter=t,e.loadReportTableData()},"750")):clearTimeout(this.reportTableFilterTimer)},orderReportTable:function(t,e){this.reportTableOrderBy=(e?"":"-")+t,this.loadReportTableData()}},watch:{reportTableCurrentPage:function(){this.refreshReportTable()},reportTablePerPage:function(){this.refreshReportTable()}}},w=_,R={name:"report-browse",mixins:[w],data:function(){return{dataLayout:"ListLayout"}},components:{ReportListLayout:d,ReportCardLayout:v},mounted:function(){this.loadReportTableData()},created:function(){var t=this;this.$eventHub.$on("toolClicked",function(e){t.dataLayout=e})},beforeDestroy:function(){var t=this;this.$eventHub.$off("toolClicked",function(e){t.dataLayout=e})}},x=R,P=Object(c["a"])(x,a,o,!1,null,null,null);e["default"]=P.exports},4013:function(t,e,r){"use strict";var a=r("36ad");e["a"]={reportApps:function(t){return Object(a["a"])().get("/s1/connect/report/app",{params:t})},reportParameters:function(t){return Object(a["a"])().get("/s1/connect/report/".concat(t.reportId,"/parameter"),{params:t})},reportPrice:function(t){return Object(a["a"])().get("/s1/connect/report/".concat(t.reportId,"/price"),{params:t})},runReport:function(t){return Object(a["a"])().post("/s1/connect/report/".concat(t.reportId,"/run"),t)},reportWorkflowInstances:function(t){return Object(a["a"])().get("/s1/connect/report/workflow/instance",{params:t})}}},"9ed1":function(t,e,r){"use strict";var a={methods:{negativeNumberStyle:function(t){return 0===t?"":t<0?"text-danger":"text-success"},positiveNumberStyle:function(t){return 0===t?"":t>0?"text-danger":"text-success"}}};e["a"]=a}}]);
//# sourceMappingURL=chunk-1d613c75.e8ff27b3.js.map