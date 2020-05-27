<template>
    <div class="slide-card">

        <div class="slide"
             :style="{ backgroundImage: 'url(' + require(`@/assets/${slide.img}`) + ')' }">
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

    </div>
</template>

<script>
    export default {
        name: 'SlideCard',
        props: {
            slide: Object
        }
    }
</script>

<style lang="scss">
@import "~@/styles/slide.scss";
</style>