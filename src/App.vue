<template lang="html">
<div id="app" class="">
  <!-- <div class="subImagen"/> -->
  <div class="contenedores">
    <MerkatDescription/>
    <transition name="fade">
    <b-row class="mx-1" v-if="reloadDivs">
      <b-col lg="5" class="subContenedor colorBackground ">
        <MerkatChart/>
      </b-col>
      <b-col ref="PriceChart" v-if="divs.PriceChart.on">
        <b-col class="mb-2">
          <PriceChart />
        </b-col>
        <b-col class="">
          <FavoriteMerkats/>
        </b-col>
      </b-col>
      <b-col lg="2" ref="OrderBook" v-if="divs.OrderBook.on" class="subContenedor colorBackground ">
        <div class="tituloSubContenedor" @click="toggleOrderBook()"> Libro de ordenes</div>
        <OrderBook />
      </b-col>
      <b-col lg="2" ref="PriceHistory" v-if="divs.PriceHistory.on" class="subContenedor colorBackground ">
        <div class="tituloSubContenedor" @click="togglePriceHistory()"> Historial de precios</div>
        <h5 >PriceHistory</h5><!-- <PriceHistory/> -->
        {{ divs.PriceHistory }}
      </b-col>
      <!-- <transition name="fade">
        <b-col cols="auto" ref="OrderBook" v-if="divs.OrderBook.on" class="subContenedor colorBackground ">
          <div class="tituloSubContenedor" @click="toggleOrderBook()"> Libro de ordenes</div>
          <OrderBook />
        </b-col>
      </transition>
      <transition name="fade">
        <b-col cols="auto" ref="PriceChart" v-if="divs.PriceChart.on">
          <PriceChart />
        </b-col>
      </transition>
      <transition name="fade">
        <b-col cols="auto" ref="PriceHistory" v-if="divs.PriceHistory.on" class="subContenedor colorBackground ">
          <div class="tituloSubContenedor" @click="togglePriceHistory()"> Historial de precios</div>
          <h5 >PriceHistory</h5><!-- <PriceHistory/>
        </b-col>
      </transition> -->
    </b-row>
  </transition>
  </div>
</div>
</template>

<script>
import MerkatDescription from './merkat-description'
import OrderBook from './order-book'
import PriceChart from './price-chart'
import MerkatChart from './merkat-chart'
import FavoriteMerkats from './favorite-merkats'
import Reac from './reactivo'

export default {
  components: {
    MerkatDescription,
    OrderBook,
    PriceChart,
    MerkatChart,
    FavoriteMerkats
  },
  data() {
    return {
      reloadDivs: true
    }
  },
  computed: {
    divs() {
      return Reac.state.divs
    }
  },
  mounted() {
      Reac.commit('changeDivs', {
        OrderBook: {
          on: true,
          size: this.$refs.OrderBook.clientWidth
        },
        PriceChart: {
          on: true,
          size: this.$refs.PriceChart.clientWidth
        },
        PriceHistory:  {
          on: true,
          size: this.$refs.PriceHistory.clientWidth
        }
      })
  },
  methods: {
    toggleOrderBook() {
      Reac.commit('changeDivs', {
        OrderBook: {
          on: false,
          size: this.divs.OrderBook.size
        },
        PriceChart: {
          on: false,
          size: this.divs.PriceChart.size
        },
        PriceHistory:  {
          on: false,
          size: this.divs.PriceHistory.size
        }
      })
      this.reloadDivs = false
      setTimeout(() => {
        Reac.commit('changeDivs', {
          OrderBook: {
            on: false,
            size: this.divs.OrderBook.size
          },
          PriceChart: {
            on: true,
            size: (this.divs.PriceChart.size + this.divs.OrderBook.size)
          },
          PriceHistory:  {
            on: true,
            size: this.divs.PriceHistory.size
          }
        })
        this.reloadDivs = true
      }, 1)

    },
    togglePriceHistory() {

      Reac.commit('changeDivs', {
        OrderBook: {
          on: false,
          size: this.divs.OrderBook.size
        },
        PriceChart: {
          on: false,
          size: this.divs.PriceChart.size
        },
        PriceHistory:  {
          on: false,
          size: this.divs.PriceHistory.size
        }
      })
      this.reloadDivs = false

      setTimeout(() => {
        Reac.commit('changeDivs', {
          OrderBook: {
            on: true,
            size: this.divs.OrderBook.size
          },
          PriceChart: {
            on: true,
            size: this.divs.PriceChart.size + this.divs.PriceHistory.size
          },
          PriceHistory:  {
            on: false,
            size: this.divs.PriceHistory.size
          }
        })
        this.reloadDivs = true
      }, 1)

    },
    // reloadDivs() {
    //   this.OrderBookDiv = false
    //
    //   setTimeout(() => {
    //     this.OrderBookDiv = true
    //     this.OrderHistoryDiv = true
    //     this.PriceHistory = true
    //   }, 200)
    // }
  }
}
</script>


<style lang="scss">
// custom.scss
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css?family=Exo+2|Hind&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Noto Sans JP', sans-serif !important;
  color: #bdb8b8 !important;
  font-size: 0.7rem;
}

.color-verde {
  color:#70a800 !important;
}
.color-rojo {
  color:#f7107a !important;
}
.highcharts-title {
  font-size: 0.7rem !important;
}

h1 {
  font-size: 58px;
}

h2 {
  font-size: 42px;
}
h3 {
  font-size: 30px;
}
h4 {
  font-size: 22px;
}
h5 {
  font-size: 11px;
}
h6 {
  font-size: 4px;
}

/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #8c878745;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #8c8787;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #231704d9;
}

.table-hover tbody tr:hover {
    color: #212529;
    background-color: rgba(0, 0, 0, 0.075);
}

table, th, td, tr {
  border-bottom-color: #000000c7 !important;
  border-top-color: #000000c7 !important
}

th {
  border-bottom-color: transparent !important;
  border-top-color: transparent !important
}

.table, h1, h2, h3, h4, h5, .highcharts-container, .highcharts-title {
  color: #bdb8b8 !important;
  font-weight: normal;
  fill: #bdb8b8 !important;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.custom-select {
  background: #bdb8b8 !important;
}
///////////////////
//START CSS
.tituloSubContenedor {
  text-align: center;
  font-size: 0.9rem;
}

.colorBackground {
  background-color: #20262b;
}

.subContenedor {
  z-index: 2;
  // margin: 20px;
  // margin-left: 30px;
  // padding: 20px;
  box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.75);
  // border-radius: 15px;
  background-color: #20262b;

}
</style>

<style lang="css" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: opacity 1s;

}

.contenedores {
  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: #262d32;
  height: 100vh;
  overflow-y: auto;
}

.subImagen {
  background-image: url("./assets/fondo.png");
  background-repeat:no-repeat;
  background-position:center;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 84%;
  opacity: 0.3;
  filter:  blur(30px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

</style>
