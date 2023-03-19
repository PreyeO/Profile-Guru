  
<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";


 
const data = ref([]);
const route=useRoute()
const getRepo = async () => {
  try {
    const res = await axios.get("https://api.github.com/users/PreyeO/repos");
    const repoId = parseInt(route.params.id);
    const  repo = res.data.find(item => item.id === repoId);
    data.value = repo;
    console.log(repo)
  } catch (err) {
    console.log(err);
  }
};


onMounted(getRepo);

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}
</script>

<template>
  <div class="repo_close">
    <RouterLink to ="/repositories" ><font-awesome-icon icon="close" /></RouterLink>
    </div>
  <section>
   
      <div class="repo_details_name">
    <h2>{{ data.name }}</h2>
  </div>
    <div class="container">
    <div class="small_container"> 
      <h3>DESCRIPTION</h3> 
        <div :style="{backgroundColor:getRandomColor()}" class="repo_cards">
      <p>{{data.description}}</p>
    </div>
    <div :style="{backgroundColor:getRandomColor()}" class="repo_cards">
   <h4>{{data.language}}</h4>
   <h4>CSS</h4>
   <h4>HTML</h4>
    </div>
    <h3>LANGUAGE</h3> 
    <h3>STARRED</h3> 
    <div :style="{backgroundColor:getRandomColor()}" class="repo_cards">

      <div class="repo_star"><font-awesome-icon icon="star" :size="100" /></div>
      <h2>{{data.stargazers_count}}</h2>
    </div>
    
  </div>
  <div class="repo_btn">
    <a :href='data.html_url' target="_blank" rel="noreferrer"><button class="btn">GitHub</button></a>
   
  </div>
    </div>
  </section>
</template>
  
<style scoped>

 .container{
 
  max-width:80rem;
  min-height  :auto;
  margin:0 auto;
  margin-top: 5rem;
 
}

.repo_details_name{
margin-top: 2rem;
}

.small_container{
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap; 
}
.repo_cards{
width:20rem;
height:20rem;
color:var(--color-black);
margin-top: 3rem;
font-size: 1.5rem;
padding-top: 1rem;
display: flex;
justify-content: center;
flex-direction: column;
gap:2rem;
border-top-right-radius: 5rem;
}
.repo_cards h4{
  font-size: 2rem;
}

.repo_star {
  color: yellow;
  font-size: 7rem;
 
}
.repo_close a{
  font-size: 2.5rem;
  margin-left: 1rem;

}
.repo_cards h2{
  font-size: 5rem;
  font-weight: 400;
  padding-top: 2rem;
}
h2{
  text-align: center;
  font-size: 3rem;
}
.repo_btn{
  display:flex;
  gap:3rem;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  flex-wrap: wrap;
  margin-top: 4rem;
}
h3{
  padding-top: 2rem;
  font-size: 1.5rem;
  padding-left: 3rem;
  
}
.repo_close{
  margin-top: 2rem;
}

@media screen and (max-width:700px) { 
h3{
  padding-left: 1.5rem;
}
.repo_details_name h2{
font-size:2rem;
}
.repo_btn button{
  margin-bottom: 1rem;
}

}

@media screen and (max-width:400px) {
  h3{
    padding-left: 0.5rem;
  }
}
@media screen and (min-width:600px) and (max-width:1000px){
  h3{
    padding-left: 20rem;
  }
  .repo_btn button{
    margin-bottom: 1.5rem;
  }
}
@media screen and (min-width:500px) and (max-width:590px){
  h3{
    padding-left: 10rem;
  }
}


</style>