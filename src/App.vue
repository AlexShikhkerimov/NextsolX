<template>
  <div id="app">

    <div class="container">

      <app-header />

      <main class="app-content">


        <!-- Carousel row -->
        <div class="carousel-row">

          <carousel class="carousel-wrap" />

          <inspiration class="inspiration-wrap"/>

        </div>





        <!-- Second row -->
        <div class="second-row">

          <slide-card :slide="slideCrd" />

          <slide-card :slide="slideCrd2" />

        </div>


        <!-- Chart list -->
        <div class="chart-list">
          <chart v-for="(item, index) in chartList"
                 :key="index"
                 :chartType="item" />
        </div>


      </main>


    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import Inspiration from './components/Inspiration.vue'
import SlideCard from './components/SlideCard.vue'
import Chart from './components/Chart.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    Carousel,
    Inspiration,
    SlideCard,
    Chart
  },
  data() {
    return {
      chartList: this.$store.getters.chartsState,
      slideCrd: {
        img: 'first-grid.png',
        title: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...',
        links: [
          {url: '#', name: 'Design+Lifestyle'},
          {url: '#', name: 'Smart Living'},
        ]
      },
      slideCrd2: {
        img: 'second-grid.png',
        title: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...',
        links: [
          {url: '#', name: 'Design+Lifestyle'},
          {url: '#', name: 'Smart Living'},
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/global";

#app {
  padding-bottom: 50px;
}

.carousel-row {
  display: grid; // carousel is incorrect inside flex parent
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 2px;
  margin-bottom: 2px;

  .carousel-wrap {
    grid-column: 1/7;
    @media screen and (max-width: $medium) {
      grid-column: 1/5;
    }
    @media screen and (max-width: $small) {
      grid-column: 1/9;
    }
  }
  .inspiration-wrap {
    grid-column: 7/9;
    @media screen and (max-width: $medium) {
      grid-column: 5/9;
    }
    @media screen and (max-width: $small) {
      grid-column: 1/9;
    }
  }
}

.second-row,
.chart-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2px;
  margin-top: 2px;
  @media screen and (max-width: $small) {
    grid-template-columns: 1fr;
  }
}
</style>
