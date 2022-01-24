<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header
      class="header"
      :style="{ borderBottom: '1px solid #F8FAFD' }"
    >
      <div class="logo">
        <router-link to="/">
        <img src="/img/logo.svg" alt="" />
        </router-link>
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px' }"
      >
      </a-menu>
    </a-layout-header>
    <a-layout-header
      v-if="currentCategory !== null"
      class="header"
      :style="{ borderBottom: '1px solid #F8FAFD' }"
    >
      <a-row type="flex">
        <a-col :span="6">
          <div class="logo">
            <p>Categories</p>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="smallnav">
            <span class="smallnav__pill">{{currentCategory.name}}</span>
            <span class="smallnav__icon">
              <svg
                class="w-8 h-6 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
            <p class="smallnav__total">Showing 18 Result(s)</p>
          </div>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <p :style="{ height: '4em', padding: '.3em' }">
          A curated list of every book ever written
        </p>
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys2"
          :style="{ height: '100%', borderRight: 0 }"
          @select="changeRoute"
        >
          <a-menu-item v-for="category in categories" :key="category">
            <span
              :style="{
                background: 'orange',
                color: '#fff',
                borderRadius: '1.2em',
                padding: '.6em',
                margin: '0 .5em',
              }"
              >{{ category.initials }}</span
            >
            {{ category.name }} <span class="opacity-50" :style="{ margin: '0 2em' }">340</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <slot name="routeArea"></slot>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    categories: { type: Object },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const collapsed = ref(false);
    const selectedKeys1 = ref(['1']);
    const selectedKeys2 = ref(['1']);
    const openKeys = ref(['sub1']);
    const currentCategory = computed(() => store.getters['category/GetCurrentCategory']);
    const changeRoute = ({ key }) => {
      console.log(key);
      store.commit('category/SET_CURRENT_CATEGORY', key);
      // eslint-disable-next-line no-underscore-dangle
      const id = key._id;
      router.push({
        name: 'Category',
        params: {
          categoryId: id,
        },
      });
    };
    return {
      currentCategory,
      changeRoute,
      collapsed,
      selectedKeys1,
      selectedKeys2,
      openKeys,
    };
  },
});
</script>

<style scoped></style>
