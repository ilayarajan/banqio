(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b0d7c51"],{"68df":function(o,t,r){"use strict";var e=r("9ff0"),a=r("93b8"),l=r("b664"),s={mixins:[a["a"],l["a"]],props:{defaultWorkflowTableFilter:{type:String,default:null},defaultWorkflowTableOrderBy:{type:String,default:null},ignoreWorkflowId:{type:String,default:null},workflowTypeId:{type:String,default:null},disabled:{type:String,default:null}},data:function(){return{workflowTableData:[],workflowTableFilterTimer:null,workflowTableFilter:this.defaultWorkflowTableFilter,workflowTableOrderBy:this.defaultWorkflowTableOrderBy,workflowTableContainer:"loading-container",workflowTableBusy:!1,workflowTableTotalRows:0,workflowTableCurrentPage:1,workflowTablePerPage:10}},computed:{workflowTableNoDataText:function(){return this.workflowTableBusy?this.$t("LOADING")+" ...":this.$t("NO_DATA_FOUND")},workflowTableTotalPages:function(){return Math.ceil(this.workflowTableTotalRows/this.workflowTablePerPage)},workflowTablePagingInfo:function(){return this.pagingInfo(this.workflowTableCurrentPage,this.workflowTablePerPage,this.workflowTableTotalRows)}},methods:{loadWorkflowTableData:function(o){var t=this;this.workflowTableBusy=!0,this.workflowTableContainer=o||this.workflowTableContainer,this.startLoading(this.workflowTableContainer),e["a"].workflows({pageIndex:this.workflowTableCurrentPage-1,pageSize:this.workflowTablePerPage,filter:this.workflowTableFilter,orderByField:this.workflowTableOrderBy,ignoreWorkflowId:this.ignoreWorkflowId,workflowTypeId:this.workflowTypeId,disabled:this.disabled}).then(function(o){t.stopLoading(t.workflowTableContainer),t.workflowTableBusy=!1,t.workflowTableTotalRows=o.data.totalRows,t.workflowTableData=o.data.workflowList||[]}).catch(function(o){t.stopLoading(t.workflowTableContainer),t.workflowTableBusy=!1,t.$emit("show-alert","danger",o.response.data.errors)})},refreshWorkflowTable:function(){this.loadWorkflowTableData()},filterWorkflowTable:function(o){var t=this;this.workflowTableFilter!==o?(clearTimeout(this.workflowTableFilterTimer),this.workflowTableFilterTimer=setTimeout(function(){t.workflowTableFilter=o,t.loadWorkflowTableData()},"750")):clearTimeout(this.workflowTableFilterTimer)},orderWorkflowTable:function(o,t){this.workflowTableOrderBy=(t?"":"-")+o,this.loadWorkflowTableData()}},watch:{workflowTableCurrentPage:function(){this.refreshWorkflowTable()},workflowTablePerPage:function(){this.refreshWorkflowTable()},ignoreWorkflowId:function(){this.refreshWorkflowTable()},workflowTypeId:function(){this.refreshWorkflowTable()}}};t["a"]=s},"9a2e":function(o,t,r){"use strict";var e={methods:{disabledClass:function(o){return"Y"===o.disabled?"line-through":""}}};t["a"]=e},"9ff0":function(o,t,r){"use strict";var e=r("36ad");t["a"]={workflows:function(o){return Object(e["a"])().get("/s1/commons/workflow",{params:o})},workflowStats:function(o){return Object(e["a"])().get("/s1/commons/workflow/stats",{params:o})},createWorkflow:function(o){return Object(e["a"])().post("/s1/commons/workflow",o)},modifyWorkflow:function(o){return Object(e["a"])().patch("/s1/commons/workflow",o)},approveWorkflow:function(o){return Object(e["a"])().post("/s1/commons/workflow/".concat(o.workflowId,"/approve"),o)},duplicateWorkflow:function(o){return Object(e["a"])().post("/s1/commons/workflow/".concat(o.workflowId,"/duplicate"),o)},designWorkflow:function(o){return Object(e["a"])().post("/s1/commons/workflow/".concat(o.workflowId,"/design"),o)},draftWorkflow:function(o){return Object(e["a"])().post("/s1/commons/workflow/".concat(o.workflowId,"/draft"),o)},workflowVariables:function(o){return Object(e["a"])().get("/s1/commons/workflow/".concat(o.workflowId,"/variable"),{params:o})},createWorkflowVariable:function(o){return Object(e["a"])().post("/s1/commons/workflow/".concat(o.workflowId,"/variable"),o)},workflowInitiators:function(o){return Object(e["a"])().get("/s1/commons/workflow/".concat(o.workflowId,"/initiator"),{params:o})},createWorkflowInitiator:function(o){return Object(e["a"])().post("/s1/commons/workflow/".concat(o.workflowId,"/initiator"),o)},expireWorkflowInitiator:function(o){return Object(e["a"])().delete("/s1/commons/workflow/".concat(o.workflowId,"/initiator"),{params:o})},workflowTasks:function(o){return Object(e["a"])().get("/s1/commons/workflow/task",{params:o})},countWorkflowTasks:function(o){return Object(e["a"])().get("/s1/commons/workflow/task/count",{params:o})},modifyWorkflowTask:function(o){return Object(e["a"])().patch("/s1/commons/workflow/task",o)},workflowTypes:function(o){return Object(e["a"])().get("/s1/commons/workflow/type",{params:o})},workflowTypeServices:function(o){return Object(e["a"])().get("/s1/commons/workflow/type/service",{params:o})},workflowTypeAlertTemplates:function(o){return Object(e["a"])().get("/s1/commons/workflow/type/alertTemplate",{params:o})},draftWorkflows:function(o){return Object(e["a"])().get("/s1/commons/workflow/".concat(o.workflowId,"/draft"),{params:o})},designDraftWorkflow:function(o){return Object(e["a"])().post("/s1/commons/workflow/".concat(o.workflowId,"/design/draft"),o)},deleteDraftWorkflow:function(o){return Object(e["a"])().delete("/s1/commons/workflow/".concat(o.workflowId,"/design/draft"),{params:o})}}},c8b3:function(o,t,r){"use strict";r.r(t);var e=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-container"}},[r("nv-card",[r("vs-table",{staticClass:"mb-base",attrs:{data:o.workflowTableData,noDataText:o.workflowTableNoDataText,sst:!0,search:""},on:{search:o.filterWorkflowTable,sort:o.orderWorkflowTable},scopedSlots:o._u([{key:"default",fn:function(t){var e=t.data;return o._l(e,function(t,a){return r("vs-tr",{key:a,attrs:{data:t}},[r("vs-td",{attrs:{data:e[a].workflowId}},[r("router-link",{attrs:{to:{name:"ViewWorkflow",params:{id:e[a].workflowId}}}},[o._v(o._s(e[a].workflowId))])],1),r("vs-td",{attrs:{data:e[a].workflowName}},[r("span",{class:o.disabledClass(e[a])},[o._v(o._s(e[a].workflowName))])]),r("vs-td",{attrs:{data:e[a].workflowTypeName}},[o._v("\n            "+o._s(e[a].workflowTypeName)+"\n          ")])],1)})}}])},[r("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[r("div",{staticClass:"flex flex-wrap-reverse items-center"},[o.$acl.check("isNucleusAll")?r("vs-button",{staticClass:"p-3 mr-4",attrs:{color:"primary",type:"filled",icon:"fa-plus","icon-pack":"far"},on:{click:o.add}},[o._v(o._s(o.$t("ADD")))]):o._e(),r("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:o.workflowTableBusy},on:{click:o.refreshWorkflowTable}},[o._v(o._s(o.$t("REFRESH")))])],1),r("div",{staticClass:"flex justify-end mr-4"},[r("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[r("span",{staticClass:"mx-2"},[o._v(o._s(o.workflowTablePagingInfo))]),r("vs-dropdown",{staticClass:"cursor-pointer mr-2",attrs:{"vs-trigger-click":""}},[r("span",{staticClass:"far fa-angle-down text-primary"}),r("vs-dropdown-menu",o._l(o.tablePageOptions,function(t,e){return r("vs-dropdown-item",{key:e,on:{click:function(r){o.workflowTablePerPage=t}}},[r("span",[o._v(o._s(t))])])}),1)],1)],1)])]),r("template",{slot:"thead"},[r("vs-th",{attrs:{"sort-key":"workflowId"}},[o._v("\n          "+o._s(this.$t("ID"))+"\n        ")]),r("vs-th",{attrs:{"sort-key":"workflowName"}},[o._v("\n          "+o._s(this.$t("WORKFLOW_NAME"))+"\n        ")]),r("vs-th",{attrs:{"sort-key":"workflowTypeName"}},[o._v("\n          "+o._s(this.$t("WORKFLOW_TYPE"))+"\n        ")])],1)],2),r("vs-pagination",{attrs:{total:o.workflowTableTotalPages,max:o.maxPaginationItems},model:{value:o.workflowTableCurrentPage,callback:function(t){o.workflowTableCurrentPage=t},expression:"workflowTableCurrentPage"}})],1)],1)},a=[],l=r("9a2e"),s=r("68df"),n={name:"workflow-browse",mixins:[l["a"],s["a"]],data:function(){return{workflowTableFilter:this.$route.params.filter||null}},methods:{add:function(){this.$router.push({name:"CreateWorkflow"})}},mounted:function(){this.loadWorkflowTableData()}},w=n,f=r("2877"),i=Object(f["a"])(w,e,a,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-7b0d7c51.24346a58.js.map