<template>
  <div>
    <h4 class="ml-10">Module example with user entity</h4>
      <BaseUserFilter class="mb-5"/>
      <BaseUserGrid/>
  </div>
</template>

<script>
import BaseUserFilter from '../components/User/BaseUserFilter'
import BaseUserGrid from '../components/User/BaseUserGrid'

export default {
  components: {
    BaseUserFilter,
    BaseUserGrid
  }
}
</script>

<style>

</style>
