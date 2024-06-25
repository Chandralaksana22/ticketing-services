<template>
    <swiper :navigation="true" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(item, index) in explorer" :key="index">
            <div class="relative">
                <img :src="item.images.length > 0 ? item.images[0].path : 'https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg'"
                    :alt="item.name" class="h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]">
                <div class="px-5 absolute bottom-[5%] text-white">
                    <h1 class="boldfont text-yellow mb-3 text-xl">{{ item.name }}</h1>
                    <div class="mb-5 line-clamp-3" v-html="item.description"></div>
                    <a href="#" class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
                </div>
            </div>
        </swiper-slide>
    </swiper>
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
        explorer: {
            type: Array,
            required: true
        }
    }
};
</script>