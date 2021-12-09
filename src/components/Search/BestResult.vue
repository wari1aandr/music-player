<template>
    <div class="best">
        <h4>The best result</h4>

        <div class="best__content">
            <img class="best__img" src="@/assets/best.jpg" alt="best-result_img">

            <p class="best__name">Petr Ilych Chaikovsky</p>
            <p class="best__status">Performer</p>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style lang="scss" scoped>
    .best {
      width: 35%;
      &__content {
        margin-top: 30px;
        background: rgb(32, 32, 32);
        transition: 0.5s;
        border-radius: 5px  ;

        -webkit-box-shadow: -1px 7px 16px 1px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: -1px 7px 16px 1px rgba(0, 0, 0, 0.2);
        box-shadow: -1px 7px 16px 1px rgba(0, 0, 0, 0.2);

        &:hover {
          background: rgb(43, 43, 43);
        }
      }
      &__img {
        height: 120px;
        width: 120px;
        clip-path: circle(60px at center);
        margin: 20px;
      }
      &__name {
        font-size: 35px;
        font-weight: 600;
        margin: 0 0 5px 20px;
      }
      &__status {
        display: inline-block;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        background: rgb(20, 20, 20);
        border-radius: 15px;
        padding: 1px 10px;
        margin-left: 20px;
      }
    }
</style>