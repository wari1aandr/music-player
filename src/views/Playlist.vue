<template>
  <div class="playlist">
    <div class="playlist__header">
        <img class="playlist__img" :src="require(`@/assets/${this.playlist.img}`)" alt="playlist_img">

        <div class="playlist__info">
            <div>
                <p class="playlist__info-text">playlist</p>
                <p class="playlist__info-title"> {{ this.playlist.title }} </p>
                <p class="playlist__info-bottom"> {{ getAuthorLogin }} <span class="playlist__info-content"> {{ this.playlist.tracks_id.length }} tracks</span></p>
            </div>
        </div>
    </div>
    <div>
        <i class="bi bi-play-circle-fill"></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { Playlist } from '@/store/types';

export default Vue.extend({
    name: 'Playlist',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            playlist: {} as Playlist,
        }
    },
    methods: {
        getCurrentPlaylist(id: number): void {
            this.playlist = this.getAllPlaylists.find((item: Playlist) => item.id == id);
        }
    },
    computed: mapGetters('playlist', ['getAllPlaylists', 'getAuthorLogin']),
    created() {
        this.getCurrentPlaylist(+this.id);
    },
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

    .playlist {
        &__header {
            width: 100%;
            height: 250px;
            margin: 80px 0 0 15px;

            display: flex;
            flex-direction: row;
        }

        &__img {
            width: 250px;
            height: 100%;

            @include shadow(0.25);
        }

        &__info {
            margin: 0 0 0 20px;
            font-weight: 500;
            display: flex;
            align-items: flex-end;

            &-text {
                text-transform: uppercase;
                margin: 0;
            }
            &-title {
                font-size: 55px;
                margin: 0;
                line-height: 1em;
            }
            &-bottom {
                margin: 0;
            }
            &-content {
                color: lightgrey;
            }
        }
    }
</style>