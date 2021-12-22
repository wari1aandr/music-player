import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { playlist } from './modules/playlist';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    authenticatedUserId: 1
  },
  modules: {
    playlist
  }
};

export default new Vuex.Store<RootState>(store);
