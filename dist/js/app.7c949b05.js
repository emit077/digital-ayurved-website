(function(){var e={2796:function(e,t,n){"use strict";var o=n(9242),a=n(3396),i=n(7718),r=n(3140);function s(e,t,n,o,s,l){const c=(0,a.up)("app-bar"),u=(0,a.up)("router-view"),d=(0,a.up)("app-footer"),m=(0,a.up)("loading-screen"),f=(0,a.up)("snack-bar");return(0,a.wg)(),(0,a.j4)(i.q,{theme:"theme2",class:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c),(0,a.Wm)(r.O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1}),(0,a.Wm)(d),(0,a.Wm)(m),(0,a.Wm)(f)])),_:1})}var l=n(7139),c=n(870),u=n(3289),d=n(4215);const m={class:"app-padding py-3 d-flex align-center",id:"app-bar"},f={key:0,class:"d-inline-flex align-center w-25"},_=["src","width"],p={key:1,class:"d-inline-block text-right w-75"},g={key:0},h={key:0,class:"ml-8 d-inline-block"},b=["onClick"],E={key:1,class:"ml-8 d-inline-block"},v={href:"https://app.digitalayurved.in/"},T=(0,a.Uk)(" Login"),y={key:1},k=(0,a.Uk)("mdi-close"),S=(0,a.Uk)("mdi-menu"),w={key:0,class:"my-2 d-inline-block"},O=["onClick"],A={class:""},I={key:1,class:"my-2 d-inline-block"},C={href:"https://app.digitalayurved.in/"},D=(0,a.Uk)(" Login");function R(e,t,i,r,s,R){const N=(0,a.up)("router-link"),L=(0,a.up)("center");return(0,a.wg)(),(0,a.iD)("div",m,[s.header?((0,a.wg)(),(0,a.iD)("div",f,[(0,a.Wm)(N,{to:"/",class:"router-link"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:n(6536)("./"+this.$vuetify.theme.global.name+"/header-logo.svg"),alt:"logo",class:"app-logo",width:e.$vuetify.display.mobile?130:"170"},null,8,_)])),_:1})])):(0,a.kq)("",!0),s.header?((0,a.wg)(),(0,a.iD)("div",p,[e.$vuetify.display.mobile?((0,a.wg)(),(0,a.iD)("div",y,[(0,a.Wm)(d.T,{modelValue:s.menu,"onUpdate:modelValue":t[0]||(t[0]=e=>s.menu=e),transition:"slide-y-transition"},{activator:(0,a.w5)((({props:e})=>[s.menu?((0,a.wg)(),(0,a.j4)(u.t,(0,a.dG)({key:0,color:"theme-stroke-1",size:"x-large"},e),{default:(0,a.w5)((()=>[k])),_:2},1040)):((0,a.wg)(),(0,a.j4)(u.t,(0,a.dG)({key:1,color:"theme-stroke-1",size:"x-large"},e),{default:(0,a.w5)((()=>[S])),_:2},1040))])),default:(0,a.w5)((()=>[(0,a._)("div",{class:"text-center py-4 mobile-navigation-menu",style:(0,l.j5)(s.menu_style)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.nav_link_list,((t,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:"align-center text-theme-stroke-2"},[t.link&&e.$route.name==t.link_page?((0,a.wg)(),(0,a.iD)("span",w,[(0,a._)("a",{href:"#",onClick:(0,o.iM)((n=>e.onLinkClick(t.link)),["prevent"]),class:"text-center router-link"},[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a._)("span",A,(0,l.zw)(t.title),1)])),_:2},1024)],8,O)])):t.route_name?((0,a.wg)(),(0,a.iD)("span",I,[(0,a.Wm)(N,{class:"router-link",to:{name:t.route_name}},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a._)("span",{class:(0,l.C_)(["",e.$route.name==t.route_name?"text-un":""])},(0,l.zw)(t.title),3)])),_:2},1024)])),_:2},1032,["to"])])):(0,a.kq)("",!0)])))),128)),(0,a._)("a",C,[(0,a.Wm)(c.T,{color:"theme-stroke-1",variant:"outlined",class:"send-btn mt-3"},{default:(0,a.w5)((()=>[D])),_:1})])],4)])),_:1},8,["modelValue"])])):((0,a.wg)(),(0,a.iD)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.nav_link_list,((t,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:"d-inline-block align-center"},[t.link&&e.$route.name==t.link_page?((0,a.wg)(),(0,a.iD)("span",h,[(0,a._)("a",{href:"#",onClick:(0,o.iM)((n=>e.onLinkClick(t.link)),["prevent"]),class:"text-center router-link"},[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a._)("span",{class:(0,l.C_)(["un","nav-link-"+e.$vuetify.theme.global.name])},(0,l.zw)(t.title),3)])),_:2},1024)],8,b)])):t.route_name?((0,a.wg)(),(0,a.iD)("span",E,[(0,a.Wm)(N,{class:"router-link",to:{name:t.route_name}},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a._)("span",{class:(0,l.C_)(["un",e.$route.name==t.route_name?"text-un nav-link-"+e.$vuetify.theme.global.name:"nav-link-"+e.$vuetify.theme.global.name])},(0,l.zw)(t.title),3)])),_:2},1024)])),_:2},1032,["to"])])):(0,a.kq)("",!0)])))),128)),(0,a._)("a",v,[(0,a.Wm)(c.T,{color:"theme-stroke-1",variant:"outlined",class:"send-btn ml-5"},{default:(0,a.w5)((()=>[T])),_:1})])]))])):(0,a.kq)("",!0)])}var N={name:"LandingPageVue",components:{},data(){return{header:!1,bar_height:0,menu_style:{},menu:!1}},mounted(){this.menu_style={width:screen.width-20+"px !important"};const e=document.getElementById("app-bar");e.style.height=this.$vuetify.display.mobile?"60px":"100px",document.addEventListener("scroll",function(){document.scrollingElement.scrollTop&&(this.$vuetify.display.mobile?e.style.height=document.scrollingElement.scrollTop<50?"60px":"50px":e.style.height=document.scrollingElement.scrollTop<50?"100px":"60px",e.style.backgroundColor=document.scrollingElement.scrollTop<screen.height?"rgb(var(--v-theme-theme-fill-1), 1)":"rgb(var(--v-theme-theme-fill-1), 0.8)")}.bind(this)),setTimeout((()=>{this.header=!0}),500)},methods:{}},L=n(89);const U=(0,L.Z)(N,[["render",R],["__scopeId","data-v-26414d18"]]);var x=U,M=n(4075),P=n(1666),B=n(6824),F=n(8521);const W=e=>((0,a.dD)("data-v-d66d9da8"),e=e(),(0,a.Cn)(),e),j={class:"px-5"},$=["src"],H=["href"],G={class:"px-3"},V={class:"link-style"},z={key:0,class:"d-inline-block pb-2"},Y=["onClick"],q={class:"hover-underline"},K={key:1,class:"d-inline-block pb-2"},Q={class:"px-3"},Z={class:"text-white d-flex align-center mb-3"},J=["src"],X={class:"text-white mb-3"},ee=["src"],te={class:"text-white"},ne={class:"d-inline-block",style:{width:"30px","vertical-align":"top"}},oe=(0,a.Uk)("mdi-map-marker"),ae={class:"d-inline-block",style:{width:"90%"}},ie=W((()=>(0,a._)("p",{class:"text-caption text-center mt-4",style:{color:"rgb(var(--v-theme-surface),0.5)"}},null,-1))),re=W((()=>(0,a._)("p",{class:"text-caption text-center mt-1",style:{color:"rgb(var(--v-theme-surface),0.5)"}},[(0,a.Uk)(" Designed & developed with ❤️ by "),(0,a._)("a",{href:"https://emit077.github.io/",class:"text-white font-weight-bold text-decoration-underline"},"Amit Kumar Sahu")],-1)));function se(e,t,i,r,s,c){const d=(0,a.up)("router-link"),m=(0,a.up)("center");return e.footer?((0,a.wg)(),(0,a.j4)(P.c,{key:0,app:"",absolute:"",class:(0,l.C_)(["text-white text-center footer-wrapper d-block bg-dark mt-n1",e.$vuetify.display.mobile?"py-0  ":"pt-10 pb-4"])},{default:(0,a.w5)((()=>[(0,a.Wm)(B.o,{justify:"center",class:"py-10","no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(F.D,{md:"3",cols:"12",class:"text-center py-5"},{default:(0,a.w5)((()=>[(0,a._)("div",j,[(0,a.Wm)(d,{to:"/",class:"router-link"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:n(3350)("./"+this.$vuetify.theme.global.name+"/footer-logo.svg"),alt:"logo",class:"app-logo"},null,8,$)])),_:1}),(0,a.Wm)(M.J,{class:"my-4",color:"rgb(var(--v-theme-secondary2), 0.3)"}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.contact_list,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"d-inline-flex mx-2",key:t},[(0,a._)("a",{href:e.link,target:"_blank",class:""},[(0,a.Wm)(u.t,{class:"social-icon",size:"32"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.icon),1)])),_:2},1024)],8,H)])))),128))])])),_:1}),(0,a.Wm)(F.D,{md:"3",cols:"12",class:"text-left py-5"},{default:(0,a.w5)((()=>[(0,a._)("div",G,[(0,a._)("p",{class:(0,l.C_)(["text-theme-stroke-2 mb-3",e.$vuetify.display.mobile?"text-subtitle-1 ":"text-h6"])}," Quick Links",2),(0,a._)("ol",V,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.nav_link_list,((t,n)=>((0,a.wg)(),(0,a.iD)("li",{key:n,class:"text-white"},[t.link&&e.$route.name==t.link_page?((0,a.wg)(),(0,a.iD)("span",z,[(0,a._)("a",{href:"#",onClick:(0,o.iM)((n=>e.onLinkClick(t.link)),["prevent"]),class:"router-link"},[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a._)("span",q,(0,l.zw)(t.title),1)])),_:2},1024)],8,Y)])):t.route_name?((0,a.wg)(),(0,a.iD)("span",K,[(0,a.Wm)(d,{class:"router-link",to:{name:t.route_name}},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a._)("span",{class:(0,l.C_)(["hover-underline text-white",e.$route.name==t.route_name?"text-un":""])},(0,l.zw)(t.title),3)])),_:2},1024)])),_:2},1032,["to"])])):(0,a.kq)("",!0)])))),128))])])])),_:1}),(0,a.Wm)(F.D,{md:"4",cols:"12",class:"text-left py-5"},{default:(0,a.w5)((()=>[(0,a._)("div",Q,[(0,a._)("p",{class:(0,l.C_)(["text-theme-stroke-2 mb-3",e.$vuetify.display.mobile?"text-subtitle-1 ":"text-h6"])}," Quick Contact",2),(0,a._)("div",Z,[(0,a._)("img",{src:n(5035)("./"+this.$vuetify.theme.global.name+"/call.svg"),alt:"",class:"d-inline-flex mr-3"},null,8,J),(0,a.Uk)((0,l.zw)(e.contact_number),1)]),(0,a._)("div",X,[(0,a._)("img",{src:n(39)("./"+this.$vuetify.theme.global.name+"/mail.svg"),alt:"",class:"d-inline-flex mr-3"},null,8,ee),(0,a.Uk)((0,l.zw)(e.contact_email),1)]),(0,a._)("div",te,[(0,a._)("div",ne,[(0,a.Wm)(u.t,{class:"text-white ml-n1"},{default:(0,a.w5)((()=>[oe])),_:1})]),(0,a._)("div",ae,[(0,a._)("p",null,(0,l.zw)(e.clinic_address),1)])])])])),_:1})])),_:1}),(0,a.Wm)(M.J,{color:"rgb(var(--v-theme-surface),0.1)"}),ie,re])),_:1},8,["class"])):(0,a.kq)("",!0)}var le={name:"AppFooter",data:()=>({footer:!1,contact_number:"+91 77240 30550",contact_email:"digitalayurved@gmail.com",clinic_address:"Bus Stand Pawani, Dist. Sarangarh-Bilaigarh (CG)",contact_list:[{icon:"mdi-facebook",link:"https://www.facebook.com/digitalayurved"},{icon:"mdi-twitter",link:"https://twitter.com/DigitalAyurved"},{icon:"mdi-instagram",link:"https://www.instagram.com/digitalayurved"},{icon:"mdi-youtube",link:"https://www.youtube.com/@digitalayurved181"}]}),mounted(){setTimeout((()=>{this.footer=!0}),500)},methods:{}};const ce=(0,L.Z)(le,[["render",se],["__scopeId","data-v-d66d9da8"]]);var ue=ce,de=n(8423);const me=e=>((0,a.dD)("data-v-8c60bd1c"),e=e(),(0,a.Cn)(),e),fe={class:"text-center"},_e=me((()=>(0,a._)("div",{class:"loader"},[(0,a._)("div",{class:"spin"}),(0,a._)("div",{class:"bounce"})],-1))),pe=me((()=>(0,a._)("h1",{class:"text-white"},"DigitalAyurved",-1)));function ge(e,t,n,o,i,r){return(0,a.wg)(),(0,a.iD)("div",fe,[(0,a.Wm)(de.y,{"model-value":this.$store.state.page_loading,"close-on-content-click":!1,transition:"scroll-y-transition",class:"d-flex align-center justify-center over-body"},{default:(0,a.w5)((()=>[_e,pe])),_:1},8,["model-value"])])}var he={data:()=>({})};const be=(0,L.Z)(he,[["render",ge],["__scopeId","data-v-8c60bd1c"]]);var Ee=be,ve=n(9671);const Te={class:"text--white"};function ye(e,t,n,o,i,r){return(0,a.wg)(),(0,a.j4)(ve.v,{modelValue:e.getSnackbar.flag,"onUpdate:modelValue":t[1]||(t[1]=t=>e.getSnackbar.flag=t),color:e.getSnackbar.color,timeout:e.timeout,position:"",location:"top right"},{actions:(0,a.w5)((()=>[(0,a.Wm)(c.T,{size:"small",text:"",fab:"",icon:"mdi-close",onClick:t[0]||(t[0]=t=>e.getSnackbar.flag=!e.getSnackbar.flag)})])),default:(0,a.w5)((()=>[(0,a._)("b",Te,(0,l.zw)(e.getSnackbar.text),1)])),_:1},8,["modelValue","color","timeout"])}var ke=n(65),Se={computed:{...(0,ke.Se)({getSnackbar:"getSnackbar"})},data:()=>({timeout:2e3})};const we=(0,L.Z)(Se,[["render",ye]]);var Oe=we,Ae={name:"App",components:{AppBar:x,AppFooter:ue,LoadingScreen:Ee,SnackBar:Oe},data:()=>({}),mounted(){const e=document.getElementById("app");document.addEventListener("scroll",(function(){e.style.setProperty("--scroll",window.pageYOffset/(document.body.offsetHeight-window.innerHeight))}))}};const Ie=(0,L.Z)(Ae,[["render",s]]);var Ce=Ie,De=n(678);const Re=[{path:"/",name:"home",meta:{title:"Home"},component:()=>Promise.all([n.e(137),n.e(177)]).then(n.bind(n,2827))},{path:"/about-us",name:"about_us",meta:{title:"About Us"},component:()=>n.e(443).then(n.bind(n,198))},{path:"/contact-us",name:"contact_us",meta:{title:"Contact Us"},component:()=>n.e(443).then(n.bind(n,8842))},{path:"/blogs",name:"blogs",meta:{title:"Blogs"},component:()=>n.e(861).then(n.bind(n,3105))},{path:"/blogs/post/:id",name:"blog_feed",meta:{title:"Post"},component:()=>n.e(861).then(n.bind(n,8278))},{path:"/inquiry",name:"inquiry",meta:{title:"inquiry"},component:()=>Promise.all([n.e(137),n.e(678)]).then(n.bind(n,907))}],Ne=(0,De.p7)({history:(0,De.PO)("/"),routes:Re,scrollBehavior(){return{top:0}}});Ne.beforeEach(((e,t,n)=>{n(),e&&e.meta&&e.meta.title&&(window.document.title="DigitalAyurved | "+e.meta.title)}));var Le=Ne,Ue=(0,ke.MT)({state:{page_loading:!1,snackbar:{text:"",color:"",flag:!1}},getters:{getSnackbar:e=>e.snackbar},mutations:{SET_SNACKBAR(e,{flag:t,text:n,color:o}){e.snackbar.flag=t,e.snackbar.text=n,e.snackbar.color=o,console.log("flag==a",t)}},actions:{setSnackbar({commit:e},t){console.log("items=",t),e("SET_SNACKBAR",t)}},modules:{}}),xe=(n(9773),n(8685)),Me=(0,xe.Rd)({theme:{defaultTheme:"theme2",variations:{colors:["primary","secondary"],lighten:1,darken:2},themes:{theme1:{colors:{surface:"#FFFFFF",primary:"#2A3E72",secondary:"#0DCCC2",heading:"#2A3E72",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00","theme-fill-1":"#FFFFFF","theme-fill-2":"#0DCCC2","theme-fill-3":"#0DCCC2","theme-stroke-1":"#2A3E72","theme-stroke-12":"#2A3E72","theme-stroke-2":"#0DCCC2","theme-stroke-3":"#0DCCC2"}},theme2:{colors:{surface:"#ffffff",primary:"#00fffa",secondary:"#03DAC6",heading:"#042070",error:"#B00020",info:"#00fffa",success:"#4CAF50",warning:"#FB8C00","theme-fill-1":"#042070","theme-fill-2":"#ffffff","theme-fill-3":"#042070","theme-stroke-1":"#FFF","theme-stroke-12":"#042070","theme-stroke-2":"#00fffa","theme-stroke-3":"#00B6FF"}}}}});async function Pe(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var Be={OFFLINE_MSG:"Please check your internet connection.",OFFLINE_MSG_DETAILS:"Your are currently offline and can't save any changes.",PASSWORD_ERROR:"Password can not be empty",PASSWORD_LENGTH_ERROR:"Password must be at least 8 characters",PASSWORD_MATCH_ERROR:"Password mismatch",MOBILE_NUMBER_ERROR:"Mobile Number can not be empty",INVALID_MOBILE_NUMBER_ERROR:"Mobile number must be valid",EMAIL_ERROR:"Email can not be empty",EMAIL_MUST_BE_VALID:"Please Enter a valid Email",FILE_ERROR:"Please Selects File",IFSC_CODE:"Invalid IFSC Code",ACCOUNT_NUMBER:"Invalid Account Number",ACCOUNT_NUMBER_MISMATCH:"Account number mismatch"},Fe={CONFIRM_PASSWORD(e){return t=>t&&t==e||Be.PASSWORD_MATCH_ERROR},PASSWORD:[e=>!!e||Be.PASSWORD_ERROR,e=>e.length>8||Be.PASSWORD_LENGTH_ERROR],MOBILE:[e=>!!e||Be.MOBILE_NUMBER_ERROR,e=>!isNaN(parseFloat(e))&&e>=5e9&&e<=999999999999||Be.INVALID_MOBILE_NUMBER_ERROR],OPTIONAL_MOBILE:[e=>!e||(!isNaN(parseFloat(e))&&e>=5e9&&e<=999999999999||Be.INVALID_MOBILE_NUMBER_ERROR)],EMAIL:[e=>!!e||Be.EMAIL_ERROR,e=>/.+@.+\..+/.test(e)||Be.EMAIL_MUST_BE_VALID],COMMENT:[e=>!!e||""],REQUIRED_FIELD(e){return t=>!!t||e+" can not be Empty"},REQUIRED_LIST_FIELD(e){return t=>t&&0!=t.length||e+" can not be Empty"},REQUIRED_NUMBER_FIELD(e){return t=>t?!isNaN(parseFloat(t))&&t>=1&&t<=999999999999||e+" must be number":e+" can not be Empty"},NUMBER_FIELD(e){return t=>!t||(!isNaN(parseFloat(t))&&t>=1&&t<=999999999999||e+" must be number")},PIN_CODE(e){return t=>t?!isNaN(parseFloat(t))&&6==t.length||e+" must be valid":e+" can not be Empty"},IFSC_CODE:[e=>!!e||Be.IFSC_CODE,e=>/^[A-Za-z]{4}\d{7}$/.test(e)||Be.IFSC_CODE],ACCOUNT_NUMBER:[e=>!!e||Be.ACCOUNT_NUMBER,e=>/^[0-9]{9,25}$/.test(e)||Be.ACCOUNT_NUMBER],CONFIRM_ACCOUNT_NUMBER(e){return t=>t==e||Be.ACCOUNT_NUMBER_MISMATCH},REQUIRED_FILE:[e=>!!e||Be.FILE_ERROR,e=>!e||e.size<2e6||"Avatar size should be less than 3 MB!"]},We={BASE_URL:"http://localhost:8000/api",LOGIN:"/users/login/",SIGNUP:"/users/signup/",FORGOT_PASSWORD:"/users/forget-password/",RESEND_OTP:"/users/resend-otp/",VERIFY_OTP:"/users/verify-otp/",RESET_PASSWORD:"/users/reset-password/",TOGGLE_ACCOUNT_STATUS:"/users/toggle-account-status/",ADMIN_OVERVIEW:"/stats/overview/",TIME_SLOT_LIST:"/master/time-slot-list/",GRADE_LIST:"/master/grade-list/",CLASS_LIST:"/master/class-list/",CITY_LIST:"/master/city-list/",MATCH_PIN_CODE:"/master/match/pin-code/",LIST_PIN_CODE:"/master/list/pin-code/",TOGGLE_SERVICEABLE_PIN_CODE:"/master/toggle/serviceable-pin-code/",ADD_SUBSCRIPTION_PLAN:"/subscription/add/plan/",LIST_SUBSCRIPTION_PLAN:"/subscription/list/plan/",SUBSCRIPTION_PLAN_DETAIL:"/subscription/get/plan-details/",DELETE_SUBSCRIPTION_PLAN:"/subscription/delete/plan/",ACTIVATE_SUBSCRIPTION_MANUAL:"/subscription/activate-subscription-manual/",SUBSCRIPTION_PREVIEW:"/subscription/subscription-preview/",GET_INVOICE:"/subscription/get-invoice/?std_subscription_plan_id=",SUBSCRIPTION_HISTORY:"/subscription/subscription-history/",STUDENT_SUBSCRIPTION_DETAILS:"/subscription/student-subscription-details/",SUBSCRIPTION_PAYMENT:"/subscription/init-payment/",INIT_PAYMENT:"/payments/rzp-init-payment/",PAYMENTS_INIT_PAYMENT:"/payments/init-payment/",SUBSCRIPTION_PAYMENT_LIST:"/payments/subscription-payment-list/",CHANGE_PAYMENT_STATUS:"/payments/change-payment-status/",GET_STUDENT_DETAILS:"/student/get/details/",EDIT_DETAIL:"/student/add/basic-details/",STUDENT_LIST:"/student/list/",GET_TUTOR_DETAILS:"/tutor/get/details/",GET_TUTOR_LIST:"/tutor/list/",TUTOR_ADD_ACADEMIC_DATA:"/tutor/add/academic-data/",TUTOR_ADD_ADDRESS_DATA:"/tutor/add/address-data/",TUTOR_ADD_PROFESSIONAL_DATA:"/tutor/add/professional-data/",TUTOR_AUTOCOMPLETE:"/tutor/autocomplete/",SCHEDULE_INTERVIEW:"/tutor/schedule-interview/",INTERVIEW_RESULT:"/tutor/interview-result/",START_AGREEMENT:"/tutor/start-agreement/",UPLOAD_DOCUMENT:"/tutor/upload-document/",GET_TUTOR_DOCUMENTS:"/tutor/get-document/",PROFILE_SETTINGS:"/tutor/settings/",BATCH_LIST:"/batch/list/",BATCH_CREATE:"/batch/create/",BATCH_DETAILS:"/batch/details/",SESSION_LIST:"/batch/session-list/",SESSION_DETAILS:"/batch/session-details/",SESSION_START:"/batch/start-session/",DEMO_LIST:"/batch/demo-list/",SCHEDULE_DEMO:"/batch/schedule-demo/",EXTEND_SESSION:"/batch/extend-session/",ASSIGN_HOMEWORK:"/batch/assign-homework/",CHANGE_HOMEWORK_STATUS:"/batch/change-homework-status/",START_UNIT_TEST:"/batch/start-unit-test/",UNIT_TEST_LIST:"/batch/unit-test-list/",LEAD_LIST:"/leads/list/",LEAD_ACTION:"/leads/action/",COMMENT_LIST:"/leads/list/comment/",COMMENT_ADD:"/leads/add/comment/",MY_WALLET:"/payouts/my-wallet/",ADD_BANK_DETAILS:"/payouts/add/bank-details/",CREATE_PAYOUT:"/payouts/create/payout/",BDA_AUTO_COMPLETE:"/bda/auto_complete/",BDA_ADD:"/bda/add/",BDA_DETAILS:"/bda/details/",BDA_LIST:"/bda/list/"},je={data(){return{nav_link_list:[{title:"Home",link:"app",link_page:"home",route_name:"home"},{title:"What we do?",link:"what-we-do",link_page:"home"},{title:"Contact Us",link:"lets-talk",link_page:"home"}],menu_style:{},menu:!1}},methods:{showSnakeBar(e="success",t){console.log("asd"),this.$store.dispatch("setSnackbar",{flag:!0,text:t,color:e})},onLinkClick(e){const t=document.getElementById(e);t.scrollIntoView({behavior:"smooth"})},toggleLoading(){this.$store.state.page_loading=!0,setTimeout((()=>{this.$store.state.page_loading=!1}),1e3)}}},$e=n(6905),He=n.n($e);Pe(),He().init();const Ge=(0,o.ri)(Ce);Ge.mixin(je),Ge.config.globalProperties.$rules=Fe,Ge.config.globalProperties.$urls=We,Ge.use(Le),Ge.use(Ue),Ge.use(Me),Ge.mount("#app")},5035:function(e,t,n){var o={"./theme1/call.svg":8757,"./theme2/call.svg":6651};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id=5035},3350:function(e,t,n){var o={"./theme1/footer-logo.svg":9815,"./theme2/footer-logo.svg":9342};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id=3350},6536:function(e,t,n){var o={"./theme1/header-logo.svg":6576,"./theme2/header-logo.svg":1797};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id=6536},39:function(e,t,n){var o={"./theme1/mail.svg":8397,"./theme2/mail.svg":8081};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id=39},8757:function(e,t,n){"use strict";e.exports=n.p+"img/call.d0871bf3.svg"},9815:function(e,t,n){"use strict";e.exports=n.p+"img/footer-logo.fb09c5e0.svg"},6576:function(e,t,n){"use strict";e.exports=n.p+"img/header-logo.fb09c5e0.svg"},8397:function(e,t,n){"use strict";e.exports=n.p+"img/mail.2d96d50d.svg"},6651:function(e,t,n){"use strict";e.exports=n.p+"img/call.d0871bf3.svg"},9342:function(e,t,n){"use strict";e.exports=n.p+"img/footer-logo.fb09c5e0.svg"},1797:function(e,t,n){"use strict";e.exports=n.p+"img/header-logo.fb09c5e0.svg"},8081:function(e,t,n){"use strict";e.exports=n.p+"img/mail.2d96d50d.svg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){r[e]=function(){return o[e]}}));return r["default"]=function(){return o},n.d(i,r),i}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({177:"home",443:"about",461:"webfontloader",678:"inquiry",861:"blogs"}[e]||e)+"."+{137:"2d59d53d",177:"2168c9e1",443:"08f8cfdf",461:"0775adb6",678:"de66964a",861:"06ff1540"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{177:"home",678:"inquiry",861:"blogs"}[e]+"."+{177:"906854dc",678:"5a3f2f4a",861:"d1704a20"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="spidertech-website:";n.l=function(o,a,i,r){if(e[o])e[o].push(a);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[a];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)n();else{var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=i,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){a=r[o],i=a.getAttribute("data-href");if(i===e||i===t)return a}},o=function(o){return new Promise((function(a,i){var r=n.miniCssF(o),s=n.p+r;if(t(r,s))return a();e(o,s,a,i)}))},a={143:0};n.f.miniCss=function(e,t){var n={177:1,678:1,861:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,a[1](s)}};n.l(r,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(t&&t(o);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkspidertech_website"]=self["webpackChunkspidertech_website"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2796)}));o=n.O(o)})();
//# sourceMappingURL=app.7c949b05.js.map