import Mothership from './api.service';

export default {
  categories() {
    return Mothership().get('categories');
  },
};
