<template>
  <!-- blog card-->
  <div class="blog-card-wrapper">
    <v-img
        class="align-end text-left blog-card-img "
        aspect-ratio="1"
        :src="blog.img_url"
        cover
    >
      <div class="post-preview-content h-100 py-1">
        <div class="px-3 pb-1">
          <v-card-title class="text-h6 text-white" v-html="blog.title"></v-card-title>
        </div>
        <v-divider color="rgb(var(--v-theme-surface),0.4)" class=""></v-divider>
        <div class="px-3 pb-1 pt-2 text-right">
          <router-link class="router-link" :to="{ name:'blog_feed',params:{id:blog.post_id}}">
            <v-btn variant="text" size="small" class="px-0" v-ripple="false"><span
                class="text-white">Read more</span></v-btn>
          </router-link>
          <v-avatar class="float-left" size="30">
            <v-img alt="Avatar" :src="blog.author_img">
            </v-img>
          </v-avatar>
        </div>
      </div>
    </v-img>
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

    .post-preview-content {
      transition-duration: 2s;
      transform-origin: bottom;
      background: rgb(181, 249, 242);
      background: linear-gradient(180deg, rgba(181, 249, 242, 0.09145665101978295) 0%, rgba(3, 13, 11, 0.5732493681066176) 40%);
    }
  }
}

.blog-card-wrapper:hover {
  box-shadow: 0px 8px 9px -5px rgba(var($shadowColor), 0.2), 0px 15px 22px 2px rgba(var($shadowColor), 0.14), 0px 6px 28px 5px rgba(var($shadowColor), 0.12) !important;

  .blog-card-img {
    transform: scale(1.2);

    .post-preview-content {
      transform: scale(0.82);
    }
  }
}

</style>

<script>

export default {
  name: 'BlogCardTemplate',
  props: ['blog'],
  components: {},
  data() {
    return {}
  },
  mounted() {
  },
  methods: {}
};
</script>


