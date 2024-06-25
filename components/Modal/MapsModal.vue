<template>
    <button data-modal-target="map-modal" data-modal-toggle="map-modal"
        class="flex flex-col lg:flex-row items-center text-center lg:text-left map">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-[48px] lg:h-[65px]" viewBox="0 0 64 65" fill="none">
            <path
                d="M57.23 12.9225C56.9904 12.7359 56.7115 12.6062 56.4143 12.5434C56.1172 12.4806 55.8096 12.4863 55.515 12.56L40.2325 16.38L24.895 8.71003C24.4677 8.49688 23.9782 8.44368 23.515 8.56004L7.515 12.56C7.08232 12.6682 6.69821 12.9179 6.42371 13.2694C6.1492 13.6209 6.00007 14.054 6 14.5V50.5C6.00005 50.8039 6.06935 51.1038 6.20264 51.3769C6.33594 51.6501 6.52972 51.8892 6.76927 52.0762C7.00882 52.2632 7.28783 52.3932 7.58512 52.4562C7.88242 52.5193 8.19017 52.5137 8.485 52.44L23.7675 48.62L39.105 56.29C39.3834 56.4273 39.6896 56.4991 40 56.5C40.1635 56.4999 40.3264 56.4798 40.485 56.44L56.485 52.44C56.9177 52.3319 57.3018 52.0822 57.5763 51.7307C57.8508 51.3792 57.9999 50.946 58 50.5V14.5C58.0001 14.1958 57.9307 13.8957 57.7973 13.6223C57.6639 13.3489 57.4699 13.1096 57.23 12.9225ZM24 44.5C23.8365 44.5001 23.6736 44.5203 23.515 44.56L10 47.9375V16.0625L23.7675 12.62L24 12.735V44.5ZM54 48.9375L40.2325 52.38L40 52.265V20.5C40.1634 20.5008 40.3263 20.4814 40.485 20.4425L54 17.0625V48.9375Z"
                fill="#BF9500" />
        </svg>
        <div>
            <p class="font-bold text-sm lg:text-lg">Zoo Map</p>
            <p class="text-sm hidden lg:block">Access all zoo maps</p>
        </div>
    </button>
    <div id="map-modal" data-modal-backdrop="map" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[99] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full  max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
                        Zoo Maps
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="map-modal">
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
                            <li class="me-2" role="presentation">
                                <button class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
                                    id="balizooMap-tab" data-tabs-target="#balizooMap" type="button" role="tab"
                                    aria-controls="balizooMap" aria-selected="false">Bali Zoo</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliBirdParkGA-tab" data-tabs-target="#BaliBirdParkGA" type="button" role="tab"
                                    aria-controls="BaliBirdParkGA" aria-selected="false">Bali Bird Park</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliFarmHouseGA-tab" data-tabs-target="#BaliFarmHouseGA" type="button"
                                    role="tab" aria-controls="BaliFarmHouseGA" aria-selected="false">Bali Farm
                                    House</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button
                                    class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="BaliSafariGA-tab" data-tabs-target="#BaliSafariGA" type="button" role="tab"
                                    aria-controls="BaliSafariGA" aria-selected="false">Bali Safari</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="balizooMap" role="tabpanel"
                            aria-labelledby="balizooMap-tab">
                            <div class="mx-auto text-center">
                                <img class="rounded-t-lg mx-auto h-[25rem] object-contain"
                                    src="../../assets/image/maps.jpeg" alt="" />
                                <a href="" class="bg-yellow p-2 mt-5 text-black rounded-lg text-sm">Download zoo map</a>
                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliBirdParkGA"
                            role="tabpanel" aria-labelledby="BaliBirdParkGA-tab">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div>
                                    <a href="#">
                                        <img class="rounded-t-lg" src="../../assets/image/image-13.png" alt="" />
                                    </a>
                                    <div class="p-2 text-center">
                                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
                                            Bali Zoo General Admission Ticket</h5>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliFarmHouseGA"
                            role="tabpanel" aria-labelledby="BaliFarmHouseGA-tab">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div>
                                    <a href="#">
                                        <img class="rounded-t-lg" src="../../assets/image/image-13.png" alt="" />
                                    </a>
                                    <div class="p-2 text-center">
                                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
                                            Bali Zoo General Admission Ticket</h5>
                                        <a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See
                                            Details</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="BaliSafariGA" role="tabpanel"
                            aria-labelledby="BaliSafariGA-tab">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                                <div>
                                    <a href="#">
                                        <img class="rounded-t-lg" src="../../assets/image/image-13.png" alt="" />
                                    </a>
                                    <div class="p-2 text-center">
                                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">
                                            Bali Zoo General Admission Ticket</h5>
                                        <a href="" class="bg-yellow p-2 text-black rounded-lg text-sm">See
                                            Details</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>