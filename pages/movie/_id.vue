<template>
  <div class="container__movie-detail">
    <Detail :movieId="id" />
    <h2>Recommendations 🍿</h2>
    <section class="container__movies--recommendations">
      <CardList
        :movies="recommendations.movies"
        :fetchMovies="fetchRecommendations"
        :movieId="id"
      />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapGetters({
      recommendations: "movieList/getRecommendations"
    })
  },
  methods: {
    ...mapActions({
      fetchRecommendations: "movieList/fetchRecommendations"
    })
  },
  async fetch() {
    await this.fetchRecommendations(this.id);
  }
};
</script>
