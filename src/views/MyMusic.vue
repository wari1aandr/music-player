<template>
    <div class="my-music">
      <List />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import List from '@/components/MyMusic/List.vue';

export default Vue.extend({
  name: 'MyMusic',
  components: {
    List
  }
});
</script>

<style lang="scss" scoped>

</style>