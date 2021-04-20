<template>
  <header class="container-fluid">
    <div class="row justify-content-start p-3">
      <div class="col">
        <h1 class="title">
          Y<u
            >our<span
              ><img class="logo" alt="Vue logo" src="./assets/logo.png" /></span
            >irtual Spellbook</u
          >
        </h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "Berkshire Swash", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.logo {
  height: 2.5rem;
}

.title {
  color: forestgreen;
}
</style>
