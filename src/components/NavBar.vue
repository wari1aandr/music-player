<template>
    <div class="col-2 px-1 bg-dark position-fixed" id="sticky-sidebar">
        <div class="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
            <h1 class="h1">
                <router-link to="/" class="nav-link text-white text-decoration-none white">Music Player</router-link>
            </h1>
            <router-link to="/music" class="nav-link mt-5 h4 text-white text-decoration-none white">
                <i class="bi bi-file-music mr-3"></i>
                My music
            </router-link>
            <router-link to="/search" class="nav-link h4 text-white text-decoration-none white">
                <i class="bi bi-search mr-3"></i>
                Search
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss">
</style>
