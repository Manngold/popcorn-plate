<template>
  <NuxtLink :to="`/movie/${movie.id}`" class="movie--link">
    <b-card overlay :img-src="cardImageUrl" img-alt="Card Image">
      <div class="container__movie-info">
        <span class="container__movie-info--title">{{ movie.title }}</span>
        <span class="container__movie-info--score"
          >🍿 {{ fixedScore }} / 10</span
        >
      </div>
    </b-card>
  </NuxtLink>
</template>

<script>
export default {
  props: ["movie"],
  computed: {
    cardImageUrl() {
      const path = this.movie.poster_path;
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
    fixedScore() {
      const score = Number.parseFloat(this.movie.vote_average).toFixed(1);
      return score;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable";
.movie--link {
  display: inline-block;
  color: $white;
}
.card {
  width: 200px;
  height: 300px;
  margin-left: 0.5rem;
  &-body {
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
      transition: 0.3s;
    }
    background-color: unset;
  }
}
.container {
  &__movie-info {
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
  }
  span {
    white-space: initial;
    display: block;
  }
}
</style>
