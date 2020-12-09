(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-903383c6"],{4013:function(t,a,s){"use strict";var n=s("36ad");a["a"]={reportApps:function(t){return Object(n["a"])().get("/s1/connect/report/app",{params:t})},reportParameters:function(t){return Object(n["a"])().get("/s1/connect/report/".concat(t.reportId,"/parameter"),{params:t})},reportPrice:function(t){return Object(n["a"])().get("/s1/connect/report/".concat(t.reportId,"/price"),{params:t})},runReport:function(t){return Object(n["a"])().post("/s1/connect/report/".concat(t.reportId,"/run"),t)},reportWorkflowInstances:function(t){return Object(n["a"])().get("/s1/connect/report/workflow/instance",{params:t})}}},"6b15":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.alertActive?s("div",{staticClass:"alert-container"},[s("vs-alert",{staticClass:"mb-5",attrs:{active:t.alertActive,color:t.alertVariant,closable:"","icon-pack":"feather","close-icon":"icon-x"},on:{"update:active":function(a){t.alertActive=a}}},[s("p",[t._v(t._s(t.alertMessage))])])],1):t._e(),s("nv-card",[s("div",{staticClass:"flex flex-wrap-reverse items-center mb-base"},[s("vs-button",{staticClass:"p-3 mr-4",attrs:{color:"primary",type:"filled",icon:"fa-chevron-left","icon-pack":"far"},on:{click:t.cancel}},[t._v(t._s(t.$t("BACK")))])],1),s("div",{staticClass:"nv-row row hover vs-con-loading__container",attrs:{id:"loading-container"}},[s("div",{staticClass:"nv-col w-full"},[s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ID"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.instanceId,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("WORKFLOW_NAME"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.workflowName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("WORKFLOW_TYPE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.workflowTypeName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("STATUS"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.statusDescription,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("CREATION_DATE"))+":")]),s("span",[t._v(t._s(t._f("formatUnixDate")(t.workflowInstance.creationDate)))])])])])]),s("div",{staticClass:"mt-base"},["WF_BEN"===t.workflowInstance.workflowTypeId?[s("beneficiary-workflow-instance-view",{attrs:{instanceId:t.workflowInstance.instanceId,viewOnly:""}})]:t._e(),"WF_FT"===t.workflowInstance.workflowTypeId?[s("funds-transfer-workflow-instance-view",{attrs:{instanceId:t.workflowInstance.instanceId,viewOnly:""}})]:t._e(),"WF_RPT"===t.workflowInstance.workflowTypeId?[s("report-workflow-instance-view",{attrs:{instanceId:t.workflowInstance.instanceId,viewOnly:""}})]:t._e()],2)],1)},e=[],o=s("a34a"),r=s.n(o),i=s("946b"),c=s("93b8"),l=s("0035"),_=s("9ff0"),f=s("6cad"),p=s("eb25"),w=s("e893");function v(t,a,s,n,e,o,r){try{var i=t[o](r),c=i.value}catch(l){return void s(l)}i.done?a(c):Promise.resolve(c).then(n,e)}function d(t){return function(){var a=this,s=arguments;return new Promise(function(n,e){var o=t.apply(a,s);function r(t){v(o,n,e,r,i,"next",t)}function i(t){v(o,n,e,r,i,"throw",t)}r(void 0)})}}var u={name:"workflow-request-view",mixins:[i["a"],c["a"],l["a"]],components:{BeneficiaryWorkflowInstanceView:f["default"],FundsTransferWorkflowInstanceView:p["default"],ReportWorkflowInstanceView:w["default"]},data:function(){return{workflowInstance:{}}},methods:{load:function(){var t=d(r.a.mark(function t(){var a;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=this,this.startLoading("loading-container"),_["a"].workflowInstances({instanceId:this.$route.params.id}).then(function(t){a.stopLoading("loading-container"),a.workflowInstance=t.data.workflowInstanceList[0]||{},a.loadTaskTableData("tasks-loading-container")});case 3:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),cancel:function(){this.$router.back()}},mounted:function(){this.load()}},I=u,k=s("2877"),C=Object(k["a"])(I,n,e,!1,null,null,null);a["default"]=C.exports},"6cad":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.alertActive?s("div",{staticClass:"alert-container"},[s("vs-alert",{staticClass:"mb-5",attrs:{active:t.alertActive,color:t.alertVariant,closable:"","icon-pack":"feather","close-icon":"icon-x"},on:{"update:active":function(a){t.alertActive=a}}},[s("p",[t._v(t._s(t.alertMessage))])])],1):t._e(),s("nv-card",[!1===t.viewOnly?s("div",{staticClass:"flex flex-wrap-reverse items-center mb-base"},[s("vs-button",{staticClass:"p-3 mr-4",attrs:{color:"primary",type:"filled",icon:"fa-chevron-left","icon-pack":"far"},on:{click:t.cancel}},[t._v(t._s(t.$t("BACK")))])],1):t._e(),s("div",{staticClass:"nv-row row hover vs-con-loading__container",attrs:{id:"instance-loading-container"}},["BEN_TYPE_BANK"===t.workflowInstance.typeBehaviourEnumId?[s("div",{staticClass:"nv-col w-full"},[s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ID"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.instanceId,"-")))])]),t.workflowInstance.externalBeneficiaryId?s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("EXTERNAL_ID"))+":")]),s("span",[t._v(t._s(t.workflowInstance.externalBeneficiaryId))])]):t._e(),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ACTION_TYPE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.actionTypeDescription,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("BENEFICIARY_TYPE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.typeName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("BENEFICIARY_NAME"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.beneficiaryName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("NICKNAME"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.nickname,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ACCOUNT_NUMBER"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.accountNumber,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("INPUT_BY"))+": ")]),s("span",[t._v(t._s(t.workflowInstance.inputUserFullName))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("CREATION_DATE"))+":")]),s("span",[t._v(t._s(t._f("formatUnixDate")(t.workflowInstance.creationDate)))])])])]:t._e(),"BEN_TYPE_LOCAL"===t.workflowInstance.typeBehaviourEnumId?[s("div",{staticClass:"nv-col md:w-1/2 w-full"},[s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ID"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.instanceId,"-")))])]),t.workflowInstance.externalBeneficiaryId?s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("EXTERNAL_ID"))+":")]),s("span",[t._v(t._s(t.workflowInstance.externalBeneficiaryId))])]):t._e(),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ACTION_TYPE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.actionTypeDescription,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("BENEFICIARY_TYPE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.typeName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("BENEFICIARY_NAME"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.beneficiaryName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("NICKNAME"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.nickname,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("IBAN"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.iban,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("BANK"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.bankName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("SWIFT_CODE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.swiftCode,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("INPUT_BY"))+": ")]),s("span",[t._v(t._s(t.workflowInstance.inputUserFullName))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("CREATION_DATE"))+":")]),s("span",[t._v(t._s(t._f("formatUnixDate")(t.workflowInstance.creationDate)))])])]),s("div",{staticClass:"nv-col md:w-1/2 w-full"},[s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("STREET"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.address1,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("DISTRICT"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.district,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("CITY"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.city,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("PROVINCE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.province,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("POSTAL_CODE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.postalCode,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("POST_OFFICE_BOX"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.postOfficeBox,"-")))])])])]:t._e(),"BEN_TYPE_OVERSEAS"===t.workflowInstance.typeBehaviourEnumId?[s("div",{staticClass:"nv-col md:w-1/2 w-full"},[s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ID"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.instanceId,"-")))])]),t.workflowInstance.externalBeneficiaryId?s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("EXTERNAL_ID"))+":")]),s("span",[t._v(t._s(t.workflowInstance.externalBeneficiaryId))])]):t._e(),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ACTION_TYPE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.actionTypeDescription,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("BENEFICIARY_TYPE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.typeName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("BENEFICIARY_NAME"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.beneficiaryName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("NICKNAME"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.nickname,"-")))])]),t.workflowInstance.accountNumber?s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ACCOUNT_NUMBER"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.accountNumber,"-")))])]):t._e(),t.workflowInstance.iban?s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("IBAN"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.iban,"-")))])]):t._e(),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("BANK"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.bankName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("SWIFT_CODE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.swiftCode,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("PREFERRED_CURRENCY"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.preferredCurrencyAbbreviation,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("INPUT_BY"))+": ")]),s("span",[t._v(t._s(t.workflowInstance.inputUserFullName))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("CREATION_DATE"))+":")]),s("span",[t._v(t._s(t._f("formatUnixDate")(t.workflowInstance.creationDate)))])])]),s("div",{staticClass:"nv-col md:w-1/2 w-full"},[s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("STREET"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.address1,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("DISTRICT"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.district,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("CITY"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.city,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("PROVINCE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.province,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("COUNTRY"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.countryGeoName,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("POSTAL_CODE"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.postalCode,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("POST_OFFICE_BOX"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.postOfficeBox,"-")))])])])]:t._e()],2),s("vs-tabs",{staticClass:"mt-base"},[s("vs-tab",{attrs:{label:t.$t("TASKS")}},[s("div",{staticClass:"vs-con-loading__container",attrs:{id:"tasks-loading-container"}},[s("vs-table",{staticClass:"mb-base",attrs:{data:t.taskTableData,noDataText:t.taskTableNoDataText,search:""},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.data;return t._l(n,function(a,e){return s("vs-tr",{key:e,attrs:{data:a}},[s("vs-td",{attrs:{data:n[e].taskId}},[t._v("\n                  "+t._s(n[e].taskId)+"\n                ")]),s("vs-td",{attrs:{data:n[e].assignedUserFullName}},[t._v("\n                  "+t._s(n[e].assignedUserFullName)+"\n                ")]),s("vs-td",{attrs:{data:n[e].statusDescription}},[t._v("\n                  "+t._s(n[e].statusDescription)+"\n                ")]),s("vs-td",{attrs:{data:n[e].creationDate}},[t._v("\n                  "+t._s(t._f("formatUnixDate")(n[e].creationDate))+"\n                ")]),s("vs-td",{attrs:{data:n[e].dueDate}},[t._v("\n                  "+t._s(t._f("formatUnixDate")(n[e].dueDate))+"\n                ")])],1)})}}])},[s("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"flex flex-wrap-reverse items-center"},[s("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.taskTableBusy},on:{click:function(a){return t.refreshTaskTable(!0)}}},[t._v(t._s(t.$t("REFRESH")))])],1),s("div",{staticClass:"flex justify-end mr-4"},[s("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[s("span",{staticClass:"mx-2"},[t._v(t._s(t.taskTablePagingInfo))]),s("vs-dropdown",{staticClass:"cursor-pointer mr-2",attrs:{"vs-trigger-click":""}},[s("span",{staticClass:"far fa-angle-down text-primary"}),s("vs-dropdown-menu",t._l(t.tablePageOptions,function(a,n){return s("vs-dropdown-item",{key:n,on:{click:function(s){t.taskTablePerPage=a}}},[s("span",[t._v(t._s(a))])])}),1)],1)],1)])]),s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"taskId"}},[t._v("\n                "+t._s(this.$t("ID"))+"\n              ")]),s("vs-th",{attrs:{"sort-key":"assignedUserFullName"}},[t._v("\n                "+t._s(this.$t("ASSIGNED_USER"))+"\n              ")]),s("vs-th",{attrs:{"sort-key":"statusDescription"}},[t._v("\n                "+t._s(this.$t("STATUS"))+"\n              ")]),s("vs-th",{attrs:{"sort-key":"creationDate"}},[t._v("\n                "+t._s(this.$t("CREATION_DATE"))+"\n              ")]),s("vs-th",{attrs:{"sort-key":"dueDate"}},[t._v("\n                "+t._s(this.$t("DUE_DATE"))+"\n              ")])],1)],2),s("vs-pagination",{attrs:{total:t.taskTableTotalPages,max:t.maxPaginationItems},model:{value:t.taskTableCurrentPage,callback:function(a){t.taskTableCurrentPage=a},expression:"taskTableCurrentPage"}})],1)])],1)],1)],1)},e=[],o=s("a34a"),r=s.n(o),i=s("946b"),c=s("93b8"),l=s("faa0"),_=s("0035");function f(t,a,s,n,e,o,r){try{var i=t[o](r),c=i.value}catch(l){return void s(l)}i.done?a(c):Promise.resolve(c).then(n,e)}function p(t){return function(){var a=this,s=arguments;return new Promise(function(n,e){var o=t.apply(a,s);function r(t){f(o,n,e,r,i,"next",t)}function i(t){f(o,n,e,r,i,"throw",t)}r(void 0)})}}var w={name:"beneficiary-workflow-instance-view",mixins:[i["a"],c["a"],_["a"]],props:{viewOnly:{type:Boolean,default:!1}},data:function(){return{workflowInstance:{}}},methods:{load:function(){var t=p(r.a.mark(function t(){var a;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=this,this.startLoading("instance-loading-container"),l["a"].beneficiaryWorkflowInstances({instanceId:this.instanceId}).then(function(t){a.stopLoading("instance-loading-container"),a.workflowInstance=t.data.instanceList[0]||{},a.loadTaskTableData("tasks-loading-container")});case 3:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),cancel:function(){this.$router.back()}},mounted:function(){this.load()}},v=w,d=s("2877"),u=Object(d["a"])(v,n,e,!1,null,null,null);a["default"]=u.exports},e893:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nv-card",[!1===t.viewOnly?s("div",{staticClass:"flex flex-wrap-reverse items-center mb-base"},[s("vs-button",{staticClass:"p-3 mr-4",attrs:{color:"primary",type:"filled",icon:"fa-chevron-left","icon-pack":"far"},on:{click:t.cancel}},[t._v(t._s(t.$t("BACK")))]),"RPT_INST_COMPLETED"===t.workflowInstance.reportInstanceStatusId?s("vs-button",{staticClass:"p-3 mr-4",attrs:{color:"primary",type:"filled",href:t.reportDownloadUrl,"icon-pack":"far",icon:"fa-cloud-download-alt"}},[t._v(t._s(t.$t("DOWNLOAD")))]):t._e()],1):t._e(),s("div",{staticClass:"nv-row row hover vs-con-loading__container",attrs:{id:"instance-loading-container"}},[s("div",{staticClass:"nv-col w-full"},[s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ID"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.instanceId,"-")))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("REPORT_NAME"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.reportName,"-")))])]),t.workflowInstance.debitAccountNumber?s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("DEBIT_ACCOUNT_NUMBER"))+":")]),s("span",[t._v(t._s(t.workflowInstance.debitAccountNumber))])]):t._e(),t.workflowInstance.price?s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("PRICE"))+":")]),s("span",[t._v(t._s(t.workflowInstance.price)+" "+t._s(t.workflowInstance.currencyAbbreviation))])]):t._e(),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("STATUS"))+":")]),s("span",[t._v(t._s(t.workflowInstance.reportInstanceStatusDescription))])]),t.workflowInstance.errors?s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("ERRORS"))+":")]),s("span",[t._v(t._s(t._f("placeholder")(t.workflowInstance.errors,"-")))])]):t._e(),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("INPUT_BY"))+": ")]),s("span",[t._v(t._s(t.workflowInstance.inputUserFullName))])]),s("p",{staticClass:"info-row"},[s("span",[t._v(t._s(t.$t("CREATION_DATE"))+":")]),s("span",[t._v(t._s(t._f("formatUnixDate")(t.workflowInstance.creationDate)))])])])]),s("vs-tabs",{staticClass:"mt-base"},[s("vs-tab",{attrs:{label:t.$t("TASKS")}},[s("div",{staticClass:"vs-con-loading__container",attrs:{id:"tasks-loading-container"}},[s("vs-table",{staticClass:"mb-base",attrs:{data:t.taskTableData,noDataText:t.taskTableNoDataText,search:""},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.data;return t._l(n,function(a,e){return s("vs-tr",{key:e,attrs:{data:a}},[s("vs-td",{attrs:{data:n[e].taskId}},[t._v("\n                "+t._s(n[e].taskId)+"\n              ")]),s("vs-td",{attrs:{data:n[e].assignedUserFullName}},[t._v("\n                "+t._s(n[e].assignedUserFullName)+"\n              ")]),s("vs-td",{attrs:{data:n[e].statusDescription}},[t._v("\n                "+t._s(n[e].statusDescription)+"\n              ")]),s("vs-td",{attrs:{data:n[e].creationDate}},[t._v("\n                "+t._s(t._f("formatUnixDate")(n[e].creationDate))+"\n              ")]),s("vs-td",{attrs:{data:n[e].dueDate}},[t._v("\n                "+t._s(t._f("formatUnixDate")(n[e].dueDate))+"\n              ")])],1)})}}])},[s("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"flex flex-wrap-reverse items-center"},[s("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.taskTableBusy},on:{click:t.refreshTaskTable}},[t._v(t._s(t.$t("REFRESH")))])],1),s("div",{staticClass:"flex justify-end mr-4"},[s("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[s("span",{staticClass:"mx-2"},[t._v(t._s(t.taskTablePagingInfo))]),s("vs-dropdown",{staticClass:"cursor-pointer mr-2",attrs:{"vs-trigger-click":""}},[s("span",{staticClass:"far fa-angle-down text-primary"}),s("vs-dropdown-menu",t._l(t.tablePageOptions,function(a,n){return s("vs-dropdown-item",{key:n,on:{click:function(s){t.taskTablePerPage=a}}},[s("span",[t._v(t._s(a))])])}),1)],1)],1)])]),s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"taskId"}},[t._v("\n              "+t._s(this.$t("ID"))+"\n            ")]),s("vs-th",{attrs:{"sort-key":"assignedUserFullName"}},[t._v("\n              "+t._s(this.$t("ASSIGNED_USER"))+"\n            ")]),s("vs-th",{attrs:{"sort-key":"statusDescription"}},[t._v("\n              "+t._s(this.$t("STATUS"))+"\n            ")]),s("vs-th",{attrs:{"sort-key":"creationDate"}},[t._v("\n              "+t._s(this.$t("CREATION_DATE"))+"\n            ")]),s("vs-th",{attrs:{"sort-key":"dueDate"}},[t._v("\n              "+t._s(this.$t("DUE_DATE"))+"\n            ")])],1)],2),s("vs-pagination",{attrs:{total:t.taskTableTotalPages,max:t.maxPaginationItems},model:{value:t.taskTableCurrentPage,callback:function(a){t.taskTableCurrentPage=a},expression:"taskTableCurrentPage"}})],1)])],1)],1)},e=[],o=s("a34a"),r=s.n(o),i=s("4013"),c=s("93b8"),l=s("0035");function _(t,a,s,n,e,o,r){try{var i=t[o](r),c=i.value}catch(l){return void s(l)}i.done?a(c):Promise.resolve(c).then(n,e)}function f(t){return function(){var a=this,s=arguments;return new Promise(function(n,e){var o=t.apply(a,s);function r(t){_(o,n,e,r,i,"next",t)}function i(t){_(o,n,e,r,i,"throw",t)}r(void 0)})}}var p={name:"report-workflow-instance-view",mixins:[c["a"],l["a"]],props:{workflowInstanceId:{type:String,default:null},viewOnly:{type:Boolean,default:!1}},data:function(){return{workflowInstance:{}}},computed:{reportDownloadUrl:function(t){var a="",s=this.$store.getters.appId,n=this.$store.getters.activeExternalId.externalId;return"".concat(a,"/apps/Connect/DownloadSecure/downloadReportInstance?sourceAppId=").concat(s,"&customerId=").concat(n,"&instanceId=").concat(this.workflowInstance.reportInstanceId)}},methods:{load:function(){var t=f(r.a.mark(function t(){var a;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=this,this.startLoading("instance-loading-container"),i["a"].reportWorkflowInstances({instanceId:this.instanceId}).then(function(t){a.stopLoading("instance-loading-container"),a.workflowInstance=t.data.instanceList[0]||{},a.loadTaskTableData("tasks-loading-container")});case 3:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),cancel:function(){this.$router.back()}},mounted:function(){this.load()}},w=p,v=s("2877"),d=Object(v["a"])(w,n,e,!1,null,null,null);a["default"]=d.exports},faa0:function(t,a,s){"use strict";var n=s("36ad");a["a"]={beneficiaryTypes:function(t){return Object(n["a"])().get("/s1/connect/beneficiary/beneficiaryType",{params:t})},beneficiaryTypeTree:function(t){return Object(n["a"])().get("/s1/connect/beneficiary/beneficiaryType/tree",{params:t})},beneficiaries:function(t){return Object(n["a"])().get("/s1/connect/beneficiary",{params:t})},createBeneficiary:function(t){return Object(n["a"])().post("/s1/connect/beneficiary",t)},modifyBeneficiary:function(t){return Object(n["a"])().patch("/s1/connect/beneficiary/".concat(t.beneficiaryId),t)},deleteBeneficiary:function(t){return Object(n["a"])().delete("/s1/connect/beneficiary/".concat(t.beneficiaryId),{params:t})},beneficiaryWorkflowInstances:function(t){return Object(n["a"])().get("/s1/connect/beneficiary/workflow/instance",{params:t})}}}}]);
//# sourceMappingURL=chunk-903383c6.d18ef760.js.map