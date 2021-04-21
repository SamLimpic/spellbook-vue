<template>
<div class="spell-list">
  <img src="{{spell.img}}" class="mr-3" alt="{{spell.school}} Spell">
  <div class="">
    <h5 class="mt-0">{{spell.name}}</h5>
    <p>{{spell.level}}</p>
    <p>{{spell.school}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'SpellList',
  props: {
    spell: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style scoped>

</style>