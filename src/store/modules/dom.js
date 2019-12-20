// import { setupApiInstance, getApiInstance, setAccessToken } from 'utils/api';

const state = {
  divs: {
    OrderBook: true,
    DeepPrice: true,
    PriceHistory: true,
    Tradding: true
  }
};

const getters = {
  divs: state => state.divs,
};

const actions = {};

const mutations = {
  changeDivs(state, val) {
    state.divs = val
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
