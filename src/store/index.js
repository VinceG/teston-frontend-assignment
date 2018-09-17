import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import video from './modules/video';
import annotations from './modules/annotations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    video: {
      namespaced: true,
      ...video,
    },
    annotations: {
      namespaced: true,
      ...annotations,
    },
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default store;
