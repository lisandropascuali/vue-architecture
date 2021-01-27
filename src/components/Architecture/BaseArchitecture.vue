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
              The architecture is composed by three parts:
              <ul>
                <li>
                    <strong>Views:</strong>
                    A view has the same structure as a Vue's component. The difference is that a view will work as a container for various componentents used to provide specific funtionality to the user. (For example: We will have a view for the personal data upload functionality). They are the "screens" that will be accessed fron the navigation bar.
                </li>
                <li>
                  <strong>Components</strong> The Vue's components group HTML, JS y CSS code, and they are created so that they can be reused many times. At the same time they can contain other components and communicate with them through properties --> <a href="https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props">See comunication between components.</a>
                </li>
                <li>
                  <strong>Store (Modules):</strong> To simplify the comunication between components, we will define a Vuex's module to each entity that will allow us to manage its status. The structure of these modules is divided into State, Mutations and Actions. (This is defined by <a href="https://vuex.vuejs.org/">Vuex</a>).
                </li>
              </ul>
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-justify ml-5 mr-5">
              La arquitectura del se compone por tres partes:
              <ul>
                <li>
                    <strong>Vistas:</strong> Una vista tiene la misma estructura de un componente de vue. La diferencia es que una vista funcionará como un contenedor de diversos componentes utilzados para brindar una funcionalidad específica al usuario. (Ejemplo: Tendremos una vista para la funcionalidad de carga de datos personales). Son las "pantallas" que se accederán desde la barra de navegación.
                </li>
                <li>
                  <strong>Componentes</strong> Los componentes de Vue agrupan código HTML, JS y CSS, y se crean de modo que puedan ser reutilizados múltiples veces. A su vez pueden contener otros componentes y comunicarse con ellos a través de propiedades --> <a href="https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props">Ver comunicación entre componentes.</a>
                </li>
                <li>
                  <strong>Store (Tienda/Módulos):</strong> Para simplificar la comunicacíon entre componentes, definiremos un módulo para cada entidad que nos permitirá manejar el estado de la misma. La estructura de estos módulos se divide en Estado, Mutaciones y Acciones, esto está definido por <a href="https://vuex.vuejs.org/">Vuex</a>.
                </li>
              </ul>
            </p>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12">
            <img src="../../assets/architecture.png" alt="architecture" class="image"/>
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
