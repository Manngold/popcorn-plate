<template>
  <b-card overlay :img-src="cardImageUrl" img-alt="Card Image">
    <div class="container__movie-info">
      <span class="container__movie-info--title">{{ movie.title }}</span>
      <span class="container__movie-info--score"
        >🍿 {{ movie.vote_average }} / 10</span
      >
    </div>
  </b-card>
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
.card {
  width: 200px;
  height: 300px;
  margin-left: 0.5rem;
  &-body {
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
