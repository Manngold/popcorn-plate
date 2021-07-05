<template>
  <div class="container__card-slide" v-on:scroll.passive="infinityScroll">
    <Card v-for="movie of movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
export default {
  props: ["movies"],
  methods: {
    infinityScroll(event) {
      const {
        target: { scrollWidth, offsetWidth, scrollLeft }
      } = event;
      const pageWidth = scrollWidth - offsetWidth;
      if (pageWidth == scrollLeft) {
        console.log("end!");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container__card-slide {
  > div {
    display: inline-block;
  }
  overflow: auto;
  white-space: nowrap;
  margin-top: 2rem;
}
</style>
