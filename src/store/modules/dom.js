// import { setupApiInstance, getApiInstance, setAccessToken } from 'utils/api';
import Axios from "axios"
import { api } from "@/utils/config"

const state = {
  divs: {
    OrderBook: true,
    DeepPrice: true,
    PriceHistory: true,
    Tradding: true
  },
  orders: []
};

const getters = {
  divs: state => state.divs,
  orders: state => state.orders,
};

const actions = {
  async fetchOrders({ commit }, value) {
    return Axios.get(api + "/orders")
    .then(response => {
      commit('setOrders', response.data.orders)
      console.log("Ordenes obtenidas: " + response.data.length);
      console.log(response.data.orders);
    })
    .catch(error => {
      commit('setOrders', [])
      console.log(error)
    })
  },

  async createOrder({ commit }, value) {
    return Axios.post(api + "/order", value)
    .then(response => {
      console.log("Order creada (Sin validaciones)");
      console.log(response.data.orden);
    })
    .catch(error => {
      console.log(error)
    })
  }
};

const mutations = {
  changeDivs(state, val) {
    state.divs = val
  },
  setOrders(state, val) {
    state.orders = val
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
