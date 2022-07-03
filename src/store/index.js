import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const storeOptions = {
    state: {
        test: 1,
    },
    getters: {
        test(state) {
            return state.test;
        }
    },
    mutations: {
        incrementTest(state) {
            this.state.test++;
        }
    },
    // strict: process.env.NODE_ENV !== 'production'
    strict: false,
}

export const store = new Vuex.Store(storeOptions);
