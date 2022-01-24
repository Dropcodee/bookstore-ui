<template>
  <div>
<div v-if="currentBook">
      <a-drawer
        :title="currentBook.name"
        :placement="placement"
        width="600"
        :closable="true"
        :visible="visible"
        @close="onClose"
      >
        <div class="book-detail">
          <div class="book-detail__img">
            <img :src="currentBook.imageUrl" alt="" />
          </div>
          <p class="opacity-50" :style="{marginBottom: '2em'}">{{ currentBook.description }}</p>
          <p :style="{fontSize: '14px', margin: '3em 0'}">
            Author:
            <span class="smallnav__pill">{{currentBook.name}}</span>
          </p>
          <p :style="{fontSize: '14px', margin: '3em 0'}">
            Published:
            <span class="smallnav__pill">{{currentBook.publishedDate}}</span>
          </p>
          <p :style="{fontSize: '14px', margin: '3em 0'}">
            Publishers:
            <span class="smallnav__pill">{{currentBook.publisher}}</span>
          </p>
          <p :style="{fontSize: '14px', margin: '3em 0'}">
            ISBN:
            <span class="smallnav__pill">{{currentBook.isbnNumber}}</span>
          </p>
        </div>
      </a-drawer>
    </div>
    <div v-else>
      <a-drawer
        title="Book Details"
        :placement="placement"
        :closable="true"
        :visible="visible"
        @close="onClose"
      >
        <div>
          <p :style="{ textAlign: 'center' }">No Book Details Available...</p>
        </div>
      </a-drawer>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: { currentBook: { type: Object }, visible: { type: Boolean, default: false } },
  emits: ['closeDrawer'],
  setup(props, context) {
    const onClose = () => {
      context.emit('closeDrawer');
    };
    const placement = ref('right');
    return { onClose, placement };
  },
};
</script>

<style lang="scss" scoped>

</style>
