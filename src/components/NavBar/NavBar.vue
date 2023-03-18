
<script setup>
import {RouterLink} from 'vue-router'
import {ref} from 'vue'




const portfolioLink = ref('https://preyeomusuku.vercel.app/')

   
const isMenuOpen = ref(false);

  
</script>

<template>
  <header>
    <nav  >
      <RouterLink to ="/" ><h3 id="logo">PDev<span class='logo-span'>/></span></h3></RouterLink>
   
    <ul >
      
      <RouterLink to ="/myprofile" active-class="active"><li>Home</li></RouterLink>
      <RouterLink to ="*" active-class="active"><li>About</li></RouterLink>
      <RouterLink to ="/repositories" active-class="active"><li>Repos</li></RouterLink>
      <a :href="portfolioLink" target="_blank" rel="noreferrer"><li>Portfolio</li></a>
    </ul>
    <button @click="isMenuOpen = !isMenuOpen">
      <font-awesome-icon :icon="isMenuOpen ? 'close' : 'bars'" class="icon"/>

    </button>
   <div>
    
   </div>
 
    <div>
      <ul v-if="isMenuOpen" :aria-expanded="isMenuOpen" >
    <RouterLink to ="/myprofile" active-class="active"><li>Home</li></RouterLink>
    <RouterLink to ="*" active-class="active"><li>About</li></RouterLink>
    <RouterLink to ="/repositories" active-class="active"><li>Repos</li></RouterLink>
    <a :href="portfolioLink" target="_blank" rel="noreferrer"><li>Portfolio</li></a>
    <ul>
    <RouterLink to ="/" ><h3 id="logo">PDev<span class='logo-span'>/></span></h3></RouterLink> 
  </ul>
    </ul>
  </div>
</nav>

  </header>
</template>



<style scoped>
.active{
  color:var(--light-color);
}
header{
  height:7rem;
  font-size: 1.3rem;
}
nav{
  display:flex;
  align-items: center;
  justify-content: space-around;
}
ul{
  display: flex;
  gap:5rem
}
nav a {
  text-decoration: none;
  list-style: none;
  font-size: 20px;
  letter-spacing: 1px;
  color:var(--color-white);
}

nav a:hover {
  color: var(--light-color);
  transition: 1s;
}
button {
  display: none;
  
}
.logo-span{
  color:var(--light-color)
}
@media (max-width: 700px) {
  ul {
    display: none;
  }

  button{
    display: block;
    cursor:pointer;
    background: transparent;
    width: 3rem;
    height: 2rem;
    
  }
 

  nav ul[aria-expanded='true'] {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0px;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(50, 40, 40, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5rem);
    justify-content: center;
    text-align: center;
    
  }
  li {
    margin: 10px 0;
   
  }
 
  #logo{
    z-index: 1;
    font-size: 1.7rem;
    text-align: right;
    position: relative;
  }
  .icon{
   position: relative;
    color:white;
    z-index: 1;
    transform: translateX(15rem);
    width: 2rem;
  }
  
}


</style>