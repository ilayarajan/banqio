(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f933023a"],{"80d0":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row hover vs-con-loading__container",attrs:{id:"loading-container"}},[t.alertActive?a("div",{staticClass:"alert-container"},[a("vs-alert",{staticClass:"mb-5",attrs:{active:t.alertActive,color:t.alertVariant,closable:"","icon-pack":"feather","close-icon":"icon-x"},on:{"update:active":function(s){t.alertActive=s}}},[a("p",[t._v(t._s(t.alertMessage))])])],1):t._e(),a("nv-card",{staticClass:"mb-base"},[a("h4",{staticClass:"mb-3"},[t._v(t._s(t.$t("PERSONAL_INFORMATION")))]),a("div",{staticClass:"flex flex-wrap-reverse items-center mb-base"},[a("vs-button",{staticClass:"p-3 mr-4",attrs:{color:"primary",type:"filled",icon:"fa-pen","icon-pack":"far"},on:{click:t.modify}},[t._v(t._s(t.$t("MODIFY")))]),a("vs-button",{staticClass:"p-3 mr-4",attrs:{color:"primary",type:"filled",icon:"fa-key","icon-pack":"far"},on:{click:t.changePassword}},[t._v(t._s(t.$t("CHANGE_PASSWORD")))])],1),a("div",[a("p",{staticClass:"info-row"},[a("span",[t._v(t._s(t.$t("SALUTATION"))+":")]),a("span",[t._v(t._s(t._f("placeholder")(t.user.salutation,"-")))])]),a("p",{staticClass:"info-row"},[a("span",[t._v(t._s(t.$t("FIRST_NAME"))+":")]),a("span",[t._v(t._s(t._f("placeholder")(t.user.firstName,"-")))])]),a("p",{staticClass:"info-row"},[a("span",[t._v(t._s(t.$t("MIDDLE_NAME"))+":")]),a("span",[t._v(t._s(t._f("placeholder")(t.user.middleName,"-")))])]),a("p",{staticClass:"info-row"},[a("span",[t._v(t._s(t.$t("LAST_NAME"))+":")]),a("span",[t._v(t._s(t._f("placeholder")(t.user.lastName,"-")))])]),a("p",{staticClass:"info-row"},[a("span",[t._v(t._s(t.$t("SUFFIX"))+":")]),a("span",[t._v(t._s(t._f("placeholder")(t.user.suffix,"-")))])]),a("p",{staticClass:"info-row"},[a("span",[t._v(t._s(t.$t("MOTHERS_MAIDEN_NAME"))+":")]),a("span",[t._v(t._s(t._f("placeholder")(t.user.mothersMaidenName,"-")))])])])]),a("nv-card",{staticClass:"mb-base"},[a("h4",{staticClass:"mb-3"},[t._v(t._s(t.$t("ACCOUNT_INFORMATION")))]),a("div",{staticClass:"row hover"},[a("p",{staticClass:"info-row"},[a("span",[t._v(t._s(t.$t("USERNAME"))+":")]),a("span",[t._v(t._s(t._f("placeholder")(t.$store.state.user.username,"-")))])]),a("p",{staticClass:"info-row"},[a("span",[t._v(t._s(t.$t("LAST_LOGIN_DATE"))+":")]),a("span",[t._v(t._s(t._f("formatUnixDate")(t.user.lastLoginDate)))])])])]),a("nv-card",{staticClass:"mb-base"},[a("h4",{staticClass:"mb-3"},[t._v(t._s(t.$t("PREFERENCES")))]),a("div",{staticClass:"flex justify-between"},[a("span",[t._v(t._s(t.$t("OTP_CHANNEL"))+":")]),a("ul",{staticClass:"centerx flex"},[a("li",[a("vs-radio",{attrs:{"vs-value":"SMS"},on:{change:t.updateOtpChannel},model:{value:t.otpChannel,callback:function(s){t.otpChannel=s},expression:"otpChannel"}},[t._v(t._s(t.$t("SMS")))])],1),a("li",[a("vs-radio",{attrs:{"vs-value":"EMAIL"},on:{change:t.updateOtpChannel},model:{value:t.otpChannel,callback:function(s){t.otpChannel=s},expression:"otpChannel"}},[t._v(t._s(t.$t("EMAIL")))])],1),a("li",[a("vs-radio",{attrs:{"vs-value":"BOTH"},on:{change:t.updateOtpChannel},model:{value:t.otpChannel,callback:function(s){t.otpChannel=s},expression:"otpChannel"}},[t._v(t._s(t.$t("BOTH")))])],1)])])])],1)},e=[],o=a("a34a"),i=a.n(o),r=a("946b"),l=a("93b8"),c=a("19e6");function h(t,s,a,n,e,o,i){try{var r=t[o](i),l=r.value}catch(c){return void a(c)}r.done?s(l):Promise.resolve(l).then(n,e)}function d(t){return function(){var s=this,a=arguments;return new Promise(function(n,e){var o=t.apply(s,a);function i(t){h(o,n,e,i,r,"next",t)}function r(t){h(o,n,e,i,r,"throw",t)}i(void 0)})}}var p={name:"profile-view",mixins:[r["a"],l["a"]],data:function(){return{user:{},otpChannel:"SMS"}},methods:{load:function(){var t=d(i.a.mark(function t(){var s;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=this,this.startLoading("loading-container"),c["a"].profile({userId:this.$store.state.user.userId}).then(function(t){s.user=t.data||{}}),c["a"].preference({}).then(function(t){s.stopLoading("loading-container");var a=t.data||{};s.otpChannel=a["banqio.otp.channel"]||"SMS"});case 4:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),updateOtpChannel:function(){var t=this;this.startLoading("loading-container"),c["a"].updateUserOtpChannel({otpChannel:this.otpChannel}).then(function(s){t.stopLoading("loading-container"),t.showSuccessAlert(s.data.messages)}).catch(function(s){t.stopLoading("loading-container"),t.showDangerAlert(s.response.data.errors)})},changePassword:function(){this.$router.push({name:"ChangePassword",params:{id:this.$route.params.id}})},modify:function(){this.$router.push({name:"ModifyProfile",params:{id:this.$route.params.id}})}},mounted:function(){this.load()}},u=p,f=a("2877"),v=Object(f["a"])(u,n,e,!1,null,null,null);s["default"]=v.exports},"93b8":function(t,s,a){"use strict";var n={data:function(){return{loaders:{}}},methods:{startLoading:function(t){this.loaders[t]?this.loaders[t]=++this.loaders[t]:(this.loaders[t]=1,this.$refs.hasOwnProperty(t)?this.$vs.loading({container:this.$refs[t]}):document.getElementById(t)&&this.$vs.loading({container:"#"+t}))},stopLoading:function(t){this.loaders[t]&&(this.loaders[t]=--this.loaders[t],0===this.loaders[t]&&(this.$refs.hasOwnProperty(t)?this.$vs.loading.close(this.$refs[t]):document.getElementById(t)&&this.$vs.loading.close("#"+t+" > .con-vs-loading")))}}};s["a"]=n},"946b":function(t,s,a){"use strict";var n={data:function(){return{alertActive:!1,alertMessage:this.$t("UNKNOWN_ERROR"),alertVariant:"danger"}},methods:{showAlert:function(t,s){this.alertMessage=s||this.$t("UNKNOWN_ERROR"),this.alertVariant=t,this.alertActive=!0},showSuccessAlert:function(t){this.showAlert("success",t)},showDangerAlert:function(t){this.showAlert("danger",t)},showWarningAlert:function(t){this.showAlert("warning",t)},showInfoAlert:function(t){this.showAlert("info",t)}}};s["a"]=n}}]);
//# sourceMappingURL=chunk-f933023a.2d2ee1da.js.map