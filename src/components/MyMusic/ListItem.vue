<template>
  <div class="my-music__item">
    <img class="my-music__item-img" src="@/assets/item-img.jpg" alt="item__img">

    <p class="my-music__item-title">Playlist 1</p>
    <p class="my-music__item-text my-music__item-author">Author: Mariia</p>
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
      align-items: center;

      width: 17%;
      height: 270px;
      margin: 0 25px 25px 0;

      background: rgb(32, 32, 32);
      transition: 0.5s;
      border-radius: 5px;

      -webkit-box-shadow: -1px 7px 16px 1px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: -1px 7px 16px 1px rgba(0, 0, 0, 0.2);
      box-shadow: -1px 7px 16px 1px rgba(0, 0, 0, 0.2);

      &:hover {
        background: rgb(43, 43, 43);
      }

      &-img {
        margin-top: 20px;
        width: 75%;
        -webkit-box-shadow: -1px 7px 16px 1px rgba(0, 0, 0, 0.45);
        -moz-box-shadow: -1px 7px 16px 1px rgba(0, 0, 0, 0.45);
        box-shadow: -1px 7px 16px 1px rgba(0, 0, 0, 0.45);
      }

      &-title {
        margin: 20px 0 0 0;
        width: 75%;

        font-size: 23px;
        font-weight: 500;
      }
      
      &-author {
        width: 75%;
        font-size: 18px;
        font-weight: 400;
        color: lightgrey;
      }
    }
  }
</style>