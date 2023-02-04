<template>
  <v-footer app absolute class="text-white text-center footer-wrapper d-block bg-dark mt-n1"
            v-if="footer"
            :class="$vuetify.display.mobile?'py-0  ':'pt-10 pb-4'">
    <v-row justify="center" class=" py-10" no-gutters>
      <v-col md="3" cols="12" class="text-center py-5">
        <div class="px-5">
          <router-link to="/" class="router-link">
            <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/footer-logo.svg')" alt="logo"
                 class="app-logo">
            <!-- <strong class="font-weight-bold text-white":class="$vuetify.display.mobile?'text-h4':'text-h4'">Spidertech</strong>-->
          </router-link>
          <v-divider class="my-4" color="rgb(var(--v-theme-secondary2), 0.3)"></v-divider>
          <div class="d-inline-flex mx-2" v-for="(item,i) in contact_list" :key="i">
            <a :href="item.link" target="_blank" class="">
              <v-icon class="social-icon" size="32">{{ item.icon }}</v-icon>
            </a>
          </div>
        </div>
      </v-col>
<!--      <v-col md="2" cols="6" class="text-left py-5">-->
<!--        <div class="px-3">-->
<!--          <p class="text-theme-stroke-2 mb-3" :class="$vuetify.display.mobile?'text-subtitle-1 ':'text-h6'"> Our-->
<!--            Services</p>-->
<!--          <ol class="link-style">-->
<!--            <li class="text-white pb-2">Web development</li>-->
<!--            <li class="text-white pb-2">UI/UX designing</li>-->
<!--            <li class="text-white pb-2">Graphics designing</li>-->
<!--            <li class="text-white pb-2">Website designing</li>-->
<!--          </ol>-->
<!--        </div>-->
<!--      </v-col>-->
      <v-col md="3" cols="12" class="text-left py-5">
        <div class="px-3">
          <p class=" text-theme-stroke-2  mb-3" :class="$vuetify.display.mobile?'text-subtitle-1 ':'text-h6'"> Quick
            Links</p>
          <ol class="link-style">
            <!--            <li class="text-white pb-2" v-for="(item,i) in nav_link_list" :key="i">-->
            <li v-for="(item,i) in nav_link_list" :key="i" class="text-white">
          <span class="d-inline-block pb-2" v-if="item.link && $route.name==item.link_page">
            <a href="#" @click.prevent="onLinkClick(item.link)" class="router-link">
              <center>
                <span class="hover-underline"> {{ item.title }}</span>
              </center>
            </a>
          </span>
              <span class="d-inline-block pb-2" v-else-if="item.route_name">
            <router-link class="router-link " :to="{ name: item.route_name}">
              <center>
                <span class="hover-underline text-white"
                      :class="$route.name==item.route_name?'text-un':''"
                >  {{ item.title }}</span>
              </center>
            </router-link>
          </span>
            </li>
            <!--            </li>-->
          </ol>
        </div>
      </v-col>
      <v-col md="4" cols="12" class="text-left py-5">
        <div class="px-3">
          <p class="text-theme-stroke-2  mb-3" :class="$vuetify.display.mobile?'text-subtitle-1 ':'text-h6'"> Quick
            Contact</p>
          <div class="text-white d-flex align-center mb-3">
            <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/call.svg')" alt=""
                 class="d-inline-flex mr-3">{{ contact_number }}
          </div>
          <div class="text-white mb-3">
            <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/mail.svg')" alt=""
                 class="d-inline-flex mr-3">{{ contact_email }}
          </div>
          <div class="text-white">
            <div class="d-inline-block" style="width: 30px; vertical-align: top">
              <v-icon class="text-white ml-n1">mdi-map-marker</v-icon>
            </div>
            <div class="d-inline-block" style="width: 90%">
              <p> {{ clinic_address }}</p>
              <p class="mt-2"> {{ clinic_address2 }}</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-divider color="rgb(var(--v-theme-surface),0.1)"></v-divider>
    <p class="text-caption text-center mt-4" style="color: rgb(var(--v-theme-surface),0.5)">
      <!--      ©Spidertech-2022-->
    </p>
    <p class="text-caption text-center mt-1" style="color: rgb(var(--v-theme-surface),0.5)">
      Designed & developed with ❤️ by
      <a href="https://emit077.github.io/" class="text-white font-weight-bold text-decoration-underline">Amit Kumar Sahu</a>
    </p>


  </v-footer>
</template>
<style lang="scss" scoped>
.footer-wrapper {
  background-color: #1F2020;

  .app-logo {
    width: 75%;
  }

  .social-icon {
    color: #ffffff;
    transition-duration: 1s;
  }

  .social-icon:hover {
    transform: scale(1.35);
    color: rgb(var(--v-theme-theme-stroke-3));
  }

  a {
    text-decoration: none;
  }


  .l-border {
    height: 100% !important;
    border-left: solid 1px;
    border-color: rgb(var(--v-theme-secondary2), 0.7);
  }

  .link-style {
    list-style: none;
    color: white;
  }

  .hover-underline:hover {
    text-decoration: underline;

  }
}
</style>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    footer: false,
    contact_number: "+91 77240 30550",
    contact_email: "digitalayurved@gmail.com",
    clinic_address: "Pull Road Sheorinarayan, Dist. Janjgir Champa (CG)",
    clinic_address2: "Bus Stand Pawani, Dist. Sarangarh-Bilaigarh (CG)",
    contact_list: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/digitalayurved",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/DigitalAyurved",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/digitalayurved",
      }, {
        icon: "mdi-youtube",
        link: "https://www.youtube.com/@digitalayurved181",
      },
    ],
  }),
  mounted() {
    setTimeout(() => {
      this.footer = true
    }, 500)
  },
  methods: {},
};
</script>