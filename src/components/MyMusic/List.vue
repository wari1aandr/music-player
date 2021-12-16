<template>
    <div class="my-music__list">
        <h2 class="my-music__h2">Playlists</h2>

        <div class="my-music__row">
            <div class="my-music__favorites">
                <div class="my-music__favorites-text">
                    <p class="my-music__favorites-title">Любимые треки</p>
                    <p class="my-music__favorites-count">1 любимых треков</p>
                </div>
            </div>

            <PlaylistItem 
                v-for="(playlist, idx) of playlists"
                :key="idx"
                :playlist="playlist"
            />

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PlaylistItem from '@/components/PlaylistItem.vue';
import { Playlist } from '@/types';


export default Vue.extend({
  components: {
    PlaylistItem
  },
  data() {
    return {
        playlists: [],
        authenticatedUserId: 1
    }
  },
  mounted() {
    this.fetchPlaylists();
  },
  methods: {
    async fetchPlaylists(): Promise<Array<Playlist>> {
        const res = await fetch('http://localhost:3000/playlists?author_id=' + this.authenticatedUserId)
        const playlists = await res.json()
        this.playlists = playlists;
        return playlists;
    }
  }
});
</script>

<style lang="scss" scoped>
    .my-music {
        &__h2 {
            margin: 70px 0 15px 0;
        }
        &__row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        &__favorites {
            margin: 0 25px 0 0;
            width: 36%;
            height: 270px;

            display: flex;
            align-items: flex-end;

            border-radius: 5px;
            background: -webkit-linear-gradient(315deg, rgb(204, 156, 232), rgb(167, 79, 219), rgb(132, 49, 180) 86%);
            background: -moz-linear-gradient(315deg, rgb(204, 156, 232), rgb(167, 79, 219), rgb(132, 49, 180) 86%);
            background: linear-gradient(315deg, rgb(204, 156, 232), rgb(167, 79, 219), rgb(132, 49, 180) 86%);
            
            &-text {
                margin: 0 0 25px 20px;
            }
            &-title {
                margin: 0;
                font-size: 35px;
                font-weight: 700;
            }
            &-count {
                margin: 0;
                font-size: 20px;
                font-weight: 500;
            }
        }
    }
</style>