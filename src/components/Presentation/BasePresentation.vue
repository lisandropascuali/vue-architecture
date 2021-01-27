<template>
  <div>
    <h1 class="text-center">Welcome to my Vue Architecture App</h1>
    <h4 class="text-center">Bienvenidos a mi aplicación Arquitectura de Vue</h4>
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
            <p>
              Here you can see how to structure your Vue apllication, to maintain a robust, efficient and easily scalable code.
            </p>
            <p>
              Browsing through the application you will find documentation referring to the proposed architecture.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p>
              Aquí podrás ver cómo estructurar tu aplicación de Vue, para mantener un código robusto, eficiente y fácilmente escalable.
            </p>
            <p>
              Navegando por la aplicación encontrarás documentación referida a la arquitectura propuesta.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <p>
              Visit my github profile:
              <a href="https://github.com/lisandropascuali">Lisandro Pascuali at github</a>
            </p>
            <p>
              Visit my LinkedIn profile:
              <a href="https://www.linkedin.com/in/lisandro-pascuali">Lisandro Pascuali at LinkedIn</a>
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p>
              Visita mi perfil de github:
              <a href="https://github.com/lisandropascuali">Lisandro Pascuali en github</a>
            </p>
            <p>
              Visita mi perfil de LinkedIn profile:
              <a href="https://www.linkedin.com/in/lisandro-pascuali">Lisandro Pascuali en LinkedIn</a>
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<style lang="css" scoped>
  a {
    outline: none;
    text-decoration: none;
  }
  a:link {
    color: #007be0;
  }

  a:focus {
    color: #0099aa;
  }

  a:hover {
    color: #0033aa;
  }
</style>
