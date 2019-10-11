<template lang="html">
<div id="app" class="">
  <!-- <div class="subImagen"/> -->
  <div class="contenedores">
    <MerkatDescription/>
    <b-row class="mx-1">
      <transition name="fade">
        <b-col v-if="OrderBookDiv" lg="3" class="subContenedor colorBackground ">
          <div class="tituloSubContenedor" @click="toggleOrderBook()"> Libro de ordenes</div>
          <OrderBook/>
        </b-col>
      </transition>
      <transition name="fade">
        <div v-if="!OrderBookDiv" @click="toggleOrderBook()">
          dsfsdfsdfdsf
        </div>
      </transition>
      <transition name="fade">
        <b-col v-if="PriceHistory">
          <PriceChart :clientWidth="clientWidth"/>
        </b-col>
      </transition>
      <transition name="fade">
        <b-col v-if="OrderHistoryDiv" lg="3" class="subContenedor colorBackground ">
          <div class="tituloSubContenedor" @click="toggleOrderHistory()"> Libro de ordenes</div>
          <OrderBook/>
        </b-col>
      </transition>
      <transition name="fade">
        <div v-if="!OrderHistoryDiv" @click="toggleOrderHistory()">
          dsfsdf22sdfdsf
        </div>
      </transition>
    </b-row>
  </div>
</div>
</template>

<script>
import MerkatDescription from './merkat-description'
import OrderBook from './order-book'
import PriceChart from './price-chart'

export default {
  components: {
    MerkatDescription,
    OrderBook,
    PriceChart,

  },
  data() {
    return {
      OrderBookDiv: true,
      OrderHistoryDiv: true,
      PriceHistory: true,
      clientWidth: null
    }
  },
  created() {
    //this.clientWidth = this.$el.clientWidth
  },
  methods: {
    toggleOrderBook() {
      // this.reloadDivs()
      this.OrderHistoryDiv = false
      this.PriceHistory = false
      setTimeout(() => {
        this.OrderHistoryDiv = true
        this.PriceHistory = true
        this.OrderBookDiv = !this.OrderBookDiv
      }, 100)
    },
    toggleOrderHistory() {
      // this.reloadDivs()
      this.OrderBookDiv = false
      this.PriceHistory = false
      setTimeout(() => {
        this.OrderBookDiv = true
        this.PriceHistory = true
        this.OrderHistoryDiv = !this.OrderHistoryDiv
      }, 100)
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
  font-size: 1.2rem;
}

.colorBackground {
  background-color: #20262b;
}

.subContenedor {
  z-index: 2;
  // margin: 20px;
  // margin-left: 30px;
  padding: 20px;
  box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.75);
  // border-radius: 15px;
  background-color: #20262b;

}
</style>

<style lang="css" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: opacity .1s;

}

.contenedores {
  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: #262d32;
  height: 100vh;
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
