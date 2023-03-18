
<script setup>
import { ref } from 'vue';
import RandomProfileData from '../components/Data/RandomProfileData.vue';
import Footer from '../components/Footer/Footer.vue';
import LandingImage from '../../src/assets/Group.svg'


const GitHubHeader= ref("https://cdn3.iconfinder.com/data/icons/inficons/512/github.png")
</script>


<template>
  <header class='users_header'>

    <img :src="GitHubHeader" alt=""/>
    <span>GitHub</span>
    </header>
  <section>
      <div class="container">
    <div class="profile_images">
      <img :src='LandingImage' alt="My Image"  />
    
    </div>
  <RandomProfileData />
</div>
<Footer />
  </section>
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
    
  
  }
  span{
    transform: translateY(2rem);
  }
  .users_header img{
    border-radius: 1.5rem;
    margin-bottom: 1rem;
  }
@media screen and (max-width: 715px){
  .profile_images img{
    max-width:50rem;
  }
}
@media screen and (max-width: 500px){
  .profile_images  {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto;
  }
  .profile_images img{
    max-width:100%;
  }
  .container{
    margin-top: 5rem;
  }
}
@media screen and (max-width: 300px){
.container{
  margin-top: 2rem;
}
}



</style>