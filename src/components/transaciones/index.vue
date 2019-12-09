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
      <b-col cols="3" >Cantidad </b-col>
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

<table class="table table-border table-responsive tableTransacction  tableStyleNew">
  <thead align="left">
<tr class="StyleTR">
   <b-row class="ColumnaTrading" >

    <b-col cols="1">Lado</b-col>

    <b-col cols="3">Tipo</b-col>
    <b-col cols="3">Cantidad</b-col>
    <b-col cols="2">Precio</b-col>
    <b-col>Cancelar</b-col>

  </b-row>
</tr>

  </thead>
  <tbody align="left">

   <tr  class="StyleTR">

       <b-row class="ColumnaTrading">


      <b-col cols="2" class="color-verde">Comprar</b-col>

      <b-col cols="2">Límite</b-col>

      <b-col cols="3">48</b-col>
      <b-col cols="2">6728</b-col>
      <b-col>x</b-col>
    </b-row>

</tr>

<tr class="StyleTR">

      <b-row class="ColumnaTrading" >

      <b-col cols="2" class="color-rojo">Vender</b-col>

      <b-col cols="2">Límite</b-col>

      <b-col cols="3">46</b-col>

      <b-col cols="2">6528</b-col>

      <b-col>x</b-col>

    </b-row>
</tr>


<tr class="StyleTR">

      <b-row class="ColumnaTrading" >
      <b-col cols="2" class="color-rojo">Vender</b-col>
     <b-col cols="2">Límite</b-col>
      <b-col cols="3">98</b-col>
      <b-col cols="2">5728</b-col>
      <b-col>x</b-col>
    </b-row>
  </tr>


<tr class="StyleTR">
      <b-row class="ColumnaTrading" >
      <b-col cols="2" class="color-verde">Comprar</b-col>
      <b-col cols="2">Límite</b-col>
      <b-col cols="3">10</b-col>
      <b-col cols="2">7728</b-col>
      <b-col>x</b-col;>
    </b-row>

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
.tableTransacction {
  height: 40vh;
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

.ColumnaTrading {
  font-size: 10px;
  border-bottom: 1px solid #bdb8b8;

}

.StyleTR{

  border-bottom: 1px solid black;

}

.tableStyleNew {
border-collapse: collapse;

}



.tbody
{

 border-width: 2px;
  border-spacing: 0px 0px;
  border: 1px solid #bdb8b8;
  text-align: left;
  justified: margin-left;
}

.nav-tabs {
    border-bottom: 0px solid transparent;
}
</style>
