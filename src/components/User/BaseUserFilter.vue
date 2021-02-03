<template>
  <!-- Filters -->
  <v-expansion-panels :elevation="4" class="pa-4">
    <v-expansion-panel>
      <v-expansion-panel-header class="pb-0 pt-0">Filters</v-expansion-panel-header>
      <v-expansion-panel-content >
        <v-form ref="userFilterForm">
          <v-row>
            <!-- Enabled -->
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
              <v-switch
                v-model="filters.includeDisabled"
                label="Include disabled"
              ></v-switch>
            </v-col>
            <!-- Firstname -->
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
              <v-text-field label="Firstname o email" v-model="filters.firstname"></v-text-field>
            </v-col>
          </v-row>
        </v-form>

        <!-- Buttons -->
        <v-row>
          <v-col lg="12" class="d-flex justify-end">
            <v-btn color="secondary" class="mr-4" @click="cleanFilter" text>Clean</v-btn>
            <v-btn color="primary" @click="search" text>Search</v-btn>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['filters'])
  },
  methods: {
    ...mapActions('user', ['getByFilters']),
    search () {
      this.getByFilters(this.filters)
    },
    cleanFilter () {
      this.filters.firstname = null
      this.filters.includeDisabled = false
      this.$refs.userFilterForm.reset()
    }
  }
}
</script>
