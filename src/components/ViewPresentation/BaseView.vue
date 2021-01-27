<template>
  <div>
    <v-card class="mt-5">
      <v-card-title>
        <v-row justify="center">
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
              To understand the architecture it is necesary to sketch the view of our application from the client side. The application will contain a side navigation bar that will allow us to access the different functionalities. Through Vue Router, each view (one view per functionality) will be loaded in the blue box section. These views will contain components inside, wich in turn can contain other components.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-justify ml-5 mr-5">
              Para entender la arquitectura, es necesario bosquejar la vista de nuestra aplicación desde el lado del cliente.
              La aplicación contendrá una barra de navegación lateral que nos permitirá acceder a las distintas funcionalidades. A través de Vue Router, cada vista (una vista por funcionalidad) se cargará en la sección del recuadro azul. Estas vistas contrendrán en su interior componentes, que a su vez pueden contener otros componentes.
            </p>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12">
            <img src="../../assets/view.png" alt="view" class="image"/>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<style lang="css" scoped>
  .image {
    width: 600px;
    margin-top: 10px;
  }
</style>
