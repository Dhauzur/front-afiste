<template lang="html">
  <div >

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
    <b-tabs  content-class="my-3 " justified >
      <b-tab title="Órdenes"  active>

<table class="table table-border table-responsive tableOrder tableOrder">
  <thead>
    <tr>
      <th>Lado</th>
      <th>Tipo</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Cancelar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Comprar</td>
      <td>Límite</td>
      <td>48</td>
      <td>6728</td>
      <td>x</td>
    </tr>
    <tr>
      <td>Vender</td>
      <td>Límite</td>
      <td>46</td>
      <td>6528</td>
      <td>x</td>
    </tr>
    <tr>
      <td>Vender</td>
      <td>Límite</td>
      <td>98</td>
      <td>5728</td>
      <td>x</td>
    </tr>
    <tr>
      <td>Comprar</td>
      <td>Límite</td>
      <td>10</td>
      <td>7728</td>
      <td>x</td>
    </tr>

  </tbody>
</table>

      </b-tab>
      <b-tab title="Intercambios" ><p>I'm the first tab</p></b-tab>
      <b-tab title="Posiciones"><p>I'm the first tab</p></b-tab>
    </b-tabs>
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

<style lang="scss">
.tableOrder {
  max-height: 15vh;
  overflow-y: auto;
}

a:hover {
  color: white !important;
  border-radius: 0px !important;
}
li {
  margin: 0px;
}
.nav-tabs .nav-link.active {
  background-color: transparent;
  border-color: transparent;
  color: white;
  border-bottom: 1px solid white;
  margin: 0px ;
  border: 1px solid white ;

}

.nav-link {
  border: 2px solid #090e1730 ;
  background-color: #090e1730 ;
  color: white;
  border-bottom: 1px solid white;
  padding: 1px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0px ;

}

.nav-tabs {
    border-bottom: 0px solid transparent;
}
</style>
