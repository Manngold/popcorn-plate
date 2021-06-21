<template>
  <div class="container__card-slide">
    <Card v-for="movie of movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
export default {
  props: ["movies"]
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
