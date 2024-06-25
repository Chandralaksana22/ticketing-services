<template>
    <button id="button-modal-opening"
        class="flex flex-col lg:flex-row items-center text-center lg:text-left clock" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-[48px] lg:h-[65px]" viewBox="0 0 64 65" fill="none">
            <path
                d="M32 6.5C26.8577 6.5 21.8309 8.02487 17.5552 10.8818C13.2795 13.7387 9.94702 17.7994 7.97914 22.5502C6.01127 27.3011 5.49638 32.5288 6.49959 37.5723C7.50281 42.6159 9.97907 47.2486 13.6152 50.8848C17.2514 54.5209 21.8842 56.9972 26.9277 58.0004C31.9712 59.0036 37.1989 58.4887 41.9498 56.5209C46.7007 54.553 50.7613 51.2205 53.6182 46.9448C56.4751 42.6691 58 37.6423 58 32.5C57.9927 25.6066 55.2511 18.9976 50.3767 14.1233C45.5024 9.24889 38.8934 6.50728 32 6.5ZM46 34.5H32C31.4696 34.5 30.9609 34.2893 30.5858 33.9142C30.2107 33.5391 30 33.0304 30 32.5V18.5C30 17.9696 30.2107 17.4609 30.5858 17.0858C30.9609 16.7107 31.4696 16.5 32 16.5C32.5304 16.5 33.0392 16.7107 33.4142 17.0858C33.7893 17.4609 34 17.9696 34 18.5V30.5H46C46.5304 30.5 47.0392 30.7107 47.4142 31.0858C47.7893 31.4609 48 31.9696 48 32.5C48 33.0304 47.7893 33.5391 47.4142 33.9142C47.0392 34.2893 46.5304 34.5 46 34.5Z"
                fill="#BF9500" />
        </svg>
        <div>
            <p class="font-bold text-sm lg:text-lg">Opening Hour</p>
            <p class="text-sm hidden lg:block">Check all opening hour</p>
        </div>
    </button>

    <div id="openinghour-modal" data-modal-backdrop="openinghour" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
                        Opening Hour
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        id="closeButton-openinghour-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                    <div class="mb-4">
                        <ul class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-4"
                            id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li v-for="vendor in vendors" :key="vendor.id">
                                <button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
                                    :data-tabs-target="'#' + vendor.slug" type="button" role="tab"
                                    :aria-controls="vendor.slug" :aria-selected="false"
                                    @click="activateTab(vendor.slug)">
                                    {{ vendor.name }}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div v-for="vendor in vendors" :key="vendor.id" :id="vendor.slug"
                            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel"
                            :aria-labelledby="vendor.slug">
                            <div>
                                <div class="grid grid-cols-2 gap-2 w-full lg:w-3/4" v-for="schedule in vendor.schedule"
                                    :key="schedule.day">
                                    <p class="font-bold">{{ schedule.day }}</p>
                                    <p>{{ schedule.start_time.slice(11, 16) }} - {{ schedule.end_time.slice(11, 16)
                                        }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { Modal } from 'flowbite'
onMounted(() => {
    const $buttonElement = document.querySelector('#button-modal-opening');
    const $modalElement = document.querySelector('#openinghour-modal');
    const $closeButton = document.querySelector('#closeButton-openinghour-modal');
    const modalOptions = {
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40'
    }
    if ($modalElement) {
        const modal = new Modal($modalElement, modalOptions);
        $buttonElement.addEventListener('click', () => modal.toggle());
        $closeButton.addEventListener('click', () => modal.hide());
    }
})
const props = defineProps({
    vendors: {
        type: Array,
        required: true,
    },
})

const activeTab = ref(null)

const activateTab = (slug) => {
    activeTab.value = slug
}

const isActiveTab = (slug) => {
    return activeTab.value === slug
}

const formatTime = (time) => {
    return time
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>