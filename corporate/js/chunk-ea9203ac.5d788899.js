(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea9203ac"],{"0755":function(t,a,n){t.exports=n.p+"img/login-logo.8bbeec74.png"},"2b36":function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("footer",{staticClass:"the-footer flex-wrap justify-between",class:t.classes},[n("span",[t._v(t._s(t.$t("COPYRIGHT_OWNER").replace("#year#",(new Date).getFullYear())))]),n("span",{staticClass:"text-grey-dark"},[t._v(t._s(t.appVersion))])])},o=[],e={name:"app-footer",props:{classes:{type:String}},data:function(){return{appVersion:"1.0.19"}}},i=e,r=n("2877"),l=Object(r["a"])(i,s,o,!1,null,null,null);a["a"]=l.exports},4312:function(t,a,n){"use strict";var s={methods:{loginLogo:function(){if(this.$store.state.branding.loginLogoAvailable){var t="",a=this.$store.getters.appId;return"".concat(t,"/apps/Connect/DownloadPublic/downloadAppBrandingLoginLogo?appId=").concat(a)}return n("0755")},loginBackground:function(){if(this.$store.state.branding.loginBackgroundAvailable){var t="",a=this.$store.getters.appId;return"".concat(t,"/apps/Connect/DownloadPublic/downloadAppBrandingLoginBackground?appId=").concat(a)}return n("ecd9")},loginBackgroundPosition:function(){return this.$store.state.branding.loginBackgroundPosition},logo:function(){if(this.$store.state.branding.logoAvailable){var t="",a=this.$store.getters.appId;return"".concat(t,"/apps/Connect/DownloadPublic/downloadAppBrandingLogo?appId=").concat(a)}return n("a4ef")},logoWidth:function(){return(this.$store.state.branding.loginLogoSize||200)+"px"}}};a["a"]=s},"609d":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"h-screen w-full bg-page page-login",style:{backgroundImage:"url('"+t.loginBackground()+"')",backgroundPosition:""+t.loginBackgroundPosition()},attrs:{id:"page-login"}},[n("div",{staticClass:"top-bar-wrap bg-white"},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"flex justify-between top-bar py-3"},[n("div"),n("div",[n("router-link",{staticClass:"text-dark",attrs:{to:{name:"Login",params:{}}}},[t._v(t._s(t.$t("LOGIN")))])],1)])])]),n("div",{staticClass:"container mx-auto login-parent-container"},[n("div",{staticClass:"login-container"},[n("nv-card",{staticClass:"bg-loginLogoBackgroundColor mb-45"},[n("div",{attrs:{slot:"no-body"},slot:"no-body"},[n("div",{staticClass:"nv-row"},[n("div",{staticClass:"nv-col sm:w-full self-center"},[n("div",{staticClass:"vs-con-loading__container p-8",attrs:{id:"loading-container"}},[n("div",{staticClass:"nv-card__title text-center"},[n("h2",{staticClass:"mb-4"},[n("img",{staticClass:"m-auto",style:{width:""+t.logoWidth()},attrs:{src:t.loginLogo(),alt:"login"}})]),n("h4",[t._v(t._s(t.$t("INTRO_MSG")))])]),t.alertActive?n("div",{staticClass:"alert-container mt-base"},[n("vs-alert",{staticClass:"m-0",attrs:{active:t.alertActive,color:t.alertVariant,closable:"","icon-pack":"feather","close-icon":"icon-x"},on:{"update:active":function(a){t.alertActive=a}}},[n("p",[t._v(t._s(t.alertMessage))])])],1):t._e()])])])])])],1)]),n("app-footer")],1)},o=[],e=n("2b36"),i=n("4312"),r=n("93b8"),l=n("946b"),c={name:"contact-us",mixins:[l["a"],i["a"],r["a"]],components:{AppFooter:e["a"]}},d=c,g=n("2877"),u=Object(g["a"])(d,s,o,!1,null,null,null);a["default"]=u.exports},"93b8":function(t,a,n){"use strict";var s={data:function(){return{loaders:{}}},methods:{startLoading:function(t){this.loaders[t]?this.loaders[t]=++this.loaders[t]:(this.loaders[t]=1,this.$refs.hasOwnProperty(t)?this.$vs.loading({container:this.$refs[t]}):document.getElementById(t)&&this.$vs.loading({container:"#"+t}))},stopLoading:function(t){this.loaders[t]&&(this.loaders[t]=--this.loaders[t],0===this.loaders[t]&&(this.$refs.hasOwnProperty(t)?this.$vs.loading.close(this.$refs[t]):document.getElementById(t)&&this.$vs.loading.close("#"+t+" > .con-vs-loading")))}}};a["a"]=s},"946b":function(t,a,n){"use strict";var s={data:function(){return{alertActive:!1,alertMessage:this.$t("UNKNOWN_ERROR"),alertVariant:"danger"}},methods:{showAlert:function(t,a){this.alertMessage=a||this.$t("UNKNOWN_ERROR"),this.alertVariant=t,this.alertActive=!0},showSuccessAlert:function(t){this.showAlert("success",t)},showDangerAlert:function(t){this.showAlert("danger",t)},showWarningAlert:function(t){this.showAlert("warning",t)},showInfoAlert:function(t){this.showAlert("info",t)}}};a["a"]=s},a4ef:function(t,a,n){t.exports=n.p+"img/logo.0328b96b.png"},ecd9:function(t,a,n){t.exports=n.p+"img/background.187724bb.jpg"}}]);
//# sourceMappingURL=chunk-ea9203ac.5d788899.js.map