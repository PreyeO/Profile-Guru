<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

 const useFetchData = (url) => {
  const data = ref([]);
  const error = ref(false);
  const isLoading = ref(false);

  const fetchData = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(url);
      data.value = response.data;
      isLoading.value = false;
    } catch (err) {
      error.value = err.message;
      isLoading.value = false;
    }
  
  };

  onMounted(fetchData);

  return { data, error, isLoading };
};

export { useFetchData };
</script>