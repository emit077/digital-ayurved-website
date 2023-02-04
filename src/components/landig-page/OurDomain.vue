<template>
  <div class="py-15 app-padding our-domain-section">
    <div data-aos="fade-up"
         data-aos-offset="100"
         data-aos-delay="10"
         data-aos-duration="400"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true">
      <v-row align="center" justify="center" class="mb-8 my-5" no-gutters>
        <v-col sm="12" cols="13" class="justify-center text-center">
          <p class="font-weight-bold text-theme-stroke-12 px-10" :class="$vuetify.display.mobile?'text-h5 ':'text-h4'">
            Let us cure you will the power Of Ayurveda.
          </p>
          <p class="mt-5 text-black" :class="$vuetify.display.mobile?'text-subtitle-1 ':' text-subtitle-1'">
            We provide personalised treatment for each individual at all touch-points. We are the Ayurveda organisation
            to have championed a protocol and data-driven diagnosis and treatment. Our scientific spirit is grounded in
            rational principles, ensuring personalised treatment for each patient, to help them regain “Swasthya” with
            the use of “Chikitsa” and lifestyle changes
          </p>
        </v-col>
      </v-row>
      <div class="text-center">
<!--        <div :class="this.$vuetify.display.mobile?'mx-3':'mx-10'" class="d-inline-block pa-5 "-->
<!--             v-for="(item, i) in domain_list"-->
<!--             :key="i">-->
<!--          <img :src="require('@/assets/'+this.$vuetify.theme.global.name+'/'+item.img_name)" alt="img"-->
<!--               width="70"-->
<!--               height="70">-->
<!--          <p class="text-theme-stroke-3 text-subtitle-1 fw-450 mt-2">{{ item.name }}</p>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.our-domain-section {
  background-color: rgb(var(--v-theme-theme-fill-2), 0.1);
}

</style>

<script>
export default {
  name: 'OverDomain',
  components: {},
  data() {
    return {
      domain_list: [
        {
          img_name: "account.svg",
          name: "Account",
        },
        {
          img_name: "Education.svg",
          name: "Education"
        },
        {
          img_name: "hospitality.svg",
          name: "Hospitality"
        },
        {
          img_name: "e-commerce.svg",
          name: "e-commerce"
        }
      ]
    }
  },
  mounted() {
  },
  methods: {}
};
</script>
