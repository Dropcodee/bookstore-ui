import { useStore } from 'vuex';
import { computed } from 'vue';

export default function useLoadingState() {
  const store = useStore();
  const requestLoading = computed(() => store.getters['loader/GetRequestLoader']);
  return { requestLoading };
}
