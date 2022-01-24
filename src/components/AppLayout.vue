<template>
  <div>
    <div class="hidden-md-down">
      <DesktopLayout :categories="categories">
        <template v-slot:routeArea>
          <a-layout>
            <a-layout-content
              :style="{
                background: '#F8FAFD',
                margin: 0,
                padding: '2em',
                minHeight: '280px',
              }"
            >
                 <div class="spinner" v-show="requestLoading">
        <div style="display:flex; justify-content:center; padding:40px">
             <a-spin tip="Loading..." />
        </div>
        <div style="display:flex; justify-content:center; padding:40px">

             <h3 style="margin-left: 10px;color:#0D75FF"
             class="opacity-50">Please kindly wait...</h3>
        </div>

    </div>
              <router-view v-show="!requestLoading" />
            </a-layout-content>
          </a-layout>
        </template>
      </DesktopLayout>
    </div>
    <div class="hidden-md-up">
      <MobileLayout :categories="categories">
        <template v-slot:routeArea>
          <a-layout>
            <a-layout-content
              :style="{
                background: '#F8FAFD',
                margin: 0,
                padding: '2em',
                minHeight: '280px',
              }"
            >
              <router-view />
            </a-layout-content>
          </a-layout>
        </template>
      </MobileLayout>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import useLoadingState from '@/use/loading-state';
import DesktopLayout from './DesktopLayout.vue';
import MobileLayout from './MobileLayout.vue';

export default defineComponent({
  components: {
    DesktopLayout,
    MobileLayout,
  },
  setup() {
    const store = useStore();
    const categories = computed(() => store.getters['category/GetCategories']);
    store.dispatch('category/FetchCategories');
    const { requestLoading } = useLoadingState();
    return {
      categories,
      requestLoading,
    };
  },
});
</script>

<style scoped lang="scss">
.spinner {
  text-align: center;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}

.spinner >>> .ant-spin-dot-item {
    background-color: #418a49;
}
@media screen and (max-width: 768px) {
  .hidden-md-down {
    display: none;
  }
}
@media screen and (min-width: 780px) {
  .hidden-md-up {
    display: none;
  }
}
</style>
