<script setup>
import { ref } from 'vue'
const show = ref(false)
  function showMenu(event) {
    if(event.target.classList.contains('show')){
      // event.target.classList.add('hidden');
      // event.target.classList.remove('show')
      show.value = !show.value
    }
    else {}
  }
</script>

<template>
 <nav>
    <h1 class="logo">Codeinn</h1>
    <img @click="showMenu" class="menu-bar show" src="https://img.icons8.com/ios-filled/100/E08CCC/menu-rounded.png"/>
    <div :class="show ? 'show nav-links' : 'hidden nav-links'" >
        <RouterLink active-class="active-link" class="nav-link" to="/">Home</RouterLink>
        <RouterLink active-class="active-link" class="nav-link" to="/about">About</RouterLink>
        <RouterLink active-class="active-link" class="nav-link" to="/repositories">Repositories</RouterLink>
    </div>
 </nav>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:wght@400;700&family=Pacifico&family=Roboto:wght@400;500;700&display=swap');
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgb(40,27,132);
  color: #fff;
  padding: 25px 50px;
 
}

.menu-bar{
  display: none;
}

.logo {
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  font-weight: 600;
  font-style: italic;
}


.nav-links {
  display: flex;
  gap: 20px;
  align-items:center;
  justify-content: flex-end;
  width: 20%;
}

.nav-link {
    text-decoration: none;
    background-color: #fff;
    color:rgb(40,27,132);
    padding: 10px 20px;
    border-radius: 5px;
}

.active-link {
    background-color: rgb(40,27,132);
    color: #fff;
    border: 2px solid #fff;
}

@media only screen and (max-width: 768px) {

.nav-links {
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  flex-direction: column;
  background-color: white;
  z-index: 2;
  padding: 30px 10px;
  top:0;
  left: 0;
  height: 40vh;
  min-width: 100%;

}

.menu-bar {
  height: 40px;
  width: 50px;
  cursor: pointer;
  z-index: 3;
  fill: #281B84;
  border: 2px solid white;
}

.show {
  display: flex;
}

.hidden {
  display: none;
}

}
</style>