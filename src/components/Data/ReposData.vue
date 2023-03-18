<script setup>

import { useFetchData } from './useFetchData.vue';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';



const { data, error, isLoading } = useFetchData("https://api.github.com/users/PreyeO/repos")
const router= useRouter() 
const currentPage = ref(1);
const reposPerPage = 4;
const totalPages = computed(() => Math.ceil(data.value.length /reposPerPage));


const displayedRepositories = computed(() => {

  const startPage = (currentPage.value - 1) * reposPerPage;
  const endPage = startPage + reposPerPage;
  return data.value.slice(startPage, endPage);
  
});
const pageNumbers = computed(() => {
  const numbers = [];
  for (let i = 1; i <= totalPages.value; i++) {
    numbers.push(i);
  }
  return numbers;
});


const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < Math.ceil(data.value.length / reposPerPage)) {
    currentPage.value++;
  }
};

</script>

<template>

  <div v-if="isLoading">Loading...</div>

<div v-else>
    <div class="repos_container">
  <div class="repos_card" v-for="repo in displayedRepositories" :key="repo.id">
    <h2>{{repo.name}}</h2>
    <button @click="router.push(`/data/${repo.id}`)" class="btn">See more</button>

  </div>
  </div>
  <div class="pagination_btns">

  <button @click="previousPage" :disabled="currentPage === 1" >Prev</button>

  
  <button v-for="pageNumber in pageNumbers" :key="pageNumber" @click="currentPage = pageNumber">{{ pageNumber }}</button>

  
  <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
</div>

</div>
</template>


<style scoped>
.repos_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  padding-top: 1.3rem;
  overflow-x: hidden;
 

}
.repos_card {
  text-align: center;
  max-width: 35rem;
  font-size: 1.5rem;
  color: #dfd3d3;
  height: 20rem;
  background: var(--main-secondary-color);
  align-items: center;
  display: flex;
  flex-direction: column;
  gap:5rem;
  flex-wrap: wrap;
  padding-top: 2rem;
  margin-top: 5rem;
  border-bottom-left-radius: 10rem;
  overflow-x: hidden;
 z-index: 1rem;
}
.repos_card>h2{
  padding-top: 3rem;
}
.btn{
  background-color: var(--main-color);
}
.pagination_btns{
  display:flex;
  justify-content: center;
  text-align: center;
  padding-top: 3rem;
  gap:5rem;
  margin-top: 4rem;
}
.pagination_btns button{
  padding: 1.5rem;
  border-radius: 0.4rem;
  background: var(--light-color);
  font-size: 1.5rem;
}
.btn:hover{
  background: var(--color-light);
  color:var(--color-black);
  transition: var(--transition);
}
.pagination_btns button:hover{
  background: var(--main-secondary-color);
  color:var(--white-color);
  transition: var(--transition);
}


@media screen and (max-width:700px) { 
  .repos_card{
    min-width:25rem;
    height: 15rem;
    gap: 2rem;
    margin-top: 0.5rem;
  }
  .repos_container{
    gap:1.3rem;
   
  }
  .pagination_btns{
    gap:1.3rem;
    padding: 0.5;
    margin-bottom: 1rem;
  
  }
}
@media screen and (max-width:400px) {
.pagination_btns button{
  width:auto;
  padding: 1rem;

}
.pagination_btns {
  margin-top: 1rem;
  margin-bottom: 1rem;
    
}
}
@media screen and (min-width:530px) and (max-width:1000px){
  .pagination_btns{
    margin-top: 10rem;
  }
}
@media screen and (max-width:300px) {
  .repos_card h2{
    font-size: 1.5rem;
  }
  .repos_card {
    min-width:20rem
  }
  .pagination_btns button{
    padding: 0.5rem;
  }
}
</style>
