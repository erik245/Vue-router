import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brands: [],
    entityId: "aaa",
    brand: {}
  },
  getters: {
    getBrand: () => {
      var request = new XMLHttpRequest();

      request.open('GET', 'https://private-anon-56618cc692-brewoptixv2.apiary-mock.com/brands/{state.entityId}');

      request.setRequestHeader('Authorization', 'Bearer ABCDEF');
      request.setRequestHeader('x-supplier-id', 'ad51d5ac-17bb-4240-8648-c483b224b2aa');

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          return (this.responseText);
        }
      };
      request.send();
    }
  },
  mutations: {
    initAll(state) {
      let request = new XMLHttpRequest();
      
      request.open('GET', 'https://private-anon-56618cc692-brewoptixv2.apiary-mock.com/brands');
      request.setRequestHeader('Authorization', 'Bearer ABCDEF');
      request.setRequestHeader('x-supplier-id', 'ad51d5ac-17bb-4240-8648-c483b224b2aa');
      
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          state.brands = JSON.parse(this.response);
        }
      };
      request.send();
    },
    setId(state, newid) {
      state.id = newid;
      var request = new XMLHttpRequest();

      request.open('GET', 'https://private-anon-56618cc692-brewoptixv2.apiary-mock.com/brands/{newid}');

      request.setRequestHeader('Authorization', 'Bearer ABCDEF');
      request.setRequestHeader('x-supplier-id', 'ad51d5ac-17bb-4240-8648-c483b224b2aa');

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          state.brand = JSON.parse(this.response);
        }
      };
      request.send();
    }
  },
  actions: {
    init(context) {
      context.commit('initAll');
    },
    setId(context, newid) {
      context.commit('setId', newid);
    }
  }
})
