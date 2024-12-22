<script setup lang="ts">

defineProps<{idPlaytest:string}>()
</script>

<template>
<router-link :to="{name : 'playtest', params :{id: idPlaytest} }">
  <p>Playtest {{idPlaytest}}</p>
</router-link>
</template>

<style scoped>
a {
  background-color: #4B5CB4;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  & p{
    font-size: 24px;
    color: #FFFFFF
  }
}
</style>
