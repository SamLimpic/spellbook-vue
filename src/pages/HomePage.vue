<template>
    <main class="container-fluid flex-grow-1">
    <div class="row justify-content-center my-5 py-3">
      <div class="col-3 p-3 card text-left">
        <h2>SPELL LISTS</h2>
      </div>
       <div class="col-4 mx-5 p-3 card text-center">
        <h2>ACTIVE SPELL</h2>
      </div>
      <div class="col-3 p-3 card text-right">
        <h2>YOUR SPELLS</h2>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'HomePage',
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
    }
  },
  components: {
  }
}
</script>

<style scoped>
</style>