<template>
  <div class="nav container">
    <router-link :to="{name: 'Blog'}">home</router-link> |
    <router-link :to="{name: 'About'}">about me</router-link> |
    <a href="https://github.com/bryantvolk">github</a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
a {
  color: #42b983;
  text-decoration: none;
}
</style>
