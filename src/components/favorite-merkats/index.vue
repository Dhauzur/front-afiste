<template lang="html">
  <b-col md="20">
    <div class="tituloSubContenedor TittleStyle">Listado en observación</div>
<table>

  <tbody class="borderBottom">
    <tr>
      <th>
        <tr>
          <td > UBR/CLP</td>
        </tr>
      <td >7487.10 USD</td>
      <td class="color-verde ">+0.64%</td>
      <td>2,017k</td>
     </th>
    </tr>
    <tr>
      <th>
        <tr>
          <td > UBR/USD</td>
        </tr>
      <td >7487.10 USD</td>
      <td class="color-verde ">+0.64%</td>
      <td>2,017k</td>
     </th>
    </tr>
    <tr>
      <th>
        <tr>
          <td > RPP/USD</td>
        </tr>
      <td >7487.10 USD</td>
      <td class="color-verde ">+0.64%</td>
      <td>2,017k</td>
     </th>
    </tr>
    <tr>
      <th>
        <tr>
          <td > RPI/CLP</td>
        </tr>
      <td >7487.10 USD</td>
      <td class="color-verde ">+0.64%</td>
      <td>2,017k</td>
     </th>
    </tr>
  </tbody>
</table>


  </b-col>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
td {
  padding: 3px !important;

}

.TittleStyle{
  border-bottom: 1px solid #1e2b375c;
}

.borderBottom {
  border-bottom: 1px solid #1e2b375c;
  & > tr{
    border-bottom: 1px solid #1e2b375c;
    }

}




</style>
