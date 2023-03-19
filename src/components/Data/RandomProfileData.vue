
<script setup>
import { ref, reactive, computed, watch } from 'vue';
import axios from 'axios';
import {RouterLink} from 'vue-router'


 
    const baseUrl = "https://api.github.com/users";
    const heroImage= ref("https://github.githubassets.com/images/modules/site/home/globe.jpg")
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

<template>
  <div class='landing_container'>
    <div class="input_container">
      <h2>Search <br/> GitHub User Profile</h2>
      <div class="inputs">
     <input type="text" placeholder="Enter github username" v-model="userInput" />
     <button @click="findUser" class="btn">search</button>
    </div>
    <div class="myprofile_btn">
     <h2>View My Profile</h2>
     <RouterLink to ="/myprofile" >
      
        <button class="btn" id="btns">Click</button>
      
    </RouterLink>
  </div>
    </div>
    <div class="hero_image">
      <img :src='heroImage' alt="My Image"  />
    </div>

    <div v-if="users"  >
      <div v-for="user in users" :key="user.id" class="card">
        <div class="home_link"><a :href='user.html_url' target="_blank"  rel="noreferrer" ><font-awesome-icon icon="external-link" /></a></div>
          <img v-bind:src='user.avatar_url' target="_blank" alt="" />
          <h4>{{ user.name }}</h4>
       
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



<style scoped>

.landing_container{
  display:flex;
  justify-content: center;
  justify-content: space-around;
  margin: 0 auto;
  text-align: center;
  margin-top: 5rem;
  
  
}
.hero_image img{
width:40rem;
height:40rem
}

.input_container{
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap:1rem
}
input{
  width:30rem;
  padding: 1rem;
}
.myprofile_btn{
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
}
.myprofile_btn button{
  margin-top: 3rem;
}

.card{
  background-color: var(--color-white);
  width: 35rem;
  display: flex;
  justify-content: center;
  text-align: center;
  margin:0 auto;
  margin-top: 1rem;
  flex-direction: column;
  position: relative;
  align-items: center;

}
 .inputs{
  display:flex;
  justify-content: center;
  text-align: center;
}
.card img{
  background-color: var(--color-white);
  border-radius: 10rem;
  width: 10rem;
  cursor: pointer;
}
.smaller_cards{
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 2rem;
}
.smallest_cards{
  background-color: var(--color-primary);
  padding: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-size: 1.2rem;
}
h4{
  color: var(--light-color);
  font-size: 1.2rem;
}
.home_link a{
  color: var(--light-color);
  padding-top: 1rem;
  padding-right: 1rem;
}

h2{
  font-size: 4rem;
  line-height: 5rem;
}
br{
  text-align: start;
}
#btns{
  width: 30rem;
  padding: 1rem;
}



@media screen and (max-width:700px) {
  .landing_container{
    flex-direction: column;
    
  }
  br{
    display: none;
  }
  h2{
    font-size: 2.3rem;
  }
  input{
    width:20rem;
   
}
.inputs button{
  width:20rem;
  padding: 1rem;
 
}
.inputs{
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
}
#btns{
  width: 20rem;
}
.hero_image img{
  width:30rem;
  height:30rem
  }
  .card{
    transform: translateY(-20rem);
  }
}



  @media screen and (min-width:700px) {
    .input_container h2{
      text-align: start;
    }
    .input_container{
      padding-left: 1rem;
    }
   
    .card{
      transform: translateX(-35rem);
    }
}


@media screen and (min-width:750px) and (max-width:1000px){
  .landing_container{
    margin-top: 15rem;
  }
  .card{
    margin-top: 4rem;
  }
}

  @media screen and (max-width: 370px){
    h2{
      font-size: 1.5rem;
      text-align: center;
    }
    .hero_image img{
      width:20rem;
      height:20rem;
      margin: 0 auto;
      text-align: center;
      }
      .card{
        width:20rem
      }
      .smaller_cards{
        gap:1rem;
        flex-direction: column;
        margin-bottom: 1rem;
      }
      .smallest_cards{
       width:15rem;
       margin: 0 auto;
      }
    
      
     
}


</style>
