<template>
    <div class="position rounded-lg overflow-hidden">
      <img class="filter brightness-50 rounded-lg h-[400px] w-full object-cover" :src="imageSrc" alt="">
      <div class="absolute top-[25%] left-1/2 -translate-x-1/2 text-center w-full px-4">
        <h5 class="boldfont text-2xl text-yellow text-center">{{ title }}</h5>
        <p class="text-md text-yellow">Session : {{ session }} <br> Last check-in : {{ lastCheckIn }}</p>
        <p class="mt-5 text-white">INCLUSION : <br>{{ inclusion }}</p>
      </div>
      <div class="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center w-full">
        <NuxtLink :to="link" class="bg-white rounded-lg p-2 slide boldfont text-center">{{ buttonText }}</NuxtLink>
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
      session: {
        type: String,
        required: true
      },
      lastCheckIn: {
        type: String,
        required: true
      },
      inclusion: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      buttonText: {
        type: String,
        default: "Book Ticket"
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  