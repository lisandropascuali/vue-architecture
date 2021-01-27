// EN: We define all the routes access
// ES: Definimos todas las rutas de acceso

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/TheHome.vue')
  },
  {
    path: '/hello-world',
    name: 'Hello World',
    component: () => import('../views/TheHome.vue')
  },
  {
    path: '/architecture',
    name: 'Architecture',
    component: () => import('../views/TheArchitecture.vue')
  },
  {
    path: '/view',
    name: 'View',
    component: () => import('../views/TheView.vue')
  },
  {
    path: '/vue-router',
    name: 'Vue Router',
    component: () => import('../views/TheVueRouter.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('../views/TheVuex.vue')
  }
]
