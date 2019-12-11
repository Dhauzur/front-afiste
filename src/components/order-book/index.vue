<template lang="html">
  <div>
    <div class="tableOrder noScrollY mt-2">
      <table class="table  table-hover  mb-0">
        <thead>
          <tr>
            <th>Precio</th>
            <th>Acciones</th>
            <th></th>
          </tr>
        </thead>
        <tbody  >
          <tr v-for="(o, index) in orders" v-if=" index <= (orders.length/2) && index < 15" :key="index">
            <td class="color-verde">{{ o[0].toFixed(3) }}</td>
            <td>{{ o[1].toFixed(3) }}</td>
            <td>{{ o[1].toFixed(3) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="h6" style="text-align: center; vertical-align: middle; margin-top:5px; margin-right:20px;">19103 CLP</div>
    <div class="tableOrder noScrollY mt-0" >
      <table class="table  table-hover">
        <tbody >
          <tr v-for="(o, index) in orders" v-if="index > (orders.length/2) && index < (orders.length/2)+15">
            <td class="color-rojo">{{ o[0].toFixed(3) }}</td>
            <td>{{ o[0].toFixed(3) }}</td>
            <td>{{ o[0].toFixed(3) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div >
      <table class="table table-striped table-hover table-responsive" style="overflow: auto !important; max-height: 200px !important;">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(o, index) in orders" v-if=" index < 15">
            <td>{{ o[0].toFixed(3) }}</td>
            <td>{{ o[1].toFixed(3) }}</td>
            <td>{{ o[1].toFixed(3) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      orders: null
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

    }
  }
}
</script>

<style lang="css" scoped>

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
  max-height: calc(33vh - 30px) !important;
  overflow-y: auto;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent;

}

table, th, td, tr {
  border-bottom-color:  transparent !important;
    text-align: right !important;
    vertical-align: right !important;
      border-top-color: transparent !important;
}
</style>
