
<script setup>
import { useFetchData } from './useFetchData.vue';


const { data, error, isLoading } = useFetchData("https://api.github.com/users/PreyeO");
const now = new Date();


</script>

<template>
  <div>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="profile_info">
    <div key={{data.id}}>
      <div class="home_link"><a :href='data.html_url' target="_blank"  rel="noreferrer" ><font-awesome-icon icon="external-link" /></a></div>
      <div class="profile-pic">
        <img v-bind:src='data.avatar_url' target="_blank" alt="" />
        </div>
      <div class="name"><h2>{{data.name}}</h2></div>
      <h4 class="login">@{{data.login}}</h4>
      <div class="bio"><p>{{data.bio}}</p></div>
    </div>
    <div class="location">
      <div><font-awesome-icon icon="location-pin" /><h5>{{data.location}}</h5></div>
      <div><font-awesome-icon icon="calendar-alt" /><h5>{{5-now.getMonth(data.created_at) }}/{{now.getDay(data.created_at) + 1}}/{{now.getFullYear(data.created_at)}}</h5>
      </div>
      <div><font-awesome-icon icon="calendar-plus" /><h5>{{now.getMonth(data.updated_at) + 1 }}/{{now.getDay(data.updated_at) - 1}}/{{now.getFullYear(data.updated_at)}}</h5></div>
  </div>
  <div class="smaller_cards">
    <RouterLink to ="/repositories"><div class="smallest_cards">
    <span>{{data.public_repos}}</span>
    <h3>Repositories</h3>
  </div>
</RouterLink>
  <div class="smallest_cards">
    <span>{{data.following}}</span>
    <h3>Followings</h3>
  </div >
  <div class="smallest_cards">
    <span>{{data.followers}}</span>
    <h3>Followers</h3>
  </div>
  </div>
  
  </div>
  <div v-if="error">{{ error }}</div>
</div>
</template>

<style scoped>
img{
  border-radius: 10rem;
  margin-top: 1.3rem;
  width: 10rem;
  cursor: pointer;
}

img:hover{
  opacity: 0.65;
}
.name{
  font-size: 2rem;
  color: #fff;
  padding-top: 1.3rem;
}

.login{
  font-size: 1.3rem;
  color: var(--light-color);
  padding-top: 1.3rem;
}
.bio{
  text-align: center;
  line-height: 2rem;
  font-size: 1.5rem;
  padding-top: 1.3rem;
}
.location{
  display:flex;
  justify-content: center;
  text-align: center;
  gap: 4.5rem;
  padding-top: 1.7rem;
  font-size: 1rem;
  font-size: 1.4rem;
}

.smaller_cards{
  display:flex;
  gap:7rem;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.3rem;
  margin-bottom: 1rem;
}

.smallest_cards{
  background-color: var(--color-primary);
  color: var(--color-white);
  height: 7rem;
  padding: 1rem;
  font-size: 1.5rem;
  padding-top: 1rem;
  margin-top: 1.3rem;
  width: auto;
}
h3{
  padding-top: 1.3rem;
}
.home_link{
  padding-right: 2rem;
  padding-top: 2rem;
  font-size: 1.5rem;
}.profile_info{
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.bio p{
display:flex;
text-align: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
}

@media screen and (max-width:600px) {
  .bio{
font-size: 1.3rem;
  }
  .smallest_cards{
    width:auto
  }
  .smaller_cards{
    gap:2rem;
    
  }
  .location{
    gap:4rem
  }
}
@media screen and (max-width:300px) {
  .bio{
    font-size: 1rem;
  }
  .location{
    gap:1.3rem
  }
}




</style>
