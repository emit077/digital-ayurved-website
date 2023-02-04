<template>
  <div class="app-padding py-3 d-flex align-center" id="app-bar">
    <div class="d-inline-flex align-center w-25" v-if="header">
      <router-link to="/" class="router-link">
        <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/header-logo.svg')" alt="logo" class="app-logo"
             :width="$vuetify.display.mobile?130:'170'">
        <!--        <strong class="font-weight-bold text-theme-stroke-1" :class="$vuetify.display.mobile?'text-h6':'text-h4'">Spidertech</strong>-->
      </router-link>
    </div>


    <!--  desktop  -->
    <div class="d-inline-block text-right w-75" v-if="header">
      <div v-if="!$vuetify.display.mobile">
        <div v-for="(item,i) in nav_link_list" :key="i" class="d-inline-block align-center">
          <span class="ml-8 d-inline-block" v-if="item.link && $route.name==item.link_page">
            <a href="#" @click.prevent="onLinkClick(item.link)" class="text-center router-link">
              <center>
                <span class="un" :class="'nav-link-'+$vuetify.theme.global.name"> {{ item.title }}</span>
              </center>
            </a>
          </span>
          <span class="ml-8 d-inline-block" v-else-if="item.route_name">
            <router-link class="router-link " :to="{ name: item.route_name}">
              <center>
                <span class="un"
                      :class="$route.name==item.route_name?'text-un '+'nav-link-'+$vuetify.theme.global.name:'nav-link-'+$vuetify.theme.global.name"
                >  {{ item.title }}</span>
              </center>
            </router-link>
          </span>
        </div>

      </div>
      <!-- mobile -->
      <div v-else>
        <v-menu v-model="menu" transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-icon color="theme-stroke-1" v-if="menu" size="x-large" v-bind="props">mdi-close</v-icon>
            <v-icon color="theme-stroke-1" v-else size="x-large" v-bind="props">mdi-menu</v-icon>
          </template>
          <div class="text-center py-4 mobile-navigation-menu" :style="menu_style">
            <div v-for="(item,i) in nav_link_list" :key="i" class="align-center text-theme-stroke-2">
            <span class="my-2 d-inline-block" v-if="item.link && $route.name==item.link_page">
              <a href="#" @click.prevent="onLinkClick(item.link)" class="text-center router-link">
                <center>
                  <span class=""> {{ item.title }}</span>
                </center>
              </a>
            </span>
              <span class="my-2 d-inline-block" v-else-if="item.route_name">
            <router-link class="router-link " :to="{ name: item.route_name}">
              <center>
                <span class=""
                      :class="$route.name==item.route_name?'text-un':''"
                >  {{ item.title }}</span>
              </center>
            </router-link>
          </span>
            </div>
          </div>
        </v-menu>
      </div>
    </div>
  </div>
</template>
<!--  style  -->
<style lang="scss" scoped>
#app-bar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  //height: 100px;
  vertical-align: middle;
  backdrop-filter: blur(10px);
  transition-duration: 500ms;
  transform-origin: bottom;
  background-color: rgb(var(--v-theme-theme-fill-1));

  .nav-link-theme1 {
    color: rgb(var(--v-theme-theme-stroke-2), 1);
  }

  .nav-link-theme2 {
    color: rgb(var(--v-theme-theme-stroke-2), 1);
  }

}

.mobile-navigation-menu {
  margin-top: 12px;
  background-color: rgb(var(--v-theme-theme-fill-1), 0.8);
  backdrop-filter: blur(10px);
}
</style>
<!--   script   -->
<script>
export default {
  name: 'LandingPageVue',
  components: {},
  data() {
    return {
      header: false,
      bar_height: 0,
      menu_style: {},
      menu: false,
    }
  },
  mounted() {
    this.menu_style = {width: screen.width - 20 + "px !important"}
    const APP_BAR = document.getElementById("app-bar")
    APP_BAR.style.height = this.$vuetify.display.mobile ? '60px' : '100px'
    document.addEventListener('scroll', function () {
      if (document.scrollingElement.scrollTop) {
        if (this.$vuetify.display.mobile)
          APP_BAR.style.height = document.scrollingElement.scrollTop < 50 ? "60px" : "50px"
        else
          APP_BAR.style.height = document.scrollingElement.scrollTop < 50 ? "100px" : "60px"
        // APP_BAR.style.backgroundColor = document.scrollingElement.scrollTop < screen.height ? "transparent" : "rgb(var(--v-theme-primary), 0.1)"
        APP_BAR.style.backgroundColor = document.scrollingElement.scrollTop < screen.height ? "rgb(var(--v-theme-theme-fill-1), 1)" : "rgb(var(--v-theme-theme-fill-1), 0.8)"
      }
    }.bind(this));
    setTimeout(() => {
      this.header = true
    }, 500)
  },
  methods: {}
};
</script>
