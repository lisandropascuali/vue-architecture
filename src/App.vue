<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <component :is="layout"></component>
    <v-container class="d-flex">
      <v-main>
        <v-scroll-y-transition :hide-on-leave="true">
          <router-view></router-view>
        </v-scroll-y-transition>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>

const defaultLayout = 'navbar-layout'

export default {
  name: 'App',
  data: () => ({}),
  computed: {
    layout () {
      return this.$route.meta.layout || defaultLayout
    },
    theme () {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
}
</script>

<style lang="scss">
//DARK THEME
@import "@/sass/variables.scss";
</style>
<style lang="css">
/* Global Styles */
  .flag {
    width: 20px;
    align-self: center;
    margin-left: 5px;
  }
</style>
