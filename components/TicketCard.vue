<template>
    <RouterLink to="/ticket-detail" class="grid grid-cols-3 gap-3 pt-5 items-start" style="border-bottom: 1px solid #9ca3af;">
        <div class="col-span-1">
            <img :src="imageSrc" :alt="imageAlt" class="rounded-2xl h-[130px] w-[130px] object-cover" />
        </div>
        <div class="col-span-2">
            <button class="bg-[#926000] rounded-lg p-2 font-bold text-white text-xs uppercase">{{ buttonText }}</button>
            <div class="grid grid-cols-2 mt-2 gap-1">
                <button class="bg-[#FFD600] rounded-lg px-2 py-1 text-black text-[10px] font-bold">{{ sellingTicketText
                    }}</button>
                <button class="bg-transparent text-blue text-[10px] font-bold">{{ bookedText }}</button>
            </div>
            <div class="my-5">
                <h2 class="text-xs text-gray-400 font-bold">{{ generalAdmissionText }}</h2>
                <h1 class="text-lg text-black font-bold">{{ title }}</h1>
                <p class="text-xs text-gray-600 line-through">{{ oldPrice }}</p>
                <p class="text-md text-[#EF681C] font-bold">
                    {{ newPrice }} <span class="text-sm text-black">/person</span>
                </p>
            </div>
        </div>
    </RouterLink>
</template>

<script>
export default {
    name: 'TicketCard',
    props: {
        imageSrc: {
            type: String,
            default: '',
        },
        imageAlt: {
            type: String,
            default: 'Image',
        },
        buttonText: {
            type: String,
            default: '',
        },
        sellingTicketText: {
            type: String,
            default: '',
        },
        bookedText: {
            type: String,
            default: '',
        },
        generalAdmissionText: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        oldPrice: {
            type: String,
            default: '',
        },
        newPrice: {
            type: String,
            default: '',
        },
    },
};
</script>

<style scoped></style>