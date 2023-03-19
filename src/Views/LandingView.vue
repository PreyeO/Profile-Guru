
<script setup>
import { ref } from 'vue';
import RandomProfileData from '../components/Data/RandomProfileData.vue';
import Footer from '../components/Footer/Footer.vue';


const GitHubHeader= ref("https://cdn3.iconfinder.com/data/icons/inficons/512/github.png")

</script>


<template>
  <header class='users_header'>
    <img :src="GitHubHeader" alt=""/>
    <span>GitHub</span>
    </header>
   <div container>
  <RandomProfileData />
  </div>
  <div class="footer">
<Footer />
</div>
</template>

<style scoped>

.profile_images img {
  max-width:70rem;
  margin: o auto;
 
}

.profile_images {
display:flex;
justify-content: center;
align-items: center;
margin-top: 5rem;
flex-wrap: wrap;
position: relative;

}


.users_header{
    border-bottom: 0.2rem solid gray;
    height: 6rem;
    display: flex;
    justify-content: center;
    padding: 0 2rem;
    font-size: 20px;
    padding-top: 1rem;
    text-align: center;
    width: 100%;
    
    
  
  }
  span{
    transform: translateY(2rem);
  }
  .users_header img{
    border-radius: 1.5rem;
    margin-bottom: 1rem;
  }
@media screen and (max-width: 715px){
 .users_header{
  text-align: center;
 }
}
@media screen and (max-width: 300px){
.footer{
    font-size: 1rem;    
}
}



</style>