<template>
  <div>
    <div v-if="$fetchState.pending">
      <CarouselSkeleton />
    </div>
    <div v-else>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <CarouselSlide
          class="carousel-slide__container"
          v-for="movie of movies"
          :key="movie.id"
          :movie="movie"
        />
      </b-carousel>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      cardAmount: 5,
      skeletonLoading: true
    };
  },
  computed: {
    movies() {
      return this.$store.state.movieList.popular;
    }
  },

  async fetch() {
    if (this.movies.length === 0) {
      await this.fetchPopular(this.cardAmount);
    }
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    ...mapActions({ fetchPopular: "movieList/fetchPopular" })
  }
};
</script>
