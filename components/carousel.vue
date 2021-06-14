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
        <div
          class="carousel-slide__container"
          v-for="movie of movies"
          :key="movie.id"
        >
          <CarouselSlide :movie="movie" />
        </div>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      cardAmount: 5,
      movies: [],
      skeletonLoading: true
    };
  },
  async fetch() {
    const response = await fetch(
      `${process.env.apiBaseUrl}/movie/popular?api_key=${process.env.apiKey}`
    ).then(res => res.json());
    const { results } = response;

    for (const movie of results) {
      if (this.movies.length === this.cardAmount) break;
      this.movies.push(movie);
    }
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
