<template lang="html">
  <div>
    <div style="max-height: 30vh; overflow-y: auto; margin-top:20px;">
      <table class="table table-striped table-hover ">
        <thead>
          <tr>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(o, index) in orders" v-if="index <= (orders.length/2)">
            <td style="color:red;">{{ o[0].toFixed(2) }}</td>
            <td>{{ o[1].toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="max-height: 30vh; overflow-y: auto; margin-top:20px;">
      <table class="table table-striped table-hover ">
        <thead>
          <tr>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(o, index) in orders" v-if="index > (orders.length/2)">
            <td style="color:green">{{ o[0].toFixed(2) }}</td>
            <td>{{ o[1].toFixed(2) }}</td>
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
    var preformat = require('../config-data.js')
    this.orders = preformat.default.orders
  }
}
</script>

<style lang="css" scoped>

td {
  padding: 0px !important;
}
</style>
