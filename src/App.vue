<template>
  <div id="app">

    <div class="container">

      <app-header />

      <main class="app-content">


<!--     Carousel row-->
        <div class="carousel-row">

          <div class="carousel"></div>

          <inspiration />

        </div>

      </main>


    </div>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'
import inspiration from './components/Inspiration.vue'


export default {
  name: 'App',
  components: {
    appHeader,
    inspiration
  }
}
</script>

<style lang="scss">
@import "./src/styles/global";

</style>
