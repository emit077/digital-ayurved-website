<template>
  <div id="lets-talk" class="py-15 app-padding contact-section"
       :style="{ backgroundImage : 'url(' + background_image + ')' }">
    <v-row justify="center" class="my-10">
      <v-col sm="6" cols="13" :class="$vuetify.display.mobile?'text-center':'text-right'">
        <p class="font-weight-bold mb-5 text-theme-stroke-3 "
           :class="$vuetify.display.mobile?'text-subtitle-1':'text-h6 mt-3'">
          consult ayurvedic doctor online for
          any health concern</p>
        <h1 class="font-weight-bold text-theme-stroke-12" :class="$vuetify.display.mobile?'text-h4 ':'text-h2'"> Let's
          Book Online Consultant </h1>
        <p class=" mt-2 text-theme-stroke-12 fw-450 opacity-7" >
          Whether you need a full product, consultation, tech investments
          or an extended team, our expert
          & get confirmed
          online appointment
          with ayurvedic doctor
          we will cure you with the power of ayurveda.
        </p>
      </v-col>
      <v-col sm="6" cols="13" class="text-right">
        <div class="mx-auto contact-card" max-width="400"
             :data-aos="$vuetify.display.mobile?'fade-up':'fade-left'"
             data-aos-offset="100"
             data-aos-delay="50"
             data-aos-duration="800"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
        >
          <v-card-text :class="$vuetify.display.mobile?'px-6 py-8':'px-10 py-8'">
            <v-form ref="contact_form" v-model="valid" lazy-validation @submit.prevent="submitQueryForm()">
              <v-text-field
                  v-model="name"
                  color="rgb(var(--v-theme-theme-stroke-3),0.7)"
                  label="Your Name"
                  density="comfortable"
                  :rules="[$rules.REQUIRED_FIELD('Name')]"
              ></v-text-field>

              <v-text-field
                  v-model="mobile"
                  color="rgb(var(--v-theme-theme-stroke-3),0.7)"
                  maxlength="10"
                  label="Mobile"
                  density="comfortable"
                  :rules="$rules.MOBILE"
              ></v-text-field>

              <v-text-field
                  color="rgb(var(--v-theme-theme-stroke-3),0.7)"
                  maxlength="320"
                  v-model="email"
                  label="Email"
                  density="comfortable"
                  :rules="$rules.EMAIL"
              ></v-text-field>

              <v-textarea
                  color="rgb(var(--v-theme-theme-stroke-3),0.7)"
                  v-model="description"
                  label="Description"
                  density="comfortable"
                  rows="2"
                  :rules="[$rules.REQUIRED_FIELD('Description')]"
              ></v-textarea>
              <center>
                <v-btn color="theme-stroke-3" rounded width="210" height="50" class="send-btn" type="submit">
                  <span class="text-white font-weight-bold text-subtitle-1">Send</span>
                </v-btn>
              </center>
            </v-form>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.send-btn {
  box-shadow: 0 7px 20px 0 rgba(var(--v-theme-theme-stroke-3), 0.3)
}

.contact-card {
  backdrop-filter: blur(10px);
  backdrop-filter: saturate(200%) blur(10px);
  background-color: rgb(var(--v-theme-surface), 0.75);
  border-radius: 12px;
  max-width: 400px;
  -webkit-box-shadow: 0px 36px 58px 11px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 36px 58px 11px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 36px 58px 11px rgba(0, 0, 0, 0.25);
}


.contact-section {
  background-position: bottom;
  background-size: contain;
}
</style>

<script>

import {defineComponent,} from 'vue'
import {createUser} from "@/firebase-config";

export default defineComponent({
  name: 'LetsTalk',
  components: {},
  data() {
    return {
      name: "",
      mobile: "",
      email: "",
      description: "",
      valid: false,
      background_image: ""
    }
  },
  mounted() {
    this.background_image = require("@/assets/" + this.$vuetify.theme.global.name + "/wave-1.svg")
  },
  methods: {
    submitQueryForm() {
      this.$refs.contact_form.validate()
      if (!this.valid)
        return false
      let date = new Date()
      let params = {
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        description: this.description,
        date_time: date.getDate() + "-" + (date.getUTCMonth() + 1) + "-" + date.getFullYear(),
      }
      createUser(params).then(function (response) {
        this.$refs.contact_form.reset()
        this.showSnakeBar('success', "your response has been recorded. We will get back to you as soon as possible")
      }.bind(this)).catch(function (error) {
        this.showSnakeBar('error', "Something went wrong, Please try again letter.")
      }.bind(this))
    }
  }
});
</script>
