<template lang="html">
  <b-col md="20">
    <div class="tituloSubContenedor TittleStyle">Listado en observación</div>

        <div class="BodyStyle">
          <td> UBR/CLP </td>

          <tr>
          <td class="leftStyle" >7487.10 USD</td>
          <td class="color-verde ">+0.64%</td>
          <td>2,017k</td>
         </tr>
      </div>
       <div class="BodyStyle">
         <td> UBR/USD </td>
        <tr>
          <td class="leftStyle" >7487.10 USD</td>
          <td class="color-verde ">+0.64%</td>
          <td>2,017k</td>
        </tr>
      </div>

       <div class="BodyStyle">
         <td> RPP/USD </td>
      <tr>
        <td class="leftStyle" >7487.10 USD</td>
        <td class="color-rojo ">+0.64%</td>
        <td>2,017k</td>
      </tr>
    </div>

       <div class="BodyStyle">
         <td> RPI/CLP </td>
        <tr>
          <td class="leftStyle"> 7487.10 USD</td>
          <td class="color-rojo centerStyle"> +0.64%</td>
          <td>2,017k</td>
        </tr>
      </div>


  </b-col>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
td {
  padding: 3px !important;

}

.TittleStyle{
  border-bottom: 1px solid #1e2b375c;
}

.BodyStyle{
  border-bottom: 1px solid #1e2b375c;

}

.leftStyle{
  text-align: left;
}



</style>
