<template>
  <div>
    <v-dialog v-model="dialog" width="400" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>

        <v-card-text>
          <v-form block class="user-form" ref="formUser">
            <!-- Firstname -->
            <v-text-field
              label="Firstname*"
              :rules="namesRules"
              v-model="user.firstname"
              :disabled="isView"
            ></v-text-field>
            <!-- Lastname -->
            <v-text-field
              label="Lastname*"
              :rules="namesRules"
              v-model="user.lastname"
              :disabled="isView"
            ></v-text-field>
            <!-- Email -->
            <v-text-field
              label="Email*"
              :rules="emailRules"
              v-model="user.email"
              :disabled="isView"
            ></v-text-field>
            <!-- Botones -->
            <v-row>
              <v-col cols="12" class="d-flex justify-end">
                <v-btn v-if="isView" color="primary" text @click="close">Aceptar</v-btn>
                <v-btn v-if="isNew || isEdit" color="secondary" text @click="close">Cancelar</v-btn>
                <v-btn v-if="isNew || isEdit" color="primary" @click="submit" text>Guardar</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      user: {
        firstname: null,
        lastname: null,
        email: null,
        isEnabled: true
      },
      dialog: false,
      isNew: false,
      isEdit: false,
      isView: false,
      title: null
    }
  },
  computed: {
    namesRules () {
      return [
        (inputValue) => {
          if (!inputValue) { return 'Required' }
          if (inputValue.length >= 25) { return 'Max length 25' }
          return true
        }
      ]
    },
    emailRules () {
      return [
        (inputValue) => {
          if (!inputValue) { return 'Required' }
          const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
          if (!re.test(String(inputValue).toLowerCase())) { return 'Wrong email' }
          return true
        }
      ]
    },
    ...mapState('user', ['userStore'])
  },
  methods: {
    ...mapActions('user', ['create', 'update', 'getUserById']),
    submit () {
      if (!this.$refs.formUser.validate()) { return false }
      if (this.isNew) {
        this.create(Object.assign({}, this.user)).then(success => {
          if (success === true) {
            this.close()
          }
        })
      }
      if (this.isEdit) {
        this.update(Object.assign({}, this.user)).then(success => {
          if (success === true) {
            this.close()
          }
        })
      }
    },

    openForm (id, action) {
      if (id) {
        if (action === 'EDIT') {
          this.getUserById(id).then(success => {
            if (success === true) {
              this.title = 'Edit User'
              this.isEdit = true
              Object.assign(this.user, this.userStore)
              return (this.dialog = true)
            }
          })
        }
        if (action === 'VIEW') {
          this.getUserById(id).then(success => {
            if (success === true) {
              this.title = 'User'
              this.isView = true
              Object.assign(this.user, this.userStore)
              return (this.dialog = true)
            }
          })
        }
      }
      if (action === 'NEW') {
        this.title = 'New User'
        this.isNew = true
        if (this.currentUser && this.currentUser.center) {
          this.user.center = this.currentUser.center
        }
        return (this.dialog = true)
      }
    },

    close () {
      this.clearData()
      this.dialog = false
    },

    clearData () {
      this.$refs.formUser.reset()
      this.$refs.formUser.resetValidation()
      this.user.firstname = null
      this.user.lastname = null
      this.user.email = null
      this.user.isEnabled = true
      this.user.id = null
      this.isNew = false
      this.isEdit = false
      this.isView = false
    }
  }
}
</script>
