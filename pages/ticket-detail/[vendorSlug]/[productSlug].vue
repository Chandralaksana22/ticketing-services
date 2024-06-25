<template>
  <div
    class="bg-center bg-cover h-[100] bg-no-repeat bg-[url('{{}}')] bg-gray-600 bg-blend-multiply lg:bg-[url('../assets/image/hero-ticket.png')]">
    <div class="h-[25vh] lg:h-[50vh] px-5 lg:px-10 flex items-center">
      <h1
        class="mb-4 boldfont text-lg text-center mx-auto tracking-tight leading-none text-white lg:text-yellow-300 md:text-xl lg:text-4xl">
        <span class="boldfont hidden lg:contents text-white">Ticket > </span> Ticket Details
      </h1>
    </div>
  </div>
  <div class="bg-white">
    <div class="container mx-auto px-5 lg:px-20">
      <div class="my-10">
        <h1 class="boldfont text-lg lg:text-2xl">{{ productDetail.name }}</h1>
        <a href="" class="text-blue">One price available</a>
      </div>
      <div class="grid lg:grid-cols-3 gap-4">
        <div class="col-span-2">
          <img v-if="productDetail.images[0]" :src="productDetail.images[0].path"
            class="rounded-lg h-[25vh] lg:h-[52vh] w-full object-cover" :alt="`Image ${productDetail.images[0].id}`" />
        </div>
        <div class="col-span-1">
          <img v-if="productDetail.images[0]" :src="productDetail.images[0].path"
            class="hidden lg:block rounded-lg h-[25vh] mb-[2vh] w-full object-cover"
            :alt="`Image ${productDetail.images[0].id}`" />
          <img v-if="productDetail.images[0]" :src="productDetail.images[0].path"
            class="hidden lg:block rounded-lg h-[25vh] w-full object-cover"
            :alt="`Image ${productDetail.images[0].id}`" />
        </div>
      </div>
      <div class="grid lg:grid-cols-3 py-10 gap-8">
        <div class="col-span-2">
          <div v-html="productDetail.description"></div>
          <h1 class="boldfont my-5">About This Ticket</h1>
          <DetailTicketAboutTicket />
          <div class="hidden lg:block">
            <h1 class="boldfont my-5">Ticket Availability Check</h1>
            <div class="p-5 border-2 border-sky-500 rounded-xl">

              <form @submit.prevent="submitForm">
                <div class="grid grid-cols-3 gap-4">
                  <button id="dropdownButton" data-dropdown-toggle="dropdown"
                    class="text-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex items-center justify-between"
                    type="button">
                    <div class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path
                          d="M10.9921 15.305C11.9973 14.6358 12.7605 13.6609 13.1687 12.5244C13.577 11.3879 13.6087 10.1502 13.2591 8.99437C12.9095 7.8385 12.1973 6.82581 11.2276 6.10605C10.258 5.38629 9.0825 4.99768 7.87492 4.99768C6.66735 4.99768 5.49184 5.38629 4.52221 6.10605C3.55258 6.82581 2.84032 7.8385 2.49076 8.99437C2.1412 10.1502 2.17288 11.3879 2.58114 12.5244C2.9894 13.6609 3.75255 14.6358 4.75774 15.305C2.93945 15.9751 1.38659 17.2152 0.330862 18.8403C0.275377 18.9227 0.236837 19.0154 0.217482 19.1129C0.198127 19.2104 0.198344 19.3108 0.218119 19.4082C0.237895 19.5056 0.276835 19.5981 0.332676 19.6803C0.388516 19.7625 0.460144 19.8328 0.543396 19.8871C0.626647 19.9414 0.719861 19.9787 0.81762 19.9966C0.915378 20.0146 1.01573 20.0129 1.11285 19.9917C1.20996 19.9706 1.3019 19.9303 1.38332 19.8733C1.46473 19.8163 1.53401 19.7437 1.58711 19.6597C2.2681 18.6123 3.19995 17.7516 4.29802 17.1558C5.3961 16.5599 6.62562 16.2479 7.87492 16.2479C9.12423 16.2479 10.3538 16.5599 11.4518 17.1558C12.5499 17.7516 13.4817 18.6123 14.1627 19.6597C14.2727 19.8231 14.4427 19.9368 14.6358 19.976C14.8289 20.0152 15.0297 19.9768 15.1947 19.8692C15.3598 19.7615 15.4758 19.5932 15.5178 19.4007C15.5598 19.2082 15.5243 19.0068 15.419 18.8403C14.3633 17.2152 12.8104 15.9751 10.9921 15.305ZM3.74992 10.625C3.74992 9.80911 3.99185 9.01159 4.44511 8.33324C4.89837 7.65488 5.54261 7.12617 6.29636 6.81396C7.0501 6.50175 7.8795 6.42006 8.67967 6.57922C9.47984 6.73839 10.2148 7.13126 10.7917 7.70815C11.3686 8.28504 11.7615 9.02004 11.9207 9.82022C12.0798 10.6204 11.9981 11.4498 11.6859 12.2035C11.3737 12.9573 10.845 13.6015 10.1667 14.0548C9.4883 14.508 8.69077 14.75 7.87492 14.75C6.78129 14.7487 5.7328 14.3137 4.95948 13.5404C4.18616 12.7671 3.75117 11.7186 3.74992 10.625ZM23.4506 19.8781C23.284 19.9867 23.081 20.0247 22.8864 19.9838C22.6918 19.9428 22.5214 19.8262 22.4127 19.6597C21.7326 18.6116 20.8008 17.7506 19.7025 17.155C18.6042 16.5594 17.3743 16.2483 16.1249 16.25C15.926 16.25 15.7352 16.1709 15.5946 16.0303C15.4539 15.8896 15.3749 15.6989 15.3749 15.5C15.3749 15.3011 15.4539 15.1103 15.5946 14.9696C15.7352 14.829 15.926 14.75 16.1249 14.75C16.7324 14.7494 17.3322 14.6147 17.8816 14.3554C18.431 14.0961 18.9163 13.7187 19.3029 13.2501C19.6895 12.7815 19.9678 12.2334 20.118 11.6448C20.2682 11.0561 20.2865 10.4416 20.1716 9.8451C20.0568 9.24859 19.8116 8.6848 19.4536 8.19402C19.0956 7.70325 18.6337 7.2976 18.1007 7.00606C17.5678 6.71452 16.977 6.54429 16.3707 6.50752C15.7643 6.47076 15.1573 6.56838 14.5931 6.7934C14.501 6.83317 14.402 6.8541 14.3018 6.85495C14.2016 6.85579 14.1022 6.83654 14.0095 6.79833C13.9169 6.76012 13.8328 6.70373 13.7623 6.63248C13.6918 6.56123 13.6363 6.47658 13.5991 6.38352C13.5619 6.29046 13.5437 6.19088 13.5456 6.09067C13.5475 5.99046 13.5695 5.89165 13.6102 5.80007C13.651 5.7085 13.7097 5.62602 13.7828 5.55752C13.856 5.48901 13.9421 5.43586 14.0362 5.40121C15.3275 4.8862 16.7639 4.86767 18.0681 5.34919C19.3723 5.83071 20.452 6.77817 21.0989 8.00879C21.7458 9.23941 21.914 10.666 21.5711 12.0133C21.2283 13.3607 20.3986 14.5333 19.2421 15.305C21.0604 15.9751 22.6133 17.2152 23.669 18.8403C23.7776 19.0069 23.8156 19.2098 23.7747 19.4044C23.7337 19.599 23.6171 19.7694 23.4506 19.8781Z"
                          fill="#161616"></path>
                      </svg>
                      <span class="text-[#111827] ms-2">Add Person</span>
                    </div>
                    <svg class="w-2.5 h-2.5 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 10 6">
                      <path stroke="#111827" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  <div id="dropdownMenu"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-fit dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                      <li class="grid grid-cols-3 lg:grid-cols-2" v-for="(item, index) in persons" :key="index">
                        <div class="ps-3 py-4">
                          <div class="font-semibold text-gray-900 dark:text-white">{{ item.label }}</div>
                          <div class="text-gray-500 dark:text-gray-400 text-xs">{{ item.age }}</div>
                        </div>
                        <div class="pe-3 py-4">
                          <div class="flex items-center">
                            <button @click="decrease(index)"
                              class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button">
                              <span class="sr-only">Quantity button -</span>
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="M1 1h16" />
                              </svg>
                            </button>
                            <div>
                              <input v-model.number="item.value" type="number" min="0"
                                class="bg-gray-50 w-9 lg:w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required />
                            </div>
                            <button @click="increase(index)"
                              class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button">
                              <span class="sr-only">Quantity button +</span>
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <VueDatePicker class="inset-y-0 bg-gray-50 border border-gray-300 text-sm rounded-lg" v-model="date"
                    :enable-time-picker="false" />

                  <button type="submit"
                    class="text-white w-full p-2.5 text-sm rounded-lg bg-blue font-bold text-center">Check
                    Availability</button>
                </div>
              </form>
            </div>
          </div>
          <h1 class="boldfont my-5">Ticket Details</h1>
          <DetailTicketInformation :productDetail="productDetail" v-if="productDetail" />
          <div v-if="isLoading" class="loader">
            <DetailTicketLoader />
          </div>

          <!-- Hasil dari permintaan API -->
          <div v-if="apiResult">
            <div id="accordion-open" data-accordion="open">
              <h2 id="accordion-open-heading-1">
                <button type="button"
                  class="flex items-center bg-blue justify-between w-full p-5 font-medium rtl:text-right button-text-white border-sky-400 rounded-xl  gap-3"
                  data-accordion-target="#accordion-open-body-1" aria-expanded="true"
                  aria-controls="accordion-open-body-1">
                  {{ apiResult.length }} Ticket available
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-open-body-1" class="hidden" aria-labelledby="accordion-open-heading-1">
                <div v-for="item in apiResult" :key="item.id" class="border border-sky-400 mt-5 rounded-xl">
                  <div class="p-5">
                    <div id="accordion-sub-open" data-accordion="open">
                      <h2 :id="`accordion-sub-open-heading-${item.id}`">
                        <button type="button"
                          class="flex items-center bg-transparent justify-between w-full font-bold rtl:text-right button-text-blue"
                          :data-accordion-target="`#accordion-sub-open-body-${item.id}`" aria-expanded="true"
                          :aria-controls="`accordion-sub-open-body-${item.id}`">
                          {{ item.name || 'No Name Available' }}
                          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5 5 1 1 5" />
                          </svg>
                        </button>
                        <div class="grid grid-cols-3 my-3">
                          <div>
                            <p class="text-xs font-semibold text-gray-500">Date</p>
                            <p class="text-sm text-black font-semibold">{{ $dayjs(date).format('dddd DD MMMM YYYY') }}
                            </p>
                          </div>
                          <div>
                            <p class="text-xs font-semibold text-gray-500">Zoo Opening Hour</p>
                            <p class="text-sm text-black font-semibold">{{ item.start_time }} - {{ item.end_time }}</p>
                          </div>
                          <div>
                            <p class="text-xs font-semibold text-gray-500">Cancellation Policy</p>
                            <p class="text-sm text-black font-semibold">{{ item.cancellation }}</p>
                          </div>
                        </div>
                        <hr>
                      </h2>
                      <div :id="`accordion-sub-open-body-${item.id}`" class="block"
                        :aria-labelledby="`accordion-sub-open-heading-${item.id}`">
                        <div class="mt-5 grid grid-cols-3">
                          <div class="col-span-1">
                            <h1 class="text-xs font-semibold text-gray-500">Inclusion</h1>
                            <ul class="text-left text-black mt-3">
                              <li v-for="(inclusion, index) in item.inclusion" :key="index"
                                class="flex items-center space-x-3 mb-1 rtl:space-x-reverse text-sm font-semibold">
                                <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span>{{ inclusion.item }}</span>
                              </li>
                            </ul>
                          </div>
                          <div class="col-span-2">
                            <a :href="`/terms/${item.slug}`"
                              class="text-blue text-xs font-semibold underline underline-offset-4">See Terms &
                              Condition</a>
                            <h1 class="text-xs font-semibold text-gray-500 my-2">Price Breakdown</h1>
                            <div v-if="adultsCount > 0" class="flex justify-between">
                              <p class="text-sm font-semibold">Adult {{ adultsCount }} x IDR {{ item.adult_price }}</p>
                              <p class="text-md text-blue font-semibold">IDR {{ adultsCount * item.adult_price }}</p>
                            </div>
                            <div v-if="childrenCount > 0" class="flex justify-between">
                              <p class="text-sm font-semibold">Children {{ childrenCount }} x IDR {{ item.children_price
                                }}</p>
                              <p class="text-md text-blue font-semibold">IDR {{ childrenCount * item.children_price }}
                              </p>
                            </div>
                            <div v-if="infantsCount > 0" class="flex justify-between">
                              <p class="text-sm font-semibold">Infant {{ infantsCount }} x IDR {{ item.infant_price }}
                              </p>
                              <p class="text-md text-blue font-semibold">IDR {{ infantsCount * item.infant_price }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-sky-200 p-5 rounded-b-xl">
                    <div class="flex justify-between items-center">
                      <div>
                        <p class="text-xs font-bold text-black">Total Price</p>
                        <p class="text-blue text-md font-bold">IDR {{ ((adultsCount * item.adult_price) + (childrenCount
          * item.children_price) + (infantsCount * item.infant_price)) * ((100 -
            item.discount_percentage) / 100) }}</p>
                        <div class="flex gap-4">
                          <p class="text-xs line-through">IDR {{ (adultsCount * item.adult_price) + (childrenCount *
          item.children_price) + (infantsCount * item.infant_price) }}</p>
                          <p class="bg-yellow text-black text-xs font-bold me-2 px-2.5 py-0.5 rounded-full ">
                            {{ item.discount_percentage }}% Off
                          </p>
                        </div>
                      </div>
                      <button @click="toggleTicketSelection(item)"
                        :class="{ 'bg-red-500': item.selected, 'bg-blue': !item.selected }"
                        class="text-xs p-2 rounded-lg font-semibold text-white">
                        {{ item.selected ? 'Unselect' : 'Select Ticket' }}
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="!isLoading">
            <DetailTicketAlert />
          </div>
        </div>
        <div class="col-span-1">
          <div v-if="selectedTicket" class="hidden lg:block sticky top-28">
            <h1 class="font-bold text-xl text-blue mb-5">Ticket Summary</h1>
            <div class="block w-full p-6 bg-sky-100 border border-sky-500 rounded-2xl">
              <h1 class="mb-2 text-lg font-bold text-black">{{ selectedTicket.name }}</h1>
              <div class="my-5">
                <div class="flex gap-4 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21.2991 9.795C21.6379 9.72606 21.9425 9.54219 22.1613 9.27449C22.3802 9.00679 22.4998 8.6717 22.5 8.32594V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5H3C2.60218 4.5 2.22065 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V8.32594C1.50019 8.6717 1.61983 9.00679 1.83867 9.27449C2.05751 9.54219 2.36212 9.72606 2.70094 9.795C3.20757 9.90006 3.66251 10.1765 3.98912 10.5778C4.31573 10.9791 4.49406 11.4807 4.49406 11.9981C4.49406 12.5155 4.31573 13.0171 3.98912 13.4184C3.66251 13.8197 3.20757 14.0962 2.70094 14.2013C2.36148 14.2703 2.0564 14.4547 1.83748 14.7232C1.61857 14.9917 1.49933 15.3277 1.5 15.6741V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22065 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V15.6741C22.4998 15.3283 22.3802 14.9932 22.1613 14.7255C21.9425 14.4578 21.6379 14.2739 21.2991 14.205C20.7924 14.0999 20.3375 13.8235 20.0109 13.4222C19.6843 13.0209 19.5059 12.5193 19.5059 12.0019C19.5059 11.4845 19.6843 10.9829 20.0109 10.5816C20.3375 10.1803 20.7924 9.90381 21.2991 9.79875V9.795ZM3 15.675C3.84722 15.5024 4.60876 15.0424 5.15573 14.3728C5.70269 13.7031 6.00146 12.8651 6.00146 12.0005C6.00146 11.1359 5.70269 10.2978 5.15573 9.62819C4.60876 8.95857 3.84722 8.49852 3 8.32594V6H8.25V18H3V15.675ZM21 15.675V18H9.75V6H21V8.325C20.1528 8.49759 19.3912 8.95763 18.8443 9.62725C18.2973 10.2969 17.9985 11.1349 17.9985 11.9995C17.9985 12.8641 18.2973 13.7022 18.8443 14.3718C19.3912 15.0414 20.1528 15.5015 21 15.6741V15.675Z"
                      fill="#008AC6"></path>
                  </svg>
                  <p class="text-xs text-black">{{ selectedTicket.name }}</p>
                </div>
                <div class="flex gap-4 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19.5 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM6.75 4.5V5.25C6.75 5.44891 6.82902 5.63968 6.96967 5.78033C7.11032 5.92098 7.30109 6 7.5 6C7.69891 6 7.88968 5.92098 8.03033 5.78033C8.17098 5.63968 8.25 5.44891 8.25 5.25V4.5H15.75V5.25C15.75 5.44891 15.829 5.63968 15.9697 5.78033C16.1103 5.92098 16.3011 6 16.5 6C16.6989 6 16.8897 5.92098 17.0303 5.78033C17.171 5.63968 17.25 5.44891 17.25 5.25V4.5H19.5V7.5H4.5V4.5H6.75ZM19.5 19.5H4.5V9H19.5V19.5ZM15.9056 11.4694C15.9754 11.539 16.0307 11.6217 16.0684 11.7128C16.1062 11.8038 16.1256 11.9014 16.1256 12C16.1256 12.0986 16.1062 12.1962 16.0684 12.2872C16.0307 12.3783 15.9754 12.461 15.9056 12.5306L11.4056 17.0306C11.336 17.1004 11.2533 17.1557 11.1622 17.1934C11.0712 17.2312 10.9736 17.2506 10.875 17.2506C10.7764 17.2506 10.6788 17.2312 10.5878 17.1934C10.4967 17.1557 10.414 17.1004 10.3444 17.0306L8.09437 14.7806C7.95364 14.6399 7.87458 14.449 7.87458 14.25C7.87458 14.051 7.95364 13.8601 8.09437 13.7194C8.23511 13.5786 8.42598 13.4996 8.625 13.4996C8.82402 13.4996 9.01489 13.5786 9.15563 13.7194L10.875 15.4397L14.8444 11.4694C14.914 11.3996 14.9967 11.3443 15.0878 11.3066C15.1788 11.2688 15.2764 11.2494 15.375 11.2494C15.4736 11.2494 15.5712 11.2688 15.6622 11.3066C15.7533 11.3443 15.836 11.3996 15.9056 11.4694Z"
                      fill="#008AC6"></path>
                  </svg>
                  <p class="text-xs text-black">{{ $dayjs(date).format('dddd, MMMM DD, YYYY') }}</p>
                </div>
                <div class="flex gap-4 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none">
                    <path
                      d="M10.9921 14.805C11.9973 14.1358 12.7605 13.1609 13.1687 12.0244C13.577 10.888 13.6087 9.6503 13.2591 8.49443C12.9095 7.33856 12.1973 6.32587 11.2276 5.60611C10.258 4.88635 9.0825 4.49774 7.87492 4.49774C6.66735 4.49774 5.49184 4.88635 4.52221 5.60611C3.55258 6.32587 2.84032 7.33856 2.49076 8.49443C2.1412 9.6503 2.17288 10.888 2.58114 12.0244C2.9894 13.1609 3.75255 14.1358 4.75774 14.805C2.93945 15.4752 1.38659 16.7153 0.330862 18.3403C0.275377 18.4228 0.236837 18.5155 0.217482 18.613C0.198127 18.7105 0.198344 18.8108 0.218119 18.9082C0.237895 19.0056 0.276835 19.0981 0.332676 19.1804C0.388516 19.2626 0.460144 19.3329 0.543396 19.3872C0.626647 19.4415 0.719861 19.4787 0.81762 19.4967C0.915378 19.5146 1.01573 19.513 1.11285 19.4918C1.20996 19.4706 1.3019 19.4304 1.38332 19.3734C1.46473 19.3164 1.53401 19.2437 1.58711 19.1597C2.2681 18.1123 3.19995 17.2516 4.29802 16.6558C5.3961 16.06 6.62562 15.7479 7.87492 15.7479C9.12423 15.7479 10.3538 16.06 11.4518 16.6558C12.5499 17.2516 13.4817 18.1123 14.1627 19.1597C14.2727 19.3232 14.4427 19.4368 14.6358 19.476C14.8289 19.5152 15.0297 19.4769 15.1947 19.3692C15.3598 19.2616 15.4758 19.0933 15.5178 18.9008C15.5598 18.7082 15.5243 18.5069 15.419 18.3403C14.3633 16.7153 12.8104 15.4752 10.9921 14.805ZM3.74992 10.125C3.74992 9.30918 3.99185 8.51165 4.44511 7.8333C4.89837 7.15494 5.54261 6.62623 6.29636 6.31402C7.0501 6.00181 7.8795 5.92012 8.67967 6.07929C9.47984 6.23845 10.2148 6.63132 10.7917 7.20821C11.3686 7.7851 11.7615 8.5201 11.9207 9.32028C12.0798 10.1204 11.9981 10.9498 11.6859 11.7036C11.3737 12.4573 10.845 13.1016 10.1667 13.5548C9.4883 14.0081 8.69077 14.25 7.87492 14.25C6.78129 14.2488 5.7328 13.8138 4.95948 13.0405C4.18616 12.2672 3.75117 11.2187 3.74992 10.125ZM23.4506 19.3781C23.284 19.4868 23.081 19.5248 22.8864 19.4838C22.6918 19.4429 22.5214 19.3263 22.4127 19.1597C21.7326 18.1117 20.8008 17.2506 19.7025 16.6551C18.6042 16.0595 17.3743 15.7484 16.1249 15.75C15.926 15.75 15.7352 15.671 15.5946 15.5304C15.4539 15.3897 15.3749 15.1989 15.3749 15C15.3749 14.8011 15.4539 14.6103 15.5946 14.4697C15.7352 14.329 15.926 14.25 16.1249 14.25C16.7324 14.2495 17.3322 14.1147 17.8816 13.8554C18.431 13.5962 18.9163 13.2188 19.3029 12.7502C19.6895 12.2816 19.9678 11.7334 20.118 11.1448C20.2682 10.5562 20.2865 9.94168 20.1716 9.34516C20.0568 8.74865 19.8116 8.18486 19.4536 7.69408C19.0956 7.20331 18.6337 6.79766 18.1007 6.50612C17.5678 6.21458 16.977 6.04435 16.3707 6.00759C15.7643 5.97082 15.1573 6.06844 14.5931 6.29346C14.501 6.33323 14.402 6.35416 14.3018 6.35501C14.2016 6.35585 14.1022 6.3366 14.0095 6.29839C13.9169 6.26018 13.8328 6.20379 13.7623 6.13254C13.6918 6.06129 13.6363 5.97664 13.5991 5.88358C13.5619 5.79052 13.5437 5.69094 13.5456 5.59073C13.5475 5.49052 13.5695 5.39171 13.6102 5.30014C13.651 5.20856 13.7097 5.12609 13.7828 5.05758C13.856 4.98907 13.9421 4.93592 14.0362 4.90127C15.3275 4.38626 16.7639 4.36773 18.0681 4.84925C19.3723 5.33077 20.452 6.27823 21.0989 7.50885C21.7458 8.73947 21.914 10.1661 21.5711 11.5134C21.2283 12.8607 20.3986 14.0333 19.2421 14.805C21.0604 15.4752 22.6133 16.7153 23.669 18.3403C23.7776 18.5069 23.8156 18.7099 23.7747 18.9045C23.7337 19.0991 23.6171 19.2695 23.4506 19.3781Z"
                      fill="#008AC6"></path>
                  </svg>
                  <p class="text-xs text-black">{{ adultsCount }} Adults, {{ childrenCount }} Children, {{
          infantsCount }} Infants</p>
                </div>
                <div class="flex gap-4 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12.7506 7.49997V11.5753L16.1368 13.6068C16.3074 13.7093 16.4303 13.8753 16.4784 14.0683C16.5266 14.2614 16.4961 14.4657 16.3937 14.6362C16.2912 14.8068 16.1252 14.9297 15.9322 14.9779C15.7392 15.026 15.5349 14.9955 15.3643 14.8931L11.6143 12.6431C11.5033 12.5764 11.4115 12.4821 11.3477 12.3694C11.284 12.2567 11.2505 12.1295 11.2506 12V7.49997C11.2506 7.30106 11.3296 7.11029 11.4702 6.96964C11.6109 6.82899 11.8016 6.74997 12.0006 6.74997C12.1995 6.74997 12.3902 6.82899 12.5309 6.96964C12.6715 7.11029 12.7506 7.30106 12.7506 7.49997ZM21.0006 5.24997C20.8016 5.24997 20.6109 5.32899 20.4702 5.46964C20.3296 5.61029 20.2506 5.80106 20.2506 5.99997V7.68747C19.6552 6.99747 19.0477 6.33278 18.3643 5.64091C17.1135 4.39001 15.5219 3.53543 13.7882 3.18396C12.0545 2.83249 10.2557 2.99971 8.61655 3.66472C6.97737 4.32974 5.5705 5.46306 4.57175 6.92307C3.573 8.38309 3.02664 10.1051 3.00095 11.8738C2.97526 13.6426 3.47137 15.3797 4.42731 16.8681C5.38324 18.3565 6.75659 19.5302 8.37577 20.2425C9.99494 20.9549 11.7881 21.1743 13.5313 20.8733C15.2744 20.5723 16.8902 19.7643 18.1768 18.5503C18.2485 18.4826 18.3061 18.4014 18.3464 18.3114C18.3866 18.2215 18.4088 18.1244 18.4116 18.0259C18.4144 17.9273 18.3977 17.8292 18.3626 17.7371C18.3275 17.645 18.2745 17.5607 18.2068 17.489C18.1391 17.4174 18.0579 17.3598 17.968 17.3195C17.878 17.2792 17.7809 17.257 17.6824 17.2542C17.5839 17.2515 17.4857 17.2681 17.3936 17.3032C17.3015 17.3384 17.2172 17.3913 17.1456 17.459C16.0731 18.4697 14.7267 19.1421 13.2744 19.3921C11.8221 19.6422 10.3283 19.4589 8.97957 18.865C7.63085 18.2712 6.48695 17.2932 5.69073 16.0532C4.89451 14.8131 4.48124 13.366 4.50254 11.8925C4.52384 10.419 4.97877 8.98439 5.8105 7.76789C6.64224 6.55138 7.81393 5.60685 9.17925 5.05226C10.5446 4.49767 12.043 4.3576 13.4875 4.64952C14.9319 4.94145 16.2584 5.65245 17.3012 6.69372C18.0643 7.46622 18.7327 8.2106 19.4068 8.99997H17.2506C17.0516 8.99997 16.8609 9.07899 16.7202 9.21964C16.5796 9.36029 16.5006 9.55106 16.5006 9.74997C16.5006 9.94888 16.5796 10.1396 16.7202 10.2803C16.8609 10.421 17.0516 10.5 17.2506 10.5H21.0006C21.1995 10.5 21.3902 10.421 21.5309 10.2803C21.6715 10.1396 21.7506 9.94888 21.7506 9.74997V5.99997C21.7506 5.80106 21.6715 5.61029 21.5309 5.46964C21.3902 5.32899 21.1995 5.24997 21.0006 5.24997Z"
                      fill="#008AC6"></path>
                  </svg>
                  <p class="text-xs text-black">Cancel up to 24 hours in advance for a full refund </p>
                </div>
              </div>
              <hr class="my-2 border-sky-400">
              <div class="flex justify-between items-center self-stretch">
                <h1 class="font-bold text-md">Total price</h1>
                <div>
                  <p class="line-through text-xs text-end">IDR {{ calculateTotalPrice(selectedTicket) }}</p>
                  <p class="text-blue font-bold text-lg">IDR {{ calculateDiscountedPrice(selectedTicket) }}</p>
                </div>
              </div>
              <form @submit.prevent="handleSubmit">
                <input type="hidden" name="id" :value="selectedTicket.id">
                <input type="hidden" name="name" :value="selectedTicket.name">
                <input type="hidden" name="slug" :value="selectedTicket.slug">
                <input type="hidden" name="adults" :value="adultsCount">
                <input type="hidden" name="children" :value="childrenCount">
                <input type="hidden" name="infants" :value="infantsCount">
                <input type="hidden" name="date" :value="date">
                <input type="hidden" name="price" :value="calculateDiscountedPrice(selectedTicket)">
                <button type="submit"
                  class="text-white w-full mt-5 p-2.5 text-sm rounded-lg bg-blue font-bold text-center">Book
                  Ticket</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useTicketStore } from '~/stores/ticket';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import 'flowbite';
import { getProductDetail, getTicketInformation } from '~/utils/api';
import { onMounted } from 'vue'
import { Dropdown } from 'flowbite'
const selectedTicket = ref(null);
const date = ref(new Date());
const router = useRouter();
const route = useRoute();
const persons = ref([
  { label: 'Adult', age: '(Age 12+)', value: 0 },
  { label: 'Children', age: '(Age 2-12)', value: 0 },
  { label: 'Infant', age: '(Below 2)', value: 0 },
]);
const selectTicket = (ticket) => {
  selectedTicket.value = ticket;
  console.log(`Selected ticket: ${ticket.name}`);
};
const toggleTicketSelection = (ticket) => {
  apiResult.value.forEach(item => {
    if (item !== ticket) {
      item.selected = false;
    }
  });

  ticket.selected = !ticket.selected;
  if (ticket.selected) {
    selectedTicket.value = ticket;
  } else {
    selectedTicket.value = null;
  }
};

const calculateTotalPrice = (ticket) => {
  const totalPrice = (ticket.adult_price * adultsCount.value) + (ticket.children_price * childrenCount.value) + (ticket.infant_price * infantsCount.value);
  return totalPrice;
};

const calculateDiscountedPrice = (ticket) => {
  const total = calculateTotalPrice(ticket);
  const discountedPrice = total * ((100 - ticket.discount_percentage) / 100);
  return discountedPrice;
};

const increase = (index) => {
  persons.value[index].value++;
};

const decrease = (index) => {
  if (persons.value[index].value > 0) {
    persons.value[index].value--;
  }
};
const { vendorSlug, productSlug } = route.params;

const productDetail = ref(null);
const apiResult = ref(null);
const adults = ref(1);
const children = ref(1);
const infants = ref(1);
const isLoading = ref(false);
const adultsCount = computed(() => persons.value[0].value);
const childrenCount = computed(() => persons.value[1].value);
const infantsCount = computed(() => persons.value[2].value);

const { data, pending, error } = await useAsyncData(() => getProductDetail(vendorSlug, productSlug));

if (data.value) {
  productDetail.value = data.value;
}
const submitForm = async () => {
  try {
    isLoading.value = true;
    apiResult.value = await getTicketInformation(
      vendorSlug,
      productSlug,
      adultsCount.value,
      childrenCount.value,
      infantsCount.value,
      date.value
    );
    await nextTick();
    new Accordion(document.getElementById('accordion-open'));

  } catch (error) {
    console.error('Failed to fetch ticket information:', error);
  } finally {
    isLoading.value = false;
  }
};

watch(apiResult, (newValue) => {
  if (newValue) {
    import('flowbite').then((module) => {
      const { initAccordions } = module;
      initAccordions();
    });
  }
});
const handleSubmit = () => {
  const ticketStore = useTicketStore();

  ticketStore.setSelectedTicket(selectedTicket.value);
  ticketStore.setAdultsCount(adultsCount.value);
  ticketStore.setChildrenCount(childrenCount.value);
  ticketStore.setInfantsCount(infantsCount.value);
  ticketStore.setSelectedDate(date.value);

  router.push({ name: 'confirmation' });
};

onMounted(() => {
  const $targetEl = document.getElementById('dropdownMenu');
  const $triggerEl = document.getElementById('dropdownButton');

  const options = {
    placement: 'bottom',
    offsetSkidding: 0,
    offsetDistance: 10,
  };

  if ($targetEl && $triggerEl) {
    const dropdown = new Dropdown($targetEl, $triggerEl, options);
    dropdown.show();
  }
});

</script>

<style scoped>
.dp__theme_light {
  --dp-background-color: transparent;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-disabled-color: #6bacea;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: transparent;
  --dp-menu-border-color: transparent;
  --dp-border-color-hover: transparent;
  --dp-border-color-focus: transparent;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: black;
  --dp-danger-color: #ff6f60;
  --dp-marker-color: #ff6f60;
  --dp-tooltip-color: #fafafa;
  --dp-disabled-color-text: #8e8e8e;
  --dp-highlight-color: rgb(25 118 210 / 10%);
  --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
  --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}
</style>