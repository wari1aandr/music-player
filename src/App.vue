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
</style>
