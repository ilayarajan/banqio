(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aca495e"],{"0a05":function(t,e,a){"use strict";var s=a("36ad");e["a"]={outstandingImportLcBills:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/import/bill/outstanding",{params:t})},rejectedImportLcBills:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/import/bill/rejected",{params:t})},dueImportLcBills:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/import/bill/due",{params:t})},outstandingDcs:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/collection/inward/outstanding",{params:t})},acceptedDcs:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/collection/inward/accepted",{params:t})},outstandingImportLcs:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/import/outstanding",{params:t})},expiredImportLcs:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/import/expired",{params:t})},issuedImportLcs:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/import/issued",{params:t})},outstandingExportLcs:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/export/outstanding",{params:t})},advisedExportLcs:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/export/advised",{params:t})},outstandingLgs:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lg/outstanding",{params:t})},issuedLgs:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lg/issued",{params:t})},outstandingCleanImportLoans:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/loan/cleanImport/outstanding",{params:t})},overdueCleanImportLoans:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/loan/cleanImport/overdue",{params:t})},outstandingSalesInvoiceLoans:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/loan/salesInvoice/outstanding",{params:t})},overdueSalesInvoiceLoans:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/loan/salesInvoice/overdue",{params:t})},outstandingTrustReceiptLoans:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/loan/trustReceipt/outstanding",{params:t})},overdueTrustReceiptLoans:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/loan/trustReceipt/overdue",{params:t})},sentExportLcBills:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/export/bill/sent",{params:t})},dueExportLcBills:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/export/bill/due",{params:t})},rejectedExportLcBills:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/lc/export/bill/rejected",{params:t})},overdueLoans:function(t){return Object(s["a"])().get("/s1/connect/tradeFinance/loan/overdue",{params:t})}}},"66d2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-container"}},[a("LgIssued"+t.dataLayout,{key:Date.now(),tag:"component",attrs:{parent:this}})],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nv-card",[t.findFormVisible?a("div",{staticClass:"inline-form p-4 mb-base"},[a("div",{staticClass:"nv-row mb-4"},[a("div",{staticClass:"nv-col sm:w-1/2 w-full required"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$t("FROM_DATE")))]),a("nv-input-group",[a("template",{slot:"append"},[a("div",{staticClass:"append-text bg-dark"},[a("i",{staticClass:"far fa-calendar-alt"})])]),a("datepicker",{staticClass:"w-full",attrs:{placeholder:t.$t("SELECT_DATE"),format:t.parent.dateFormat},model:{value:t.parent.fromDate,callback:function(e){t.$set(t.parent,"fromDate",e)},expression:"parent.fromDate"}})],2)],1),a("div",{staticClass:"nv-col sm:w-1/2 w-full required"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$t("TO_DATE")))]),a("nv-input-group",[a("template",{slot:"append"},[a("div",{staticClass:"append-text bg-dark"},[a("i",{staticClass:"far fa-calendar-alt"})])]),a("datepicker",{staticClass:"w-full",attrs:{placeholder:t.$t("SELECT_DATE"),format:t.parent.dateFormat},model:{value:t.parent.toDate,callback:function(e){t.$set(t.parent,"toDate",e)},expression:"parent.toDate"}})],2)],1)]),a("div",{staticClass:"nv-row"},[a("div",{staticClass:"nv-col w-full"},[a("div",{staticClass:"flex justify-between"},[a("vs-dropdown",{attrs:{"vs-trigger-click":""}},[a("a",{staticClass:"flex items-center",attrs:{href:"#"}},[t._v("\n              "+t._s(t.$t("CHOOSE_INTERVAL"))+"\n              "),a("i",{staticClass:"far fa-chevron-down ml-2"})]),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(e){return t.parent.chooseInterval("day")}}},[t._v("\n                "+t._s(t.$t("PAST_DAY"))+"\n              ")]),a("vs-dropdown-item",{on:{click:function(e){return t.parent.chooseInterval("week")}}},[t._v("\n                "+t._s(t.$t("PAST_WEEK"))+"\n              ")]),a("vs-dropdown-item",{on:{click:function(e){return t.parent.chooseInterval("month")}}},[t._v("\n                "+t._s(t.$t("PAST_MONTH"))+"\n              ")]),a("vs-dropdown-item",{on:{click:function(e){return t.parent.chooseInterval("year")}}},[t._v("\n                "+t._s(t.$t("PAST_YEAR"))+"\n              ")])],1)],1),a("div",{staticClass:"flex justify-right"},[a("vs-button",{staticClass:"px-5 py-3 mr-2",attrs:{color:"primary",type:"filled"},on:{click:t.submitFind}},[t._v(t._s(t.$t("SUBMIT")))]),a("vs-button",{staticClass:"px-5 py-3 mr-2",attrs:{color:"primary",type:"border"},on:{click:function(e){t.findFormVisible=!1}}},[t._v(t._s(t.$t("CANCEL")))])],1)],1)])])]):t._e(),a("vs-table",{attrs:{data:t.parent.lgTableData,noDataText:t.parent.lgTableNoDataText,search:""},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,function(e,n){return a("vs-tr",{key:n,attrs:{data:e}},[a("vs-td",{attrs:{data:s[n].lgNumber}},[a("router-link",{attrs:{to:{name:"ViewIssuedLg",params:{id:s[n].lgNumber,fromDate:t.parent.fromDate,toDate:t.parent.toDate}}}},[t._v(t._s(s[n].lgNumber))])],1),a("vs-td",{attrs:{data:s[n].typeName}},[t._v("\n          "+t._s(t._f("placeholder")(s[n].typeName,"-"))+"\n        ")]),a("vs-td",{attrs:{data:s[n].beneficiaryName}},[t._v("\n          "+t._s(t._f("placeholder")(s[n].beneficiaryName,"-"))+"\n        ")]),a("vs-td",{attrs:{data:s[n].issuanceDate}},[t._v("\n          "+t._s(t._f("formatUnixDate")(s[n].issuanceDate))+"\n        ")]),a("vs-td",{attrs:{data:s[n].currencyAbbreviation}},[t._v("\n          "+t._s(t._f("placeholder")(s[n].currencyAbbreviation,"-"))+"\n        ")]),a("vs-td",{attrs:{data:s[n].lgAmount}},[t._v("\n          "+t._s(t._f("placeholder")(t._f("currency")(s[n].lgAmount,""),"-"))+"\n        ")])],1)})}}])},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"flex flex-wrap-reverse items-center"},[t.parent.lgTableData.length>0?a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-excel","icon-pack":"fal"},on:{click:function(e){return t.parent.exportXls(t.parent.lgTableData,t.parent.columnDefs)}}},[t._v(t._s(t.$t("EXPORT_XLS")))]):t._e(),t.parent.lgTableData.length>0?a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-csv","icon-pack":"fal"},on:{click:function(e){return t.parent.exportCsv(t.parent.lgTableData,t.parent.columnDefs)}}},[t._v(t._s(t.$t("EXPORT_CSV")))]):t._e(),a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-binoculars","icon-pack":"far",disabled:t.parent.lgTableBusy},on:{click:t.showFindForm}},[t._v(t._s(t.$t("FIND")))]),a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.parent.lgTableBusy},on:{click:t.parent.refreshLgTable}},[t._v(t._s(t.$t("REFRESH")))])],1),a("div",{staticClass:"flex justify-end mr-4"},[a("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[a("span",{staticClass:"mx-2"},[t._v(t._s(t.parent.lgTablePagingInfo))])])])]),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"lgNumber"}},[t._v("\n        "+t._s(this.$t("LG_REFERENCE_NUMBER"))+"\n      ")]),a("vs-th",{attrs:{"sort-key":"typeName"}},[t._v("\n        "+t._s(this.$t("LG_TYPE"))+"\n      ")]),a("vs-th",{attrs:{"sort-key":"beneficiaryName"}},[t._v("\n        "+t._s(this.$t("BENEFICIARY_NAME"))+"\n      ")]),a("vs-th",{attrs:{"sort-key":"issuanceDate"}},[t._v("\n        "+t._s(this.$t("ISSUANCE_DATE"))+"\n      ")]),a("vs-th",{attrs:{"sort-key":"currencyAbbreviation"}},[t._v("\n        "+t._s(this.$t("CURRENCY"))+"\n      ")]),a("vs-th",{attrs:{"sort-key":"lgAmount"}},[t._v("\n        "+t._s(this.$t("LG_AMOUNT"))+"\n      ")])],1)],2)],1)},i=[],l=a("fa33"),o={name:"lg-issued-list-layout",data:function(){return{findFormVisible:!1}},components:{Datepicker:l["a"]},props:{parent:{type:Object,required:!0}},methods:{showFindForm:function(){this.findFormVisible=!0},submitFind:function(){this.parent.loadLgTableData(),this.findFormVisible=!1}}},c=o,d=a("2877"),u=Object(d["a"])(c,r,i,!1,null,null,null),f=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nv-card",{staticClass:"mb-base"},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between"},[a("div",{staticClass:"flex flex-wrap-reverse items-center"},[a("vs-button",{staticClass:"p-3 ",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.parent.lgTableBusy},on:{click:t.parent.refreshLgTable}},[t._v(t._s(t.$t("REFRESH")))])],1),a("div",{staticClass:"flex justify-end"},[a("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[a("span",{staticClass:"mx-2"},[t._v(t._s(t.parent.lgTablePagingInfo))])])])])]),t._l(t.parent.lgTableData,function(e,s){return a("nv-card",{key:s,staticClass:"mb-base"},[a("div",{staticClass:"mb-4 flex justify-between"},[a("h3",[t._v(t._s(t._f("placeholder")(e.typeName,"-")))]),a("div",{staticClass:"text-right"},[a("h3",[t._v(t._s(t._f("placeholder")(t._f("currency")(e.lgAmount,""),"-"))+" "+t._s(e.currencyAbbreviation))]),a("span",{staticClass:"text-xs"},[t._v(t._s(t.$t("LG_AMOUNT")))])])]),a("div",[a("div",{staticClass:"nv-row mb-4"},[a("div",{staticClass:"nv-col w-full"},[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("LG_REFERENCE_NUMBER")))]),a("div",{staticClass:"text-grey-dark"},[t._v(t._s(t._f("placeholder")(e.lgNumber,"-")))])])]),a("div",{staticClass:"nv-row mb-4"},[a("div",{staticClass:"nv-col w-full"},[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("BENEFICIARY_NAME")))]),a("div",{staticClass:"text-grey-dark"},[t._v(t._s(e.beneficiaryName))])])]),a("div",{staticClass:"nv-row mb-4"},[a("div",{staticClass:"nv-col w-full"},[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("EXPIRY_DATE")))]),a("div",{staticClass:"text-grey-dark"},[t._v(t._s(t._f("formatUnixDate")(e.expiryDate)))])])])]),a("vs-divider"),a("div",{staticClass:"flex justify-between"},[a("div",{staticClass:"flex"},[a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"border",iconPack:"far",icon:"fa-share-alt"}},[t._v(t._s(t.$t("SHARE")))])],1),a("div",[a("vs-button",{staticClass:"p-3 ml-4",attrs:{type:"filled",iconPack:"far",icon:"fa-eye"},on:{click:function(a){return t.view(e.lgNumber)}}},[t._v(t._s(t.$t("FOCUS")))])],1)])],1)})],2)},m=[],b={name:"lg-issued-card-layout",props:{parent:{type:Object,required:!0}},methods:{view:function(t){this.$router.push({name:"ViewIssuedLg",params:{id:t,fromDate:this.parent.fromDate,toDate:this.parent.toDate}})}}},v=b,g=Object(d["a"])(v,p,m,!1,null,null,null),_=g.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nv-card",[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between mb-base"},[a("div",{staticClass:"flex flex-wrap-reverse items-center"},[t.parent.lgTableData.length>0?a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-excel","icon-pack":"fal"},on:{click:t.exportXls}},[t._v(t._s(t.$t("EXPORT_XLS")))]):t._e(),t.parent.lgTableData.length>0?a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-csv","icon-pack":"fal"},on:{click:t.exportCsv}},[t._v(t._s(t.$t("EXPORT_CSV")))]):t._e(),a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far"},on:{click:t.parent.refreshLgTable}},[t._v(t._s(t.$t("REFRESH")))])],1)]),a("ag-grid-vue",{staticClass:"ag-theme-balham ag-pivot-layout",attrs:{gridOptions:t.gridOptions,rowData:t.parent.lgTableData,sideBar:t.sideBar,statusBar:t.statusBar}})],1)},C=[],y=a("b425"),T=a("401b"),E={name:"lg-issued-pivot-layout",mixins:[y["a"]],components:{AgGridVue:T["AgGridVue"]},beforeMount:function(){this.gridOptions.columnDefs=[{headerName:this.$t("LG_REFERENCE_NUMBER"),field:"lgNumber"},{headerName:this.$t("LG_TYPE"),field:"typeName",enableRowGroup:!0},{headerName:this.$t("BENEFICIARY_NAME"),field:"beneficiaryName",enableRowGroup:!0},{headerName:this.$t("ISSUANCE_DATE"),field:"issuanceDate",filter:"agDateColumnFilter",valueFormatter:this.formatDate,enableRowGroup:!0},{headerName:this.$t("CURRENCY"),field:"currencyAbbreviation",enableRowGroup:!0},{headerName:this.$t("LG_AMOUNT"),field:"lgAmount",type:"numericColumn",filter:"agNumberColumnFilter",valueFormatter:this.formatNumber,enableValue:!0}]}},D=E,x=Object(d["a"])(D,h,C,!1,null,null,null),w=x.exports,N=a("0a05"),L=a("93b8"),$=a("b664"),k=a("5f4f"),F={mixins:[$["a"],L["a"],k["a"]],data:function(){return{lgTableData:[],lgTableContainer:"loading-container",lgTableBusy:!1,lgTableTotalRows:0,lgTableCurrentPage:1,lgTablePerPage:10,fromDate:null,toDate:new Date,columnDefs:[{headerName:this.$t("LG_REFERENCE_NUMBER"),field:"lgNumber",format:"Number"},{headerName:this.$t("LG_TYPE"),field:"typeName"},{headerName:this.$t("BENEFICIARY_NAME"),field:"beneficiaryName"},{headerName:this.$t("ISSUANCE_DATE"),field:"issuanceDate",format:"Date"},{headerName:this.$t("CURRENCY"),field:"currencyAbbreviation"},{headerName:this.$t("LG_AMOUNT"),field:"lgAmount",format:"Decimal"}]}},computed:{lgTableNoDataText:function(){return this.lgTableBusy?this.$t("LOADING")+" ...":this.$t("NO_DATA_FOUND")},lgTableTotalPages:function(){return Math.ceil(this.lgTableTotalRows/this.lgTablePerPage)},lgTablePagingInfo:function(){return this.pagingInfo(this.lgTableCurrentPage,this.lgTablePerPage,this.lgTableTotalRows)}},methods:{loadLgTableData:function(t){var e=this;this.lgTableBusy=!0,this.lgTableContainer=t||this.lgTableContainer,this.startLoading(this.lgTableContainer),N["a"].issuedLgs({fromDate:this.getTime(this.fromDate),toDate:this.getTime(this.toDate)}).then(function(t){e.stopLoading(e.lgTableContainer),e.lgTableBusy=!1,e.lgTablePerPage=t.data.totalRows,e.lgTableTotalRows=t.data.totalRows,e.lgTableData=t.data.lgList||[]}).catch(function(t){e.stopLoading(e.lgTableContainer),e.lgTableBusy=!1,e.$emit("show-alert","danger",t.response.data.errors)})},refreshLgTable:function(){this.loadLgTableData()}},watch:{lgTableCurrentPage:function(){this.loadLgTableData()}}},R=F,A={name:"lg-issued-browse",mixins:[R],components:{LgIssuedListLayout:f,LgIssuedCardLayout:_,LgIssuedPivotLayout:w},data:function(){return{dataLayout:"ListLayout"}},mounted:function(){var t=new Date;this.fromDate=t.setDate(t.getDate()-30),this.loadLgTableData()},created:function(){var t=this;this.$eventHub.$on("toolClicked",function(e){t.dataLayout=e})},beforeDestroy:function(){var t=this;this.$eventHub.$off("toolClicked",function(e){t.dataLayout=e})}},O=A,I=Object(d["a"])(O,s,n,!1,null,null,null);e["default"]=I.exports}}]);
//# sourceMappingURL=chunk-5aca495e.37cd1a99.js.map