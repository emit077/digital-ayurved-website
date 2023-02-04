<template>
  <div>
    <home-screen class="bg-theme-fill-1" />
    <our-domain/>
    <what-we-do/>
<!--    <tech-stack/>-->
    <lets-talk/>
    <!--    <our-clients/>-->
    <customer-testimonial/>
  </div>
</template>
<style lang="scss">
</style>

<script>
import HomeScreen from "@/components/landig-page/HomeScreen"
import OurDomain from "@/components/landig-page/OurDomain"
import WhatWeDo from "@/components/landig-page/WhatWeDo"
import LetsTalk from "@/components/landig-page/LetsTalk"
// import TechStack from "@/components/landig-page/TechStack"
// import OurClients from "@/components/landig-page/Ourclients"
import CustomerTestimonial from "@/components/landig-page/CustomerTestimonial"

export default {
  name: 'LandingPageVue',
  components: {
    HomeScreen,
    OurDomain,
    WhatWeDo,
    LetsTalk,
    // TechStack,
    // OurClients,
    CustomerTestimonial
  },
  data() {
    return {}
  },
  beforeMount() {
    this.toggleLoading()
  },
  mounted() {
  },
  methods: {}
};
</script>
