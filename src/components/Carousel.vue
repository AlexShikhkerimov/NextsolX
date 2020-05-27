<template>
    <agile :options="carouselOptions" class="slide-card">

        <div class="slide" v-for="(slide, index) in slides" :key="index"
             :style="{ background: 'url(' + require(`@/assets/${slide.img}`) + ')' }">
            <div class="slide-body">
                <ul class="slide-link-bar">
                    <li v-for="(link, index) in slide.links" :key="index">
                        <a :href="link.url"> {{ link.name }} </a>
                    </li>
                </ul>

                <h3>{{ slide.title }}</h3>

                <p>{{ slide.description }}</p>
            </div>
        </div>

    </agile>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
    name: 'Carousel',
    components: {
        agile: VueAgile
    },
    data () {
        return {
            carouselOptions: {
                autoplay: true,
                centerMode: true,
                fade: true,
                navButtons: false,

                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            dots: false
                        }
                    },

                    {
                        breakpoint: 900,
                        settings: {
                            dots: true,
                        }
                    }
                ]
            },
            slides: [
                {
                    links: [
                        {url: '#', name: 'Design'},
                        {url: '#', name: 'Smart'},
                    ],
                    img: 'carousel.png',
                    title: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...'
                },
                {
                    links: [
                        {url: '#', name: 'Lifestyle'},
                        {url: '#', name: 'Design+Lifestyle'},
                        {url: '#', name: 'Living'},
                    ],
                    img: 'carousel2.jpg',
                    title: 'Spaß zu haben, bei mir zu Hause und Was hilft mir, Energie zu sparen?',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia Lorem ipsum dolor sit amet, consectetur adipisicing elit,'
                },
                {
                    links: [
                        {url: '#', name: 'Design+Lifestyle'},
                        {url: '#', name: 'Smart Living'},
                    ],
                    img: 'carousel.png',
                    title: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...'
                },
                {
                    links: [
                        {url: '#', name: 'Design'},
                        {url: '#', name: 'Design+Lifestyle'},
                        {url: '#', name: 'Smart'},
                    ],
                    img: 'carousel2.jpg',
                    title: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...'
                },
                {
                    links: [
                        {url: '#', name: 'Design+Lifestyle'},
                        {url: '#', name: 'Smart Living'},
                    ],
                    img: 'carousel.png',
                    title: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...'
                },
                {
                    links: [
                        {url: '#', name: 'Lifestyle'},
                        {url: '#', name: 'Living'},
                    ],
                    img: 'carousel2.jpg',
                    title: 'Spaß zu haben, bei mir zu Hause und Was hilft mir, Energie zu sparen?',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia Lorem ipsum dolor sit amet, consectetur adipisicing elit,'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import "~@/styles/slide.scss";

    .agile {
        color: $white;
        height: 100%;

        &__dots {
            bottom: 20px;
            position: absolute;
        }

        &__dot {
            height: 5px;
            margin-right: 25px;
            opacity: 0.5;
            width: 5px;

            &.agile__dot--current {
                opacity: 1;
            }
        }
    }
</style>