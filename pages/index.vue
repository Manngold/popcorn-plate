<template>
  <div class="container">
    <Carousel />
    <h2>Now Playing</h2>
    <section class="container__movies--nowPlaying">
      <CardList :movies="nowPlaying" />
    </section>
    <h2>Top Rated</h2>
    <section class="container__movies--topRated">
      <CardList :movies="topRated" />
    </section>
    <h2>Upcoming</h2>
    <section class="container__movies--upcoming">
      <CardList :movies="upcoming" />
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    nowPlaying() {
      return this.$store.state.movieList.nowPlaying.movies;
    },
    topRated() {
      return this.$store.state.movieList.topRated.movies;
    },
    upcoming() {
      return this.$store.state.movieList.upcoming.movies;
    }
  },
  methods: {
    ...mapActions({
      fetchNowPlaying: "movieList/fetchNowPlaying",
      fetchTopRated: "movieList/fetchTopRated",
      fetchUpcoming: "movieList/fetchUpcoming"
    })
  },
  async fetch() {
    if (this.nowPlaying.length === 0) {
      await this.fetchNowPlaying();
    }
    if (this.topRated.length === 0) {
      await this.fetchTopRated();
    }
    if (this.upcoming.length === 0) {
      await this.fetchUpcoming();
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 1.5rem;
}
</style>
