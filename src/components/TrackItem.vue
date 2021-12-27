<template>
  <li class="track">
    <div class="track__wrapper">
        <p class="track__id"> {{ id }} </p>
        <img class="track__img" :src="require(`@/assets/data/img/${track.img}`)" alt="1_img">

        <div class="track__text">
            <p class="track__title"> {{ track.title }} </p>
            <p class="track__author"> {{ track.author }} </p>
        </div>
    </div>

    <p class="track__duration">2:50</p>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Track } from '@/store/types';

export default Vue.extend({
    props: {
        track: {
            type: Object as PropType<Track>,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

    .track {
        width: 90%;
        margin: 0 0 0 25px;
        padding: 7px;
        border-radius: 5px;
        transition: 0.2s;

        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        &:hover {
            cursor: pointer;
            background: rgb(53, 53, 53);
            &::before {
                content: '';
                background: url(../assets/play.svg) no-repeat;
                background-size: cover;
                width: 35px;
                height: 35px;
                position: absolute;
                left: 40px;
                bottom: 15px;
            }
        }
        
        &__wrapper {
            display: flex;
            flex-direction: row;
        }

        &__id {
            font-size: 22px;
            margin: auto;
        }

        &__img {
            width: 45px;
            height: 45px;
            margin: 0 0 0 15px;
            @include shadow(0.2);
        }
        &__text {
            margin: 0 0 0 20px;
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