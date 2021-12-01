<template>
  <div class="my-music__item">
    <img class="my-music__item-img" src="@/assets/item-img.jpg" alt="item__img">

    <div class="my-music__item-text">
      <p class="my-music__item-title">Playlist 1</p>
      <p class="my-music__item-author">Author: Mariia</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
  .my-music {
    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 250px;
      background: rgb(40, 40, 40);
      &-img {
        margin-top: 20px;
        width: 70%;
      }
      &-title {
        margin: 10px 0 0 0;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
      &-author {
        margin: 0 0 20px 0;
        font-size: 15px;
        text-align: center;
      }
    }
  }
</style>