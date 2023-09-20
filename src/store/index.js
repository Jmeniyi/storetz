import { createStore } from 'vuex'
import { itemsList } from '@/components/db.js'


export default createStore({
  state: {
    itemsList: itemsList,
    countCart: 0,
    cart: [],
    newUserData: [],
  },
  mutations: {
    ADD_TO_CART_COUNT: (state, payload) => {
      state.cart.push(payload);
    },
    REMOVE_ITEM(state, item) {
      let index = state.cart.indexOf(item);
      if (index > -1) {
        let product = state.cart[index];
        state.cart.splice(index, 1);
        state.cartCount -= product;
      }
    },
      addNewUser(state, payload, newUser) {
        state.newUserData.unshift(newUser, payload);
      }
  },
  actions: {
    ADD_TO_CART: (context, payload, item) => {
      context.commit('ADD_TO_CART_COUNT', payload, item);
    },
  },
})
/* getters: {
 
}
 mutations: {
   SET_ITEMS_API: (state,payload) => {
      state.itemsApi = payload
    },
actions: {
    GET_ITEMS_API: async (context, payload) =>{
      let { data } = await axios
      .get('https://csgobackpack.net/api/GetItemsList/v2/')
      context.commit('SET_ITEMS_API',data , payload)
    },

*/