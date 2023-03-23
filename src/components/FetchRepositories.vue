<script setup>
import LoaderAnimation from '../components/LoaderAnimation.vue';
import handlePagination from '../HandlePagination'
import { ref, computed, watchEffect } from 'vue'


const handlePaginationValue = handlePagination();
const { perPage, page, nextPage, backPage, goToPage } = handlePaginationValue

const API_URL = `https://api.github.com/users/codeInn001/repos`
// const branches = ['main', 'v2-compat']

// const currentBranch = ref(branches[0])
const repos = ref(null)
const loading = ref(true)

watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  const url = `${API_URL}`
  repos.value = await (await fetch(url)).json();
  loading.value = false
  console.log(repos.value);
})

const paginatedRepos = computed({ 
    get(){
      return repos.value.slice((page.value - 1) * perPage, page.value * perPage)
    }
  });

  console.log(paginatedRepos)
</script>

<template>
  <main>
    <div class="repos-container">
      <LoaderAnimation v-if='loading'/>
      <div v-else  class="repos-wrapper" v-for="repo in paginatedRepos" :key="repo.id">
        <img src="https://img.icons8.com/windows/32/F04FA5/github.png" />
        <h2>{{ repo.name.split('-').join(' ').toUpperCase().substring(0, 45) }}</h2>
        <div class="buttons">
          <RouterLink :to="{ name: 'repository', params: { id: repo.name }}">
            <button class="repo-details"><img src="https://img.icons8.com/dotty/32/F04FA5/repository.png"/> View Details</button>
          </RouterLink>
          
           <a v-bind:href="repo.git_url"> <button><img src="https://img.icons8.com/windows/32/F04FA5/github.png"/> Visit Github Page</button></a>
          
        </div>
      </div>
      
    </div>
    <div class="pagination-buttons">
        <button @click="backPage">prev</button>
        <button
          v-for="item in Math.ceil(API_URL.length / perPage) - 1"
          :key="item"
          @click="() => goToPage(item)"
        >
          {{ item }}
        </button>
        <button @click="nextPage(API_URL)">next</button>
      </div>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:wght@400;700&family=Roboto:wght@400;500;700&display=swap');


.repos-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: rgb(219, 190, 190);
  justify-content: center;
  align-items:center;
  gap: 5px;
  margin-top: 5%;
  font-family: 'Gentium Plus', serif;
  font-weight: 700;
  /* min-height: 50vh; */
}

.repos-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 1rem; */
  padding: 1rem;
  /* border: 1px solid white; */
  border-radius: 5px;
  width: 400px;
  height: 150px;
  background-color: #242424;
  -webkit-filter: grayscale(100%);
  /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  overflow: hidden ellipsis;
}

.repos-wrapper:hover {
  -webkit-filter: grayscale(0%);
  /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
  background-color: #281B84;
  transition: all 0.1s ease;
  cursor: pointer;
}

.repos-wrapper h2 {
  margin: 0;
  text-align: center;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
}

button {
  border: none;
  border-radius: 5px;
  background-color: #121340;
  background-size: 100%;
  color: white;
  cursor: pointer;
  padding: 10px;
  letter-spacing: 0.5px;
}

.repo-details {
  border: 1px solid #f3ec78;
}

button:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}
img {
  height: 20px;
  width: 20px;
  vertical-align: bottom;
}

.pagination-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.pagination-buttons button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #121340;
  border: 1px solid white;
  background-size: 100%;
  color: white;
  cursor: pointer;
  letter-spacing: 0.5px;
}
</style>
