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
        padding: 30px;

        h3 {
            font-family: "RobotoMedium", sans-serif;
            font-size: 24px;
            margin-bottom: 30px;
        }

        p {
            font-family: "MyriadPro", sans-serif;
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 30px;
            line-height: 24px;
        }

        &-controls {
            .control {
                background: transparent;
                border: 1px solid $white;
                color: $white;
                cursor: pointer;
                display: block;
                font-family: "RobotoRegular", sans-serif;
                font-weight: 400;
                font-size: 12px;
                height: 34px;
                line-height: 34px;
                padding: 0 17px;
                text-align: center;
                text-transform: uppercase;
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
                margin-bottom: 8px;

                &:focus {
                    outline: none;
                }
            }
        }
    }
</style>