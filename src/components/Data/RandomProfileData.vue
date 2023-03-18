<template>
  <div >
    <div class="small_container">
      <div class="action_text">
        <div>
         <h2>Wanna View my profile?</h2>
       </div>
       <RouterLink to ="/myprofile" >
         <div class="btn" id="btns">
           <button >Click</button>
         </div>
       </RouterLink>
       </div>
      <div class="search_action">
        <div>
        <h2>Looking for a GitHub profile?</h2>
      </div>
      <div>
        <input type="text" placeholder="Enter github username" v-model="userInput" />
        <button @click="findUser" class="btn">search</button>
      </div>
      </div>
    
   
  </div>
 

    <div v-if="users"  class="card">
      <div v-for="user in users" :key="user.id" >
        <div class="home_link"><a :href='user.html_url' target="_blank"  rel="noreferrer" ><font-awesome-icon icon="external-link" /></a></div>
          <img v-bind:src='user.avatar_url' target="_blank" alt="" />
          <h3>{{ user.name }}</h3>
          <h4>@{{ user.login }}</h4>
       
        <div class="smaller_cards">
          <div class="smallest_cards">
          <span>{{user.public_repos}}</span>
          <h3>Repositories</h3>
        </div>
        <div class="smallest_cards">
          <span>{{user.following}}</span>
          <h3>Followings</h3>
        </div >
        <div class="smallest_cards">
          <span>{{user.followers}}</span>
          <h3>Followers</h3>
        </div>
         
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';
import axios from 'axios';
import {RouterLink} from 'vue-router'

 
    
  
    const baseUrl = "https://api.github.com/users";
    const userInput = ref('');
    const users = reactive([]);
    const isLoading = ref(false);
    const error = ref(false);


    const findUser = async () => {
      isLoading.value = true;
      try{
      if (userInput.value !== "") {
        const { data } = await axios.get(baseUrl + "/" + userInput.value);
        users.splice(0, users.length, data);
        userInput.value = "";
        console.log(users)
      }
      } catch(error) {
        error.value = err.message;
        isLoading.value = false;
      }
      
      return {
      userInput,
      users,
      findUser
    };
    };

    const userFound = computed(() => {
      return users.length > 0;
    });

    watch(userFound, (val) => {
      if (val) {
        console.log(users);
      }
    });

  

</script>

<style scoped>
.action_text{
  display:flex;
  text-align: center;
  justify-content: center;
  margin-top: 4rem;
  gap:5rem;
  flex-wrap: wrap;
  flex-direction: column;
}
.search_action{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 4rem;
  gap: 5rem;
  flex-wrap: wrap;
  flex-direction: column;
}

input{
  height:3rem;
  text-align: center;
  font-size: 1.5rem;
}
#btns button{
  width: 10rem;
  color: var(--color-white);

}
.small_container{
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap:10rem;
  
}

.card img{
  border-radius: 10rem;
  margin-top: 1rem;
  width: 7rem;
  cursor: pointer;
  
}
.card{
  max-width:40rem;
  background-color: var(--color-white);
  margin: 0 auto;
  margin-top: 2rem;
  color:var(--color-black);
  font-size: 1.5rem;
}
h4{
  font-size: 1rem;
}
h3{
  font-size: 1.4rem;
}
.smaller_cards{
  display:flex;
  gap:3rem;
  text-align: center;
  justify-content: center;
  margin-top: 1.2rem; 
  transform: translateY(-1rem);
}

.smallest_cards{
  background-color: var(--color-primary);
  color: var(--color-white);
  height: 7rem;
  padding-top: 1rem;
  padding: 1rem;
}
.smaller_cards h3{
  padding-top: 1rem;
}
.home_link a{
  color: var(--main-color);
  padding-right: 1rem;
  padding-top: 1rem;
}
@media screen and (max-width:795px) {
  
  .search_action{
    line-height: 3rem;
    gap:2rem
  }
  .small_container{
    gap:1.5rem;
  }
  .action_text{
    gap:2.5rem
  }
  .smaller_cards{
    gap:1rem;
    width:auto;

    
    
    
  }
  .smallest_cards{
    padding: 0;
    padding-top: 1rem;
  }
 
}
@media screen and (min-width:799px) and (max-width:1000px){
  .action_text{
    margin-top: 10rem;
  }

  .search_action{
    margin-top: 10rem;
  }
}

@media screen and (max-width:300px){
  .action_text{
    line-height:3rem
  }
  .small_container{
    margin-top: 0.2rem;
  }
  input{
    height:3rem;
    text-align: center;
    font-size: 1.1rem;
  }
  #btns button{
width: 5rem;
  }
}


</style>
