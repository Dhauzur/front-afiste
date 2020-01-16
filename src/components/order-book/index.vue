<template lang="html">
  <div>
    <div class="tableOrder noScrollY mt-2">

      <table class="table  table-hover  mb-0">

        <thead>
          <tr>
            <th>Precio</th>
            <th>Volumen</th>
            <th>Valor Total</th>

          </tr>
        </thead>
        <tbody >

          <tr v-for="(o, index) in orderPriceSell"   >
            <td class="greenColor">{{ o }}</td>
            <td> {{ }} </td>
            <td> {{ }} </td>

          </tr>
        </tbody>
      </table>
    </div>
    <div class="h6 lastPrice"> 19103 CLP</div>
    <div class="tableOrder noScrollY mt-0" >
      <table class="table  table-hover">
        <tbody >

          <tr v-for="(o, index) in ordersX" v-if=" index > (ordersX.length/2) && index < (ordersX.length/2)+15"  >
            <td class="redColor">{{ }}</td>
            <td> {{ }} </td>
            <td> {{ }} </td>

          </tr>
        </tbody>
      </table>
    </div>
    <div >
      <table class="table table-striped table-hover table-responsive tableHistoryPrice">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          <tr  v-for="(o, index) in ordersX" v-if="" >

            <td>{{ }}</td>
            <td>{{ }}</td>
            <td>{{ }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Axios from 'axios'
export default {
  data() {
    return {
      orders: null
    }




  },
  computed: {
    ...mapGetters({
      ordersX: 'dom/orders',

    }),

    orderPriceSell()
    {
      var ordersSell = this.ordersX.filter((orders) => orders.type == 'VENTA');

    {
      return ordersSell.sort((ordersA, ordersB) => ordersA > ordersB);

    }
     console.log(orderPriceSell);
}

  },
  created() {
    var preformat = require('./config-data.js')
    this.orders = preformat.default.orders
    if(setInterval(() => {
      this.orders = this.orders.sort(() => Math.random() - 0.5);
    }, 9000) > 200) location.reload()

  },
  methods: {
    shuffle() {
    },


  }
}
</script>

<style lang="scss" scoped>

.noScrollY {
  overflow-y: hidden !important;
}

.flip-list-move {
  transition: transform 1s;
}

td {
  padding: 0px !important;
}

.tableOrder {
  & > table > tbody > tr, & > table > thead > tr {
    border-bottom-color:  transparent !important;
    text-align: right !important;
    vertical-align: right !important;
    border-top-color: transparent !important;
  }
  max-height: calc(33vh - 30px) !important;
  overflow-y:auto;
}

::-webkit-scrollbar-track {
  background: transparent !important;
}

::-webkit-scrollbar-thumb {
  background: transparent !important;
}

.tableHistoryPrice {
  & > tbody > tr, & > thead > tr {
    border-bottom-color:  transparent !important;
    text-align: right !important;
    vertical-align: right !important;
    border-top-color: transparent !important;
  }
  overflow: auto !important;
  max-height: 200px !important;
}

.lastPrice {
  text-align:center;
  vertical-align:middle;
  margin-top:5px;
  margin-right:20px;
}
</style>
