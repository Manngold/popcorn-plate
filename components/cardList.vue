<template>
  <div class="container__card-slide">
    <div v-for="movie of movies" :key="movie.id">
      <Card :movie="movie" />
    </div>
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
}
</style>
