<template lang="html">
<div id="app" class="">
  <div class="subImagen">sadasd</div>
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
    PriceChart
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
    this.clientWidth = this.$el.clientWidth
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
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Noto Sans JP', sans-serif !important;
}

h1, h2 {
  font-weight: normal;
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
  background: white !important;
}
///////////////////
//START CSS
.tituloSubContenedor {
  text-align: center;
  font-size: 1.2rem;
}

.colorBackground {
  background-color: #ffffffc7;
}

.subContenedor {
  z-index: 2;
  // margin: 20px;
  // margin-left: 30px;
  padding: 20px;
  box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.75);
  border-radius: 25px;

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
