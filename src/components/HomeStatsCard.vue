<template>
  <div class="stats-card">
    <div class="stats-card__info">
      <h2>
        {{ title }}
      </h2>
      <h3>
        {{ stats }}
      </h3>
    </div>
  </div>

</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  stats: Number | Boolean,
});
</script>

<style lang="scss" scoped>
.stats-card {
  display: flex;
  flex-direction: column;
  max-width: 25%;
  width: 100%;
  background-image: url("../assets/images/stats_background.jpg");
  background-position: center;
  background-size: cover;
  opacity: 0.9;

  &:hover {
    opacity: 1.0;
  }
}

.stats-card__info {
  color: #ffffff;
  font-size: 24px;
  line-height: 32px;
  position: relative;
  width: 100%;
  margin: auto auto 0;

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
</style>
