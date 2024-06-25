<template>
    <nav class="px-2 sm:px-4 py-2.5 hidden md:block fixed w-full top-0 left-0 bg-transparent bg-gradient-to-b from-black to-transparent"
        :class="{ 'bg-black bg-opacity-45': isScrolled }" style="z-index: 99;">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NuxtLink class="flex items-center space-x-3 rtl:space-x-reverse" to="/">
                <img src="../assets/image/logo.png" class="h-16" />
            </NuxtLink>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button"
                    class="text-white border border-gray-300 boldfont bg-transparentfont-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-white hover:text-black">Enquire</button>
                <button data-collapse-toggle="navbar-cta" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    <li>
                        <NuxtLink class="block boldfont py-2 px-3 md:p-0 text-white rounded" to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                            class="flex items-center justify-between w-fullblock boldfont py-2 px-3 md:p-0 text-white rounded">Places
                            to go
                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white rounded-lg w-52">
                            <ul class="py-2 px-3 text-sm " aria-labelledby="dropdownLargeButton">
                                <!-- Dynamic links will go here -->
                                <li v-for="vendor in vendors" :key="vendor.slug">
                                    <a :href="`/vendor/${vendor.slug}`" class="block text-sm boldfont text-black">
                                        {{ vendor.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a class="block boldfont py-2 px-3 md:p-0 text-white rounded" href="/ticket">Tickets
                        </a>
                    </li>
                    <li>
                        <NuxtLink class="block boldfont py-2 px-3 md:p-0 text-white rounded" to="/contact">Contact
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Add your mobile navigation here -->
    <div class="block md:hidden fixed w-100 bottom-0 left-0 right-0 z-[99]">
        <div class="nav-bottom-bar flex justify-center items-center justify-between py-5 px-10">
            <NuxtLink to="/" class="flex flex-col items-center" v-slot="{ isActive }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M27.1838 13.155L17.1838 3.71748L17.1725 3.70748C16.8512 3.41322 16.4313 3.25 15.9956 3.25C15.56 3.25 15.1401 3.41322 14.8188 3.70748L14.8075 3.71748L4.80752 13.155C4.63064 13.3197 4.48979 13.5192 4.39384 13.741C4.29789 13.9628 4.24892 14.2021 4.25002 14.4437V26C4.25002 26.4641 4.43439 26.9092 4.76258 27.2374C5.09077 27.5656 5.53589 27.75 6.00002 27.75H12C12.4641 27.75 12.9093 27.5656 13.2375 27.2374C13.5656 26.9092 13.75 26.4641 13.75 26V20C13.75 19.9337 13.7764 19.8701 13.8232 19.8232C13.8701 19.7763 13.9337 19.75 14 19.75H18C18.0663 19.75 18.1299 19.7763 18.1768 19.8232C18.2237 19.8701 18.25 19.9337 18.25 20V26C18.25 26.4641 18.4344 26.9092 18.7626 27.2374C19.0908 27.5656 19.5359 27.75 20 27.75H26C26.4641 27.75 26.9093 27.5656 27.2375 27.2374C27.5656 26.9092 27.75 26.4641 27.75 26V14.4437C27.75 14.2014 27.6997 13.9618 27.6022 13.7399C27.5047 13.5181 27.3622 13.3189 27.1838 13.155ZM26.25 26C26.25 26.0663 26.2237 26.1299 26.1768 26.1768C26.1299 26.2236 26.0663 26.25 26 26.25H20C19.9337 26.25 19.8701 26.2236 19.8232 26.1768C19.7764 26.1299 19.75 26.0663 19.75 26V20C19.75 19.5359 19.5656 19.0907 19.2375 18.7625C18.9093 18.4344 18.4641 18.25 18 18.25H14C13.5359 18.25 13.0908 18.4344 12.7626 18.7625C12.4344 19.0907 12.25 19.5359 12.25 20V26C12.25 26.0663 12.2237 26.1299 12.1768 26.1768C12.1299 26.2236 12.0663 26.25 12 26.25H6.00002C5.93371 26.25 5.87013 26.2236 5.82324 26.1768C5.77636 26.1299 5.75002 26.0663 5.75002 26V14.4437C5.74994 14.4089 5.75713 14.3745 5.77112 14.3427C5.78511 14.3108 5.8056 14.2822 5.83127 14.2587L5.84252 14.2487L15.835 4.81373C15.8806 4.77399 15.939 4.7521 15.9994 4.7521C16.0598 4.7521 16.1182 4.77399 16.1638 4.81373L26.1575 14.25L26.1675 14.26C26.1934 14.2834 26.2141 14.3119 26.2283 14.3438C26.2426 14.3756 26.2499 14.4101 26.25 14.445V26Z"
                        :fill="isActive ? '#FFD600' : 'white'"></path>
                </svg>
                <p :class="[isActive ? 'text-yellow' : 'text-white', 'text-center', 'text-xs']">Home</p>
            </NuxtLink>
            <NuxtLink to="/placetogo" class="flex flex-col items-center" v-slot="{ isActive }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M16 8.25C15.0605 8.25 14.1422 8.52858 13.361 9.05052C12.5799 9.57246 11.9711 10.3143 11.6116 11.1823C11.2521 12.0502 11.158 13.0053 11.3413 13.9267C11.5245 14.8481 11.9769 15.6945 12.6412 16.3588C13.3055 17.0231 14.1519 17.4754 15.0733 17.6587C15.9947 17.842 16.9498 17.7479 17.8177 17.3884C18.6857 17.0289 19.4275 16.4201 19.9495 15.639C20.4714 14.8578 20.75 13.9395 20.75 13C20.75 11.7402 20.2496 10.532 19.3588 9.64124C18.468 8.75045 17.2598 8.25 16 8.25ZM16 16.25C15.3572 16.25 14.7289 16.0594 14.1944 15.7023C13.6599 15.3452 13.2434 14.8376 12.9974 14.2437C12.7514 13.6499 12.687 12.9964 12.8124 12.366C12.9378 11.7355 13.2474 11.1564 13.7019 10.7019C14.1564 10.2474 14.7355 9.93785 15.366 9.81245C15.9964 9.68705 16.6499 9.75141 17.2437 9.99739C17.8376 10.2434 18.3452 10.6599 18.7023 11.1944C19.0594 11.7289 19.25 12.3572 19.25 13C19.25 13.862 18.9076 14.6886 18.2981 15.2981C17.6886 15.9076 16.862 16.25 16 16.25ZM16 2.25C13.1499 2.25331 10.4176 3.38696 8.40226 5.40226C6.38696 7.41756 5.25331 10.1499 5.25 13C5.25 16.8637 7.0425 20.9675 10.4338 24.8675C11.9644 26.6364 13.6871 28.2295 15.57 29.6175C15.696 29.7057 15.8462 29.753 16 29.753C16.1538 29.753 16.304 29.7057 16.43 29.6175C18.3129 28.2295 20.0356 26.6364 21.5662 24.8675C24.9575 20.9675 26.75 16.8675 26.75 13C26.7467 10.1499 25.613 7.41756 23.5977 5.40226C21.5824 3.38696 18.8501 2.25331 16 2.25ZM16 28.0637C14.125 26.6162 6.75 20.4525 6.75 13C6.75 10.5467 7.72455 8.19397 9.45926 6.45926C11.194 4.72455 13.5467 3.75 16 3.75C18.4533 3.75 20.806 4.72455 22.5407 6.45926C24.2754 8.19397 25.25 10.5467 25.25 13C25.25 20.4525 17.875 26.6162 16 28.0637Z"
                        :fill="isActive ? '#FFD600' : 'white'"></path>
                </svg>
                <p :class="[isActive ? 'text-yellow' : 'text-white', 'text-center', 'text-xs']">Place To Go</p>
            </NuxtLink>
            <NuxtLink to="/ticket" class="flex flex-col items-center" v-slot="{ isActive }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M28.3487 12.815C28.744 12.7346 29.0994 12.5201 29.3548 12.2078C29.6101 11.8956 29.7497 11.5046 29.75 11.1012V8C29.75 7.53587 29.5656 7.09075 29.2374 6.76256C28.9092 6.43437 28.4641 6.25 28 6.25H4C3.53587 6.25 3.09075 6.43437 2.76256 6.76256C2.43437 7.09075 2.25 7.53587 2.25 8V11.1012C2.25026 11.5046 2.38988 11.8956 2.64522 12.2078C2.90056 12.5201 3.25595 12.7346 3.65125 12.815C4.38865 12.9617 5.05236 13.3596 5.52931 13.9408C6.00626 14.522 6.26694 15.2506 6.26694 16.0025C6.26694 16.7544 6.00626 17.483 5.52931 18.0642C5.05236 18.6454 4.38865 19.0433 3.65125 19.19C3.25679 19.2702 2.90205 19.484 2.6468 19.7952C2.39155 20.1065 2.25141 20.4962 2.25 20.8988V24C2.25 24.4641 2.43437 24.9092 2.76256 25.2374C3.09075 25.5656 3.53587 25.75 4 25.75H28C28.4641 25.75 28.9092 25.5656 29.2374 25.2374C29.5656 24.9092 29.75 24.4641 29.75 24V20.8988C29.7497 20.4954 29.6101 20.1044 29.3548 19.7922C29.0994 19.4799 28.744 19.2654 28.3487 19.185C27.6113 19.0383 26.9476 18.6404 26.4707 18.0592C25.9937 17.478 25.7331 16.7494 25.7331 15.9975C25.7331 15.2456 25.9937 14.517 26.4707 13.9358C26.9476 13.3546 27.6113 12.9567 28.3487 12.81V12.815ZM3.75 24V20.8988C3.75022 20.8415 3.77007 20.7861 3.80624 20.7417C3.84242 20.6973 3.89272 20.6667 3.94875 20.655C5.02252 20.437 5.9879 19.8544 6.68131 19.006C7.37472 18.1577 7.75351 17.0957 7.75351 16C7.75351 14.9043 7.37472 13.8423 6.68131 12.994C5.9879 12.1456 5.02252 11.563 3.94875 11.345C3.89166 11.3331 3.84055 11.3015 3.80425 11.2559C3.76795 11.2102 3.74876 11.1533 3.75 11.095V8C3.75 7.9337 3.77634 7.87011 3.82322 7.82322C3.87011 7.77634 3.9337 7.75 4 7.75H11.25V24.25H4C3.9337 24.25 3.87011 24.2237 3.82322 24.1768C3.77634 24.1299 3.75 24.0663 3.75 24ZM28.0513 20.655C28.1073 20.6667 28.1576 20.6973 28.1938 20.7417C28.2299 20.7861 28.2498 20.8415 28.25 20.8988V24C28.25 24.0663 28.2237 24.1299 28.1768 24.1768C28.1299 24.2237 28.0663 24.25 28 24.25H12.75V7.75H28C28.0663 7.75 28.1299 7.77634 28.1768 7.82322C28.2237 7.87011 28.25 7.9337 28.25 8V11.1012C28.2512 11.1596 28.232 11.2165 28.1957 11.2621C28.1595 11.3078 28.1083 11.3393 28.0513 11.3512C26.9775 11.5693 26.0121 12.1518 25.3187 13.0002C24.6253 13.8486 24.2465 14.9106 24.2465 16.0063C24.2465 17.1019 24.6253 18.1639 25.3187 19.0123C26.0121 19.8607 26.9775 20.4432 28.0513 20.6612V20.655Z"
                        :fill="isActive ? '#FFD600' : 'white'"></path>
                </svg>
                <p :class="[isActive ? 'text-yellow' : 'text-white', 'text-center', 'text-xs']">Tickets</p>
            </NuxtLink>
            <NuxtLink to="/contact" class="flex flex-col items-center" v-slot="{ isActive }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M27.6988 20.0376L21.7938 17.3913C21.5262 17.2767 21.2343 17.2306 20.9444 17.2572C20.6546 17.2838 20.3759 17.3824 20.1338 17.5438C20.1092 17.5596 20.0858 17.5771 20.0638 17.5963L16.9775 20.2213C16.9455 20.2388 16.9098 20.2485 16.8734 20.2498C16.837 20.2512 16.8007 20.244 16.7675 20.2288C14.7838 19.2713 12.7288 17.2288 11.7675 15.2726C11.7515 15.2399 11.7432 15.204 11.7432 15.1676C11.7432 15.1312 11.7515 15.0953 11.7675 15.0626L14.4013 11.9376C14.4202 11.9144 14.4377 11.8902 14.4538 11.8651C14.613 11.622 14.7092 11.343 14.7336 11.0534C14.7581 10.7638 14.71 10.4727 14.5938 10.2063L11.9663 4.31132C11.8171 3.96333 11.559 3.67312 11.2308 3.48425C10.9027 3.29538 10.5221 3.21803 10.1463 3.26382C8.5128 3.47857 7.01341 4.28074 5.92829 5.52045C4.84318 6.76015 4.24659 8.35255 4.25001 10.0001C4.25001 19.7876 12.2125 27.7501 22 27.7501C23.6475 27.7532 25.2397 27.1565 26.4794 26.0715C27.719 24.9864 28.5213 23.4872 28.7363 21.8538C28.782 21.4797 28.7057 21.1009 28.5187 20.7736C28.3318 20.4464 28.0442 20.1882 27.6988 20.0376ZM22 26.2501C13.04 26.2501 5.75001 18.9601 5.75001 10.0001C5.74584 8.71748 6.20877 7.47725 7.05232 6.51108C7.89587 5.54492 9.06233 4.91893 10.3338 4.75007H10.3625C10.4129 4.75101 10.4618 4.76715 10.5028 4.79637C10.5439 4.82559 10.5751 4.86653 10.5925 4.91382L13.23 10.8026C13.2451 10.8353 13.2528 10.8709 13.2528 10.9069C13.2528 10.943 13.2451 10.9786 13.23 11.0113L10.5913 14.1438C10.5716 14.1662 10.5536 14.19 10.5375 14.2151C10.3724 14.4671 10.2752 14.7576 10.2552 15.0583C10.2353 15.3589 10.2934 15.6597 10.4238 15.9313C11.5325 18.2013 13.82 20.4713 16.115 21.5801C16.3883 21.7098 16.6905 21.7664 16.9921 21.7445C17.2938 21.7226 17.5846 21.6229 17.8363 21.4551C17.86 21.4388 17.8838 21.4213 17.9063 21.4026L20.9913 18.7776C21.0217 18.7612 21.0554 18.7516 21.0899 18.7494C21.1244 18.7473 21.159 18.7526 21.1913 18.7651L27.0975 21.4113C27.1458 21.4319 27.1863 21.4671 27.2135 21.5119C27.2406 21.5568 27.253 21.6091 27.2488 21.6613C27.0808 22.9333 26.4554 24.1007 25.4894 24.9452C24.5235 25.7897 23.2831 26.2535 22 26.2501Z"
                        :fill="isActive ? '#FFD600' : 'white'"></path>
                </svg>
                <p :class="[isActive ? 'text-yellow' : 'text-white', 'text-center', 'text-xs']">Contact Us</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getVendors } from '~/utils/api';
import { useAsyncData } from '#app';

const vendors = ref([]);

const { data, pending, error } = await useAsyncData('vendors', getVendors);

if (data.value) {
    vendors.value = data.value;
}
const isScrolled = ref(false);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

</script>

<style>
nav {
    transition: background-color 0.3s ease;
}

.nav-bottom-bar {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.60);
    backdrop-filter: blur(5px);
}
</style>