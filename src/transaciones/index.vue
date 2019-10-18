<template lang="html">
  <div>

    <b-row class="p-1 mt-4">
      <b-col >
        <b-button class="mb-1" block variant="outline-success" size="sm">Comprar</b-button>
      </b-col>
      <b-col >
        <b-button class="" block variant="outline-danger" size="sm">Vender</b-button>
        </b-col>
      </b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Mercado</b-col>
      <b-col cols="12">
        <template><b-form-select v-model="selected" :options="options" size="sm"></b-form-select></template>
      </b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Fondo</b-col>
      <b-col cols= "12">
        <template><b-form-input  v-model="Fondo" placeholder="0.0" size="sm"></b-form-input></template>
      </b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3" >Cantidad</b-col>
      <b-col cols= "12">
        <template><b-form-input v-model="cantidad" size="sm" placeholder=""></b-form-input></template>
      </b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Precio</b-col>
      <b-col cols= "12">
        <template><b-form-input variant="success"v-model="precio" size="sm"></b-form-input></template>
      </b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Total</b-col>
      <b-col cols= "12">
          <template><b-form-input v-model="total" size="sm" placeholder="100.000"></b-form-input></template>
      </b-col>
    </b-row>


    <b-row class="p-1 mb-2 mt-2">
      <b-col cols="12" ><b-button block variant="outline-warning" size="sm">Realizar orden</b-button></b-col>
    </b-row>

  </div>


</template>

<script>
export default {
  data(){
    return{
    options:[]
    }
  }
}
</script>

<style lang="css" scoped>

</style>
