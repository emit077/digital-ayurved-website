<template>
  <div class="app-padding py-10">
    <!-- recent blog -->
    <v-row align="center" justify="center" class="blog-card-wrapper mb-8 elevation-1"
           no-gutters v-bind="props">
      <v-col sm="6" cols="12" class="text-right overflow-hidden">
        <v-img
            class="align-end text-left blog-card-img"
            aspect-ratio="1"
            :src="recentBlog.img_url"
            max-height="400"
            cover
        ></v-img>
      </v-col>
      <v-col sm="6" cols="12" class="justify-center"
             :class="$vuetify.display.mobile?'text-center ':' text-left'">
        <div class="pa-4">
          <p class="font-weight-bold text-theme-stroke-12 opacity-7" :class="$vuetify.display.mobile?'text-h4 ':'text-h2'"
             v-html="recentBlog.title"></p>

          <div class="px-3 pb-1 pt-2 mt-4 text-left">
            <router-link class="router-link" :to="{ name:'blog_feed',params:{id:recentBlog.post_id}}">
              <v-btn rounded variant="text" class="float-right" size="default" v-ripple="false">Read more</v-btn>
            </router-link>
            <v-avatar size="30">
              <v-img alt="Avatar" :src="recentBlog.author_img">
              </v-img>
            </v-avatar>
            <span class="pl-2">{{ recentBlog.author_name }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- blog card-->
    <v-row align="center" justify="center">
      <v-col sm="4" cols="12" class="text-right" v-for="(blog,i) in blog_list" :key="i">
        <blog-card-template :blog="blog"/>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
$shadowColor: --v-theme-primary;
.blog-card-wrapper {
  border-radius: 10px;
  overflow: hidden;

  .blog-card-img {
    transition-duration: 2s;
    transform-origin: bottom;
  }
}

.blog-card-wrapper:hover {
  box-shadow: 0px 8px 9px -5px rgba(var($shadowColor), 0.2), 0px 15px 22px 2px rgba(var($shadowColor), 0.14), 0px 6px 28px 5px rgba(var($shadowColor), 0.12) !important;

  .blog-card-img {
    transform: scale(1.2);
  }
}

</style>

<script>
import Data from "@/helper/blog_data"
import BlogCardTemplate from "@/components/other/BlogCardTemplate";

export default {
  name: 'BlogHome',
  components: {
    BlogCardTemplate
  },
  data() {
    return {
      blog_list: Data.blog_list,
      recentBlog: Data.blog_list[0],
    }
  }, beforeMount() {
    this.toggleLoading()
  },
  mounted() {
  },
  methods: {}
};
</script>


