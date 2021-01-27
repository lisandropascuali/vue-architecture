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
              Vue Router simplifies navigation within the application. We just have to map each view with a route and indicate where we want them to be render. <a href="https://router.vuejs.org/guide/">(See Vue Router documentation)</a>
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-justify ml-5 mr-5">
              Vue Router nos simplifica la navegación dentro de la aplicación. Sólo debemos mapear cada vista con una ruta, e indicar dónde queremos que se rendericen las mismas. <a href="https://router.vuejs.org/guide/">(Ver documentación Vue Router)</a>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <h4 class="ml-5">Definition of router-view</h4>
            <p class="text-justify ml-5 mr-5">
              In the App.vue application container, we add the BaseNavbar component that will contain the navigation bar and we indicate where we want to render the views wich the user accesses through it, using the directive <strong>&lt;router-view /&gt;</strong>.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="ml-5">Definición de router-view</h4>
            <p class="text-justify ml-5 mr-5">
              En el contenedor de la aplicación App.vue, agregamos el componente BaseNavbar que contendrá la barra de navegación e indicamos dónde queremos que renderice las vistas a las cuales acceda el usuario a través da la misma, utilizando la directiva <strong>&lt;router-view /&gt;</strong>.
            </p>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12" md="12">
            <img src="../../assets/vue-router1.png" alt="vue-router" class="image"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <h4 class="ml-5">Definition of router-view</h4>
            <p class="text-justify ml-5 mr-5">
              To navigate between the views, we will use the <strong>router :to</strong> directive. When the user clicks on an element that has this directive defined and linked to a view, this will be rendered in the <strong>&lt;router-view /&gt;</strong> section. Navbar example:
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="ml-5">Navegación entre vistas</h4>
            <p class="text-justify ml-5 mr-5">
              Para navegar entre las vistas, utilizaremos la directiva <strong>router :to</strong>. Cuando el usuario haga click sobre un elemento que tenga definida esta directiva y vinculada a una vista, en la sección del  <strong>&lt;router-view /&gt;</strong> se renderizará esa vista. Ejemplo del navbar:
            </p>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12" md="12">
            <img src="../../assets/vue-router2.png" alt="vue-router" class="image"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <h4 class="ml-5">Route definition</h4>
            <p class="text-justify ml-5 mr-5">
              The route definition will be done in the routes.js file in the router folder. Here both the route and the view that each one will access will be defined. Example:
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="ml-5">Definición de rutas</h4>
            <p class="text-justify ml-5 mr-5">
              La definición de rutas se realizará en el archivo routes.js de la carpeta router. Aquí se definirá tanto la ruta, como la vista a la cual accederá cada una. Ejemplo:
            </p>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12" md="12">
            <img src="../../assets/vue-router3.png" alt="vue-router" class="image"/>
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
