<template>
    <footer class="bg-cover bg-[url('../assets/image/bgfooter.png')]">
        <div class="container mx-auto  px-5 pb-40 lg:pb-0 lg:px-10">
            <div class="bg-brown rounded-b-[30px] p-4 lg:p-14 mb-10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div class="lg:col-span-2">
                        <img src="../assets/image/logo.png" class="h-[80%] mx-auto" alt="">
                    </div>
                    <div class="lg:col-span-8">
                        <p class="text-white text-center lg:text-left text-sm lg:text-md w-full lg:w-3/4">We are number
                            1 Zoo
                            Ticketing Agent
                            in Bali. Trusted by more than 10.000
                            monthly
                            visitors, we offer you
                            the best deal for your Bali Zoo trip.</p>
                    </div>
                    <div class="lg:col-span-2">
                        <h1 class="boldfont text-center lg:text-left text-white">Follow Us</h1>
                        <div class="flex justify-center lg:justify-start lg:text-left">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"
                                    fill="none">
                                    <path
                                        d="M24 15C22.22 15 20.4799 15.5278 18.9999 16.5168C17.5198 17.5057 16.3663 18.9113 15.6851 20.5558C15.0039 22.2004 14.8257 24.01 15.1729 25.7558C15.5202 27.5016 16.3774 29.1053 17.636 30.364C18.8947 31.6226 20.4984 32.4798 22.2442 32.8271C23.99 33.1743 25.7996 32.9961 27.4442 32.3149C29.0887 31.6337 30.4943 30.4802 31.4832 29.0001C32.4722 27.5201 33 25.78 33 24C32.9975 21.6138 32.0485 19.3261 30.3612 17.6388C28.6739 15.9515 26.3862 15.0025 24 15ZM24 30C22.8133 30 21.6533 29.6481 20.6666 28.9888C19.6799 28.3295 18.9108 27.3925 18.4567 26.2961C18.0026 25.1997 17.8838 23.9933 18.1153 22.8295C18.3468 21.6656 18.9182 20.5965 19.7574 19.7574C20.5965 18.9182 21.6656 18.3468 22.8295 18.1153C23.9933 17.8838 25.1997 18.0026 26.2961 18.4567C27.3925 18.9108 28.3295 19.6799 28.9888 20.6666C29.6481 21.6533 30 22.8133 30 24C30 25.5913 29.3679 27.1174 28.2426 28.2426C27.1174 29.3679 25.5913 30 24 30ZM33 4.5H15C12.2161 4.50298 9.54715 5.61018 7.57867 7.57867C5.61018 9.54715 4.50298 12.2161 4.5 15V33C4.50298 35.7839 5.61018 38.4528 7.57867 40.4213C9.54715 42.3898 12.2161 43.497 15 43.5H33C35.7839 43.497 38.4528 42.3898 40.4213 40.4213C42.3898 38.4528 43.497 35.7839 43.5 33V15C43.497 12.2161 42.3898 9.54715 40.4213 7.57867C38.4528 5.61018 35.7839 4.50298 33 4.5ZM40.5 33C40.5 34.9891 39.7098 36.8968 38.3033 38.3033C36.8968 39.7098 34.9891 40.5 33 40.5H15C13.0109 40.5 11.1032 39.7098 9.6967 38.3033C8.29018 36.8968 7.5 34.9891 7.5 33V15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5H33C34.9891 7.5 36.8968 8.29018 38.3033 9.6967C39.7098 11.1032 40.5 13.0109 40.5 15V33ZM36 14.25C36 14.695 35.868 15.13 35.6208 15.5C35.3736 15.87 35.0222 16.1584 34.611 16.3287C34.1999 16.499 33.7475 16.5436 33.311 16.4568C32.8746 16.37 32.4737 16.1557 32.159 15.841C31.8443 15.5263 31.63 15.1254 31.5432 14.689C31.4564 14.2525 31.501 13.8001 31.6713 13.389C31.8416 12.9778 32.13 12.6264 32.5 12.3792C32.87 12.132 33.305 12 33.75 12C34.3467 12 34.919 12.2371 35.341 12.659C35.7629 13.081 36 13.6533 36 14.25Z"
                                        fill="white"></path>
                                </svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"
                                    fill="none">
                                    <path
                                        d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95963 9.92903 7.46027 12.9745 5.98436 16.5377C4.50845 20.1008 4.12228 24.0216 4.8747 27.8043C5.62711 31.5869 7.4843 35.0615 10.2114 37.7886C12.9386 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3564 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7826 10.2174C34.1268 6.56167 29.1701 4.50546 24 4.5ZM25.5 40.4306V28.5H30C30.3978 28.5 30.7794 28.342 31.0607 28.0607C31.342 27.7794 31.5 27.3978 31.5 27C31.5 26.6022 31.342 26.2206 31.0607 25.9393C30.7794 25.658 30.3978 25.5 30 25.5H25.5V21C25.5 20.2044 25.8161 19.4413 26.3787 18.8787C26.9413 18.3161 27.7044 18 28.5 18H31.5C31.8978 18 32.2794 17.842 32.5607 17.5607C32.842 17.2794 33 16.8978 33 16.5C33 16.1022 32.842 15.7206 32.5607 15.4393C32.2794 15.158 31.8978 15 31.5 15H28.5C26.9087 15 25.3826 15.6321 24.2574 16.7574C23.1322 17.8826 22.5 19.4087 22.5 21V25.5H18C17.6022 25.5 17.2207 25.658 16.9393 25.9393C16.658 26.2206 16.5 26.6022 16.5 27C16.5 27.3978 16.658 27.7794 16.9393 28.0607C17.2207 28.342 17.6022 28.5 18 28.5H22.5V40.4306C18.2715 40.0446 14.3546 38.0433 11.564 34.8431C8.77334 31.6428 7.32389 27.4899 7.5171 23.2482C7.7103 19.0065 9.53129 15.0025 12.6013 12.0692C15.6713 9.13586 19.7539 7.49895 24 7.49895C28.2461 7.49895 32.3288 9.13586 35.3987 12.0692C38.4687 15.0025 40.2897 19.0065 40.4829 23.2482C40.6761 27.4899 39.2267 31.6428 36.4361 34.8431C33.6455 38.0433 29.7285 40.0446 25.5 40.4306Z"
                                        fill="white"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div class="lg:col-span-3 gap-4">
                    <ul class="text-center lg:text-start">
                        <li class="mb-2">
                            <RouterLink to="/" class="text-brown boldfont text-md lg:text-xl">Home</RouterLink>
                        </li>
                        <li class="mb-2">
                            <div href="https://tailwindcss.com/" class="text-brown boldfont text-md lg:text-xl">
                                Places to Go</div>
                            <ul>
                                <li>
                                    <RouterLink to="/" class="text-brown">Bali Zoo</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/" class="text-brown">Bali Bird Park</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/" class="text-brown">Bali Farm House</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/" class="text-brown">Bali Safari</RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-2">
                            <RouterLink to="/ticket" class="text-brown boldfont text-md lg:text-xl">Tickets</RouterLink>
                        </li>
                        <li class="mb-2">
                            <RouterLink to="/contact" class="text-brown boldfont text-md lg:text-xl">Contact
                                Us</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="lg:col-span-4 gap-4">
                    <h1 class="text-md lg:text-xl text-center lg:text-start boldfont text-brown">Our Office</h1>
                    <div class="flex items-center justify-center lg:justify-start gap-4 my-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 16.8094 11.25 22.1409 11.5697 22.3641C11.6958 22.4524 11.846 22.4998 12 22.4998C12.154 22.4998 12.3042 22.4524 12.4303 22.3641C12.75 22.1409 20.25 16.8094 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 6.75C12.5933 6.75 13.1734 6.92595 13.6667 7.25559C14.1601 7.58524 14.5446 8.05377 14.7716 8.60195C14.9987 9.15013 15.0581 9.75333 14.9424 10.3353C14.8266 10.9172 14.5409 11.4518 14.1213 11.8713C13.7018 12.2909 13.1672 12.5766 12.5853 12.6924C12.0033 12.8081 11.4001 12.7487 10.8519 12.5216C10.3038 12.2946 9.83524 11.9101 9.50559 11.4167C9.17595 10.9234 9 10.3433 9 9.75C9 8.95435 9.31607 8.19129 9.87868 7.62868C10.4413 7.06607 11.2044 6.75 12 6.75Z"
                                    fill="#824D0F"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="text-sm text-center lg:text-start text-brown">
                                Regus Benoa Square, Jl. Bypass Ngurah Rai No. 21A, Badung Regency, Bali
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-center lg:justify-start gap-4 mb-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM20.25 18H3.75V6.95531L11.4928 14.0531C11.6312 14.1801 11.8122 14.2506 12 14.2506C12.1878 14.2506 12.3688 14.1801 12.5072 14.0531L20.25 6.95531V18Z"
                                    fill="#824D0F"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="text-sm text-center lg:text-start text-brown">
                                baliticketservice@gmail.com
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-center lg:justify-start gap-4 mb-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M21.7388 16.4137C21.5716 17.6841 20.9477 18.8501 19.9837 19.6941C19.0196 20.5381 17.7813 21.0023 16.5 21C9.05626 21 3.00001 14.9438 3.00001 7.5C2.99771 6.21871 3.4619 4.9804 4.30588 4.01634C5.14986 3.05228 6.31592 2.42841 7.58626 2.26125C7.9075 2.22203 8.2328 2.28775 8.51362 2.4486C8.79444 2.60945 9.0157 2.85681 9.14438 3.15375L11.1244 7.57406V7.58531C11.2229 7.81261 11.2636 8.06078 11.2428 8.30763C11.222 8.55449 11.1404 8.79236 11.0053 9C10.9884 9.02531 10.9706 9.04875 10.9519 9.07219L9.00001 11.3859C9.7022 12.8128 11.1947 14.2922 12.6403 14.9963L14.9222 13.0547C14.9446 13.0359 14.9681 13.0183 14.9925 13.0022C15.2 12.8638 15.4387 12.7794 15.687 12.7564C15.9353 12.7335 16.1854 12.7729 16.4147 12.8709L16.4269 12.8766L20.8434 14.8556C21.1409 14.9838 21.3889 15.2049 21.5503 15.4858C21.7116 15.7666 21.7778 16.0922 21.7388 16.4137Z"
                                    fill="#824D0F"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="text-sm text-center lg:text-start text-brown">
                                (+62) 0888 8888 8888
                            </p>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-4 gap-4 ">
                    <h1 class="text-center lg:text-start text-md lg:text-xl boldfont text-brown">Official Partner Of
                    </h1>
                    <div class="hidden lg:grid grid-cols-4 gap-4 items-end">
                        <img src="../assets/image/Logos.png" alt="">
                        <img src="../assets/image/Logos2.png" alt="">
                        <img src="../assets/image/Logos3.png" alt="">
                        <img src="../assets/image/Logos4.png" alt="">
                    </div>
                    <div class="block lg:hidden">
                        <div class="marquee container">
                            <div class="marquee-content items-end">
                                <div class="marquee-item">
                                    <img src="../assets/image/Logos.png" alt="">
                                </div>

                                <div class="marquee-item">
                                    <img src="../assets/image/Logos2.png" alt="">
                                </div>

                                <div class="marquee-item">
                                    <img src="../assets/image/Logos3.png" alt="">
                                </div>

                                <div class="marquee-item">
                                    <img src="../assets/image/Logos4.png" alt="">
                                </div>
                                <div class="marquee-item">
                                    <img src="../assets/image/Logos.png" alt="">
                                </div>

                                <div class="marquee-item">
                                    <img src="../assets/image/Logos2.png" alt="">
                                </div>

                                <div class="marquee-item">
                                    <img src="../assets/image/Logos3.png" alt="">
                                </div>

                                <div class="marquee-item">
                                    <img src="../assets/image/Logos4.png" alt="">
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-10">
                <div class="col-span-6 gap-4">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="text-center">
                            <p class="text-brown">Trusted By</p>
                            <img class="object-contain mx-auto h-20" src="../assets/image/trip.png" alt="">
                            <p class="text-xs lg:text-md text-brown">As Bali’s no. 1 Zoo Ticket Agent</p>
                        </div>
                        <div class="text-center">
                            <p class="text-brown">Trusted By</p>
                            <img class="object-contain mx-auto h-20" src="../assets/image/iata.png" alt="">
                            <p class="text-xs lg:text-md text-brown">License No. 126.KEP.223/BDG/2011</p>
                        </div>
                        <div class="text-center">
                            <p class="text-brown">Trusted By</p>
                            <img class="object-contain mx-auto h-20" src="../assets/image/klook.png" alt="">
                            <p class="text-xs lg:text-md text-brown">As Safari Ticket Agent Partner</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-6 gap-4">
                    <h1 class="text-md lg:text-xl text-center boldfont text-brown">AVAILABLE PAYMENT</h1>

                </div>
            </div>
            <div class="mt-10 text-center text-brown">
                <hr class="bg-brown border-0 h-[1px]">
                <p class="py-5">Copyright © MindiMedia 2024 | Powered by Escape Link & Guires
                    Solutions</p>
            </div>
        </div>
    </footer>
</template>
<style>
.marquee {
    overflow: hidden;
}

.marquee-content {
    display: flex;
    animation: scrolling 10s linear infinite;
}

.marquee-item {
    /* flex: 0 0 16vw;
        margin: 0 1vw; */
    flex: 0 0 30vw;
    margin: 0 2vw;
}

.marquee-item img {
    display: block;
    width: 100%;
    /*   padding: 0 20px; */
    object-fit: contain !important;
}

@keyframes scrolling {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translatex(-144vw);
    }
}
</style>