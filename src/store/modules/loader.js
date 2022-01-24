/* eslint-disable no-shadow */
const state = {
  requestLoader: false,
  modalLoader: false,
};
const getters = {
  GetRequestLoader: (state) => state.requestLoader,
};

const mutations = {
  SET_REQUEST_LOADER(state, status) {
    state.requestLoader = status;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
