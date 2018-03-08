import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [],
    products: [
      {
        id: 1,
        name: 'Max',
      },
      {
        id: 2,
        name: 'Anna',
      },
      {
        id: 3,
        name: 'Chris',
      },
      {
        id: 4,
        name: 'Sven',
      },
    ],
  },
  getters,
  mutations,
  actions,
});
