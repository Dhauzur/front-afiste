import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let reactivo = new Vuex.Store({
  state: {
    divs: {
      OrderBook: true,
      DeepPrice: true,
      PriceHistory: true,
      Tradding: true
    }
  },

  mutations: {
    changeDivs(state, val) {
      state.divs = val
    }
  },

})

export default reactivo
