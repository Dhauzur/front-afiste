<template lang="html">
  <div class="subContenedor colorBackground ">
    <div class="tituloSubContenedor">Precio historico</div>
    <highcharts id="2" ref="highcharts2" style="background-color: transparent !important; " :options="chartOptions"/>
  </div>
</template>
<script>
import {Chart} from 'highcharts-vue'
import Reac from '../reactivo'


export default {
  components: {
    highcharts: Chart
  },
  computed: {
    divs() {
      return Reac.state.divs
    }
  },
  data() {
    return {
      hola: 'hola',
      chartOptions: {
        chart: {
            zoomType: 'xy',
            backgroundColor: 'transparent',

        },
        title: {
            text: '',
            align: 'left'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true,
            labels: {
              style: {
                color: '#bdb8b8'
              }
            }
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: '#f7107a'
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: 'white'
                }
            },
            opposite: true

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Rainfall',
                style: {
                    color: '#f7107a'
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: 'white'
                }
            }

        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Sea-Level Pressure',
                style: {
                    color: '#f7107a'
                }
            },
            labels: {
                format: '{value} mb',
                style: {
                    color: 'white'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: 'transparent'
        },
        series: [{
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: 'Sea-Level Pressure',
            type: 'spline',
            yAxis: 2,
            data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' mb'
            }

        }, {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: ' °C'
            }
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        floating: false,
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0
                    },
                    yAxis: [{
                        labels: {
                            align: 'right',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        visible: false
                    }]
                }
            }]
        }
      }
    }
  },

}
</script>

<style lang="css" scoped>
#container {
	min-width: 310px;
	max-width: 1040px;
	height: 400px;
	margin: 0 auto;
}
</style>
