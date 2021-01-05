<template>
  <div id="app">
    app
    <Home />
    <Singer />
  </div>
</template>

<script>
import Singer from '@views/Home/Singer'
import Home from '@views/Home'
export default {
  name: 'App',
  components: {
    Home,
    Singer,
  },
}
</script>

<style>
</style>
