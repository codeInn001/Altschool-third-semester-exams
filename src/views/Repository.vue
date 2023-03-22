<script setup>
    import NavBar from '../components/NavBar.vue';
    import LoaderAnimation from '../components/LoaderAnimation.vue';
    import { useRoute } from 'vue-router';
    import { ref, watchEffect } from 'vue';


    const route = useRoute()
    const id =  route.params.id

    const API_URL = `https://api.github.com/repos/codeinn001/${id}`

    const repo = ref(null)
    const loading = ref(true)

    watchEffect(async () => {
        
    const url = `${API_URL}`
    repo.value = await (await fetch(url)).json()
    loading.value = false
    
    console.log(repo.value)
})
</script>

<template>
    <NavBar />
    <main class="main">
        <LoaderAnimation v-if='loading'/>
        <div v-else class="repo-container">    
                <div class="project-id-date">
                    <p>Project #{{repo.id}} <span class="dot">.</span> <span>{{new Date(repo.created_at).toDateString()}}</span></p>   
                    <h3>{{repo.name}}</h3>
                </div>
                <div class="description">
                    <p>Language: {{repo.language ? repo.language : 'none'}}</p>
                </div>
                <div class="features">
                    <span><img src="https://img.icons8.com/external-outline-lafs/64/F04FA5/external-ic_fork-mining-outline-lafs.png"/> {{repo.forks}}</span>
                    <span><img src="https://img.icons8.com/material-outlined/24/F04FA5/filled-star.png"/> {{repo.stargazers_count}}</span>
                    <span><img src="https://img.icons8.com/material-sharp/24/F04FA5/visible.png"/> {{repo.watchers}}</span>
                </div>
        </div>
    </main>
</template>

<style>
    .main {
        color: white;
        display: flex;
        justify-content:center;
        align-items: center;
        width: 100%;
        height: 80vh;
    }

    

    .repo-container {
        background-color: #281B84;   
        width: 60vw;
        padding: 50px;
        border-radius: 10px;  
    }
    .project-id-date {
        border-bottom: 1px solid #F04FA5;
        margin-bottom: 10px;
        
    }

    .project-id-date p {
        color:  #F04FA5;
    }

    .project-id-date h3 {
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 2px;
    }

    .project-id-date .dot {
        font-weight: bold;
        font-size: 1.5rem;
    }

    .features {
        display: flex;
        gap: 10px;
        margin-top: 15px;
    }

    .features span {
        border:1px solid #F04FA5;
        flex-direction: row;
        border-radius: 5px;
        padding: 5px 8px;
    }

    .features span img {
        vertical-align:text-bottom;
        height: 18px;
        width: 18px;
    }
</style>