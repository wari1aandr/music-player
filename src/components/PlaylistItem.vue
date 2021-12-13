<template>
  <div class="playlist__item">
    <img class="playlist__item-img" src="@/assets/item-img.jpg" alt="item__img">

    <p class="playlist__item-title">Playlist 1</p>
    <p class="playlist__item-text playlist__item-author">Author: Mariia</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

  .playlist {
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

      @include shadow(0.2);

      &:hover {
        background: rgb(43, 43, 43);
      }

      &-img {
        margin-top: 20px;
        width: 75%;
        @include shadow(0.45);
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