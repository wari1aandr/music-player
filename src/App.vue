<template>
  <div class="row" id="app">
    <NavBar />

    <div class="col offset-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NavBar,
  }
});
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-icons/font/bootstrap-icons.css';

html, body {
  height: 100%;
}
body {
  color: white;
  background: -webkit-linear-gradient(0deg, rgb(17, 17, 17), rgb(49, 49, 49)) no-repeat;
  background: -moz-linear-gradient(0deg, rgb(17, 17, 17), rgb(49, 49, 49)) no-repeat;
  background: linear-gradient(0deg, rgb(17, 17, 17), rgb(49, 49, 49)) no-repeat;
  background-attachment: fixed;
}
</style>
