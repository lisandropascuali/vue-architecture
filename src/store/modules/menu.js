export const state = {
  menu: []
}

export const mutations = {
  'SET_MENU' (state, data) {
    state.menu = data
  }
}

export const actions = {
  /**
   * EN: Get the user's access.
   * ES: Obtiene los accesos para el usuario.
   */
  getMenu: async ({ commit }) => {
    // EN: Simulation of the request to server.
    // ES: Simulación de petición al servidor.
    // await axios.get('permission/menu')
    //   .then((response) => {
    //     commit('SET_MENU', response.data)
    //     return true
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     return false
    //   })
    const menu = [
      {
        name: 'Home',
        icon: 'mdi-home',
        route: '/',
        childrens: []
      },
      {
        name: 'Architecture',
        icon: 'mdi-vector-triangle',
        route: '/architecture',
        childrens: []
      },
      {
        name: 'View',
        icon: 'mdi-view-compact',
        route: '/view',
        childrens: []
      },
      {
        name: 'Vue Router',
        icon: 'mdi-routes',
        route: '/vue-router',
        childrens: []
      },
      {
        name: 'Vuex',
        icon: 'mdi-server',
        route: '/vuex',
        childrens: []
      },
      {
        name: 'User',
        icon: 'mdi-server',
        route: '/user',
        childrens: []
      }
    ]
    commit('SET_MENU', menu)
  }
}
