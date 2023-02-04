import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'

import rules from "@/helper/rules";
import urls from "@/helper/urls";
import globalMixin from "@/helper/mixins/global-mixin";

import "aos/dist/aos.css";
import AOS from "aos";

loadFonts()
AOS.init();


const app = createApp(App)
app.mixin(globalMixin)
app.config.globalProperties.$rules = rules
app.config.globalProperties.$urls = urls

app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
