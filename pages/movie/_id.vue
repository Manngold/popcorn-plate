<template>
  <div class="container__movie-detail">
    <Detail :movie="movieDetail" />
    <h2>Recommendations 🍿</h2>
    <section class="container__movies--recommendations">
      <CardList :movies="recommendations" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      movieDetail: {},
      recommendations: []
    };
  },
  async fetch() {
    this.movieDetail = await fetch(
      `${process.env.apiBaseUrl}/movie/${this.id}?api_key=${process.env.apiKey}`
    ).then(res => res.json());

    const recommendations = await fetch(
      `${process.env.apiBaseUrl}/movie/${this.id}/recommendations?api_key=${process.env.apiKey}`
    ).then(res => res.json());
    this.recommendations = recommendations.results;
  }
};
</script>
