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
  data() {
    return {
      nowPlaying: [],
      topRated: [],
      upcoming: []
    };
  },
  async fetch() {
    const nowPlaying = await fetch(
      `${process.env.apiBaseUrl}/movie/now_playing?api_key=${process.env.apiKey}`
    ).then(res => res.json());
    this.nowPlaying = nowPlaying.results;

    const topRated = await fetch(
      `${process.env.apiBaseUrl}/movie/top_rated?api_key=${process.env.apiKey}`
    ).then(res => res.json());
    this.topRated = topRated.results;

    const upcoming = await fetch(
      `${process.env.apiBaseUrl}/movie/upcoming?api_key=${process.env.apiKey}`
    ).then(res => res.json());
    this.upcoming = upcoming.results;
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 1.5rem;
}
</style>
