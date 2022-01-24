import bookService from '../../services/book.service';

/* eslint-disable no-shadow */
const state = () => ({
  books: { data: [] },
  categoryBooks: { data: [] },
  currentBook: {},
});

const getters = {
  GetCategoryBooks: (state) => state.categoryBooks.data,
  GetLatestBooks: (state) => state.books.data,
  GetCurrentBook: (state) => state.currentBook,
};
const mutations = {
  SET_BOOKS_STATE: (state, payload) => {
    state.books = payload;
  },
  SET_CATEGORY_BOOKS_STATE: (state, payload) => {
    state.categoryBooks = payload;
  },
  SET_CURRENT_BOOK: (state, book) => {
    state.currentBook = book;
  },
};
const actions = {
  FetchLatestBooks: async (context) => {
    try {
      context.commit('loader/SET_REQUEST_LOADER', true, { root: true });
      const { data } = await bookService.books();
      context.commit('SET_BOOKS_STATE', data);
    } catch (error) {
      console.log(error.response);
    } finally {
      context.commit('loader/SET_REQUEST_LOADER', false, { root: true });
    }
  },
  FetchCategoryBooks: async (context, payload) => {
    try {
      context.commit('loader/SET_REQUEST_LOADER', true, { root: true });
      const { data } = await bookService.categoryBooks(payload);
      context.commit('SET_CATEGORY_BOOKS_STATE', data);
    } catch (error) {
      console.log(error.response);
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
