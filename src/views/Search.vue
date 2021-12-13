<template>
    <div class="search">
      <div class="search__field">
        <button class="search__input-icon search__input-icon--search" type="submit">
          <i class="bi bi-search"></i>
        </button>

        <input class="search__input" 
          type="search" 
          name="search" 
          id="search">

        <button class="search__input-icon search__input-icon--close" type="submit">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <div class="d-flex flex-row">
        <BestResult/>

        <div class="search__tracks">
          <h4>Tracks</h4>

          <TrackItem />
        </div>
      </div>

      <div class="search__notonly">
        <h4 class="search__notonly-title">Chaikovsky and not only.</h4>

        <PlaylistItem />
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BestResult from '@/components/Search/BestResult.vue';
import PlaylistItem from '@/components/PlaylistItem.vue';
import TrackItem from '@/components/TrackItem.vue';

export default Vue.extend({
  name: 'Search',
  components: {
    BestResult, PlaylistItem,TrackItem
  }
});
</script>

<style lang="scss" scoped>
  .search {
    &__field {
      width: 30%;
      margin: 20px 0;
      position: relative;
    }
    &__input {
      border: 0px;
      border-radius: 18px;
      width: 100%;
      padding: 8px 0 8px 0;
      &-icon {
        position: absolute;
        top: 2px;
        font-size: 22px;

        border: 0px;
        background: transparent;

        &--search {
          left: 5px;
        }
        &--close {
          right: 5px;
        }
      }
    }
    &__notonly {
      margin: 50px 0 25px 0;
      
      &-title {
        font-size: 35px;
        font-weight: 600;
      }
    }

    &__tracks {
      width: 60%;
      margin: 0 0 0 30px;
    }

  }
</style>