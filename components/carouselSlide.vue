<template #img>
  <b-carousel-slide :img-src="slideImageUrl">
    <div class="movie__info">
      <span class="movie__info--title">{{ movie.title }}</span>
      <p class="movie__info--overview">{{ movieOverview }}</p>
      <span class="movie__info--vote-average"
        >🍿 {{ movie.vote_average }} / 10</span
      >
    </div>
  </b-carousel-slide>
</template>
<script>
export default {
  props: ["movie"],
  computed: {
    slideImageUrl() {
      const path = this.movie.backdrop_path;
      return `https://image.tmdb.org/t/p/original/${path}`;
    },
    movieOverview() {
      const overview = this.movie.overview.slice(0, 200);
      return `${overview}...`;
    }
  }
};
</script>
