<template>
  <div class="container">
    <Carousel />
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: []
    };
  },
  async fetch() {
    this.movies = await fetch(
      `${process.env.apiBaseUrl}/movie/550?api_key=${process.env.apiKey}`
    ).then(res => res.json());
  }
};
</script>
