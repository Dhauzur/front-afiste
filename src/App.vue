<template lang="html">
<div id="app" class="">
  <div class="contenedores">
    <MerkatDescription/>
    <transition name="fade">
    <b-row class="mx-1" v-if="reloadDivs" >
      <b-col md="5" class="subContenedor colorBackground ">
        <MerkatChart/>
        <MerkatChart2/>
      </b-col>
      <b-col md="2" class="subContenedor" ref="PriceChart" v-if="divs.PriceChart.on">
        <b-col class="mb-2 ">
          <PriceChart />
        </b-col>
        <b-col style="  border: 1px solid #374050;" class="px-0 pt-2" >
          <FavoriteMerkats/>
        </b-col>
      </b-col>
      <b-col md="2" ref="OrderBook" v-if="divs.OrderBook.on" class="subContenedor colorBackground ">
        <div class="tituloSubContenedor" @click="toggleOrderBook()"> Libro de ordenes</div>
        <OrderBook />
      </b-col>
      <b-col md="3" ref="PriceHistory" v-if="divs.PriceHistory.on" class="subContenedor " style="padding: 0px !important;">
        <div class="subImagen">
          <div class="transaciones">
            <div class="tituloSubContenedor" @click="togglePriceHistory()"> TRADDING</div>
            <Transaciones/>
          </div>
        </div>
      </b-col>

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
import MerkatChart2 from './merkat-chart2'
import FavoriteMerkats from './favorite-merkats'
import Reac from './reactivo'
import Transaciones from './transaciones'
export default {
  components: {
    MerkatDescription,
    OrderBook,
    PriceChart,
    MerkatChart,
    MerkatChart2,
    FavoriteMerkats,
    Transaciones
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


.btn {
  border-radius: 20px;
}
.custom-select, .custom-select:focus {
    background: #e0dbdb36 !important;
    border: none !important;
    outline: none ;
    box-shadow:none;
    color: white ;
}

.form-control, .form-control:focus {
  padding-left: 20px;
  background-color: transparent ;
  border: none ;
  outline: none ;
  box-shadow:none;
  // border-bottom: 1px solid white;
  background-color: #e0dbdb36;
  border-radius: 20px;
  color: white ;
}

#app {
  // font-family: 'Noto Sans JP', sans-serif !important;
  color: #e0dbdb !important;
  font-size: 0.6rem;
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif !important;

}
h5 {
  font-size: 11px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif !important;

}
h6 {
  font-size: 4px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif !important;

}

/* width */
::-webkit-scrollbar {
  width:4px;
}
::-webkit-scrollbar {
  height: 2px;
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

.table-hover tbody tr:hover, .table-striped tbody tr:nth-of-type(odd) {
    color: #e0dbdb;
    background-color: transparent !important;
}

table, th, td, tr {
  border-bottom-color:  transparent !important;
  text-align: center;
  border-top-color: transparent !important;
}

tr {

  width: 100% !important;
  display: inline-table !important;

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

///////////////////
//START CSS
.tituloSubContenedor {
  text-align: center;
  font-size: 0.9rem;
}

.colorBackground {
  // background-color: #20262b;
}

.subContenedor {
  z-index: 2;
  padding: 5px !important;
  border: 1px solid #374050;

  // margin: 20px;
  // margin-left: 30px;
  // padding: 20px;
  // box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.75);
  // border-radius: 15px;
  // background-color: #20262b;

}
</style>

<style lang="css" scoped>

.transaciones {
  /* -webkit-backdrop-filter: blur(10px); */
  backdrop-filter: blur(20px);
  background-color: #6161612b;
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
  background-image: linear-gradient(45deg, #262a38, #090e17);
  height: 100vh;
  overflow-y: auto;
}


</style>
