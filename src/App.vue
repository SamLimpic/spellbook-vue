<template>
  <header class="container-fluid bg-dark">
    <div class="row justify-content-start p-3">
      <div class="col">
        <h1 class="title">
          Y<u
            >our
            <span
              ><img class="logo" alt="Vue logo" src="./assets/logo.png" /></span
            >irtual Spellbook</u
          >
        </h1>
      </div>
    </div>
  </header>
  <HomePage />
  <footer class="container-fluid bg-dark py-2">
    <div class="row">
      <div class="col py-1">
        <h4 class="text-center text-secondary my-auto">
          Made with <i class="fas fa-scroll"></i> by Samwise
        </h4>
      </div>
    </div>
  </footer>
</template>

<script>
import HomePage from './pages/HomePage.vue'

export default {
  name: "App",
  components: {
    HomePage
  },
};
</script>

<style>
#app {
  font-family: "Berkshire Swash", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--secondary);
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 2.5rem;
}

.title {
  color: forestgreen;
}

</style>
