(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4602a520"],{"3a9f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.alertActive?a("div",{staticClass:"alert-container"},[a("vs-alert",{staticClass:"mb-5",attrs:{active:t.alertActive,color:t.alertVariant,closable:"","icon-pack":"feather","close-icon":"icon-x"},on:{"update:active":function(e){t.alertActive=e}}},[a("p",[t._v(t._s(t.alertMessage))])])],1):t._e(),a("nv-card",[a("div",{staticClass:"nv-row mb-4"},[a("div",{staticClass:"nv-col sm:w-1/2 w-full required"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$t("TYPE_NAME")))]),a("vs-input",{staticClass:"w-full",model:{value:t.typeName,callback:function(e){t.typeName=e},expression:"typeName"}})],1),a("div",{staticClass:"nv-col sm:w-1/2 w-full required"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$t("TYPE_BEHAVIOUR")))]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",placeholder:t.$t("SELECT_VALUE")},model:{value:t.typeBehaviourEnumId,callback:function(e){t.typeBehaviourEnumId=e},expression:"typeBehaviourEnumId"}},t._l(t.typeBehaviours,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.enumId,text:t.description}})}),1)],1)]),a("div",{staticClass:"nv-row mb-4"},[a("div",{staticClass:"nv-col w-full"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$t("EXTERNAL_ID")))]),a("vs-input",{staticClass:"w-full",model:{value:t.externalTypeId,callback:function(e){t.externalTypeId=e},expression:"externalTypeId"}})],1)]),a("div",{staticClass:"nv-row"},[a("div",{staticClass:"nv-col w-full"},[a("div",{staticClass:"flex justify-between"},[a("vs-button",{staticClass:"px-5 py-3",attrs:{color:"primary",type:"border"},on:{click:t.cancel}},[t._v(t._s(t.$t("CANCEL")))]),a("div",{staticClass:"dropdown-button-container"},[a("vs-button",{staticClass:"btnx",attrs:{type:"filled"},on:{click:function(e){return t.createLoanType("browse")}}},[t._v(t._s(t.$t("SUBMIT")))]),a("vs-dropdown",{attrs:{"vs-trigger-click":""}},[a("vs-button",{staticClass:"btn-drop",attrs:{type:"filled",icon:"fa-angle-down","icon-pack":"far"}}),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(e){return t.createLoanType("stay")}}},[a("span",[t._v(t._s(t.$t("SUBMIT_STAY")))])]),a("vs-dropdown-item",{on:{click:function(e){return t.createLoanType("view")}}},[a("span",[t._v(t._s(t.$t("SUBMIT_VIEW")))])])],1)],1)],1)],1)])])])],1)},s=[],r=a("a34a"),i=a.n(r),o=a("946b"),c=a("ea0e"),l=a("a601");function u(t,e,a,n,s,r,i){try{var o=t[r](i),c=o.value}catch(l){return void a(l)}o.done?e(c):Promise.resolve(c).then(n,s)}function p(t){return function(){var e=this,a=arguments;return new Promise(function(n,s){var r=t.apply(e,a);function i(t){u(r,n,s,i,o,"next",t)}function o(t){u(r,n,s,i,o,"throw",t)}i(void 0)})}}var v={name:"loan-type-create",mixins:[o["a"]],data:function(){return{typeName:"",externalTypeId:"",typeBehaviours:[],typeBehaviourEnumId:"LOAN_TYPE_CORP"}},methods:{load:function(){var t=p(i.a.mark(function t(){var e;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this,l["a"].enumerations({enumTypeId:"LoanTypeBehaviour",orderByField:"sequenceNum,description"}).then(function(t){e.typeBehaviours=t.data.enumerationList||[]});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),createLoanType:function(t){var e=this;c["a"].createLoanType({typeName:this.typeName,externalTypeId:this.externalTypeId,typeBehaviourEnumId:this.typeBehaviourEnumId}).then(function(a){200===a.status&&("stay"===t?e.showSuccessAlert(a.data.messages):"view"===t?e.$router.push({name:"ViewLoanType",params:{id:a.data.typeId}}):e.$router.push({name:"BrowseLoanTypes"}))}).catch(function(t){e.showDangerAlert(t.response.data.errors)})},cancel:function(){this.$router.back()}},mounted:function(){this.load()}},d=v,f=a("2877"),h=Object(f["a"])(d,n,s,!1,null,null,null);e["default"]=h.exports},"946b":function(t,e,a){"use strict";var n={data:function(){return{alertActive:!1,alertMessage:this.$t("UNKNOWN_ERROR"),alertVariant:"danger"}},methods:{showAlert:function(t,e){this.alertMessage=e||this.$t("UNKNOWN_ERROR"),this.alertVariant=t,this.alertActive=!0},showSuccessAlert:function(t){this.showAlert("success",t)},showDangerAlert:function(t){this.showAlert("danger",t)},showWarningAlert:function(t){this.showAlert("warning",t)},showInfoAlert:function(t){this.showAlert("info",t)}}};e["a"]=n},a601:function(t,e,a){"use strict";var n=a("36ad");e["a"]={enumerations:function(t){return Object(n["a"])().get("/s1/commons/basic/enumeration",{params:t})}}},ea0e:function(t,e,a){"use strict";var n=a("36ad");e["a"]={loanTypes:function(t){return Object(n["a"])().get("/s1/loan/loanType",{params:t})},createLoanType:function(t){return Object(n["a"])().post("/s1/loan/loanType",t)},modifyLoanType:function(t){return Object(n["a"])().patch("/s1/loan/loanType",t)}}}}]);
//# sourceMappingURL=chunk-4602a520.a24275f0.js.map