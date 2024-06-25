<template>
    <li class="grid grid-cols-3 lg:grid-cols-2">
        <div class="ps-3 py-4">
            <div class="font-semibold text-gray-900 dark:text-white">
                {{ label }}
            </div>
            <div v-if="age" class="text-gray-500 dark:text-gray-400 text-xs">(Age {{ age }})</div>
        </div>
        <div class="block lg:hidden py-4">
            <div v-if="price" class="font-semibold text-blue text-sm">
                {{ price }}
            </div>
        </div>
        <div class="pe-3 py-4">
            <div class="flex items-center">
                <button @click="decrement"
                    class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button">
                    <span class="sr-only">Quantity button -</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h16" />
                    </svg>
                </button>
                <div>
                    <input type="number" v-model.number="quantity" min="0"
                        class="bg-gray-50 w-9 lg:w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :placeholder="quantity" required />
                </div>
                <button @click="increment"
                    class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button">
                    <span class="sr-only">Quantity button +</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 1v16M1 9h16" />
                    </svg>
                </button>
            </div>
        </div>
    </li>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'QuantitySelector',
    props: {
        label: String,
        age: {
            type: Number,
            default: null,
        },
        price: {
            type: Text,
            default: null,
        },
    },
    setup() {
        const quantity = ref(0);

        const increment = () => {
            quantity.value++;
        };

        const decrement = () => {
            if (quantity.value > 0) {
                quantity.value--;
            }
        };

        return {
            quantity,
            increment,
            decrement,
        };
    },
};
</script>

<style scoped>
 
</style>