(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a0a7e41"],{"203c":function(t,a,e){"use strict";var n=e("38a9"),c=e("93b8"),s=e("b664"),r={mixins:[c["a"],s["a"]],props:{lcyOnly:{type:Boolean,default:null},fcyOnly:{type:Boolean,default:null},ignoreAccountNumber:{type:String,default:null},typeId:{type:String,default:null},typeBehaviourEnumId:{type:String,default:null}},data:function(){return{accountTableData:[],accountTableContainer:"loading-container",accountTableBusy:!1,accountTableTotalRows:0,accountTableCurrentPage:1,accountTablePerPage:10,columnDefs:[{headerName:this.$t("ACCOUNT_TITLE"),field:"nickname"},{headerName:this.$t("ACCOUNT_NUMBER"),field:"accountNumber",format:"Number"},{headerName:this.$t("IBAN"),field:"iban"},{headerName:this.$t("ACCOUNT_TYPE"),field:"typeName"},{headerName:this.$t("CURRENCY"),field:"currencyAbbreviation"},{headerName:this.$t("AVAILABLE_BALANCE"),field:"availableBalance",format:"Decimal"}]}},computed:{accountTableNoDataText:function(){return this.accountTableBusy?this.$t("LOADING")+" ...":this.$t("NO_DATA_FOUND")},accountTableTotalPages:function(){return Math.ceil(this.accountTableTotalRows/this.accountTablePerPage)},accountTablePagingInfo:function(){return this.pagingInfo(this.accountTableCurrentPage,this.accountTablePerPage,this.accountTableTotalRows)}},methods:{loadAccountTableData:function(t){var a=this;this.accountTableBusy=!0,this.accountTableContainer=t||this.accountTableContainer,this.startLoading(this.accountTableContainer),n["a"].accounts({lcyOnly:this.lcyOnly,fcyOnly:this.fcyOnly,ignoreAccountNumber:this.ignoreAccountNumber,typeId:this.typeId,typeBehaviourEnumId:this.typeBehaviourEnumId}).then(function(t){a.stopLoading(a.accountTableContainer),a.accountTableBusy=!1,a.accountTablePerPage=t.data.totalRows,a.accountTableTotalRows=t.data.totalRows,a.accountTableData=t.data.accountList||[]}).catch(function(t){a.stopLoading(a.accountTableContainer),a.accountTableBusy=!1,a.$emit("show-alert","danger",t.response.data.errors)})},refreshAccountTable:function(){this.loadAccountTableData()}},watch:{accountTableCurrentPage:function(){this.refreshAccountTable()},lcyOnly:function(){this.refreshAccountTable()},fcyOnly:function(){this.refreshAccountTable()},ignoreAccountNumber:function(){this.refreshAccountTable()}}};a["a"]=r},"38a9":function(t,a,e){"use strict";var n=e("36ad");a["a"]={accounts:function(t){return Object(n["a"])().get("/s1/connect/account",{params:t})},transactions:function(t){return Object(n["a"])().get("/s1/connect/account/".concat(t.accountNumber,"/transaction"),{params:t})},modifyNickname:function(t){return Object(n["a"])().patch("/s1/connect/account/nickname",t)},officialStatements:function(t){return Object(n["a"])().get("/s1/connect/account/".concat(t.accountNumber,"/statement/official"),{params:t})},mt940Statements:function(t){return Object(n["a"])().get("/s1/connect/account/".concat(t.accountNumber,"/statement/mt940"),{params:t})},transactionTypes:function(t){return Object(n["a"])().get("/s1/connect/account/transactionType",{params:t})},accountTransactionAdvice:function(t){return Object(n["a"])().get("/s1/connect/account/".concat(t.accountNumber,"/transaction/advice"),{params:t})}}},"9ed1":function(t,a,e){"use strict";var n={methods:{negativeNumberStyle:function(t){return 0===t?"":t<0?"text-danger":"text-success"},positiveNumberStyle:function(t){return 0===t?"":t>0?"text-danger":"text-success"}}};a["a"]=n},c09f:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-container"}},[e("Account"+t.dataLayout,{key:Date.now(),tag:"component",attrs:{parent:this}})],1)},c=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nv-card",[e("vs-table",{attrs:{data:t.parent.accountTableData,noDataText:t.parent.accountTableNoDataText,search:""},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.data;return t._l(n,function(a,c){return e("vs-tr",{key:c,attrs:{data:a}},[e("vs-td",{attrs:{data:n[c].nickname}},[t._v("\n          "+t._s(t._f("placeholder")(n[c].nickname,"-"))+"\n        ")]),e("vs-td",{attrs:{data:n[c].accountNumber}},[e("router-link",{attrs:{to:{name:"ViewAccount",params:{id:n[c].accountNumber}}}},[t._v(t._s(n[c].accountNumber))])],1),e("vs-td",{attrs:{data:n[c].iban}},[t._v("\n          "+t._s(t._f("placeholder")(n[c].iban,"-"))+"\n        ")]),e("vs-td",{attrs:{data:n[c].typeName}},[t._v("\n          "+t._s(t._f("placeholder")(n[c].typeName,"-"))+"\n        ")]),e("vs-td",{attrs:{data:n[c].currencyAbbreviation}},[t._v("\n          "+t._s(t._f("placeholder")(n[c].currencyAbbreviation,"-"))+"\n        ")]),e("vs-td",{attrs:{data:n[c].availableBalance}},[e("span",{class:t.negativeNumberStyle(n[c].availableBalance)},[t._v("\n            "+t._s(t._f("placeholder")(t._f("currency")(n[c].availableBalance,""),"-"))+"\n          ")])])],1)})}}])},[e("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"flex flex-wrap-reverse items-center"},[t.parent.accountTableData.length>0?e("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-excel","icon-pack":"fal"},on:{click:function(a){return t.parent.exportXls(t.parent.accountTableData,t.parent.columnDefs)}}},[t._v(t._s(t.$t("EXPORT_XLS")))]):t._e(),t.parent.accountTableData.length>0?e("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-csv","icon-pack":"fal"},on:{click:function(a){return t.parent.exportCsv(t.parent.accountTableData,t.parent.columnDefs)}}},[t._v(t._s(t.$t("EXPORT_CSV")))]):t._e(),e("vs-button",{staticClass:"p-3",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.parent.accountTableBusy},on:{click:t.parent.refreshAccountTable}},[t._v(t._s(t.$t("REFRESH")))])],1),e("div",{staticClass:"flex justify-end mr-4"},[e("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[e("span",{staticClass:"mx-2"},[t._v(t._s(t.parent.accountTablePagingInfo))])])])]),e("template",{slot:"thead"},[e("vs-th",{attrs:{"sort-key":"nickname"}},[t._v("\n        "+t._s(this.$t("ACCOUNT_TITLE"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"accountNumber"}},[t._v("\n        "+t._s(this.$t("ACCOUNT_NUMBER"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"iban"}},[t._v("\n        "+t._s(this.$t("IBAN"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"typeName"}},[t._v("\n        "+t._s(this.$t("ACCOUNT_TYPE"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"currencyAbbreviation"}},[t._v("\n        "+t._s(this.$t("CURRENCY"))+"\n      ")]),e("vs-th",{attrs:{"sort-key":"availableBalance"}},[t._v("\n        "+t._s(this.$t("AVAILABLE_BALANCE"))+"\n      ")])],1)],2)],1)},r=[],i=e("9ed1"),o={name:"account-list-layout",mixins:[i["a"]],props:{parent:{type:Object,required:!0}}},l=o,u=e("2877"),d=Object(u["a"])(l,s,r,!1,null,null,null),f=d.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nv-card",{staticClass:"mb-base"},[e("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between"},[e("div",{staticClass:"flex flex-wrap-reverse items-center"},[e("vs-button",{staticClass:"p-3",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.parent.accountTableBusy},on:{click:t.parent.refreshAccountTable}},[t._v(t._s(t.$t("REFRESH")))])],1),e("div",{staticClass:"flex justify-end"},[e("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[e("span",{staticClass:"mx-2"},[t._v(t._s(t.parent.accountTablePagingInfo))])])])])]),t._l(t.parent.accountTableData,function(a,n){return e("nv-card",{key:n,staticClass:"mb-base"},[e("div",{staticClass:"mb-4 flex justify-between"},[e("h3",[t._v(t._s(t._f("placeholder")(a.typeName,"-")))]),e("div",{staticClass:"text-right"},[e("h3",{class:t.negativeNumberStyle(a.availableBalance)},[t._v(t._s(t._f("placeholder")(t._f("currency")(a.availableBalance,""),"-"))+" "+t._s(a.currencyAbbreviation))]),e("span",{staticClass:"text-xs"},[t._v(t._s(t.$t("AVAILABLE_BALANCE")))])])]),e("div",[e("div",{staticClass:"nv-row mb-4"},[e("div",{staticClass:"nv-col w-full"},[e("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("ACCOUNT_TITLE")))]),e("div",{staticClass:"text-grey-dark"},[t._v(t._s(t._f("placeholder")(a.title,"-")))])])]),e("div",{staticClass:"nv-row mb-4"},[e("div",{staticClass:"nv-col w-full"},[e("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("ACCOUNT_NUMBER")))]),e("div",{staticClass:"text-grey-dark"},[t._v(t._s(a.accountNumber))])])]),e("div",{staticClass:"nv-row mb-4"},[e("div",{staticClass:"nv-col w-full"},[e("div",{staticClass:"text-bold"},[t._v(t._s(t.$t("IBAN")))]),e("div",{staticClass:"text-grey-dark"},[t._v(t._s(t._f("placeholder")(a.iban,"-")))])])])]),e("vs-divider"),e("div",{staticClass:"flex justify-between"},[e("div",{staticClass:"flex"},[e("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"border",iconPack:"far",icon:"fa-share-alt"}},[t._v(t._s(t.$t("SHARE")))]),e("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"border",iconPack:"far",icon:"fa-pen"}},[t._v(t._s(t.$t("SET_NICKNAME")))]),e("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"border",iconPack:"far",icon:"fa-tags"}},[t._v(t._s(t.$t("SET_TAGS")))])],1),e("div",[e("vs-button",{staticClass:"p-3 ml-4",attrs:{type:"filled",iconPack:"far",icon:"fa-eye"},on:{click:function(e){return t.view(a.accountNumber)}}},[t._v(t._s(t.$t("FOCUS")))])],1)])],1)})],2)},v=[],p={name:"account-card-layout",mixins:[i["a"]],props:{parent:{type:Object,required:!0}},methods:{view:function(t){this.$router.push({name:"ViewAccount",params:{id:t}})}}},m=p,h=Object(u["a"])(m,b,v,!1,null,null,null),_=h.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nv-card",[e("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between mb-base"},[e("div",{staticClass:"flex flex-wrap-reverse items-center"},[t.parent.accountTableData.length>0?e("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-excel","icon-pack":"fal"},on:{click:t.exportXls}},[t._v(t._s(t.$t("EXPORT_XLS")))]):t._e(),t.parent.accountTableData.length>0?e("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-file-csv","icon-pack":"fal"},on:{click:t.exportCsv}},[t._v(t._s(t.$t("EXPORT_CSV")))]):t._e(),e("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far"},on:{click:t.parent.refreshAccountTable}},[t._v(t._s(t.$t("REFRESH")))])],1)]),e("ag-grid-vue",{staticClass:"ag-theme-balham ag-pivot-layout",attrs:{gridOptions:t.gridOptions,rowData:t.parent.accountTableData,sideBar:t.sideBar,statusBar:t.statusBar}})],1)},C=[],T=e("b425"),N=e("401b"),A={name:"account-pivot-layout",mixins:[T["a"]],components:{AgGridVue:N["AgGridVue"]},beforeMount:function(){this.gridOptions.columnDefs=[{headerName:this.$t("ACCOUNT_TITLE"),field:"nickname"},{headerName:this.$t("ACCOUNT_NUMBER"),field:"accountNumber"},{headerName:this.$t("IBAN"),field:"iban"},{headerName:this.$t("ACCOUNT_TYPE"),field:"typeName",enableRowGroup:!0},{headerName:this.$t("CURRENCY"),field:"currencyAbbreviation",enableRowGroup:!0},{headerName:this.$t("AVAILABLE_BALANCE"),field:"availableBalance",type:"numericColumn",filter:"agNumberColumnFilter",valueFormatter:this.formatNumber,enableValue:!0}]}},g=A,x=Object(u["a"])(g,y,C,!1,null,null,null),k=x.exports,w=e("203c"),$={name:"account-browse",mixins:[w["a"]],components:{AccountListLayout:f,AccountCardLayout:_,AccountPivotLayout:k},data:function(){return{dataLayout:"ListLayout"}},mounted:function(){this.loadAccountTableData()},created:function(){var t=this;this.$eventHub.$on("toolClicked",function(a){t.dataLayout=a})},beforeDestroy:function(){var t=this;this.$eventHub.$off("toolClicked",function(a){t.dataLayout=a})}},E=$,O=Object(u["a"])(E,n,c,!1,null,null,null);a["default"]=O.exports}}]);
//# sourceMappingURL=chunk-0a0a7e41.a9478280.js.map