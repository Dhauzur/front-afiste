<template lang="html">
  <div  >

    <div class="">
      <div class="tools-container">
        <button class="highcharts-circle-annotation">Add Circle</button>
      </div>
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

  </div>
</template>
<script>
import Highcharts from "highcharts/highstock";
import exportingInit from 'highcharts/modules/exporting'
import stockInit from 'highcharts/modules/stock'
import dataInit from "highcharts/modules/data";
import configData from './config-data.js'
import Reac from '../reactivo'
import Axios from 'axios'

import DragPanes from 'highcharts/modules/drag-panes'
import AnnotationsAdvanced from 'highcharts/modules/annotations-advanced'
import PriceIndicator from 'highcharts/modules/price-indicator'
import FullScreen from 'highcharts/modules/full-screen'
import StockTools from 'highcharts/modules/stock-tools'


DragPanes(Highcharts)
AnnotationsAdvanced(Highcharts)
PriceIndicator(Highcharts)
FullScreen(Highcharts)
exportingInit(Highcharts)
stockInit(Highcharts)
StockTools(Highcharts)

export default {
  computed: {
    divs() {
      return Reac.state.divs
    }
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
