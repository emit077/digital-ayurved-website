import {createStore} from 'vuex'

export default createStore({
  state: {
    page_loading: false,
    snackbar: {
      text: "",
      color: '',
      flag: false,
    }
  },
  getters: {
    getSnackbar: state => {
      return state.snackbar;
    },
  },
  mutations: {
    SET_SNACKBAR(state, {flag, text, color}) {
      state.snackbar.flag = flag
      state.snackbar.text = text
      state.snackbar.color = color
      console.log("flag==a",flag)
    },

  },
  actions: {
    setSnackbar({commit}, items) {
      console.log("items=",items)
      commit('SET_SNACKBAR', items)
    },
  },
  modules: {}
})
