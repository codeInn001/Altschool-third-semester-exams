<template>
    <div class="not-found-wrapper">
      <img class=error-img src="../assets/error404.png" alt="not found" height='200' width='200'>
      <h2>The page you are looking is not found.</h2>
      <button><RouterLink to="/">Go Home</RouterLink></button>
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
  .not-found-wrapper {
    display: flex;
    height: 80vh;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
  }

  .error-img {
    height: 500px;
    width: 500px;
  }

  .not-found-wrapper h2 {
    color: white;
  }

  .not-found-wrapper button{
    background: white;
    border: none;
    border-radius: .5rem;
    padding: .75rem 3rem;
  }
  
  a{
    color: #281B84;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.5rem;
  }
  </style>9