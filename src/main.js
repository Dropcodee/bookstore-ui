import { createApp } from 'vue';
import AntDesign from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(AntDesign);
app.use(store).use(router);
app.mount('#app');
