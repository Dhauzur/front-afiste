<template lang="html">
<div id="app" class="">
  <img :src="`${publicPath}afiste-vnx-logo2.png`" style="position: absolute; z-index: -1">

  <div class="contenedores">
    <transition name="fade">
      <b-row class="mx-1" v-if="reloadDivs" >
      <div class="navBar">
        <MerkatDescription/>
        <div class="itemsCollapse">
          <div v-if="!divs.DeepPrice" class="contenedorItem" @click="toggleDivs('DeepPrice')">
            <div class="itemOpen" >
              <v-icon name="plus-square"/>
            </div>
            <div>
              <span>Deep Price</span>
            </div>
          </div>
          <div v-if="!divs.OrderBook" class="contenedorItem" @click="toggleDivs('OrderBook')">
            <div class="itemOpen" >
              <v-icon name="plus-square"/>
            </div>
            <div>
              <span>Order Book</span>
            </div>
          </div>
          <div v-if="!divs.Tradding" class="contenedorItem" @click="toggleDivs('Tradding')">
            <div class="itemOpen" >
              <v-icon name="plus-square"/>
            </div>
            <div class="pl-2">
              <span>Tradding</span>
            </div>
          </div>
        </div>
      </div>
      <div v-bind:style="width.PriceHistory" class="subContenedor colorBackground">
        <MerkatChart/>
        <MerkatChart2/>
      </div>
      <div  v-if="divs.DeepPrice" v-bind:style="width.DeepPrice"  class="subContenedor colorBackground">
        <div class="iconCollapse" @click="toggleDivs('DeepPrice')">
          <v-icon name="minimize-2"/>
        </div>
        <DeepPrice />
        <FavoriteMerkats class="subContenedor"/>
      </div>
      <div v-if="divs.OrderBook" v-bind:style="width.OrderBook"  class="subContenedor colorBackground">
        <div class="iconCollapse" @click="toggleDivs('OrderBook')">
          <v-icon name="minimize-2"/>
        </div>
        <OrderBook />
      </div>
      <div  v-if="divs.Tradding" v-bind:style="width.Tradding" style="padding: 0px !important;" class="subContenedor colorBackground">
        <div class="">
          <div class="transaciones">
            <div class="iconCollapse" @click="toggleDivs('Tradding')">
              <v-icon name="minimize-2"/>
            </div>
            <div class="tituloSubContenedor" ></div>
            <Transaciones/>
          </div>
        </div>
      </div>
    </b-row>
  </transition>
  </div>
</div>
</template>

<script>
import MerkatDescription from './components/merkat-description'
import OrderBook from './components/order-book'
import DeepPrice from './components/deep-price'
import MerkatChart from './components/merkat-chart'
import MerkatChart2 from './components/merkat-chart2'
import FavoriteMerkats from './components/favorite-merkats'
import Transaciones from './components/transaciones'
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    MerkatDescription,
    OrderBook,
    DeepPrice,
    MerkatChart,
    MerkatChart2,
    FavoriteMerkats,
    Transaciones
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      reloadDivs: true,
      width: {
        Tradding: {
          width: '23%'
        },
        OrderBook:{
          width: '15%'
        },
        PriceHistory:{
          width: '45%'
        },
        DeepPrice: {
          width: '17%'
        },
      }
    }
  },
  computed: {
    ...mapGetters({
      divs: 'dom/divs',
    })
  },
  methods: {
    ...mapMutations({
      changeDivs: 'dom/changeDivs',
    }),

    calculateWidth(divChange) {
      if(this.divs.Tradding && divChange == 'Tradding') this.width.PriceHistory.width = '' + (parseInt(this.width.PriceHistory.width) - 24) + '%'
      if(this.divs.OrderBook && divChange == 'OrderBook') this.width.PriceHistory.width = '' + (parseInt(this.width.PriceHistory.width) - 15) + '%'
      if(this.divs.DeepPrice && divChange == 'DeepPrice') this.width.PriceHistory.width = '' + (parseInt(this.width.PriceHistory.width) - 17) + '%'

      if(!this.divs.Tradding && divChange == 'Tradding') this.width.PriceHistory.width = '' + (parseInt(this.width.PriceHistory.width) + parseInt(this.width.Tradding.width.match(/\d+/)[0])) + '%'
      if(!this.divs.OrderBook && divChange == 'OrderBook') this.width.PriceHistory.width = '' + (parseInt(this.width.PriceHistory.width) + parseInt(this.width.OrderBook.width.match(/\d+/)[0])) + '%'
      if(!this.divs.DeepPrice && divChange == 'DeepPrice') this.width.PriceHistory.width = '' + (parseInt(this.width.PriceHistory.width) + parseInt(this.width.DeepPrice.width.match(/\d+/)[0])) + '%'
    },

    toggleDivs(divChange) {
      var preDivs = this.divs;
      this.changeDivs({
        OrderBook: false,
        DeepPrice: false,
        PriceHistory: false,
        Tradding: false
      })
      setTimeout(() => {
        this.changeDivs({
          OrderBook: divChange == 'OrderBook' ? !preDivs.OrderBook : preDivs.OrderBook,
          DeepPrice: divChange == 'DeepPrice' ? !preDivs.DeepPrice : preDivs.DeepPrice,
          PriceHistory: divChange == 'PriceHistory' ? !preDivs.PriceHistory : preDivs.PriceHistory,
          Tradding: divChange == 'Tradding' ? !preDivs.Tradding : preDivs.Tradding,
        })
        this.calculateWidth(divChange)
        this.reloadDivs = true
      }, 600)
      this.reloadDivs = false
    },
  }
}
</script>


<style lang="scss">
// custom.scss
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

@import url('https://fonts.googleapis.com/css?family=Exo+2|Hind&display=swap');
@import './global.scss';

</style>

<style lang="css" >
@import '../node_modules/highcharts/css/annotations/popup.css';
@import '../node_modules/highcharts/css/stocktools/gui.css';
</style>

<style lang="css" scoped>

.contenedorItem {
  display: inline-block;
  width: 80px;
  padding: 12px;
  float: right;
  color: #848f9e;

}

.contenedorItem:hover {
  color: white;
}

.itemOpen {
  margin: auto;
  width: 20px;
}

.navBar {
  width: 100%;
  z-index: 2;  /* box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); */
}

.itemsCollapse {
  float: right;
  z-index: 3;
  position: relative;
  width: 40%;
}

.iconCollapse:hover {
  color: white;
}

.iconCollapse {
  position: relative;
  width: 20px !important;
  float: right;
  margin-left: -20px;
  z-index: 3;
  color: #848f9e;
}


.transaciones {
  /* -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px); */
  /* background-color: #1715157a; */
  top: -30px;
  left: 10px;
  padding: 10px;
  height: 100%;
  color: white !important;
  /* box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.75); */

}

.subImagen {
  background-image: url("./assets/noche.png");
  /* background-repeat:no-repeat; */
  /* background-position:center; */
  /* background-attachment: fixed; */
  /* background-size: cover; */
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 3;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: opacity 0.5s;

}

.contenedores {
  position: absolute;
  z-index: 1;
  width: 100%;
  background-image: linear-gradient(5deg, #181a1c, #090a0a);
  height: 100vh;
  overflow-y: auto;
}


</style>
