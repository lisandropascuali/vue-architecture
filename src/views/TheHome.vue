<template>
  <div class="home">
    <BasePresentation msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BasePresentation from '@/components/Presentation/BasePresentation.vue'

export default {
  name: 'Home',
  components: {
    BasePresentation
  }
}
</script>
