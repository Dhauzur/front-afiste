<template lang="html">
<div id="app" class="">
  <div class="contenedores">
    <MerkatDescription/>
    <transition name="fade">
    <b-row class="mx-1" v-if="reloadDivs" >
      <div v-bind:style="width.PriceHistory"class="subContenedor colorBackground">
        <MerkatChart/>
        <MerkatChart2/>
      </div>
      <div  v-if="divs.DeepPrice" v-bind:style="width.DeepPrice"  class="subContenedor colorBackground">
        <div class="iconCollapse" @click="toggleDivs('DeepPrice')">
          <v-icon name="grid"/>
        </div>
        <DeepPrice />
        <FavoriteMerkats class="subContenedor"/>
      </div>
      <div v-if="divs.OrderBook" v-bind:style="width.OrderBook"  class="subContenedor colorBackground">
        <div class="iconCollapse" @click="toggleDivs('OrderBook')">
          <v-icon name="grid"/>
        </div>
        <OrderBook />
      </div>
      <div  v-if="divs.Tradding" v-bind:style="width.Tradding" style="padding: '0px';" class="subContenedor colorBackground">
        <div class="subImagen">
          <div class="transaciones">
            <div class="iconCollapse" @click="toggleDivs('Tradding')">
              <v-icon name="grid"/>
            </div>
            <div class="tituloSubContenedor" > TRADDING</div>
            <span >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            <!-- <Transaciones/> -->
          </div>
        </div>
      </div>
      <span style="font-size: 15px">{{ divs }}</span>
      <br>
      <span style="font-size: 15px">{{ width }}</span>

    </b-row>
  </transition>
  </div>
</div>
</template>

<script>
import MerkatDescription from './merkat-description'
import OrderBook from './order-book'
import DeepPrice from './deep-price'
import MerkatChart from './merkat-chart'
import MerkatChart2 from './merkat-chart2'
import FavoriteMerkats from './favorite-merkats'
import Reac from './reactivo'
import Transaciones from './transaciones'
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
      reloadDivs: true,
      width: {
        Tradding: {
          width: '21%'
        },
        OrderBook:{
          width: '17%'
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
    divs() {
      return Reac.state.divs
    }
  },
  methods: {
    preCalculate(divChange) {
      console.log(divChange);
      var cantDivs = 0
      if(this.divs.Tradding && divChange != 'Tradding') cantDivs++
      if(this.divs.OrderBook && divChange != 'OrderBook') cantDivs++
      if(this.divs.DeepPrice && divChange != 'DeepPrice') cantDivs++
      var prom = (55/cantDivs).toFixed(0)
      if((prom*3) > 55) prom = prom - 2
      console.log(prom);
      return prom
    },

    calculateWidth(divChange,prom) {
      if(this.divs.Tradding && divChange != 'Tradding') this.width.Tradding.width = '' + prom + '%'
      if(this.divs.OrderBook && divChange != 'OrderBook') this.width.OrderBook.width = '' + prom + '%'
      if(this.divs.DeepPrice && divChange != 'DeepPrice') this.width.DeepPrice.width  = '' + prom + '%'

      if(this.divs.Tradding && divChange == 'Tradding') this.width.Tradding.width = '0%'
      if(this.divs.OrderBook && divChange == 'OrderBook') this.width.OrderBook.width = '0%'
      if(this.divs.DeepPrice && divChange == 'DeepPrice') this.width.DeepPrice.width  = '0%'
    },

    toggleDivs(divChange) {
      var preDivs = this.divs
      var prom = this.preCalculate(divChange)
      Reac.commit('changeDivs', {
        OrderBook: false,
        DeepPrice: false,
        PriceHistory: false,
        Tradding: false
      })
      setTimeout(() => {
        Reac.commit('changeDivs', {
          OrderBook: divChange == 'OrderBook' ? !preDivs.OrderBook : preDivs.OrderBook,
          DeepPrice: divChange == 'DeepPrice' ? !preDivs.DeepPrice : preDivs.DeepPrice,
          PriceHistory: divChange == 'PriceHistory' ? !preDivs.PriceHistory : preDivs.PriceHistory,
          Tradding: divChange == 'Tradding' ? !preDivs.Tradding : preDivs.Tradding,
        })
        this.calculateWidth(divChange,prom)
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

<style lang="css" scoped>

.transaciones {
  /* -webkit-backdrop-filter: blur(10px); */
  backdrop-filter: blur(30px);
  background-color: #1715157a;
  top: -30px;
  left: 10px;
  padding: 30px;
  height: 100%;
  color: white !important;
  box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.75);

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
  background-image: linear-gradient(45deg, #262a38, #090e17);
  height: 100vh;
  overflow-y: auto;
}


</style>
