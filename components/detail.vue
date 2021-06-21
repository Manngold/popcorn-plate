<template>
  <div class="movie__container">
    <img class="movie__poster" :src="cardImageUrl" alt="movie poster" />
    <div class="movie__info">
      <h2 class="movie__info--title">{{ movie.title }}</h2>
      <span class="movie__info--date" v-if="movie.release_date">{{
        movie.release_date.slice(0, 4)
      }}</span>
      <span
        class="movie__info--genre"
        v-for="(genre, i) of movie.genres"
        :key="i"
        >{{ genre.name }}</span
      >
      <p class="movie__info--description">{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  computed: {
    cardImageUrl() {
      const path = this.movie.poster_path;
      return `https://image.tmdb.org/t/p/w500${path}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable";

.movie {
  &__container {
    display: flex;
  }
  &__poster {
    width: 500px;
    height: 600px;
  }
  &__info {
    margin-left: 2rem;
    padding: 2rem;
    position: relative;
    &--genre {
      margin-right: 0.5rem;
      color: $dimBlack;
    }
    &--date {
      margin-right: 0.5rem;
      color: $dimBlack;
    }
  }
}
</style>
