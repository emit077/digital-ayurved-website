<template>
  <v-app :theme="'theme2'" class="">
    <app-bar/>
    <v-main>
      <router-view/>
    </v-main>
    <app-footer/>
    <loading-screen/>
    <snack-bar/>
  </v-app>
</template>
<style lang="scss">
@import "assets/css/style.scss";
@import "assets/css/animation.scss";


</style>

<script>
import AppBar from "@/components/layout-components/AppBar"
import AppFooter from "@/components/layout-components/AppFooter"
import LoadingScreen from "@/components/other/LoadingScreen"
import SnackBar from "@/components/other/SnackBar"

export default {
  name: 'App',
  components: {
    AppBar,
    AppFooter,
    LoadingScreen,
    SnackBar
  },
  data: () => ({
    //
  }),
  mounted() {
    const DIV = document.getElementById("app")
    document.addEventListener('scroll', function () {
      DIV.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      )
    });
  },
}
</script>
