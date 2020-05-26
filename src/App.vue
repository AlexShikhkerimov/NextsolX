<template>
  <div id="app">

    <div class="container">

      <app-header />

    </div>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    appHeader
  }
}
</script>

<style lang="scss">
@import "./src/styles/global";

</style>
