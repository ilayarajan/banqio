(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e01607e6"],{"0a05":function(t,e,a){"use strict";var n=a("36ad");e["a"]={outstandingImportLcBills:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/import/bill/outstanding",{params:t})},rejectedImportLcBills:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/import/bill/rejected",{params:t})},dueImportLcBills:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/import/bill/due",{params:t})},outstandingDcs:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/collection/inward/outstanding",{params:t})},acceptedDcs:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/collection/inward/accepted",{params:t})},outstandingImportLcs:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/import/outstanding",{params:t})},expiredImportLcs:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/import/expired",{params:t})},issuedImportLcs:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/import/issued",{params:t})},outstandingExportLcs:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/export/outstanding",{params:t})},advisedExportLcs:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/export/advised",{params:t})},outstandingLgs:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lg/outstanding",{params:t})},issuedLgs:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lg/issued",{params:t})},outstandingCleanImportLoans:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/loan/cleanImport/outstanding",{params:t})},overdueCleanImportLoans:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/loan/cleanImport/overdue",{params:t})},outstandingSalesInvoiceLoans:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/loan/salesInvoice/outstanding",{params:t})},overdueSalesInvoiceLoans:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/loan/salesInvoice/overdue",{params:t})},outstandingTrustReceiptLoans:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/loan/trustReceipt/outstanding",{params:t})},overdueTrustReceiptLoans:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/loan/trustReceipt/overdue",{params:t})},sentExportLcBills:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/export/bill/sent",{params:t})},dueExportLcBills:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/export/bill/due",{params:t})},rejectedExportLcBills:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/lc/export/bill/rejected",{params:t})},overdueLoans:function(t){return Object(n["a"])().get("/s1/connect/tradeFinance/loan/overdue",{params:t})}}},"20b93":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-container"}},[a("LgOutstanding"+t.dataLayout,{key:Date.now(),tag:"component",attrs:{parent:this}})],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nv-card",[a("vs-table",{attrs:{data:t.parent.lgTableData,noDataText:t.parent.lgTableNoDataText,search:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return t._l(n,function(e,s){return a("vs-tr",{key:s,attrs:{data:e}},[a("vs-td",{attrs:{data:n[s].lgNumber}},[a("router-link",{attrs:{to:{name:"ViewOutstandingLg",params:{id:n[s].lgNumber}}}},[t._v(t._s(n[s].lgNumber))])],1),a("vs-td",{attrs:{data:n[s].typeName}},[t._v("\n        "+t._s(t._f("placeholder")(n[s].typeName,"-"))+"\n      ")]),a("vs-td",{attrs:{data:n[s].beneficiaryName}},[t._v("\n        "+t._s(t._f("placeholder")(n[s].beneficiaryName,"-"))+"\n      ")]),a("vs-td",{attrs:{data:n[s].issuanceDate}},[t._v("\n        "+t._s(t._f("formatUnixDate")(n[s].issuanceDate))+"\n      ")]),a("vs-td",{attrs:{data:n[s].currencyAbbreviation}},[t._v("\n        "+t._s(t._f("placeholder")(n[s].currencyAbbreviation,"-"))+"\n      ")]),a("vs-td",{attrs:{data:n[s].lgAmount}},[t._v("\n        "+t._s(t._f("placeholder")(t._f("currency")(n[s].lgAmount,""),"-"))+"\n      ")])],1)})}}])},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"flex flex-wrap-reverse items-center"},[t.parent.lgTableData.length>0?a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-excel","icon-pack":"fal"},on:{click:function(e){return t.parent.exportXls(t.parent.lgTableData,t.parent.columnDefs)}}},[t._v(t._s(t.$t("EXPORT_XLS")))]):t._e(),t.parent.lgTableData.length>0?a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-csv","icon-pack":"fal"},on:{click:function(e){return t.parent.exportCsv(t.parent.lgTableData,t.parent.columnDefs)}}},[t._v(t._s(t.$t("EXPORT_CSV")))]):t._e(),a("vs-button",{staticClass:"p-3",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.parent.lgTableBusy},on:{click:t.parent.refreshLgTable}},[t._v(t._s(t.$t("REFRESH")))])],1),a("div",{staticClass:"flex justify-end mr-4"},[a("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[a("span",{staticClass:"mx-2"},[t._v(t._s(t.parent.lgTablePagingInfo))])])])]),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"lgNumber"}},[t._v("\n      "+t._s(this.$t("LG_REFERENCE_NUMBER"))+"\n    ")]),a("vs-th",{attrs:{"sort-key":"typeName"}},[t._v("\n      "+t._s(this.$t("LG_TYPE"))+"\n    ")]),a("vs-th",{attrs:{"sort-key":"beneficiaryName"}},[t._v("\n      "+t._s(this.$t("BENEFICIARY_NAME"))+"\n    ")]),a("vs-th",{attrs:{"sort-key":"issuanceDate"}},[t._v("\n      "+t._s(this.$t("ISSUANCE_DATE"))+"\n    ")]),a("vs-th",{attrs:{"sort-key":"currencyAbbreviation"}},[t._v("\n      "+t._s(this.$t("CURRENCY"))+"\n    ")]),a("vs-th",{attrs:{"sort-key":"lgAmount"}},[t._v("\n      "+t._s(this.$t("LG_AMOUNT"))+"\n    ")])],1)],2)],1)},i=[],l={name:"lg-outstanding-list-layout",props:{parent:{type:Object,required:!0}}},c=l,o=a("2877"),u=Object(o["a"])(c,r,i,!1,null,null,null),d=u.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nv-card",{staticClass:"mb-base"},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between"},[a("div",{staticClass:"flex flex-wrap-reverse items-center"},[a("vs-button",{staticClass:"p-3 ",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.parent.lgTableBusy},on:{click:t.parent.refreshLgTable}},[t._v(t._s(t.$t("REFRESH")))])],1),a("div",{staticClass:"flex justify-end"},[a("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[a("span",{staticClass:"mx-2"},[t._v(t._s(t.parent.lgTablePagingInfo))])])])])]),t._l(t.parent.lgTableData,function(e,n){return a("nv-card",{key:n,staticClass:"mb-base"},[a("div",{staticClass:"mb-4 flex justify-between"},[a("h3",[t._v(t._s(t._f("placeholder")(e.typeName,"-")))]),a("div",{staticClass:"text-right"},[a("h3",[t._v(t._s(t._f("placeholder")(t._f("currency")(e.lgAmount,""),"-"))+" "+t._s(e.currencyAbbreviation))]),a("span",{staticClass:"text-xs"},[t._v(t._s(t.$t("LG_AMOUNT")))])])]),a("div",[a("div",{staticClass:"nv-row mb-4"},[a("div",{staticClass:"nv-col w-full"},[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("LG_REFERENCE_NUMBER")))]),a("div",{staticClass:"text-grey-dark"},[t._v(t._s(t._f("placeholder")(e.lgNumber,"-")))])])]),a("div",{staticClass:"nv-row mb-4"},[a("div",{staticClass:"nv-col w-full"},[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("BENEFICIARY_NAME")))]),a("div",{staticClass:"text-grey-dark"},[t._v(t._s(e.beneficiaryName))])])]),a("div",{staticClass:"nv-row mb-4"},[a("div",{staticClass:"nv-col w-full"},[a("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("EXPIRY_DATE")))]),a("div",{staticClass:"text-grey-dark"},[t._v(t._s(t._f("formatUnixDate")(e.expiryDate)))])])])]),a("vs-divider"),a("div",{staticClass:"flex justify-between"},[a("div",{staticClass:"flex"},[a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"border",iconPack:"far",icon:"fa-share-alt"}},[t._v(t._s(t.$t("SHARE")))])],1),a("div",[a("vs-button",{staticClass:"p-3 ml-4",attrs:{type:"filled",iconPack:"far",icon:"fa-eye"},on:{click:function(a){return t.view(e.lgNumber)}}},[t._v(t._s(t.$t("FOCUS")))])],1)])],1)})],2)},f=[],p={name:"lg-outstanding-card-layout",props:{parent:{type:Object,required:!0}},methods:{view:function(t){this.$router.push({name:"ViewOutstandingLg",params:{id:t}})}}},b=p,m=Object(o["a"])(b,g,f,!1,null,null,null),v=m.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nv-card",[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between mb-base"},[a("div",{staticClass:"flex flex-wrap-reverse items-center"},[t.parent.lgTableData.length>0?a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-excel","icon-pack":"fal"},on:{click:t.exportXls}},[t._v(t._s(t.$t("EXPORT_XLS")))]):t._e(),t.parent.lgTableData.length>0?a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-csv","icon-pack":"fal"},on:{click:t.exportCsv}},[t._v(t._s(t.$t("EXPORT_CSV")))]):t._e(),a("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far"},on:{click:t.parent.refreshLgTable}},[t._v(t._s(t.$t("REFRESH")))])],1)]),a("ag-grid-vue",{staticClass:"ag-theme-balham ag-pivot-layout",attrs:{gridOptions:t.gridOptions,rowData:t.parent.lgTableData,sideBar:t.sideBar,statusBar:t.statusBar}})],1)},h=[],y=a("b425"),C=a("401b"),T={name:"lg-outstanding-pivot-layout",mixins:[y["a"]],components:{AgGridVue:C["AgGridVue"]},beforeMount:function(){this.gridOptions.columnDefs=[{headerName:this.$t("LG_REFERENCE_NUMBER"),field:"lgNumber"},{headerName:this.$t("LG_TYPE"),field:"typeName",enableRowGroup:!0},{headerName:this.$t("BENEFICIARY_NAME"),field:"beneficiaryName",enableRowGroup:!0},{headerName:this.$t("ISSUANCE_DATE"),field:"issuanceDate",filter:"agDateColumnFilter",valueFormatter:this.formatDate,enableRowGroup:!0},{headerName:this.$t("CURRENCY"),field:"currencyAbbreviation",enableRowGroup:!0},{headerName:this.$t("LG_AMOUNT"),field:"lgAmount",type:"numericColumn",filter:"agNumberColumnFilter",valueFormatter:this.formatNumber,enableValue:!0}]}},E=T,N=Object(o["a"])(E,_,h,!1,null,null,null),x=N.exports,L=a("0a05"),O=a("93b8"),w=a("b664"),R={mixins:[O["a"],w["a"]],data:function(){return{lgTableData:[],lgTableBusy:!1,lgOutstandingContainer:"loading-container",lgTableTotalRows:0,lgTableCurrentPage:1,lgTablePerPage:10,columnDefs:[{headerName:this.$t("LG_REFERENCE_NUMBER"),field:"lgNumber",format:"Number"},{headerName:this.$t("LG_TYPE"),field:"typeName"},{headerName:this.$t("BENEFICIARY_NAME"),field:"beneficiaryName"},{headerName:this.$t("ISSUANCE_DATE"),field:"issuanceDate",format:"Date"},{headerName:this.$t("CURRENCY"),field:"currencyAbbreviation"},{headerName:this.$t("LG_AMOUNT"),field:"lgAmount",format:"Decimal"}]}},computed:{lgTableNoDataText:function(){return this.lgTableBusy?this.$t("LOADING")+" ...":this.$t("NO_DATA_FOUND")},lgTableTotalPages:function(){return Math.ceil(this.lgTableTotalRows/this.lgTablePerPage)},lgTablePagingInfo:function(){return this.pagingInfo(this.lgTableCurrentPage,this.lgTablePerPage,this.lgTableTotalRows)}},methods:{loadLgTableData:function(t){var e=this;this.lgTableBusy=!0,this.lgOutstandingContainer=t||this.lgOutstandingContainer,this.startLoading(this.lgOutstandingContainer),L["a"].outstandingLgs({}).then(function(t){e.stopLoading(e.lgOutstandingContainer),e.lgTableBusy=!1,e.lgTablePerPage=t.data.totalRows,e.lgTableTotalRows=t.data.totalRows,e.lgTableData=t.data.lgList||[]}).catch(function(t){e.stopLoading(e.lgOutstandingContainer),e.lgTableBusy=!1,e.$emit("show-alert","danger",t.response.data.errors)})},refreshLgTable:function(){this.loadLgTableData()}},watch:{lgTableCurrentPage:function(){this.loadLgTableData()}}},D=R,$={name:"lg-outstanding-browse",mixins:[D],components:{LgOutstandingListLayout:d,LgOutstandingCardLayout:v,LgOutstandingPivotLayout:x},data:function(){return{dataLayout:"ListLayout"}},mounted:function(){this.loadLgTableData()},created:function(){var t=this;this.$eventHub.$on("toolClicked",function(e){t.dataLayout=e})},beforeDestroy:function(){var t=this;this.$eventHub.$off("toolClicked",function(e){t.dataLayout=e})}},j=$,F=Object(o["a"])(j,n,s,!1,null,null,null);e["default"]=F.exports}}]);
//# sourceMappingURL=chunk-e01607e6.2e61f0b8.js.map