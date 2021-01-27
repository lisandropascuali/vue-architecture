<template>
  <div>
    <v-app-bar app clipped-left height="65" class="elevation-4">
      <v-app-bar-nav-icon @click="openNav"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <span>My App</span>
    </v-app-bar>

    <nav app>
      <!-- Navigation -->
      <v-navigation-drawer
        app
        clipped
        class="elevation-4"
        v-model="drawer"
        :mini-variant="miniVariant"
        ref="drawerNav"
      >
        <!-- ITEMS -->
        <v-list nav dark dense>
          <span v-for="link in menu" :key="link.name">
            <template v-if="link.childrens.length > 0">
              <v-list-group dark no-action color="activeLink" @click="openLink()">
                <template v-slot:activator>
                  <v-list-item-icon>
                    <v-icon>{{ link.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="d-flex flex-row justify-start">
                      {{ link.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="subLink in link.childrens"
                  :key="subLink.name"
                  :to="subLink.route"
                  style="padding: 0 8px"
                  color="activeLink"
                  class="d-flex flex-row justify-start"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="d-flex flex-row justify-start"
                      style="margin-left: 56px;"
                      >{{ subLink.name }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </template>

            <template v-else>
              <v-list-item color="activeLink" :key="link.name" :to="link.route" link>
                <v-list-item-icon>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="d-flex flex-row justify-start">{{link.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </span>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'BaseNavbar',
  data () {
    return {
      drawer: null,
      miniVariant: null,
      loggedUser: null
    }
  },
  computed: {
    ...mapState('menu', ['menu'])
  },
  methods: {
    openNav () {
      if (this.$refs.drawerNav.isMobile === false) {
        this.miniVariant = !this.miniVariant
      } else {
        this.miniVariant = false
        this.drawer = !this.drawer
      }
    },
    openLink () {
      this.miniVariant = false
    },
    ...mapActions('menu', ['getMenu'])
  },
  async beforeMount () {
    await this.getMenu()
  },
  async mounted () {
    this.$watch('$refs.drawerNav.isMobile', (value) => {
      if (value === true) {
        this.miniVariant = false
      }
      if (value === false) {
        this.drawer = true
        this.miniVariant = true
      }
    })
  }
}
</script>
