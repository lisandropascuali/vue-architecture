// import axios from 'axios'

export const state = {
  userStore: {
    id: null,
    firstname: null,
    lastname: null,
    email: null,
    isEnabled: null
  },
  users: [],
  totalUsers: 0,
  filters: {
    page: 1,
    itemsPerPage: 10,
    includeDisabled: false,
    firstname: null
  }
}

export const mutations = {
  'SET_USERS' (state, data) {
    state.users = data.items
    state.totalUsers = data.totalItems
  },
  'SET_USER' (state, id) {
    const newUser = state.users.find(u => { return u.id === id })
    const index = state.users.indexOf(newUser)
    state.userStore = state.users[index]
  },
  'ADD_USER' (state, user) {
    // This mutations isn't necessary if we use axios
    // because we can dispatch getByFilter action after
    // the user's creation
    user.id = state.users.length
    state.users.push(user)
    state.totalUsers++
  },
  'EDIT_USER' (state, user) {
    // This mutations isn't necessary if we use axios
    // because we can dispatch getByFilter action after
    // the user's updating
    const oldUser = state.users.find(u => { return u.id === user.id })
    const index = state.users.indexOf(oldUser)
    state.users[index] = user
  },
  'ENABLE_DISABLE_USER' (state, id) {
    // This mutations isn't necessary if we use axios
    // because we can dispatch getByFilter action after
    // enable or diable the user
    const user = state.users.find(u => { return u.id === id })
    const index = state.users.indexOf(user)
    state.users[index].isEnabled = !state.users[index].isEnabled
  }
}

export const actions = {

  getByFilters: async ({ commit }) => {
    return new Promise((resolve) => {
      // Server request simulation
      const mockedUsers = [
        {
          id: 1,
          firstname: 'Lionel',
          lastname: 'Messi',
          email: 'mockemail1@gmail.com',
          isEnabled: true
        },
        {
          id: 2,
          firstname: 'Gabriel',
          lastname: 'Heinze',
          email: 'mockemail2@gmail.com',
          isEnabled: true
        },
        {
          id: 3,
          firstname: 'Maximiliano',
          lastname: 'Rodriguez',
          email: 'mockemail3@gmail.com',
          isEnabled: true
        },
        {
          id: 4,
          firstname: 'Gabriel',
          lastname: 'Batistuta',
          email: 'mockemail4@gmail.com',
          isEnabled: true
        },
        {
          id: 5,
          firstname: 'Diego',
          lastname: 'Maradona',
          email: 'mockemail5@gmail.com',
          isEnabled: true
        },
        {
          id: 6,
          firstname: 'Gerardo',
          lastname: 'Martino',
          email: 'mockemail6@gmail.com',
          isEnabled: true
        },
        {
          id: 7,
          firstname: 'Marcelo',
          lastname: 'Bielsa',
          email: 'mockemail7@gmail.com',
          isEnabled: true
        }
      ]

      let items = state.users.length > 0 ? state.users : mockedUsers
      // This action must be maked in the server
      items = items.filter(item => {
        return (!state.filters.firstname || item.firstname === state.filters.firstname) &&
        (item.isEnabled || state.filters.includeDisabled)
      })
      const mockResponse = {
        items: items,
        totalItems: items.length
      }
      commit('SET_USERS', mockResponse)
      resolve(true)
    })

    // If we use axios
    // await axios.get('user', { params: state.filters })
    //   .then((response) => {
    //     commit('SET_USERS', response.data.body)
    //     return true
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     return false
    //   })
  },

  create: async ({ commit, dispatch }, user) => {
    // Server request simulation
    return new Promise((resolve) => {
      commit('ADD_USER', user)
      dispatch('getByFilters')
      resolve(true)
    })

    // If we use axios
    // return await axios.post('user', user)
    //   .then((response) => {
    //     dispatch('getByFilters')
    //     return true
    //   })
    //   .catch((error) => {
    //    console.log(error)
    //    return false
    //   })
  },

  update: async ({ commit, dispatch }, user) => {
    // Server request simulation
    return new Promise((resolve) => {
      commit('EDIT_USER', user)
      dispatch('getByFilters')
      resolve(true)
    })

    // If we use axios
    // return await axios.put('user', user)
    //   .then((response) => {
    //     dispatch('getByFilters')
    //     return true
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     return false
    //   })
  },

  getUserById: async ({ commit }, id) => {
    // Server request simulation
    return new Promise((resolve) => {
      commit('SET_USER', id)
      resolve(true)
    })

    // If we use axios
    // return await axios.get('user/' + id)
    //   .then((response) => {
    //     commit('SET_USER', response.data.body)
    //     return true
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     return false
    //   })
  },

  logicalEnabled: async ({ commit, dispatch }, id) => {
    // Server request simulation
    return new Promise((resolve) => {
      commit('ENABLE_DISABLE_USER', id)
      dispatch('getByFilters')
      resolve(true)
    })

    // If we use axios
    // return await axios.put('user/logical-enabled/' + params.id, { status: params.status })
    //   .then(
    //     (response) => {
    //       return true
    //     }
    //   )
    //   .catch((error) => {
    //     console.log(error)
    //     return false
    //   })
  }
}
