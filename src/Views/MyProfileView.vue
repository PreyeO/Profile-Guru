

<script setup>
import ProfileData from '../components/Data/ProfileData.vue';
import NavBar from '../components/NavBar/NavBar.vue';


</script>

<template>
  <section>
    <NavBar />
  <main class="container">
    <div class="home-card">
      <ProfileData />
    </div>
  </main> 
    </section>
</template>

<style scoped>


.home-card{
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--main-secondary-color);
  overflow: hidden;
  margin: 0 auto;
  margin-top: 2rem;
  flex-wrap: wrap;
  color: #dfd3d3;
  
}
@media screen and (max-width:600px) {
  .home-card{
    margin-top: 0;
  }
}
@media screen and (min-width:800px) and (max-width:1000px){
  .home-card{
    margin-top: 15rem;
  }
}
@media screen and (max-width:300px) {
  .home-card{
    margin-top: 0;
  }
}







 
</style>