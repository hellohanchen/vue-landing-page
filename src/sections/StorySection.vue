<script setup>
import stories from "../data/stories.js";
</script>

<template>
  <div id="story-section" class="container mx-auto px-5 md:w-4/5">
    <section class="py-8 pt-18">
      <div class="w-4/5 md:w-3/5 mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-black">READ OUR ARTICLES</h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div v-for="(story, index) in stories" :key="story.id" :class="'lg:mb-10'" class="shadow-lg rounded-lg">
          <div class="flex justify-center mt-12">
            <img :src="story.icon" alt="Story Cover" style="max-height: 150px; display: block; width: auto;"/>
          </div>
          <h3 class="text-2xl font-theme-heading font-medium text-center mt-6 text-black">{{ story.title }}</h3>
          <p class="text-md font-theme-content text-gray-700 text-center mt-3">{{ story.abstract }}</p>
          <div >
            <div class="my-7">
              <img class="w-full" src="/images/bg-dots.svg" alt="Dot Backaground" />
            </div>
            <div class="flex justify-center mb-8">
              <a :href="story.link" target="_blank"
                 class="bg-black hover:bg-white text-white hover:text-black hover:border-black font-theme-heading font-medium px-6 py-2 rounded shadow-md border-2 border-transparent cursor-pointer transition duration-200">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
