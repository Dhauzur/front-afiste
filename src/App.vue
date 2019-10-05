<template lang="html">
<div class="">
  <div class="subImagen">sadasd</div>
  <MerkatDescription/>
</div>
</template>

<script>
import MerkatDescription from './merkat-description'
export default {
  components: {
    MerkatDescription
  }
}
</script>


<style lang="scss">
// custom.scss
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Noto Sans JP', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.custom-select {
  background: white !important;
}
</style>

<style lang="css" scoped>

.subImagen {
  background-image: url("./assets/fondo.png");
  background-repeat:no-repeat;
  background-position:center;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 84%;
  opacity: 0.3;
  filter:  blur(30px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

</style>
