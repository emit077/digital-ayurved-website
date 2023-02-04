<template>
  <div class="bg-theme-fill-1" id="what-we-do">
    <div v-for="(service,i) in service_list" :key="i"
         class="app-padding"
         :class="$vuetify.display.mobile?'no-bg':service.class"
         style="margin-top: -1px"
         :style="service.bg_img?{ backgroundImage : 'url('+ require('@/assets/'+this.$vuetify.theme.global.name+'/'+service.bg_img)+')' }:''"
         data-aos="fade-up"
         data-aos-offset="150"
         data-aos-delay="10"
         data-aos-duration="400"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
    >
      <div class="py-7" v-if="i%2==0">
        <v-row align="center" justify="center" no-gutters
               :class="$vuetify.display.mobile?'text-center':'py-15 text-left'">
          <v-col sm="6" cols="13">
            <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/'+service.img_name)" alt="img"
                 class="mw-100">
          </v-col>
          <v-col sm="6" cols="12" class="justify-center py-10"
                 :class="$vuetify.display.mobile?' text-center ':'  text-right'">
            <!--        <div class="border-sub-text mb-3"> Customer Service</div>-->
            <p class="font-weight-bold text-theme-stroke-1" :class="$vuetify.display.mobile?'text-h5 ':' text-h3'"
               v-html="service.title">
            </p>

            <p class=" mt-6 text-theme-stroke-2" :class="$vuetify.display.mobile?'text-subtitle-1 ':' text-h6'">
              {{ service.description }}
            </p>

            <div :class="$vuetify.display.mobile?' text-center ':'  text-right'">
              <div class="line-style d-inline-block"></div>
            </div>
          </v-col>
        </v-row>
      </div>
      <!--    -->
      <div class="py-5" v-else>
        <v-row align="center" justify="center" no-gutters
               :class="$vuetify.display.mobile?'text-center':'py-15 text-right'">
          <v-col sm="6" cols="13" class="text-center" v-if="$vuetify.display.mobile">
            <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/'+service.img_name)" alt="img"
                 class="mw-100">
          </v-col>
          <v-col sm="6" cols="12" class="justify-center py-10"
                 :class="$vuetify.display.mobile?' text-center ':'  text-left'">
            <!--        <div class="border-sub-text mb-3"> Customer Service</div>-->

            <p class=" font-weight-bold text-theme-stroke-1" :class="$vuetify.display.mobile?'text-h5 ':' text-h3'">
              {{ service.title }}
            </p>
            <p class=" mt-6 text-theme-stroke-2" :class="$vuetify.display.mobile?'text-subtitle-1 ':' text-h6'">
              {{ service.description }}
            </p>
            <div :class="$vuetify.display.mobile?' text-center ':'text-left'">

              <div class="line-style d-inline-block"></div>
            </div>
          </v-col>
          <v-col sm="6" cols="13" class="text-right" v-if="!$vuetify.display.mobile">
            <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/'+service.img_name)" alt="img"
                 class="mw-100">
          </v-col>
        </v-row>
      </div>
      <!--      -->
    </div>
  </div>
  <!--    -->
  <img v-if="!$vuetify.display.mobile" :src="require('@/assets/'+this.$vuetify.theme.global.name+'/solar-system.svg')"
       alt="img" class="solar-img">
  <!--      -->
</template>
<style lang="scss" scoped>
.line-style {
  background-color: rgb(var(--v-theme-theme-stroke-1), 1);
  height: 3px;
  border-radius: 5px;
  width: 40px;
  border-bottom: rgb(var(--v-theme-theme-stroke-2), 1) 1px solid;
}

.border-sub-text {
  border: solid 2px;
  border-radius: 8px;
  padding: 1px 10px;
  font-weight: bold;
  display: inline-block;
  color: rgb(var(--v-theme-secondary2));
  border-color: rgb(var(--v-theme-secondary2)) !important;
}

.solar-img {
  position: absolute;
  width: 500px;
  left: -260px;
  top: 1500px;
  z-index: 1;
  animation: spin360 60s linear infinite;
}

.no-bg {
  background-image: none !important;
}

.background-bottom-right {
  background-position: right bottom;
  background-size: 50%;
}

.background-top-left {
  background-position: top left;
  background-size: 50%;
}

@media screen and (min-width: 1600px) {
  .background-bottom-right {
    background-size: 38%;
  }
  .background-top-left {
    background-size: 41%;
  }
}


.line-style {
  background-color: rgb(var(--v-theme-theme-stroke-1), 1);
  height: 3px;
  border-radius: 5px;
  width: 40px;
  border-bottom: rgb(var(--v-theme-theme-stroke-2), 1) 1px solid;
}
</style>

<script>
export default {
  name: 'WhatWeDo',
  components: {},
  data() {
    return {
      background_image: "",
      service_list: [
        {
          title: "Drop your Appointment Request",
          description: "Write us for appointment Request and Our Health Coach will reachout to for your query",
          img_name: "illustration-3.svg",
          bg_img: "rectangelbg-1.png",
          class: 'background-top-left',
        },
        {
          title: "Schedule your Appointment",
          description: "Our Health Coach will Book an appointment of your chosen date & time ",
          img_name: "illustration-2.svg"
        },
        {
          title: "Consult with the doctor",
          description: "Consult with the doctor over a video call & get medicines at your doorstep.",
          img_name: "illustration-1.svg",
          bg_img: "rectangelbg-2.png",
          class: 'background-bottom-right',
        },
        // {
        //   title: "Graphic designing",
        //   description: "",
        //   img_name: "illustration-3.svg",
        //   bg_img: "rectangelbg-2.png",
        //   class: 'background-bottom-right',
        // }
      ]
    }
  },
  mounted() {
    // this.background_image = require("@/assets/" + this.$vuetify.theme.global.name + "/wave-3.svg")
  },
  methods: {
    getImgPath(img_name) {
      let path = '@/assets/' + this.$vuetify.theme.global.name + '/' + img_name
      console.log(path)
      return require(path)
    }
  }
};
</script>
