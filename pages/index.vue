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
export default {
  computed: {
    nowPlaying() {
      return this.$store.state.movieList.nowPlaying;
    },
    topRated() {
      return this.$store.state.movieList.topRated;
    },
    upcoming() {
      return this.$store.state.movieList.upcoming;
    }
  },
  async fetch() {
    if (this.nowPlaying.length === 0) {
      const response = await fetch(
        `${process.env.apiBaseUrl}/movie/now_playing?api_key=${process.env.apiKey}`
      ).then(res => res.json());
      this.$store.commit("movieList/setNowPlaying", response.results);
    }
    if (this.topRated.length === 0) {
      const response = await fetch(
        `${process.env.apiBaseUrl}/movie/top_rated?api_key=${process.env.apiKey}`
      ).then(res => res.json());
      this.$store.commit("movieList/setTopRated", response.results);
    }
    if (this.upcoming.length === 0) {
      const response = await fetch(
        `${process.env.apiBaseUrl}/movie/upcoming?api_key=${process.env.apiKey}`
      ).then(res => res.json());
      this.$store.commit("movieList/setUpcoming", response.results);
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 1.5rem;
}
</style>
