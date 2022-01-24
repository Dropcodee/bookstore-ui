import Mothership from './api.service';

export default {
  books() {
    return Mothership().get('books');
  },
  categoryBooks(categoryId) {
    return Mothership().get(`books/category/${categoryId}`);
  },
};
