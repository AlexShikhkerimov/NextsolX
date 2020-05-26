<template>
  <div id="app">

    <div class="container">

      <app-header />

      <main class="app-content">


        <!--        // Carousel row-->
        <div class="carousel-row">

          <carousel style="grid-column: 1/7" />

          <inspiration style="grid-column: 7/9" />

        </div>

      </main>


    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import Inspiration from './components/Inspiration.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    Carousel,
    Inspiration
  }
}
</script>

<style lang="scss">
@import "./src/styles/global";

.carousel-row {
  display: grid; // carousel is incorrect inside flex parent
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 2px;
  margin-bottom: 2px;
}

</style>
