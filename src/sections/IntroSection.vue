<script setup>

import introductions from '../data/introductions.js';
import {ref} from 'vue';

let isOpen = ref(1);

</script>

<template>
  <!-- Features Section Start -->
  <div id="approaches" class="container mx-auto px-5">
    <section class="py-8">
      <div class="w-4/5 md:w-3/5 mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-black text-center">Global Organization Asset Tokenization</h2>
        <p class="text-gray-700 text-left mt-7 font-theme-content text-xl">
          Project GOAT aims to be the first digital platform that allows sports fans to own shares of their beloved
          franchises. Leveraging tokenization technology, Project GOAT provided self-custodial, transparent,
          exchangeable proof of
          ownership to fans, giving them the benefit of valuation growth and other perks.
        </p>
      </div>

      <div class="mt-10">
        <ul class="flex flex-col items-center md:flex-row justify-center font-theme-heading">
          <li v-for="intro in introductions" :key="intro.id"
              :class="isOpen === intro.id ? 'md:border-b-4 md:border-black' : ''"
              class="w-full md:w-56 cursor-pointer hover:text-black hover:font-bold transition duration-200 border-b-2 border-t-2 md:border-t-0 flex justify-center">
            <a @click.prevent="isOpen = intro.id" href="#" :class="isOpen === intro.id ? ' border-black' : ''"
               class="py-5 md:border-b-0 border-b-4">{{ intro.name }}</a>
          </li>
        </ul>
      </div>

      <div class="mt-8 w-4/5 md:w-3/5 mx-auto">
        <!-- Tab Content -->
        <template v-for="feature in introductions" :key="feature.id">
          <div v-show="isOpen === feature.id" class="grid gap-32 items-center">
            <div>
              <h3 class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left text-black">
                {{ feature.details.title }}</h3>
              <div class="mt-7 font-theme-content text-xl text-gray-700 text-center lg:text-left whitespace-pre-wrap" v-html="feature.details.description"/>
              <ul class="flex space-x-8 items-center h-full">
                <template v-for="button in feature.details.buttons" :key="button.id">
                  <li>
                    <div class="flex justify-center lg:justify-start mt-7">
                      <a :href="button.link" target="_blank"
                         class="bg-black hover:bg-white text-white hover:text-black hover:border-black font-theme-heading font-medium px-6 py-2 rounded shadow-md border-2 border-transparent cursor-pointer transition duration-200">
                        {{ button.caption }}
                      </a>
                    </div>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </template>
        <!-- Tab Content -->
      </div>
    </section>
  </div>
  <!-- Features Section End -->
</template>
