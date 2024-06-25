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
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(item, index) in balisafarievent" :key="index">
            <NuxtLink :to="`/ticket-detail/${item.vendor.slug}/${item.slug}`">
                <div class="bg-white h-full overflow-hidden rounded-lg card-zoom-hover">
                    <div class="overflow-hidden">
                        <img :src="item.images[0]?.path" class="rounded-t-lg h-[35vh] w-full object-cover" alt="image">
                    </div>
                    <div class="p-5">
                        <h4 class="boldfont text-center text-lg text-blue">{{ item.name }}</h4>
                        <p class="text-sm text-center" style="font-size: 12px;" v-html="item.highlight"></p>
                    </div>
                </div>
            </NuxtLink>
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
        balisafarievent: {
            type: Array,
            required: true
        }
    }
};
</script>