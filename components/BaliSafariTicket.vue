<template>
    <swiper :slidesPerView="1" :spaceBetween="10" :breakpoints="{
        '640': {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        '1024': {
            slidesPerView: 3.2,
            spaceBetween: 10,
        },
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(item, index) in balisafari" :key="index">
            <div class="hover-content relative">
                <div class="placetogo-port" data-cursor="pointer2" style="height: 100%;">
                    <img :src="item.images[0]?.path" class="filter brightness-50" alt="" style="height: 15rem;">
                    <div class="cover p-5">
                        <div class="detail text-white">
                            <h5 class="boldfont text-white text-xl mb-5">{{ item.name }}</h5>
                            <p class="content text-md line-clamp-3" style="font-size: 12px;" v-html="item.highlight"></p>
                        </div>
                    </div>
                    <div class="z-20 absolute bottom-[5%] left-[5%]">
                        <NuxtLink :to="`/ticket-detail/${item.vendor.slug}/${item.slug}`"
                            class="bg-white rounded-lg p-2 slide boldfont text-center">Book Ticket</NuxtLink>
                    </div>
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
        balisafari: {
            type: Array,
            required: true
        }
    }
};
</script>