<template>
  <header class="container__header">
    <h1>Popcorn Plate</h1>
    <img
      class="container__image--logo"
      src="@/assets/svg/popcorn.svg"
      alt="logo"
    />
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  &__header {
    display: flex;
    align-content: center;
    padding-top: 1rem;
  }
  &__image--logo {
    width: 2rem;
    height: 2rem;
  }
}
</style>
