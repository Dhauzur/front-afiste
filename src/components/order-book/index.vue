<template lang="html">
  <div>
    <div class="tableOrder">
      <table class="table table-striped table-hover mb-0">
        <thead>
          <tr>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody  is="transition-group"  name="flip-list" tag="tbody">
          <tr v-for="(o, index) in orders" v-if=" index <= (orders.length/2) && index < 10" :key="index">
            <td class="color-verde">{{ o[0].toFixed(2) }}</td>
            <td>{{ o[1].toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tableOrder mt-0" >
      <table class="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(o, index) in orders" v-if="index > (orders.length/2) && index < (orders.length/2)+10">
            <td class="color-rojo">{{ o[0].toFixed(2) }}</td>
            <td>{{ o[1].toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tableOrder">
      <table class="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(o, index) in orders" v-if=" index < 10">
            <td>{{ o[0].toFixed(2) }}</td>
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

.flip-list-move {
  transition: transform 1s;
}

td {
  padding: 0px !important;
}

.tableOrder {
  max-height: 30vh;
  overflow-y: auto;
  margin-top:20px;
  margin-right: 30px;
}
</style>
