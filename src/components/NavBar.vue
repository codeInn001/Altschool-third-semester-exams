<script setup>

</script>

<template>
 <nav>
    <div class="logo">Codeinn</div>
    <div class="nav-links">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
    </div>
 </nav>
</template>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgb(40,27,132);
  color: #fff;
  padding: 25px 50px;
 
}


.logo {
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
}
.nav-links {
  display: flex;
  gap: 10px;
  align-items:center;
  justify-content: flex-end;
  width: 20%;
}

.nav-link {
    text-decoration: none;
    color: #fff;
}
</style>