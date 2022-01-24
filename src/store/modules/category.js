/* eslint-disable no-shadow */
import categoryService from '@/services/category.service';

const state = () => ({
  categories: { data: [] },
  currentCategory: null,
});

const getters = {
  GetCategories: (state) => state.categories.data,
  GetCurrentCategory: (state) => state.currentCategory,
};
const mutations = {
  SET_CATEGORIES_STATE: (state, payload) => {
    state.categories = payload;
  },
  SET_CURRENT_CATEGORY: (state, category) => {
    state.currentCategory = category;
  },
};

const actions = {
  FetchCategories: async (context) => {
    try {
      context.commit('loader/SET_REQUEST_LOADER', true, { root: true });
      const { data } = await categoryService.categories();
      context.commit('SET_CATEGORIES_STATE', data);
    } catch (error) {
      console.log(error);
    } finally {
      context.commit('loader/SET_REQUEST_LOADER', false, { root: true });
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
