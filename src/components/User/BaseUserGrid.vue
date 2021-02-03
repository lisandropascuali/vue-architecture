<template>
  <div>
    <v-card class="mr-4 ml-4">
      <!-- Definition Table -->
      <v-data-table
        :headers="headers"
        :items="users"
        :options.sync="options"
        :server-items-length="totalUsers"
        :loading="loading"
        no-data-text="Not users found"
        @update:options="pagination"
        @page-count="pageCount = $event"
        class="elevation-4"
        item-key="user"
      >
        <!-- Date format -->
        <template v-slot:item.createdAt="{ item }">
          <span>{{ item.createdAt | formatDate }}</span>
        </template>

        <!-- Toolbar dable-->
        <template v-slot:top>
          <v-card flat>
              <v-row class="pl-5 pr-5">
                <v-col cols="6">
                  <v-toolbar-title class="d-flex justify-start">Users</v-toolbar-title>
                </v-col>
                <!-- Form -->
                <v-col cols="6" class="d-flex justify-end">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" small fab @click="newItem" v-bind="attrs" v-on="on" :elevation="1">
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                    </template>
                    <span>New User</span>
                  </v-tooltip>
                  <UserForm ref="UserForm" />
                </v-col>
              </v-row>
          </v-card>
        </template>

        <!-- Actions Update/Create/Delete logic/View -->
        <template v-slot:item.actions="{ item }">
          <v-icon class="mr-2" @click="editItem(item.id)">mdi-pencil</v-icon>
          <v-icon class="mr-2" @click="viewItem(item.id)">mdi-magnify</v-icon>
          <!-- Create/Delte logic -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon class="mr-2" @click="enableDisableUser(item)"  v-on="on">
                {{item.isEnabled ? 'mdi-check-circle' : 'mdi-check-circle-outline'}}
              </v-icon>
            </template>
            <span>{{item.isEnabled ? 'Activate' : 'Desactivate'}}</span>
          </v-tooltip>
          <!-- Create/Delte logic -->
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UserForm from './BaseUserForm'

export default {
  data () {
    return {
      // action: null,
      showForm: false,
      loading: true,
      options: {},
      headers: [
        { text: 'User', value: 'email' },
        { text: 'Firstname', value: 'firstname' },
        { text: 'Lastname', value: 'lastname' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  components: {
    UserForm
  },
  computed: {
    ...mapState('user', ['users', 'totalUsers', 'filters'])
  },
  methods: {
    async pagination (options) {
      this.loading = true
      // Redifine the filters
      this.filters.page = options.page
      this.filters.itemsPerPage = options.itemsPerPage
      this.getByFilters(this.filters).finally(() => {
        this.loading = false
      })
    },
    newItem () {
      this.$refs.UserForm.openForm(null, 'NEW')
    },
    editItem (id) {
      this.$refs.UserForm.openForm(id, 'EDIT')
    },
    viewItem (id) {
      this.$refs.UserForm.openForm(id, 'VIEW')
    },
    async enableDisableUser (user) {
      this.loading = true
      this.logicalEnabled(user.id).finally(() => {
        this.loading = false
      })
    },
    ...mapActions('user', ['getByFilters', 'logicalEnabled'])
  }
}
</script>
