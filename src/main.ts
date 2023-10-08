

import { createApp } from 'vue'
import TDesign from 'tdesign-mobile-vue';
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/base.css'
import 'tdesign-mobile-vue/es/style/index.css'

const app = createApp(App)

app.use(TDesign)
app.use(createPinia())
app.use(router)

app.mount('#app')
