<template lang="html">
  <div>
    <div class="tableOrder">
        <!-- <transition-group name="flip-list" tag="ul">
          <li v-for="item in items" v-bind:key="item">
            {{ item }}
          </li> -->
      <table class="table table-striped table-hover ">
        <thead>
          <tr>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody  is="transition-group"  name="flip-list" tag="tbody">
          <tr v-for="(o, index) in orders" v-if=" index <= (orders.length/2)" :key="index">
            <td class="color-verde">{{ o[0].toFixed(2) }}</td>
            <td>{{ o[1].toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tableOrder">
      <table class="table table-striped table-hover ">
        <thead>
          <tr>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(o, index) in orders" v-if="index > (orders.length/2)">
            <td class="color-rojo">{{ o[0].toFixed(2) }}</td>
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
      orders: null,
      items: [1,2,3,4,5,6,7,8,9]
    }
  },
  created() {
    var preformat = require('../config-data.js')
    this.orders = preformat.default.orders
    setInterval(() => {
      this.orders = this.orders.sort(() => Math.random() - 0.5);
    }, 5000)
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
