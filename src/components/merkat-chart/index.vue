<template lang="html">
  <div class="">
    <div class="graphCustom mt-4" id="chartCandlestick"/>
    <!-- <highcharts id="2" ref="highcharts2"  :options="chartOptions"/> -->
    <div class="herramientasLaterales">
      <v-icon class="v-icon" name="trending-down"></v-icon>
      <v-icon class="v-icon" name="plus"></v-icon>
      <v-icon class="v-icon" name="sliders"></v-icon>
      <v-icon class="v-icon" name="minimize-2"></v-icon>
      <v-icon class="v-icon" name="minus-square"></v-icon>
      <v-icon class="v-icon" name="git-merge"></v-icon>
    </div>
  </div>
</template>
<script>
import Highcharts from "highcharts/highstock";
// import dataInit from "highcharts/modules/data";
import configData from './config-data.js'
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      divs: 'dom/divs',
    })
  },
  mounted() {
    this.chart = new Highcharts.stockChart(this.chartOptions)
  },
  created() {
    this.chartOptions = {
      chart: {
        renderTo: 'chartCandlestick',
        type: 'candlestick',
        backgroundColor: 'transparent',
      },
      rangeSelector: {
          selected: 1
      },
      stockTools: {
          gui: {
              enabled: true // disable the built-in toolbar
          }
      },
      navigation: {
          bindingsClassName: 'tools-container'
      },
      navigator: {
          enabled: false
      },
      title: {
          text: 'AAPL Stock Price'
      },

      series: [{
          type: 'candlestick',
          name: 'AAPL Stock Price',
          data: this.data,
          dataGrouping: {
              units: [
                  [
                      'week', // unit name
                      [1] // allowed multiples
                  ], [
                      'month',
                      [1, 2, 3, 4, 6]
                  ]
              ]
          }
      }]
    }
  },
  data() {
    return {
      chart:undefined,
      chartOptions: null,
      data: configData
    }
  },

}
</script>

<style lang="css" scoped>

.highcharts-bindings-wrapper * {
	/* box-sizing: content-box; */
}

.iconSuperior {
  margin-top: 5px;

}


.herramientaSuperiores {
  height: 20px;
  margin-bottom: 20px;
}

.herramientasLaterales {
  width: 10% !important;
  float: right;
  padding: 15px;
  margin-top: 20px;
}

.graphCustom {
  width: 90% !important;
  float: left;
}

</style>
