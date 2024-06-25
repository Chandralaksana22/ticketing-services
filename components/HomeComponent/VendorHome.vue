<template>
    <div v-for="(vendor, index) in vendors" :key="index"
        :class="index % 4 === 0 || index % 4 === 3 ? 'col-span-12 lg:col-span-7' : 'col-span-12 lg:col-span-5'"
        class="feature-port">
        <NuxtLink :to="`/vendor/${vendor.slug}`" class="vendor-port h-[13rem] lg:h-[25rem] img-border">
            <img :src="vendor.images.length > 0 ? vendor.images[1].path : 'https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg'"
                :alt="vendor.name">
            <div class="cover">
                <div class="detail px-10 text-white">
                    <h3 class="text-2xl boldfont text-white mb-10">{{ vendor.name }}</h3>
                    <div class="text-lg line-clamp-3" v-html="vendor.short_desc"></div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        vendors: {
            type: Array,
            required: true
        }
    }
};
</script>