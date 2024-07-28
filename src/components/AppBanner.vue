<template>
    <Container>
        <div class="info__info">
          <h1>CONNECT WALLET TO USE APP</h1>
        </div>
    </Container>
</template>

<script setup>
import Container from "../components/Container.vue";
</script>

<style lang="scss" scoped>
.info__background {
  top: 100px;
  height: 300px;
  overflow: hidden;
  position: relative;
  padding: 56px 0 0;
  background-color: $color-basic;

  @include create-box-shadow-blur();

  @media #{$media-min-tablet} {
    margin: -15% 2.5% 0 2.5%;
    height: auto;
    padding: 32px;
  }
}

.info__info {
  color: #000000;
  font-size: 24px;
  line-height: 32px;
  position: relative;
  height: 40%;
  width: 80%;
  margin: auto auto 24px;

  @media #{$media-min-tablet} {
    font-size: 16px;
    line-height: 24px;
    width: 345px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    width: auto;
    line-height: 20px;
  }
}

.info__info h1 {
  font-size: 40px;
  font-weight: bolder;
}
</style>
