<template lang="html">
  <div class="">
    <br>
    <b-row>
      <b-col>Accion</b-col>
      <b-col><b-button>Comprar</b-button></b-col>
      <b-col><b-button>Vender</b-button></b-col>
    </b-row>

    <b-row>
      <b-col>Tipo</b-col>
      <b-col cols="8"><template><b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select></template></b-col>
    </b-row>

    <b-row>
      <b-col cols="4">Fondo</b-col>
      <b-col cols= "6">
        <template>
            <b-form-input v-model="Fondo" placeholder="0.0"></b-form-input>
        </template>
      </b-col>
      <b-col cols="2">USD</b-col>
    </b-row>

    <b-row>
      <b-col>Cantidad</b-col>
      <b-col cols= "6">
        <template>
            <b-form-input v-model="cantidad"></b-form-input>
        </template>
      </b-col>
      <b-col cols="2">BTC</b-col>
    </b-row>

    <b-row>
      <b-col>Precio</b-col>
      <b-col cols= "6">
        <template>
            <b-form-input v-model="precio"></b-form-input>
        </template>
      </b-col>
      <b-col cols="2">USD</b-col>
    </b-row>
    <b-row>
      <b-col>Total</b-col>
      <b-col cols= "6">
        <template>
            <b-form-input v-model="total"></b-form-input>
        </template>
      </b-col>
      <b-col cols="2">USD</b-col>
    </b-row>
    <b-form-radio v-model="selected" name="some-radios" value="A">Crear una orden de cierre condicional</b-form-radio>

    <b-row>
      <b-col><b-button>Reiniciar</b-button></b-col>
      <b-col><b-button>Comprar</b-button></b-col>
    </b-row>

    <div>
      <b-row>
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
