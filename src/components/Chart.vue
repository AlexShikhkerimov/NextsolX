<template>
    <div class="chartElem">

        <div class="row">
            <highcharts class="chart" :options="chartOptions" :updateArgs="updateArgs"></highcharts>
        </div>

        <div class="row">
            <div id="chartType">
                <span>Select chart type:</span>
                <select v-model="chartType">
                    <option value="pie">Pie</option>
                    <option value="line">Line</option>
                    <option value="bar">Bar</option>
                </select>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Chart',
    props: {
        chartType: String
    },
    data() {
        return {
            points: [10, 0, 8, 2, 6, 4, 5, 5],
            animationDuration: 1000,
            updateArgs: [true, true, {duration: 1000}],
            chartOptions: {


                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: this.chartType
                },
                title: {
                    text: 'Points scored'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    floating: true,
                    backgroundColor: '#FFFFFF',
                    y: 60,
                },
                series: [{
                    name: 'Teams',
                    // colorByPoint: true,
                    data: [
                        {
                            name: 'Team 1',
                            y: 21.8
                        }, {
                            name: 'Team 2',
                            y: 32.7
                        }, {
                            name: 'Team 3',
                            y: 10.9
                        }, {
                            name: 'Team 4',
                            y: 34.5
                        }]
                }]
            }
        }
    },
    watch: {
        chartType(newValue) {
            this.chartOptions.chart.type = newValue.toLowerCase()
        }
    }
}
</script>

<style scoped lang="scss">
    .chartElem {
        border: 1px solid $black;
        padding: 15px 50px;
    }
    #colorPicker {
        border: 0;
        padding: 0;
        margin: 0;
        width: 30px;
        height: 30px;
    }
    #chartType span {
        margin-right: 15px;
    }
</style>