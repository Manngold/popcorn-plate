<template>
  <header class="container__header">
    <NuxtLink class="container__header--title" to="/">Popcorn Plate</NuxtLink>
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
@import "@/assets/scss/_variable";
.container {
  &__header {
    display: flex;
    align-content: center;
    padding-top: 1rem;
    text-decoration: none;
    &--title {
      font-size: 2.5rem;
      font-weight: 500;
      color: $white;
      text-decoration: none;
    }
  }
  &__image--logo {
    width: 2rem;
    height: 2rem;
  }
}
</style>
