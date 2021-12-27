<template>
  <div class="playlist">
    <div class="playlist__header" ref="header">
        <div class="playlist__wrapper">
            <img class="playlist__img" ref="image" :src="require(`@/assets/data/img/${this.playlist.img}`)" alt="playlist_img">

            <div class="playlist__info">
                <div>
                    <p class="playlist__info-text">playlist</p>
                    <p class="playlist__info-title"> {{ this.playlist.title }} </p>
                    <p class="playlist__info-bottom"> {{ getAuthorLogin }} <span class="playlist__info-content"> {{ this.playlist.tracks_id.length }} tracks</span></p>
                </div>
            </div>
        </div>
    </div>

    <div class="playlist__tracks">
        <ul class="playlist__tracks-list">
            <TrackItem 
                v-for="(track, idx) of tracks"
                :key="idx"
                :track="track"
                :id="idx + 1"
            />
        </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FastAverageColor from 'fast-average-color';
import { mapGetters } from 'vuex';

import { Playlist, Track } from '@/store/types';

import TrackItem from '@/components/TrackItem.vue';

export default Vue.extend({
    name: 'Playlist',
    components: { TrackItem },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            playlist: {} as Playlist,
            tracks: [] as Array<Track>
        }
    },
    methods: {
        getCurrentPlaylist(id: number): void {
            this.playlist = this.getAllPlaylists.find((item: Playlist) => item.id == id);
        },
        async fetchTracks(id: number): Promise<void> {
            const res = await fetch('http://localhost:3000/tracks?playlists_id=' + id);
            this.tracks = await res.json();
        },
        setHeaderBg(image: HTMLImageElement, header: HTMLElement ) {
            const fac = new FastAverageColor();
            const color = fac.getColor(image);

            header.style.backgroundColor = color.rgba;
        }
    },
    computed: mapGetters('playlist', ['getAllPlaylists', 'getAuthorLogin']),
    created() {
        this.getCurrentPlaylist(+this.id);
        this.fetchTracks(+this.id);
    },
    mounted(){
        this.setHeaderBg(this.$refs.image as HTMLImageElement, this.$refs.header as HTMLElement);
    }
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

    .playlist {
        &__header {
            width: 100%;
            height: 320px;

            display: flex;
            align-items: flex-end;
        }
        &__wrapper {
            height: 250px;
            margin: 25px;

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
        &__tracks-list {
            padding: 0;
        }
    }
</style>