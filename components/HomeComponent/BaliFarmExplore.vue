<template>
    <div class="relative">
        <swiper :navigation="true" :pagination="true" :loop="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(item, index) in balifarm" :key="index">
                <div class="relative">
                    <img :src="item.images.length > 0 ? item.images[0].path : 'https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg'"
                        :alt="item.name" class="h-[100vh] w-full object-cover filter brightness-50">
                </div>
            </swiper-slide>
        </swiper>
        <div class="absolute z-50 top-[6rem] left-1/2 -translate-x-1/2 text-center w-full text-white">
            <h1 class="boldfont text-3xl">PLAY WITH ALPACA AT BALI FARM HOUSE</h1>
        </div>
        <div class="absolute z-50 bottom-[6rem] left-1/2 -translate-x-1/2 text-center w-full text-white">
            <NuxtLink v-if="balifarm.length > 0" :to="`/ticket-detail/${balifarm[0].vendor.slug}`"
                class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</NuxtLink>
        </div>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination],
        };
    },
    props: {
        balifarm: {
            type: Array,
            required: true
        }
    }
};
</script>