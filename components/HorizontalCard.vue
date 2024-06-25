<template>
    <div class="hover-content relative" >
        <div class="placetogo-port" style="height: 100%;" data-cursor="pointer2">
            <img  :src="imageSrc"  class="filter brightness-50" alt="" style="height: 15rem">
            <div class="cover p-5">
                <div class="detail text-white">
                    <h5 class="boldfont text-white text-xl mb-5">{{ title }}</h5>
                    <p class="content text-md" style="font-size: 12px;">{{ description }}</p>
                </div>
            </div>
            <div class="z-20 absolute bottom-[5%] left-[5%]" >
                <NuxtLink :to="buttonLink" class="bg-white rounded-lg p-2 slide boldfont text-center">Book
                    Ticket</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            required: true
        },
        buttonLink: {
            type: String,
            default: ""
        },
        cursor: {
            type: String,
            default: "pointer2"
        }
    }
};
</script>

<style scoped></style>