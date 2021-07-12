<template>
  <div class="container">
    <Carousel />
    <h2>Now Playing</h2>
    <section class="container__movies--nowPlaying">
      <CardList :movies="nowPlaying.movies" :fetchMovies="fetchNowPlaying" />
      <div v-if="$fetchState.pending">loading</div>
    </section>
    <h2>Top Rated</h2>
    <section class="container__movies--topRated">
      <CardList :movies="topRated.movies" :fetchMovies="fetchTopRated" />
    </section>
    <h2>Upcoming</h2>
    <section class="container__movies--upcoming">
      <CardList :movies="upcoming.movies" :fetchMovies="fetchUpcoming" />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      nowPlaying: "movieList/getNowPlaying",
      topRated: "movieList/getTopRated",
      upcoming: "movieList/getUpcoming"
    })
  },
  methods: {
    ...mapActions({
      fetchNowPlaying: "movieList/fetchNowPlaying",
      fetchTopRated: "movieList/fetchTopRated",
      fetchUpcoming: "movieList/fetchUpcoming"
    })
  },

  async fetch() {
    await this.fetchNowPlaying();
    await this.fetchTopRated();
    await this.fetchUpcoming();
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 1.5rem;
}
</style>
