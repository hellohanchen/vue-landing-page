<template>
  <header class="the-banner">
    <Container>
      <div class="info__background">
        <div class="info__blur-background"></div>
        <div class="info__info">
          <h1>REDEFINE THE FANDOM</h1>
          <div style="height: 25%"></div>
          <p>With tokenization, the relationship between fans and franchises are re-shaped.</p>
        </div>
        <div class="the-banner__button">
          <BannerButton
              :title="button.title"
              :link="button.link"
              :alignment="button.alignment"
              transparent
          />
        </div>
      </div>
    </Container>
  </header>
</template>

<script setup>
import BannerButton from "./BannerButton.vue";
import Container from "../components/Container.vue";

const button = {
  title: "Launch App",
  link: "/app",
  alignment: "center",
};
</script>

<style lang="scss" scoped>
.the-banner {
  text-align: center;
  width: 100%;
  height: 600px;
  background: url("../../../vue-landing-page/public/images/background.png") center;
  background-size: cover;
  @media #{$media-min-tablet} {
    margin-top: 96px;
  }
  @media #{$media-phone-L} {
    margin-top: 64px;
  }
}

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

.info__blur-background {
  position: absolute;
  left: -5%;
  top: -10%;
  width: 110%;
  height: 120%;
  background-image: url("../../../vue-landing-page/public/images/background.png");
  background-position: center;
  background-size: cover;
  opacity: 0.25;
  filter: blur(20px);

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: "";
  }
}

.info__info {
  color: #ffffff;
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

.the-banner__button {
  position: relative;
}
</style>
