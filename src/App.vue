<template>
  <div class="container" id="app">
    <header class="page-header">
      <Navbar/>
    </header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
  @import 'src/assets/scss/design.scss';
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
  a {
    color: white;
  }
  a:hover{
    color: lightgray;
  }
</style>
