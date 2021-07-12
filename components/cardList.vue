<template>
  <div class="container__card-slide" v-on:scroll.passive="infinityScroll">
    <Card v-for="movie of movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
export default {
  props: ["movies", "fetchMovies", "movieId"],
  methods: {
    async infinityScroll(event) {
      const {
        target: { scrollWidth, offsetWidth, scrollLeft }
      } = event;
      const pageWidth = scrollWidth - offsetWidth;
      if (pageWidth == scrollLeft) {
        if (this.movieId) {
          await this.fetchMovies(this.movieId);
        } else {
          await this.fetchMovies();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container__card-slide {
  > div {
    display: inline-block;
  }
  overflow: auto;
  white-space: nowrap;
  margin-top: 2rem;
}
</style>
