<script>
import {computed, ref} from 'vue';
import {useRoute} from "vue-router";

export default {
    setup() {
        let mobileNav = ref(false);

        let toggleMobileNav = () => {
            mobileNav.value = !mobileNav.value
        }

        const route = useRoute()
        const path = computed(() => route.path)

        return {
            toggleMobileNav,
            mobileNav,
            currentRouteName: path, // Access the current route name
        }
    }
}
</script>

<template>
    <!-- Navbar Start -->
    <div class="container mx-auto px-5">
        <header class="flex justify-between py-4 items-center">
            <div>
                <a href="/"><img src="/images/logo_goat_black.svg" alt="Site Logo"></a>
            </div>

            <nav class="flex justify-end flex-col md:flex-row">
                <!-- Desktop Menu -->
                <ul v-if="currentRouteName!=='/app' && currentRouteName!=='/app/'"
                    class="space-x-10 font-theme-heading font-medium items-center hidden md:flex  flex-col space-y-7 md:space-y-0 md:flex-row">
                    <li class="uppercase hover:text-gray-400 transition duration-200">
                        <a href="#approaches" v-smooth-scroll>Approach</a>
                    </li>
                    <li class="uppercase hover:text-gray-400 transition duration-200">
                        <a href="#stats" v-smooth-scroll>Stats</a>
                    </li>
                    <li class="uppercase hover:text-gray-400 transition duration-200">
                        <a href="#footer" v-smooth-scroll>Contact</a>
                    </li>
                    <router-link to="/app"
                                 class="uppercase bg-black px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-black hover:text-black cursor-pointer transition duration-200">
                        App
                    </router-link>
                </ul>
                <ul v-if="currentRouteName==='/app' || currentRouteName==='/app/'">
                    <w3m-button size="sm"/>
                </ul>
            </nav>
        </header>

        <!-- Mobile Menu Start-->
        <div v-show="mobileNav">
            <div
                class="absolute px-5 py-12 block z-30 top-0 left-0 w-full h-full bg-black">
                <div class="flex justify-between items-center">
                    <img src="/images/logo_goat_white.svg" alt="Logo" class="h-24">
                    <button @click="toggleMobileNav()" type="button" class="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                             class="bi bi-x text-white" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
                <ul v-if="currentRouteName!=='/app' && currentRouteName!=='/app/'"
                    class="uppercase text-white text-md tracking-widest items-center flex flex-col mt-14">
                    <!-- <li class="hover:text-theme-secondary transition duration-200 py-4 border-t border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="#features">Features</a>
                    </li>
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="#faq">FAQ</a>
                    </li>
                    <li class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center">
                        <a  @click="toggleMobileNav()" href="#subscribe">Subscribe</a>
                    </li> -->
                    <router-link to="/app"
                                 class="uppercase bg-black px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-black hover:text-black cursor-pointer transition duration-200">
                        App
                    </router-link>
                </ul>
                <div class="flex justify-center items-center mt-8">
                    <ul v-if="currentRouteName==='/app' || currentRouteName==='/app/'">
                        <w3m-button size="sm"/>
                    </ul>
                </div>
                <div class="flex justify-center items-end h-16">
                    <ul class="flex space-x-8 items-center h-full">
                        <li>
                            <a href="https://discord.gg/vzjUTBMwfW">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                     class="bi bi-discord text-white hover:text-gray-400 transition duration-200 cursor-pointer"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/goatwithus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                     class="bi bi-twitter text-white hover:text-gray-400 transition duration-200 cursor-pointer"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Mobile Menu End-->
    </div>
    <!-- Navbar End -->
</template>