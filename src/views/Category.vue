<template>
  <div>
    <a-row :gutter="4" v-if="books.length > 0">
      <a-col :xs="24" :md="24" :lg="12" :xl="8" v-for="book in books" :key="book._id">
        <a-card hoverable style="width: 360px" @click="showDetails(book)">
          <div class="card__frame">
            <img
              alt="example"
              :src="book.imageUrl"
            />
          </div>
          <a-card-meta :title="book.name" :style="{ marginTop: '1em' }">
            <template #description
              >{{ book.author }}
              <p>{{ book.publishedDate}}</p>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <a-row v-if="books.length < 1">
      <a-col :span="24" :style="{textAlign: 'center'}">
        <img src="/img/no-data.jpg"
        alt=""
        class="opacity-50"
        :style="{ marginTop: '1em', width: '400px', height: 'auto' }" />
        <p :style="{ marginTop: '1em' }">No Books for this category...</p>
      </a-col>
    </a-row>
        <book-details :currentBook="currentBook" :visible="visible" @closeDrawer="onClose" />
  </div>
</template>

<script>
import {
  defineComponent, computed, watch, ref,
} from 'vue';
import { useStore } from 'vuex';
import BookDetails from '@/components/BookDetails.vue';
import { DateFormatter } from '@/helpers/DateFormatter';

export default defineComponent({
  props: { categoryId: { type: String } },
  components: { BookDetails },
  setup(props) {
    const store = useStore();
    const visible = ref(false);
    const books = computed(() => {
      const booksFiltered = store.getters['books/GetCategoryBooks'];
      booksFiltered.forEach((book) => {
        // eslint-disable-next-line no-param-reassign
        book.publishedDate = DateFormatter(book.publishedDate);
      });
      return booksFiltered;
    });
    const currentBook = computed(() => store.getters['books/GetCurrentBook']);
    const showDetails = (book) => {
      store.commit('books/SET_CURRENT_BOOK', book);
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    store.dispatch('books/FetchCategoryBooks', props.categoryId);
    watch(() => props.categoryId, (newId) => {
      store.dispatch('books/FetchCategoryBooks', newId);
    });
    return {
      books,
      currentBook,
      showDetails,
      visible,
      onClose,
    };
  },
});
</script>

<style scoped></style>
