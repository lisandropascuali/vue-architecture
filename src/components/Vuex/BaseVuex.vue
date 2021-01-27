<template>
  <div>
    <v-card class="mt-5">
      <v-card-title>
        <v-row>
          <v-col cols="12" md="6" class="text-center">
            <span>EN</span>
            <img class="flag" src="https://www.countryflags.io/gb/flat/64.png">
          </v-col>
          <v-col cols="12" md="6" class="text-center">
            <span>ES</span>
            <img class="flag" src="https://www.countryflags.io/es/flat/64.png">
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <p class="text-justify ml-5 mr-5">
              It is recommended to see the <a href="https://vuex.vuejs.org/">official documentation</a> first. <br/>
              Vuex allow us to manage the state of the compononents outside of them, so that the data shared between many components is more accesible and easily manageable.
              We will define a module for each entity. Each module follows the following structure:
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-justify ml-5 mr-5">
              Se recomienda ver primero la <a href="https://vuex.vuejs.org/">documentación oficial</a>. <br/>
              Vuex nos permite manejar el estado de los componentes fuera de los mismos, de modo que los datos compartidos entre varios componentes sean más accesibles y fácilmente manejables.
              Definiremos un módulo para cada entidad. Cada módulo sigue la siguiente estructura:
            </p>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12" md="12">
            <img src="../../assets/vuex1.png" alt="vuex" class="image"/>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12" md="12">
            <img src="https://vuex.vuejs.org/vuex.png" alt="vuex" class="image"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <p class="text-justify ml-5 mr-5">
              In order to these actions, mutations and states be accessed and shared with the components, the components must import them through the functions "mapState", "mapMutations", and "mapActions".<br/>
              The state is mapped in the computed properties of each component. The mutations and the actions are mapped in the methods of each components.<br/>
              The syntax to perform the mapping is as follows: (Example with state)
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-justify ml-5 mr-5">
              Para que estas acciones, mutaciones y estados sean accedidos y compartidos con los componentes, los mismos deben importarlos a través de las funciones "mapState", "mapMutations", y "mapActions".<br/>
              El estado se mapea en las propiedades computadas (computed) de cada componente. Las mutaciones y acciones se mapean en los métodos (methods) de cada componente.<br/>
              La sintaxis para realizar el mapeo es la siguiente: (Ejemplo con state)
            </p>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12" md="12">
            <img src="../../assets/vuex2.png" alt="vuex" class="image"/>
          </v-col>
        </v-row>
                <v-row>
          <v-col cols="12" md="6">
            <p class="text-justify ml-5 mr-5">
              Then, in the component, these variables will be accessed using the this statement. Example: &lt;input v-model="this.state1"/&gt;
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-justify ml-5 mr-5">
              Luego, en el componente se accederán a estas variables utilizando la instrucción this. Ejemplo: &lt;input v-model="this.state1"/&gt;
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<style lang="css" scoped>
  .image {
    width: 800px;
  }
</style>
