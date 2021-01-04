<template>
  <div id="app">
    app
    <Home />
    <Singer />
  </div>
</template>

<script>
import Home from '@views/Home'
import Singer from '@views/Singer'
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
