<template>
  <v-app light>
    <!--    <v-app-bar :clipped-left="clipped" fixed app>-->
    <!--      <v-toolbar-title>{{ title }}</v-toolbar-title>-->
    <!--      <v-spacer />-->
    <!--    </v-app-bar>-->
    <v-main class='body-background'>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
<!--    <v-footer app>-->
<!--      <span>&copy; {{ new Date().getFullYear() }}</span>-->
<!--    </v-footer>-->
  </v-app>
</template>
<style scoped>
.body-background {
  background-color: #fff;
  background-color: #02ffff0a;
}
</style>
<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
