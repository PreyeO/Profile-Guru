

<script setup>
import ReposData from '../components/Data/ReposData.vue';
import NavBar from '../components/NavBar/NavBar.vue';

</script>


<template>
  <section>

    <div class="container">
      <NavBar />
      <ReposData />
    </div>
  </section>
</template>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
}
.container{
  width: 100%;
}




</style>