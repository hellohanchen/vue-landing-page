<template>
  <div class="myContainer">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.myContainer {
  padding: 0 112px;
  max-width: 1440px;
  margin: 0 auto;
  @media #{$media-max-tablet} {
    padding: 0 64px;
  }
  @media #{$media-phone-L} {
    padding: 0 16px;
  }
}
</style>