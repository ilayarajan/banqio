(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45cd446a"],{"42d7":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("vs-popup",{attrs:{fullscreen:"",title:t.$t("LOCALIZATIONS"),active:t.activeInternal},on:{"update:active":function(a){t.activeInternal=a}}},[e("div",{ref:t.popupRef,staticClass:"vs-con-loading__container"},[t.alertActive?e("div",{staticClass:"alert-container"},[e("vs-alert",{staticClass:"mb-5",attrs:{active:t.alertActive,color:t.alertVariant,closable:"","icon-pack":"feather","close-icon":"icon-x"},on:{"update:active":function(a){t.alertActive=a}}},[e("p",[t._v(t._s(t.alertMessage))])])],1):t._e(),t.localizationFormVisible?e("div",{staticClass:"inline-form p-4 mb-base"},[e("div",{staticClass:"nv-row mb-4"},[e("div",{staticClass:"nv-col w-full"},[e("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:t.$t("LANGUAGE"),placeholder:t.$t("SELECT_VALUE")},model:{value:t.locale,callback:function(a){t.locale=a},expression:"locale"}},t._l(t.languages,function(t,a){return e("vs-select-item",{key:a,attrs:{value:t.locale,text:t.languageName}})}),1)],1)]),e("div",{staticClass:"nv-row mb-4"},[t.textarea?e("div",{staticClass:"nv-col w-full"},[e("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$t("DESCRIPTION")))]),e("vs-textarea",{staticClass:"w-full",model:{value:t.description,callback:function(a){t.description=a},expression:"description"}})],1):e("div",{staticClass:"nv-col w-full"},[e("vs-input",{staticClass:"w-full",attrs:{label:t.$t("LOCALIZED")},model:{value:t.localized,callback:function(a){t.localized=a},expression:"localized"}})],1)]),e("div",{staticClass:"nv-row"},[e("div",{staticClass:"nv-col w-full"},[e("div",{staticClass:"flex justify-between"},[e("vs-button",{staticClass:"px-5 py-3",attrs:{color:"primary",type:"border"},on:{click:t.hideLocalizationForm}},[t._v(t._s(t.$t("CANCEL")))]),e("vs-button",{staticClass:"px-5 py-3",on:{click:t.createLocalizedEntityField}},[t._v(t._s(t.$t("SUBMIT")))])],1)])])]):t._e(),e("vs-table",{staticClass:"mb-base",attrs:{data:t.localizationTableData,noDataText:t.localizationTableNoDataText,sst:!0,search:""},on:{search:t.filterLocalizationTable,sort:t.orderLocalizationTable},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.data;return t._l(i,function(a,l){return e("vs-tr",{key:l,attrs:{data:a}},[e("vs-td",{attrs:{data:i[l].locale}},[t._v("\n            "+t._s(i[l].locale)+"\n          ")]),e("vs-td",{attrs:{data:i[l].localized}},[t._v("\n            "+t._s(i[l].localized)+"\n          ")]),e("vs-td",{attrs:{data:i}},[e("vs-button",{staticClass:"p-3 mr-4",attrs:{color:"danger","icon-pack":"far",icon:"fa-trash-alt"},on:{click:function(a){return t.deleteLocalizedEntityField(i[l])}}},[t._v(t._s(t.$t("DELETE")))])],1)],1)})}}])},[e("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"flex flex-wrap-reverse items-center"},[e("vs-button",{staticClass:"p-3 mr-4",attrs:{disabled:t.localizationFormVisible,color:"primary",type:"filled",icon:"fa-plus","icon-pack":"far"},on:{click:t.showLocalizationForm}},[t._v(t._s(t.$t("ADD")))]),e("vs-button",{staticClass:"p-3 mr-4",attrs:{type:"filled",icon:"fa-sync","icon-pack":"far",disabled:t.localizationTableBusy},on:{click:t.refreshLocalizationTable}},[t._v(t._s(t.$t("REFRESH")))])],1),e("div",{staticClass:"flex justify-end mr-4"},[e("div",{staticClass:"p-2 border border-solid border-grey-light rounded-full d-theme-dark-bg flex items-center justify-between font-medium"},[e("span",{staticClass:"mx-2"},[t._v(t._s(t.localizationTablePagingInfo))]),e("vs-dropdown",{staticClass:"cursor-pointer mr-2",attrs:{"vs-trigger-click":""}},[e("span",{staticClass:"far fa-angle-down text-primary"}),e("vs-dropdown-menu",t._l(t.tablePageOptions,function(a,i){return e("vs-dropdown-item",{key:i,on:{click:function(e){t.localizationTablePerPage=a}}},[e("span",[t._v(t._s(a))])])}),1)],1)],1)])]),e("template",{slot:"thead"},[e("vs-th",{attrs:{"sort-key":"locale"}},[t._v("\n          "+t._s(this.$t("LANGUAGE"))+"\n        ")]),e("vs-th",{attrs:{"sort-key":"localized"}},[t._v("\n          "+t._s(this.$t("LOCALIZED"))+"\n        ")]),e("vs-th",[t._v("\n          "+t._s(this.$t("OPTIONS"))+"\n        ")])],1)],2),e("vs-pagination",{attrs:{total:t.localizationTableTotalPages,max:t.maxPaginationItems},model:{value:t.localizationTableCurrentPage,callback:function(a){t.localizationTableCurrentPage=a},expression:"localizationTableCurrentPage"}})],1)])},l=[],n=e("a34a"),o=e.n(n),s=e("946b"),r=e("93b8"),c=e("89b6"),u=e("b664"),d=e("36ad"),f={localizedEntityFields:function(t,a){return Object(d["a"])().get(t,{params:a})},createLocalizedEntityField:function(t,a){return Object(d["a"])().post(t,a)},deleteLocalizedEntityField:function(t,a){return Object(d["a"])().delete(t,{params:a})}},p={languages:function(t){return Object(d["a"])().get("/s1/commons/basic/language",{params:t})}};function v(t,a,e,i,l,n,o){try{var s=t[n](o),r=s.value}catch(c){return void e(c)}s.done?a(r):Promise.resolve(r).then(i,l)}function h(t){return function(){var a=this,e=arguments;return new Promise(function(i,l){var n=t.apply(a,e);function o(t){v(n,i,l,o,s,"next",t)}function s(t){v(n,i,l,o,s,"throw",t)}o(void 0)})}}var b={name:"nv-localization-popup",mixins:[s["a"],r["a"],u["a"],c["a"]],props:{path:{type:String,default:null,required:!0},fieldName:{type:String,default:null,required:!0},pkValue:{type:String,default:null,required:!0},textarea:{type:Boolean,default:!1},defaultLocalizationTableFilter:{type:String,default:null}},data:function(){return{localizationTableData:[],localizationTableFilter:this.defaultLocalizationTableFilter,localizationTableFilterTimer:null,localizationTableOrderBy:null,localizationTableContainer:this.popupRef,localizationTableBusy:!1,localizationTableTotalRows:0,localizationTableCurrentPage:1,localizationTablePerPage:10,localizationFormVisible:!1,locale:"en",languages:[],localized:""}},computed:{localizationTableNoDataText:function(){return this.localizationTableBusy?this.$t("LOADING")+" ...":this.$t("NO_DATA_FOUND")},localizationTableTotalPages:function(){return Math.ceil(this.localizationTableTotalRows/this.localizationTablePerPage)},localizationTablePagingInfo:function(){return this.pagingInfo(this.localizationTableCurrentPage,this.localizationTablePerPage,this.localizationTableTotalRows)}},methods:{load:function(){var t=h(o.a.mark(function t(){var a;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=this,p.languages({disabled:"N"}).then(function(t){a.languages=t.data.languageList||[]});case 2:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),loadLocalizationTableData:function(t){var a=this;return a.localizationTableBusy=!0,this.localizationTableContainer=t||this.localizationTableContainer,this.startLoading(this.localizationTableContainer),f.localizedEntityFields(this.path,{pageIndex:this.localizationTableCurrentPage-1,pageSize:this.localizationTablePerPage,filter:this.localizationTableFilter,orderByField:this.localizationTableOrderBy,fieldName:this.fieldName,pkValue:this.pkValue}).then(function(t){a.stopLoading(a.localizationTableContainer),a.localizationTableBusy=!1,a.localizationTableTotalRows=t.data.totalRows,a.localizationTableData=t.data.localizedEntityFieldList||[]})},refreshLocalizationTable:function(){this.loadLocalizationTableData()},filterLocalizationTable:function(t){var a=this;this.localizationTableFilter!==t?(clearTimeout(this.localizationTableFilterTimer),this.localizationTableFilterTimer=setTimeout(function(){a.localizationTableFilter=t,a.loadLocalizationTableData()},"750")):clearTimeout(this.localizationTableFilterTimer)},orderLocalizationTable:function(t,a){this.localizationTableOrderBy=(a?"":"-")+t,this.loadLocalizationTableData()},createLocalizedEntityField:function(){var t=this;f.createLocalizedEntityField(this.path,{locale:this.locale,localized:this.localized,fieldName:this.fieldName,pkValue:this.pkValue}).then(function(a){t.refreshLocalizationTable(),t.hideLocalizationForm()}).catch(function(a){t.showDangerAlert(a.response.data.errors)})},deleteLocalizedEntityField:function(t){var a=this;f.deleteLocalizedEntityField(this.path,{locale:t.locale,fieldName:t.fieldName,pkValue:t.pkValue}).then(function(t){200===t.status&&a.refreshLocalizationTable()}).catch(function(t){a.showDangerAlert(t.response.data.errors)})},showLocalizationForm:function(){this.localizationFormVisible=!0},hideLocalizationForm:function(){this.localizationFormVisible=!1}},watch:{localizationTableCurrentPage:function(){this.refreshLocalizationTable()},localizationTablePerPage:function(){this.refreshLocalizationTable()}},mounted:function(){this.load(),this.loadLocalizationTableData()},beforeDestroy:function(){this.$el.remove()}},m=b,z=e("2877"),T=Object(z["a"])(m,i,l,!1,null,null,null);a["a"]=T.exports},4430:function(t,a,e){"use strict";var i=e("36ad");a["a"]={cardStatuses:function(t){return Object(i["a"])().get("/s1/card/cardStatus",{params:t})},createCardStatus:function(t){return Object(i["a"])().post("/s1/card/cardStatus",t)},modifyCardStatus:function(t){return Object(i["a"])().patch("/s1/card/cardStatus",t)}}},"89b6":function(t,a,e){"use strict";var i={props:{popupRef:{type:String,default:"popup"},active:{type:Boolean,default:!1},title:{type:String,default:null}},data:function(){return{activeInternal:!1}},methods:{selectRow:function(t){this.$emit("select-row",t),this.activeInternal=!1}},watch:{active:function(){this.activeInternal=this.active},activeInternal:function(){this.activeInternal||this.$emit("close")}}};a["a"]=i},"946b":function(t,a,e){"use strict";var i={data:function(){return{alertActive:!1,alertMessage:this.$t("UNKNOWN_ERROR"),alertVariant:"danger"}},methods:{showAlert:function(t,a){this.alertMessage=a||this.$t("UNKNOWN_ERROR"),this.alertVariant=t,this.alertActive=!0},showSuccessAlert:function(t){this.showAlert("success",t)},showDangerAlert:function(t){this.showAlert("danger",t)},showWarningAlert:function(t){this.showAlert("warning",t)},showInfoAlert:function(t){this.showAlert("info",t)}}};a["a"]=i},"9bbe":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nv-card",[e("div",{staticClass:"flex flex-wrap-reverse items-center mb-base"},[e("vs-button",{staticClass:"p-3 mr-4",attrs:{color:"primary",type:"filled",icon:"fa-chevron-left","icon-pack":"far"},on:{click:t.cancel}},[t._v(t._s(t.$t("BACK")))]),t.$acl.check("isCardAll")?e("vs-button",{staticClass:"p-3 mr-4",attrs:{color:"primary",type:"filled",icon:"fa-pen","icon-pack":"far"},on:{click:t.modify}},[t._v(t._s(t.$t("MODIFY")))]):t._e()],1),e("div",{staticClass:"row hover"},[e("p",{staticClass:"info-row"},[e("span",[t._v(t._s(t.$t("ID"))+":")]),e("span",[t._v(t._s(t.cardStatus.statusId))])]),e("p",{staticClass:"info-row"},[e("span",[t._v(t._s(t.$t("STATUS_NAME"))+":")]),e("span",[e("nv-localization-popup",{attrs:{active:t.popupActive,path:"/s1/card/cardStatus/localization",popupRef:"localizationModal",pkValue:this.$route.params.id,fieldName:"statusName"},on:{close:function(a){t.popupActive=!1}}}),e("vs-button",{staticClass:"m-0 p-0",attrs:{color:"primary",type:"flat"},on:{click:function(a){t.popupActive=!0}}},[e("i",{staticClass:"far fa-globe-africa mr-1 text-primary"})]),t._v("\n        "+t._s(t.cardStatus.statusName)+"\n      ")],1)]),e("p",{staticClass:"info-row"},[e("span",[t._v(t._s(t.$t("STATUS_BEHAVIOUR"))+":")]),e("span",[t._v(t._s(t.cardStatus.statusBehaviourDescription))])]),e("p",{staticClass:"info-row"},[e("span",[t._v(t._s(t.$t("EXTERNAL_ID"))+":")]),e("span",[t._v(t._s(t._f("placeholder")(t.cardStatus.externalStatusId,"-")))])]),e("p",{staticClass:"info-row"},[e("span",[t._v(t._s(t.$t("CREATION_DATE"))+":")]),e("span",[t._v(t._s(t._f("formatUnixTimestamp")(t.cardStatus.creationDate)))])])])])},l=[],n=e("a34a"),o=e.n(n),s=e("4430"),r=e("42d7");function c(t,a,e,i,l,n,o){try{var s=t[n](o),r=s.value}catch(c){return void e(c)}s.done?a(r):Promise.resolve(r).then(i,l)}function u(t){return function(){var a=this,e=arguments;return new Promise(function(i,l){var n=t.apply(a,e);function o(t){c(n,i,l,o,s,"next",t)}function s(t){c(n,i,l,o,s,"throw",t)}o(void 0)})}}var d={name:"card-status-view",components:{NvLocalizationPopup:r["a"]},data:function(){return{cardStatus:{},popupActive:!1}},methods:{load:function(){var t=u(o.a.mark(function t(){var a;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=this,s["a"].cardStatuses({statusId:this.$route.params.id}).then(function(t){a.cardStatus=t.data.cardStatusList[0]||{}});case 2:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),cancel:function(){this.$router.back()},modify:function(){this.$router.push({name:"ModifyCardStatus",params:{id:this.$route.params.id}})}},mounted:function(){this.load()}},f=d,p=e("2877"),v=Object(p["a"])(f,i,l,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-45cd446a.d166c34d.js.map