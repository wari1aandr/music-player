<template>
  <li class="track">
    <div class="track__wrapper">
        <img class="track__img" src="@/assets/1.jpg" alt="1_img">

        <div class="track__text">
            <p class="track__title">Title</p>
            <p class="track__author">Author</p>
        </div>
    </div>

    <p class="track__duration">2:50</p>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

    .track {
        width: 90%;
        margin: 0 0 0 10px;
        padding: 7px;
        border-radius: 5px;
        transition: 0.2s;

        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover {
            cursor: pointer;
            background: rgb(53, 53, 53);
        }
        
        &__wrapper {
            display: flex;
            flex-direction: row;
        }
        &__img {
            width: 45px;
            height: 45px;
            @include shadow(0.2);
        }
        &__text {
            margin: 0 0 0 15px;
        }
        &__title {
            margin: 0;
            font-weight: 600;
        }
        &__author {
            margin: 0;
            color: lightgrey;
        }
        &__duration {
            margin: 0 30px 0 0;
            color: lightgrey;
        }
    }
</style>