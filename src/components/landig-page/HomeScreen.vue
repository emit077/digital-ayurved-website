<template>
  <div class="app-padding d-flex align-center" id="landing-screen"
       :style="style" :class="$vuetify.display.mobile?'pt-5':'text-h6'">
    <v-row align="center" justify="center" no-gutters>
      <v-col sm="6" cols="12" class="justify-center" :class="$vuetify.display.mobile?'text-center ':' text-left'">
        <div class="pb-5">
          <h1 class="font-weight-bold text-theme-stroke-1"
              :class="$vuetify.display.mobile?'text-h6 my-3 ':'text-h4 my-6'">
            Ayurveda for
          </h1>
          <h1 class="font-weight-bold text-theme-stroke-1" :class="$vuetify.display.mobile?'text-h4 ':'text-h2'">
            Better health
          </h1>
          <p class="text-theme-stroke-2" :class="$vuetify.display.mobile?'text-subtitle-1 mb-5 mt-4':'text-h6 my-6'">
            Consult with Ayurvedic Doctors
            across Specialities,
            over Video & Voice calls
            Consult a doctor from the comfort of your home
          </p>
          <v-btn color="theme-stroke-2" variant="outlined" rounded width="260" height="50" class="lets-talk-btn"
                 :class="$vuetify.display.mobile?'mt-4':'mt-6'"
                 @click="onLinkClick('lets-talk')">
            <span class="text-theme-stroke-2 font-weight-bold text-subtitle-1">Book Online Consultant</span>

          </v-btn>
        </div>
      </v-col>
      <v-col sm="6" cols="12" class="text-right">
        <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/home-iluustration.svg')" alt="img"
             class="w-100">
      </v-col>
    </v-row>
  </div>
</template>
<!--  -->
<style lang="scss" scoped>
#landing-screen {
  background-position: bottom;
  background-size: contain;
}

.lets-talk-btn {
  box-shadow: 0 7px 10px 0 rgba(var(--v-theme-theme-stroke-3), 0.2);
}

</style>
<!--   -->
<script>
export default {
  name: 'LandingPageVue',
  components: {},
  data() {
    return {
      style: {
        height: screen.height - 150 + "px",
      }
    }
  },
  mounted() {
    this.style = {
      height: screen.height - 150 + "px",
      // backgroundImage: 'url(' + require("@/assets/" + this.$vuetify.theme.global.name + "/wave-1.svg") + ')'
    }
  },
  methods: {}
};
</script>
