(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2af04652"],{"0035":function(t,a,e){"use strict";var s=e("9ff0"),n=e("93b8"),r=e("b664"),i={mixins:[n["a"],r["a"]],props:{defaultTaskTableFilter:{type:String,default:null},defaultTaskTableOrderBy:{type:String,default:null},instanceId:{type:String,default:null},workflowTypeEnumId:{type:String,default:null},taskTypeEnumId:{type:String,default:null}},data:function(){return{instanceStatusId:null,taskTableData:[],taskTableFilterTimer:null,taskTableFilter:this.defaultTaskTableFilter,taskTableOrderBy:this.defaultTaskTableOrderBy,taskTableContainer:"loading-container",taskTableBusy:!1,taskTableTotalRows:0,taskTableCurrentPage:1,taskTablePerPage:10}},computed:{taskTableNoDataText:function(){return this.taskTableBusy?this.$t("LOADING")+" ...":this.$t("NO_DATA_FOUND")},taskTableTotalPages:function(){return Math.ceil(this.taskTableTotalRows/this.taskTablePerPage)},taskTablePagingInfo:function(){return this.pagingInfo(this.taskTableCurrentPage,this.taskTablePerPage,this.taskTableTotalRows)}},methods:{loadTaskTableData:function(t){var a=this;this.taskTableBusy=!0,this.taskTableContainer=t||this.taskTableContainer,this.startLoading(this.taskTableContainer),s["a"].workflowTasks({pageIndex:this.taskTableCurrentPage-1,pageSize:this.taskTablePerPage,filter:this.taskTableFilter,orderByField:this.taskTableOrderBy,workflowTypeEnumId:this.workflowTypeEnumId,instanceId:this.instanceId,instanceStatusId:this.instanceStatusId,taskTypeEnumId:this.taskTypeEnumId,assignedUserId:a.$store.state.userId}).then(function(t){a.stopLoading(a.taskTableContainer),a.taskTableBusy=!1,a.taskTableTotalRows=t.data.totalRows,a.taskTableData=t.data.taskList||[]}).catch(function(t){a.stopLoading(a.taskTableContainer),a.taskTableBusy=!1,a.$emit("show-alert","danger",t.response.data.errors)})},refreshTaskTable:function(){this.loadTaskTableData()},filterTaskTable:function(t){var a=this;this.taskTableFilter!==t?(clearTimeout(this.taskTableFilterTimer),this.taskTableFilterTimer=setTimeout(function(){a.taskTableFilter=t,a.loadTaskTableData()},"750")):clearTimeout(this.taskTableFilterTimer)},orderTaskTable:function(t,a){this.taskTableOrderBy=(a?"":"-")+t,this.loadTaskTableData()}},watch:{taskTableCurrentPage:function(){this.refreshTaskTable()},taskTablePerPage:function(){this.refreshTaskTable()},taskTypeEnumId:function(){this.refreshTaskTable()}}};a["a"]=i},"314b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nv-card",[e("vs-table",{staticClass:"mb-base",attrs:{data:t.taskTableData,noDataText:t.taskTableNoDataText,sst:!0,search:""},on:{search:t.filterTaskTable,sort:t.orderTaskTable},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.data;return t._l(s,function(a,n){return e("vs-tr",{key:n,attrs:{data:a}},[e("vs-td",{attrs:{data:s[n].taskId}},[e("router-link",{attrs:{to:{name:"ViewWorkflowTask",params:{id:s[n].taskId}}}},[t._v(t._s(s[n].taskId))])],1),e("vs-td",{attrs:{data:s[n].workflowName}},[t._v("\n          "+t._s(t._f("placeholder")(s[n].workflowName,"-"))+"\n        ")]),e("vs-td",{attrs:{data:s[n].taskTypeDescription}},[t._v("\n          "+t._s(t._f("placeholder")(s[n].taskTypeDescription,"-"))+"\n        ")]),e("vs-td",{attrs:{data:s[n].actionTypeDescription}},[t._v("\n          "+t._s(t._f("placeholder")(s[n].actionTypeDescription,"-"))+"\n        ")]),e("vs-td",{attrs:{data:s[n].statusDescription}},[t._v("\n          "+t._s(t._f("placeholder")(s[n].statusDescription,"-"))+"\n        ")]),e("vs-td",{attrs:{data:s[n].instanceTimeoutDate}},[t._v("\n          "+t._s(t._f("formatUnixDate")(s[n].instanceTimeoutDate))+"\n        ")]),e("vs-td",{attrs:{data:s[n].creationDate}},[t._v("\n          "+t._s(t._f("formatUnixDate")(s[n].creationDate))+"\n        ")])],1)})}}])},[e("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"flex flex-wrap-reverse items-center"},[e("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.taskTableBusy},on:{click:t.refreshTaskTable}},[t._v(t._s(t.$t("REFRESH")))])],1),e("div",{staticClass:"flex justify-end mr-4"},[e("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[e("span",{staticClass:"mx-2"},[t._v(t._s(t.taskTablePagingInfo))]),e("vs-dropdown",{staticClass:"cursor-pointer mr-2",attrs:{"vs-trigger-click":""}},[e("span",{staticClass:"far fa-angle-down text-primary"}),e("vs-dropdown-menu",t._l(t.tablePageOptions,function(a,s){return e("vs-dropdown-item",{key:s,on:{click:function(e){t.taskTablePerPage=a}}},[e("span",[t._v(t._s(a))])])}),1)],1)],1)])]),e("template",{slot:"thead"},[e("vs-th",{attrs:{"sort-key":"taskId"}},[t._v("\n        "+t._s(this.$t("ID"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"workflowName"}},[t._v("\n        "+t._s(this.$t("WORKFLOW_NAME"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"taskTypeDescription"}},[t._v("\n        "+t._s(this.$t("TASK_TYPE"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"actionTypeDescription"}},[t._v("\n        "+t._s(this.$t("ACTION_TYPE"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"statusDescription"}},[t._v("\n        "+t._s(this.$t("STATUS"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"instanceTimeoutDate"}},[t._v("\n        "+t._s(this.$t("DUE_DATE"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"creationDate"}},[t._v("\n        "+t._s(this.$t("CREATION_DATE"))+"\n      ")])],1)],2),e("vs-pagination",{attrs:{total:t.taskTableTotalPages,max:t.maxPaginationItems},model:{value:t.taskTableCurrentPage,callback:function(a){t.taskTableCurrentPage=a},expression:"taskTableCurrentPage"}})],1)},n=[],r=e("0035"),i={name:"workflow-task-browse",mixins:[r["a"]],mounted:function(){this.instanceStatusId="WF_INST_ACTIVE",this.loadTaskTableData()}},l=i,o=e("2877"),T=Object(o["a"])(l,s,n,!1,null,null,null);a["default"]=T.exports},"9ff0":function(t,a,e){"use strict";var s=e("36ad");a["a"]={workflowTaskStats:function(t){return Object(s["a"])().get("/s1/connect/workflow/task/stats",{params:t})},workflowTasks:function(t){return Object(s["a"])().get("/s1/connect/workflow/task",{params:t})},modifyWorkflowTask:function(t){return Object(s["a"])().patch("/s1/connect/workflow/task",t)},workflowInstances:function(t){return Object(s["a"])().get("/s1/connect/workflow/instance",{params:t})}}}}]);
//# sourceMappingURL=chunk-2af04652.a115ffc2.js.map