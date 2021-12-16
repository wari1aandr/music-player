<template>
  <div class="playlist__item">
    <img class="playlist__item-img" :src="require(`@/assets/${playlist.img}`)" alt="item__img">

    <p class="playlist__item-title"> {{ playlist.title }} </p>
    <p class="playlist__item-text playlist__item-author"> {{ this.authorLogin }} </p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Playlist } from '@/types';

export default Vue.extend({
  props: {
    playlist: {
      type: Object as PropType<Playlist>,
      required: true
    }
  },
  data() {
    return {
      authorLogin: '' as String
    }
  },
  mounted() {
    this.getAuthorLogin();
  },
  methods: {
    async getAuthorLogin(): Promise<String> {
        const res = await fetch('http://localhost:3000/users?id=' + this.playlist.author_id)
        const user = await res.json()
        this.authorLogin = user[0].login;
        return user.login;
    }
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