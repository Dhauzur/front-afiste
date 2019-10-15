<template lang="html">
  <div class="">
    <br>
    <b-row class="p-1">
      <b-col cols="3">Accion</b-col>
      <b-col cols="4"><b-button size="sm">Comprar</b-button></b-col>
      <b-col cols="4"><b-button size="sm">Vender</b-button></b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Tipo</b-col>
      <b-col cols="9"><template><b-form-select v-model="selected" :options="options" size="sm"></b-form-select></template></b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Fondo</b-col>
      <b-col cols= "7">
        <template>
            <b-form-input v-model="Fondo" placeholder="0.0" size="sm"></b-form-input>
        </template>
      </b-col>
      <b-col cols="2">USD</b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3" >Cantidad</b-col>
      <b-col cols= "7">
        <template>
            <b-form-input v-model="cantidad" size="sm"></b-form-input>
        </template>
      </b-col>
      <b-col cols="2">BTC</b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Precio</b-col>
      <b-col cols= "7">
        <template>
            <b-form-input v-model="precio" size="sm"></b-form-input>
        </template>
      </b-col>
      <b-col cols="2">USD</b-col>
    </b-row>

    <b-row class="p-1">
      <b-col cols="3">Total</b-col>
      <b-col cols= "7">
        <template>
            <b-form-input v-model="total" size="sm"></b-form-input>
        </template>
      </b-col>
      <b-col cols="2">USD</b-col>
    </b-row>

    <b-row class="p-1">
      <b-form-radio v-model="selected" name="some-radios" value="A">Crear una orden de cierre condicional</b-form-radio>
    </b-row>

    <b-row class="p-1">
      <b-col><b-button size="sm">Reiniciar</b-button></b-col>
      <b-col><b-button size="sm">Comprar</b-button></b-col>
    </b-row>

    <div>
      <b-row class="p-1">
        <b-col> Lista de observacion</b-col>
      </b-row>

      <b-container>
        afiste BTCUSD
        <b-row>
          <b-col>759.50</b-col>
          <b-col>+1.02%</b-col>
          <b-col>2.540k</b-col>
        </b-row>
      </B-container>

      <b-container>
        babytuto BTCUSD
        <b-row>
          <b-col>759.50</b-col>
          <b-col>+1.02%</b-col>
          <b-col>2.540k</b-col>
        </b-row>
      </B-container>

    </div>

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
