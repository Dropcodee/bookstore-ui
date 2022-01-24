<template>
  <div class="home">
    <a-row :gutter="4" v-if="books.length > 0">
      <a-col
        :xs="24"
        :md="24"
        :lg="12"
        :xl="8"
        v-for="book in books.slice(0, 6)"
        :key="book._id"
        style="margin-bottom: 2em"
      >
        <a-card hoverable style="width: 360px" @click="showDetails(book)">
          <div class="card__frame">
            <img alt="example" :src="book.imageUrl" />
          </div>
          <a-card-meta :title="book.name" :style="{ marginTop: '1em' }">
            <template #description
              >{{ book.author }}
              <p>{{ book.publishedDate }}</p>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <a-row v-if="books.length < 1">
      <a-col :span="24" :style="{ textAlign: 'center' }">
        <img
          src="/img/no-data.jpg"
          alt=""
          class="opacity-50"
          :style="{ marginTop: '1em', width: '400px', height: 'auto' }"
        />
        <p :style="{ marginTop: '1em' }">No Books for this category...</p>
      </a-col>
    </a-row>
    <book-details :currentBook="currentBook" :visible="visible" @closeDrawer="onClose" />
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { DateFormatter } from '@/helpers/DateFormatter';
import BookDetails from '@/components/BookDetails.vue';

export default defineComponent({
  name: 'Home',
  components: { BookDetails },
  setup() {
    const store = useStore();
    const visible = ref(false);
    const currentBook = computed(() => store.getters['books/GetCurrentBook']);
    const showDetails = (book) => {
      store.commit('books/SET_CURRENT_BOOK', book);
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    const books = computed(() => {
      const booksFiltered = store.getters['books/GetLatestBooks'];
      booksFiltered.forEach((book) => {
        // eslint-disable-next-line no-param-reassign
        book.publishedDate = DateFormatter(book.publishedDate);
      });
      return booksFiltered;
    });
    store.commit('category/SET_CURRENT_CATEGORY', null);
    store.dispatch('books/FetchLatestBooks');
    return {
      showDetails,
      books,
      visible,
      onClose,
      currentBook,
    };
  },
});
</script>
