<template>
  <!--  <div :style="{ backgroundImage : 'url('+ require('@/assets/'+this.$vuetify.theme.global.name+'/codeBG.png')+')' }" class="tech-stack-card-wrapper">-->
  <div class="tech-stack-card-wrapper" :class="$vuetify.display.mobile?'':'py-15'">
    <div class="app-padding py-15 justify-center text-center align-center" >
      <p class="text-theme-stroke-2 font-weight-bold"
      :class="$vuetify.display.mobile?'text-h5 mb-8 ':'text-h4 mb-12'">We are working with</p>
      <div v-for="(tech,i) in tech_stacks" :key="i" class="d-inline-flex tech-stack-card"
           :class="$vuetify.display.mobile?'my-5':'my-8'">
        <div class="d-flex align-center justify-center elevation-1"
             :class="$vuetify.display.mobile?' mx-2 px-3 py-1 ':' px-3 py-2 mx-4'">
          <img :src="tech.img" alt="" :width="tech.width||40" class="">
          <span class="text-h5 mx-2 font-weight-light">|</span>
          <span class="tech-title">{{ tech.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tech-stack-card-wrapper {
  background-color: #1F2020;
  background-position: bottom;
  background-size: cover;
}

.tech-stack-card {
  font-weight: 450;

  div {
    border-radius: 5px;
    background-color: white;
  }

  img {
    transition-duration: 4s;
    filter: grayscale(100%);
    z-index: 100;
    transform-origin: right;
  }
}

.tech-stack-card:hover {
  color: rgb(var(v--theme-strock-12));

  img {
     filter: grayscale(0%) !important;
    transition-duration: 1s;
    transform: scale(1.3);
    transform-origin: right;
  }
}
</style>


<script>
export default {
  name: 'TechStack',
  components: {},
  data() {
    return {
      isHovering: true,
      tech_stacks: [
        {
          title: "Python",
          img: require("@/assets/tech-stack/python.svg")
        },
        {
          title: "Django",
          img: require("@/assets/tech-stack/django.svg")
        },
        {
          title: "Vue js",
          img: require("@/assets/tech-stack/vue-js.svg")
        },
        {
          title: "Vuetify",
          width: 45,
          img: require("@/assets/tech-stack/vuetify.svg")
        },
        {
          title: "Javascript",
          img: require("@/assets/tech-stack/javascript.svg")
        },
        {
          title: "Git",
          img: require("@/assets/tech-stack/git.svg")
        },
        {
          title: "Jquery",
          img: require("@/assets/tech-stack/jquery.svg")
        },
        {
          title: "HTML5",
          img: require("@/assets/tech-stack/html-5.svg")
        },
        {
          title: "SASS",
          img: require("@/assets/tech-stack/sass.svg")
        },
        {
          title: "Mysql",
          img: require("@/assets/tech-stack/mysql.svg")
        },
        {
          title: "Postgresql",
          img: require("@/assets/tech-stack/postgresql.svg")
        },
        {
          title: "AWS",
          img: require("@/assets/tech-stack/amazon-web-services.svg")
        },
        {
          title: "Digital Ocean",
          img: require("@/assets/tech-stack/digitalocean.svg")
        },
      ]
    }
  },
  mounted() {
  },
  methods: {}
};
</script>
