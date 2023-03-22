<script setup>
import LoaderAnimation from '../components/LoaderAnimation.vue';
import { ref, watchEffect } from 'vue'

  const API_URL = `https://api.github.com/users/codeinn001`
  // const branches = ['main', 'v2-compat']

  // const currentBranch = ref(branches[0])
  const profile = ref(null)
  const loading = ref(true)

  watchEffect(async () => {
    // this effect will run immediately and then
    // re-run whenever currentBranch.value changes
    const url = `${API_URL}`
    profile.value = await (await fetch(url)).json()
    loading.value = false
    // console.log(commits.value)
  })
</script>

<template>
 <main class="profile-parent"> 
 <LoaderAnimation v-if='loading'/>
 <div v-else class="profile-container">
    <h1>{{ profile.bio }}</h1>
    <p> I craft beautiful user interfaces using my keyboard. 
      <br>I craft easy to understand technical articles.
    </p>
    <img v-bind:src=profile.avatar_url class="profile-img"  alt="profile picture">
    <div class="buttons">
      <RouterLink to="/repositories"><button><img src="https://img.icons8.com/dotty/80/F04FA5/repository.png"/>GitHub Repos</button></RouterLink>
      
      <a href="https://github.com/codeInn001"><button><img src="https://img.icons8.com/windows/32/F04FA5/github.png"/>GitHub Page</button></a>
      <!-- https://icons8.com/icon/3tC9EQumUAuq/github -->
    </div>
 </div>
</main>
</template>

<style>
.profile-parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  color: #fff;
  padding: 25px 50px;
}
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  color: #fff;
  padding: 25px 50px;
}

.profile-container h1 {
  font-size: 4vw;
  text-align: center;
  background-color: #f3ec78;
  background-image: linear-gradient(45deg, #F249A1, #cfcaf3);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
  font-weight: 800;
}
.profile-container p {
  font-size: 1.7rem;
  text-align: center;
  margin: 1rem 0;
  text-shadow: 1px 1px 2px #000;
}

.profile-container .profile-img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 5px solid #281B84;
}

.profile-container button {
  padding: 1rem 2rem;
  border: 2px solid #F249A1;
  border-radius: 5px;
  background-color: #121340;
  background-image: linear-gradient(45deg, #F249A1, #cfcaf3);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
  font-weight: 800;
  font-size: 0.9rem;
  margin: 1rem;
  cursor: pointer;
  /* vertical-align: middle; */
}

.profile-container button img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  vertical-align: bottom;
  border: 2px solid #281B84;
  border-radius: 50%;
}

.profile-container button:hover {
  opacity: 0.7;
  transition: opacity 1s ease;
}


@media only screen and (max-width: 768px) {
  .profile-container h1 {
    font-size: 7vw;
  }

  .profile-container p {
    font-size: 5vw;
  }


}


</style>