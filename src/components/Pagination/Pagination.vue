<template>
  <div>
    <ul>
      <li v-for="item in displayedItems" :key="item.id">{{ item }}</li>
    </ul>
    <div>
      <button :disabled="currentPage === 1" @click="previousPage">Prev</button>
      <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
    </div>
  </div>
</template>

<script>
import { ref, computed, watchEffect } from 'vue';

export default {
  setup() {
    const items = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = 3;

    const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage));

    const displayedItems = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return items.value.slice(startIndex, endIndex);
    });

    function previousPage() {
      currentPage.value--;
    }

    function nextPage() {
      currentPage.value++;
    }

    watchEffect(() => {
      // Fetch data from API and update items ref
      // For example:
      fetch('https://example.com/api/items')
        .then(response => response.json())
        .then(data => {
          items.value = data;
          currentPage.value = 1;
        });
    });

    return {
      items,
      currentPage,
      itemsPerPage,
      totalPages,
      displayedItems,
      previousPage,
      nextPage,
    };
  },
};
</script>