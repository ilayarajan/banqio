(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c201e4c"],{"353f":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.alertActive?s("div",{staticClass:"alert-container"},[s("vs-alert",{staticClass:"mb-5",attrs:{active:t.alertActive,color:t.alertVariant,closable:"","icon-pack":"feather","close-icon":"icon-x"},on:{"update:active":function(e){t.alertActive=e}}},[s("p",[t._v(t._s(t.alertMessage))])])],1):t._e(),s("nv-card",[s("div",{staticClass:"nv-row mb-4"},[s("div",{staticClass:"nv-col sm:w-1/2 w-full required"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$t("GROUP_NAME")))]),s("vs-input",{staticClass:"w-full",model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),s("div",{staticClass:"nv-col sm:w-1/2 w-full required"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$t("TYPE")))]),s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",placeholder:t.$t("SELECT_VALUE")},model:{value:t.groupTypeEnumId,callback:function(e){t.groupTypeEnumId=e},expression:"groupTypeEnumId"}},t._l(t.groupTypes,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.enumId,text:t.description}})}),1)],1)]),s("div",{staticClass:"nv-row mb-4"},[s("div",{staticClass:"nv-col w-full"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$t("IPS_ALLOWED")))]),s("vs-input",{staticClass:"w-full",model:{value:t.ipAllowed,callback:function(e){t.ipAllowed=e},expression:"ipAllowed"}})],1)]),s("div",{staticClass:"nv-row"},[s("div",{staticClass:"nv-col w-full"},[s("div",{staticClass:"flex justify-between"},[s("vs-button",{staticClass:"px-5 py-3",attrs:{color:"primary",type:"border"},on:{click:t.cancel}},[t._v(t._s(t.$t("CANCEL")))]),s("div",{staticClass:"dropdown-button-container"},[s("vs-button",{staticClass:"btnx",attrs:{type:"filled"},on:{click:function(e){return t.createUserGroup("browse")}}},[t._v(t._s(t.$t("SUBMIT")))]),s("vs-dropdown",{attrs:{"vs-trigger-click":""}},[s("vs-button",{staticClass:"btn-drop",attrs:{type:"filled",icon:"fa-angle-down","icon-pack":"far"}}),s("vs-dropdown-menu",[s("vs-dropdown-item",{on:{click:function(e){return t.createUserGroup("stay")}}},[s("span",[t._v(t._s(t.$t("SUBMIT_STAY")))])]),s("vs-dropdown-item",{on:{click:function(e){return t.createUserGroup("view")}}},[s("span",[t._v(t._s(t.$t("SUBMIT_VIEW")))])])],1)],1)],1)],1)])])])],1)},r=[],a=s("a34a"),i=s.n(a),o=s("946b"),c=s("19e6"),l=s("a601");function u(t,e,s,n,r,a,i){try{var o=t[a](i),c=o.value}catch(l){return void s(l)}o.done?e(c):Promise.resolve(c).then(n,r)}function p(t){return function(){var e=this,s=arguments;return new Promise(function(n,r){var a=t.apply(e,s);function i(t){u(a,n,r,i,o,"next",t)}function o(t){u(a,n,r,i,o,"throw",t)}i(void 0)})}}var d={name:"user-group-create",mixins:[o["a"]],data:function(){return{groupTypes:[],groupTypeEnumId:"BNQ_CRP_GRP",ipAllowed:"",description:""}},methods:{load:function(){var t=p(i.a.mark(function t(){var e;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this,l["a"].enumerations({enumTypeId:"UserGroupType",ignoreEnumId:"UgtMoquiAdmin,UgtRemoteSystems",orderByField:"sequenceNum,description"}).then(function(t){e.groupTypes=t.data.enumerationList||[]});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),createUserGroup:function(t){var e=this;c["a"].createUserGroup({groupTypeEnumId:this.groupTypeEnumId,ipAllowed:this.ipAllowed,description:this.description}).then(function(s){200===s.status&&("stay"===t?e.showSuccessAlert(s.data.messages):"view"===t?e.$router.push({name:"ViewUserGroup",params:{id:s.data.userGroupId}}):e.$router.push({name:"BrowseUserGroups"}))}).catch(function(t){e.showDangerAlert(t.response.data.errors)})},cancel:function(){this.$router.back()}},mounted:function(){this.load()}},v=d,f=s("2877"),w=Object(f["a"])(v,n,r,!1,null,null,null);e["default"]=w.exports},"946b":function(t,e,s){"use strict";var n={data:function(){return{alertActive:!1,alertMessage:this.$t("UNKNOWN_ERROR"),alertVariant:"danger"}},methods:{showAlert:function(t,e){this.alertMessage=e||this.$t("UNKNOWN_ERROR"),this.alertVariant=t,this.alertActive=!0},showSuccessAlert:function(t){this.showAlert("success",t)},showDangerAlert:function(t){this.showAlert("danger",t)},showWarningAlert:function(t){this.showAlert("warning",t)},showInfoAlert:function(t){this.showAlert("info",t)}}};e["a"]=n},a601:function(t,e,s){"use strict";var n=s("36ad");e["a"]={enumerations:function(t){return Object(n["a"])().get("/s1/commons/basic/enumeration",{params:t})}}}}]);
//# sourceMappingURL=chunk-9c201e4c.c3382ece.js.map