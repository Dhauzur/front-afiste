import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let reactivo = new Vuex.Store({
  state: {
    divs: {
      OrderBook: {
        on: true,
        size: null
      },
      PriceChart: {
        on: true,
        size: null
      },
      PriceHistory: {
        on: true,
        size: null
      },
    }
  },

  mutations: {
    changeDivs(state, val) {
      state.divs = val
    }
  },

})

export default reactivo
