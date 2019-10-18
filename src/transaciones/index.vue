<template lang="html">
  <div>

    <b-row class="p-1">
      <b-col cols="6" ><b-button block variant="success">Comprar</b-button></b-col>
      <b-col cols="6"><b-button block variant="danger">Vender</b-button></b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Tipo</b-col>
      <b-col cols="9">
        <template><b-form-select v-model="selected" :options="options" size="sm"></b-form-select></template>
      </b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Fondo</b-col>
      <b-col cols= "9">
        <template><b-form-input  v-model="Fondo" placeholder="0.0" size="sm"></b-form-input></template>
      </b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3" >Cantidad</b-col>
      <b-col cols= "9">
        <template><b-form-input v-model="cantidad" size="sm"></b-form-input></template>
      </b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Precio</b-col>
      <b-col cols= "9">
        <template><b-form-input v-model="precio" size="sm"></b-form-input></template>
      </b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Total</b-col>
      <b-col cols= "9">
          <template><b-form-input v-model="total" size="sm"></b-form-input></template>
      </b-col>
    </b-row>


    <b-row >
      <b-col cols="12" ><b-button block variant="warning">Realizar orden</b-button></b-col>
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
