<template>
    <div class="col-2 px-1 bg-dark position-fixed" id="sticky-sidebar">
        <div class="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
            <h1 class="h1">
                <a href="/" class="nav-link text-white text-decoration-none white">
                    Music Player
                </a>
            </h1>
            <a class="nav-link mt-5 h4 text-white text-decoration-none white" href="#">
                <i class="bi bi-file-music mr-3"></i>
                My music
            </a>
            <a class="nav-link h4 text-white text-decoration-none white" href="#">
                <i class="bi bi-search mr-3"></i>
                Search
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: {
    
  }
});
</script>

<style lang="scss">
</style>
