import axios from '../../config/axios';

export default {
  LOAD_PRODUCTS: ({ commit }) => {
    console.log('Hi Axios'); // eslint-disable-line
    axios.get('/products').then((response) => {
      commit('SET_PRODUCTS', { list: response.data.docs });
    }, (err) => {
      console.log(err); // eslint-disable-line
    });
  },
};
