// import axios from "axios";
//
// let CancelToken = axios.CancelToken;
// let source = CancelToken.source();

export default {
  data() {
    return {
      nav_link_list: [
        {
          title: "Home",
          link: "app",
          link_page: "home",
          route_name: 'home',
        },
        {
          title: "What we do?",
          link: "what-we-do",
          link_page: "home",
          // route_name: 'home',
        },
        {
          title: "Contact Us",
          link: "lets-talk",
          link_page: "home",
          // route_name: 'home',
        },
        // {
        //   title: "Blogs",
        //   route_name: 'blogs',
        //   link: "#"
        // }
      ],
      menu_style: {},
      menu: false,
    }
  },
  methods: {
    showSnakeBar(type = 'success', text) {
      console.log("asd")
      this.$store.dispatch('setSnackbar', {
        flag: true,
        text,
        color: type
      })
    },
    //page scroll to the id
    onLinkClick(id) {
      const SCROlL_ELM = document.getElementById(id)
      SCROlL_ELM.scrollIntoView({behavior: "smooth"});
    },
    //toggle the loading screen
    toggleLoading() {
      this.$store.state.page_loading = true
      setTimeout(() => {
        this.$store.state.page_loading = false
      }, 1000)
    },
    // errorHandler(response) {
    //   switch (response.status) {
    //     case 400:
    //       this.showSnakeBar("error", response.data.message)
    //       break;
    //     case 401:
    //       this.showSnakeBar("error", "Invalid Access token")
    //       break;
    //     case 403:
    //       this.showSnakeBar("error", "Invalid token")
    //       break;
    //     case 404:
    //       this.showSnakeBar("error", "Request not found")
    //       break
    //     case 440:
    //       this.showSnakeBar("error", "Session Expired")
    //       break;
    //     case 500:
    //       this.showSnakeBar("error", "Internal server error")
    //       break;
    //     default:
    //       this.showSnakeBar("error", "Something went wrong")
    //       break;
    //   }
    // },
    // /* common  function  for GET API call */
    // request_GET: (self, url, params, fnSuccessResponse = null, headers = null, fnFailureResponse = null, finallyHandler = null, is_cancel = false) => {
    //   if (is_cancel) {
    //     source.cancel();
    //     source = axios.CancelToken.source();
    //   }
    //   if (!headers)
    //     headers = {'token': localStorage.getItem("token") || ""}
    //
    //   axios_instance.get(url, {
    //     params: params,
    //     headers: headers,
    //     cancelToken: is_cancel ? source.token : ''
    //   }).then(function (response) {
    //     if (fnSuccessResponse != null) {
    //       if (response.data.success == false)
    //         self.showSnakeBar("error", response.data.message)
    //       fnSuccessResponse(response);
    //     }
    //   }).catch(function (error) {
    //     if (axios.isCancel(error))
    //       return false
    //     if (error.response) {
    //       self.errorHandler(error.response);
    //       if (fnFailureResponse != null)
    //         fnFailureResponse();
    //     }
    //   }).finally(function (res) {
    //     if (finallyHandler !== null)
    //       finallyHandler()
    //   });
    // },
    //
    //
    // /* common function for the POST API Call */
    // request_POST(self, url, params, fnSuccessResponse = null, headers = null, fnFailureResponse = null, finallyHandler = null) {
    //   if (!headers)
    //     headers = {'token': localStorage.getItem("token") || ""}
    //   axios_instance.post(url, params, {
    //     headers: headers,
    //   }).then(function (response) {
    //     if (fnSuccessResponse != null) {
    //       if (response.data.success == false)
    //         self.showSnakeBar("red", response.data.message)
    //       fnSuccessResponse(response);
    //     }
    //   }).catch(function (error) {
    //     if (error.response) {
    //       self.errorHandler(error.response);
    //       if (fnFailureResponse != null)
    //         fnFailureResponse();
    //     }
    //   }).finally(function (res) {
    //     if (finallyHandler !== null)
    //       finallyHandler()
    //   });
    // },
    //
    // /*perform encription for Rout params */
    // encrypt: function (text) {
    //   return this.CryptoJS.AES.encrypt(text.toString(), "tutor-factory").toString()
    // },
    // /*perform decription for Rout params*/
    // decrypt: function (text) {
    //   return this.CryptoJS.AES.decrypt(text, "tutor-factory").toString(this.CryptoJS.enc.Utf8)
    // },

  }
}