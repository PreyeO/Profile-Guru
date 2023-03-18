
<script setup>
import {ref} from 'vue'
import {RouterLink} from 'vue-router'
const backgroundImage = ref('src/assets/error.png');

// const backgroundImage = ref('src/assets/error.png');


</script>



<template>
  <div class="error_container">
  <div class="background" :style="{ 'background-image': `url(${backgroundImage})` }">
    <div class="container">

        
    </div>
   
  </div>
  <RouterLink to='/myprofile'>
    <div class="btn">
 <button>Home</button>
</div>
</RouterLink>
</div>
</template>

<style scoped>
.background{
    background-size: cover;
    background-position: center;
    min-width: 100%;
    min-height: 88vh;
  
}

.btn{
  margin: 0 auto;
  margin-top: 2rem;
}
button{
  padding: 1rem;
  font-size: 1.5rem;
  margin: 0 auto;
 
}

.error_container{
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
@media screen and (max-width:1024px) {
  .background{
    background-size: contain;
  }
 
}
@media screen and (max-width:300px) {
  button{
    font-size: 1rem;
  }
}



</style>