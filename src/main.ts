import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'

import './assets/index.css'

Vue.use(VueCompositionApi)

new Vue(App).$mount('#app')
