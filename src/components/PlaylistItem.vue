<template>
  <div class="playlist__item" @click="shareData()">
    <img class="playlist__item-img" :src="require(`@/assets/${playlist.img}`)" alt="item__img">

    <p class="playlist__item-title"> {{ playlist.title }} </p>
    <p class="playlist__item-text playlist__item-author"> {{ getAuthorLogin }} </p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { Playlist } from '@/store/types';

export default Vue.extend({
  props: {
    playlist: {
      type: Object as PropType<Playlist>,
      required: true
    }
  },
  methods: {
    ...mapActions('playlist', ['fetchAuthorLogin']),
    shareData(): void {
      this.$router.push({ 
        name: 'Playlist', 
        params: { id: this.playlist.id.toString()}
      });
    }
  },
  computed: mapGetters('playlist', ['getAuthorLogin']),
  mounted() {
    this.fetchAuthorLogin(this.playlist.author_id);
  }
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
        cursor: pointer;
      }
      &-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
      }

      &-img {
        margin-top: 20px;
        width: 75%;
        @include shadow(0.45);
      }

      &-title {
        margin: 20px 0 0 0;
        width: 75%;

        color: white;
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