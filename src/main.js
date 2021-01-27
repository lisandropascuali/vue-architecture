import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseNavbar from './components/Layout/BaseNavbar.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Definición de componentes layout
Vue.component('navbar-layout', BaseNavbar)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
