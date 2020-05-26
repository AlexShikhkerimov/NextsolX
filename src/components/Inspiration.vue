<template>
    <div class="inspiration">

        <h3>A place called Inspiration.</h3>

        <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam voluptatem.
        </p>

        <div class="inspiration-controls">
            <select class="control" v-model="selectedType">
                <option disabled value="0">Chart type</option>
                <option value="pie">Pie</option>
                <option value="line">Line</option>
                <option value="bar">Bar</option>
            </select>
            <div class="control" @click="addChart">Insert</div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedType: 0
        }
    },
    methods: {
        addChart() {
            this.$store.dispatch('addChart', this.selectedType)
            this.selectedType = 0
        }
    }
}
</script>

<style scoped lang="scss">
    .inspiration {
        background-color: $darkShaft;
        color: $white;
        padding: 40px 30px;

        h3 {
            margin-bottom: 35px;
        }

        p {
            margin-bottom: 30px;
        }

        &-controls {
            .control {
                background: transparent;
                border: 1px solid $white;
                color: $white;
                cursor: pointer;
                display: block;
                font-size: 12px;
                height: 35px;
                line-height: 35px;
                padding: 0 17px;
                text-align: center;
                text-transform: uppercase;
                margin-bottom: 8px;
                max-width: 150px;
                transition: .5s;
                width: 100%;

                &:hover {
                    background: $white;
                    color: $black;
                }
            }

            select.control {
                max-width: 185px;
                &:focus {
                    outline: none;
                }
            }
        }
    }
</style>