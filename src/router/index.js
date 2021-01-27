import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueMeta, {
  keyName: 'page'
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// ES: Aquí definimos interceptores de navegación de Vue-Router
// EN: We define here Vue-Router's navigation interceptors.

// EN: Before accessing each route
// ES: Antes de ingresar a cada ruta
router.beforeEach(async (to, from, next) => {
  const titleName = to.name ? `MyApp - ${to.name}` : 'MyApp'
  document.title = titleName
  next()
  // Router rules examples
  // if (to.path === '/some-route') {
  //   Some validation
  // }
  // if (to.meta.routeFlag) {
  //   Some action if the routeFlag is true
  // }
  // if (to.meta.authRequired) {
  //   Dispatch a request to server to check authentication
  // }
})

export default router
