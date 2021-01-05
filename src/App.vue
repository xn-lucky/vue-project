<template>
  <div id="app">
    app
    <Home />
    <router-view />
  </div>
</template>

<script>
import Home from '@views/Home'
export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>

<style>
</style>
