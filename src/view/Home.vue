<template>
    <main>

        <!-- banner -->

        <section class="banner bg-no-repeat bg-center flex justify-center items-center">
            <div class="text-white px-5">
                <h1 class="md:text-[48px] text-[30px] text-center font-bold">This text is just for test</h1>
                <h5 id="bannerSubTitle" class="text-center md:text-base text-sm max-w-[720px] w-full mx-auto leading-7 mt-2">
                    Lorem ipsum dolor <br>
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br>
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .
                </h5>
                <div class="flex items-center justify-center gap-2 text-sm mt-14 flex-wrap">
                    <div
                        class="text-white group bg-[#2323233D] hover:bg-[#E4F0FF] hover:text-[#0A77FF] hover:border hover:border-[#0A77FF] flex items-center justify-center gap-2 w-[109px] h-10 rounded-[104px] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M18.0501 8.63006L13.3801 6.62006L12.3401 6.18006C12.1801 6.10006 12.0401 5.89006 12.0401 5.71006V2.65006C12.0401 1.69006 11.3301 0.550059 10.4701 0.110059C10.1701 -0.0399414 9.81006 -0.0399414 9.51006 0.110059C8.66006 0.550059 7.95006 1.70006 7.95006 2.66006V5.72006C7.95006 5.90006 7.81006 6.11006 7.65006 6.19006L1.95006 8.64006C1.32006 8.90006 0.810059 9.69006 0.810059 10.3701V11.6901C0.810059 12.5401 1.45006 12.9601 2.24006 12.6201L7.25006 10.4601C7.64006 10.2901 7.96006 10.5001 7.96006 10.9301V12.0401V13.8401C7.96006 14.0701 7.83006 14.4001 7.67006 14.5601L5.35006 16.8901C5.11006 17.1301 5.00006 17.6001 5.11006 17.9401L5.56006 19.3001C5.74006 19.8901 6.41006 20.1701 6.96006 19.8901L9.34006 17.8901C9.70006 17.5801 10.2901 17.5801 10.6501 17.8901L13.0301 19.8901C13.5801 20.1601 14.2501 19.8901 14.4501 19.3001L14.9001 17.9401C15.0101 17.6101 14.9001 17.1301 14.6601 16.8901L12.3401 14.5601C12.1701 14.4001 12.0401 14.0701 12.0401 13.8401V10.9301C12.0401 10.5001 12.3501 10.3001 12.7501 10.4601L17.7601 12.6201C18.5501 12.9601 19.1901 12.5401 19.1901 11.6901V10.3701C19.1901 9.69006 18.6801 8.90006 18.0501 8.63006Z"
                                fill="white" />
                        </svg>
                        <p>Flight</p>
                    </div>
                    <div
                        class="text-white group bg-[#2323233D] hover:bg-[#E4F0FF] hover:text-[#0A77FF] hover:border hover:border-[#0A77FF] flex items-center justify-center gap-2 w-[109px] h-10 rounded-[104px] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M12.5 22.0003H4.07997C2.91997 22.0003 1.96997 21.0703 1.96997 19.9303V5.09035C1.96997 2.47035 3.91997 1.28035 6.30997 2.45035L10.75 4.63035C11.71 5.10035 12.5 6.35035 12.5 7.41035V22.0003Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M21.97 15.0599V18.8399C21.97 20.9999 20.97 21.9999 18.81 21.9999H12.5V10.4199L12.97 10.5199L17.47 11.5299L19.5 11.9799C20.82 12.2699 21.9 12.9499 21.96 14.8699C21.97 14.9299 21.97 14.9899 21.97 15.0599Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]" d="M5.5 9H8.97" stroke="white" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]" d="M5.5 13H8.97" stroke="white" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M17.47 11.53V14.75C17.47 15.99 16.46 17 15.22 17C13.98 17 12.97 15.99 12.97 14.75V10.52L17.47 11.53Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M21.96 14.8703C21.9 16.0503 20.92 17.0003 19.72 17.0003C18.48 17.0003 17.47 15.9903 17.47 14.7503V11.5303L19.5 11.9803C20.82 12.2703 21.9 12.9503 21.96 14.8703Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Hotel</p>
                    </div>
                    <div
                        class="text-white group bg-[#2323233D] hover:bg-[#E4F0FF] hover:text-[#0A77FF] hover:border hover:border-[#0A77FF] flex items-center justify-center gap-2 w-[109px] h-10 rounded-[104px] cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]" d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]" d="M8 13H12" stroke="white" stroke-width="1.5"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]" d="M8 17H16" stroke="white" stroke-width="1.5"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Visa</p>
                    </div>
                    <div
                        class="text-white group bg-[#2323233D] hover:bg-[#E4F0FF] hover:text-[#0A77FF] hover:border hover:border-[#0A77FF] flex items-center justify-center gap-2 w-[109px] h-10 rounded-[104px] cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z" stroke="white"
                                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" stroke="white"
                                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]" d="M14 8V13" stroke="white" stroke-width="1.5"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]" d="M18 8V13" stroke="white" stroke-width="1.5"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke="white"
                                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]" d="M6 13V17" stroke="white" stroke-width="1.5"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z"
                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p>Tour</p>
                    </div>
                    <div
                        class="text-white group bg-[#2323233D] hover:bg-[#E4F0FF] hover:text-[#0A77FF] hover:border hover:border-[#0A77FF] flex items-center justify-center gap-2 w-[109px] h-10 rounded-[104px] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M18.3334 4.99984V7.0165C18.3334 8.33317 17.5 9.1665 16.1834 9.1665H13.3334V3.3415C13.3334 2.4165 14.0917 1.6665 15.0167 1.6665C15.9251 1.67484 16.7584 2.0415 17.3584 2.6415C17.9584 3.24984 18.3334 4.08317 18.3334 4.99984Z"
                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path class="group-hover:fill-[#0A77FF]"
                                d="M1.66663 5.83317V17.4998C1.66663 18.1915 2.44994 18.5832 2.99994 18.1665L4.42496 17.0998C4.75829 16.8498 5.22496 16.8832 5.52496 17.1832L6.90827 18.5748C7.23327 18.8998 7.76664 18.8998 8.09164 18.5748L9.49164 17.1748C9.7833 16.8832 10.25 16.8498 10.575 17.0998L12 18.1665C12.55 18.5748 13.3333 18.1832 13.3333 17.4998V3.33317C13.3333 2.4165 14.0833 1.6665 15 1.6665H5.83329H4.99996C2.49996 1.6665 1.66663 3.15817 1.66663 4.99984V5.83317Z"
                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p>Insurance</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- booking -->

        <section
            class="booking p-6 max-w-[1248px] w-[98%] -mt-2  md:-mt-20 bg-white mx-auto rounded-[16px] shadow-1 overflow-hidden">
            <div class="flex md:justify-between justify-center gap-5 items-center flex-wrap px-5">
                <div class="flex items-center flex-wrap gap-2 text-sm">
                    <div @click="toggleBookingTabs(1)"
                        :class="{ 'text-black bg-[#F7F8F9]': openBookingTab !== 1, 'bg-[#E4F0FF] text-[#0A77FF]': openBookingTab === 1, }"
                        class="tripType flex items-center justify-center w-[109px] h-10 rounded-[104px] cursor-pointer">
                        <p>One way</p>
                    </div>
                    <div @click="toggleBookingTabs(2)"
                        :class="{ 'text-black bg-[#F7F8F9]': openBookingTab !== 2, 'bg-[#E4F0FF] text-[#0A77FF]': openBookingTab === 2, }"
                        class="tripType flex items-center justify-center w-[109px] h-10 rounded-[104px] cursor-pointer">
                        <p id="ToursTab">Round trip</p>
                    </div>
                    <div @click="toggleBookingTabs(3)"
                        :class="{ 'text-black bg-[#F7F8F9]': openBookingTab !== 3, 'bg-[#E4F0FF] text-[#0A77FF]': openBookingTab === 3, }"
                        class="tripType flex items-center justify-center w-[109px] h-10 rounded-[104px] cursor-pointer">
                        <p id="HotelsTab">Multi-city</p>
                    </div>
                </div>
            </div>
            <div class="mt-5" v-bind:class="{ 'hidden': openBookingTab !== 1, 'block': openBookingTab === 1 }">
                <div class="flex items-center gap-2 flex-wrap">
                    <div class="rounded-[16px] border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer">
                        <p class="text-sm text-[#938F96]">Origin</p>
                        <p class="font-bold">Iran, Tehran (IMK)</p>
                    </div>
                    <div class="rounded-[16px] border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer">
                        <p class="text-sm text-[#938F96]">Destination</p>
                        <p class="font-bold">Canada, Torento (IMK)</p>
                    </div>
                    <div class="rounded-[16px] border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer">
                        <p class="text-sm text-[#938F96]">Departure Date</p>
                        <p class="font-bold">22/Nov/2023-22/Nov/2023</p>
                    </div>
                    <router-link to=""
                        class="rounded-[16px] mx-auto flex items-center justify-center text-white bg-[#0A77FF] py-5 px-10 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p>Search</p>
                    </router-link>
                </div>
            </div>
            <div class="mt-5" v-bind:class="{ 'hidden': openBookingTab !== 2, 'block': openBookingTab === 2 }">
                <div class="flex items-center gap-2 flex-wrap">
                    <div class="rounded-[16px] border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer">
                        <p class="text-sm text-[#938F96]">Origin</p>
                        <p class="font-bold">Iran, Tehran (IMK)</p>
                    </div>
                    <div class="rounded-[16px] border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer">
                        <p class="text-sm text-[#938F96]">Destination</p>
                        <p class="font-bold">Canada, Torento (IMK)</p>
                    </div>
                    <div class="rounded-[16px] border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer">
                        <p class="text-sm text-[#938F96]">Departure Date</p>
                        <p class="font-bold">22/Nov/2023-22/Nov/2023</p>
                    </div>
                    <router-link to=""
                        class="rounded-[16px] mx-auto flex items-center justify-center text-white bg-[#0A77FF] py-5 px-10 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p>Search</p>
                    </router-link>
                </div>
            </div>
            <div class="mt-5" v-bind:class="{ 'hidden': openBookingTab !== 3, 'block': openBookingTab === 3 }">
                <div class="flex items-center gap-2 flex-wrap">
                    <div class="rounded-[16px] border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer">
                        <p class="text-sm text-[#938F96]">Origin</p>
                        <p class="font-bold">Iran, Tehran (IMK)</p>
                    </div>
                    <div class="rounded-[16px] border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer">
                        <p class="text-sm text-[#938F96]">Destination</p>
                        <p class="font-bold">Canada, Torento (IMK)</p>
                    </div>
                    <div class="rounded-[16px] border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer">
                        <p class="text-sm text-[#938F96]">Departure Date</p>
                        <p class="font-bold">22/Nov/2023-22/Nov/2023</p>
                    </div>
                    <router-link to=""
                        class="rounded-[16px] mx-auto flex items-center justify-center text-white bg-[#0A77FF] py-5 px-10 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p>Search</p>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Top Agencies -->
        <section class="max-w-[1248px] w-full mx-auto bestpromotional mt-14 px-4">
            <h2 class="text-[32px] font-bold text-[#1D1B20] -mb-2" id="hotdeals">Top Agencies</h2>
            <!-- Swiper -->
            <div class="swiper py-8 px-3" ref="TopAgencies">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="rounded-[16px] overflow-hidden hover:shadow-xl transition-all">
                            <div class="relative overflow-hidden">
                                <img src="../../dist/assets/Frame 48097242.png" alt="" class="w-full rounded-[16px]">
                            </div>
                            <div class="p-3 pb-4 text-center">
                                <a class="text-lg font-bold block cursor-pointer">
                                    Agency Name
                                </a>
                                <p class="mt-1 text-[#938F96]">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rounded-[16px] overflow-hidden hover:shadow-xl transition-all">
                            <div class="relative overflow-hidden">
                                <img src="../../dist/assets/Frame 48097242.png" alt="" class="w-full rounded-[16px]">
                            </div>
                            <div class="p-3 pb-4 text-center">
                                <a class="text-lg font-bold block cursor-pointer">
                                    Agency Name
                                </a>
                                <p class="mt-1 text-[#938F96]">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rounded-[16px] overflow-hidden hover:shadow-xl transition-all">
                            <div class="relative overflow-hidden">
                                <img src="../../dist/assets/Frame 48097242.png" alt="" class="w-full rounded-[16px]">
                            </div>
                            <div class="p-3 pb-4 text-center">
                                <a class="text-lg font-bold block cursor-pointer">
                                    Agency Name
                                </a>
                                <p class="mt-1 text-[#938F96]">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rounded-[16px] overflow-hidden hover:shadow-xl transition-all">
                            <div class="relative overflow-hidden">
                                <img src="../../dist/assets/Frame 48097242.png" alt="" class="w-full rounded-[16px]">
                            </div>
                            <div class="p-3 pb-4 text-center">
                                <a class="text-lg font-bold block cursor-pointer">
                                    Agency Name
                                </a>
                                <p class="mt-1 text-[#938F96]">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rounded-[16px] overflow-hidden hover:shadow-xl transition-all">
                            <div class="relative overflow-hidden">
                                <img src="../../dist/assets/Frame 48097242.png" alt="" class="w-full rounded-[16px]">
                            </div>
                            <div class="p-3 pb-4 text-center">
                                <a class="text-lg font-bold block cursor-pointer">
                                    Agency Name
                                </a>
                                <p class="mt-1 text-[#938F96]">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rounded-[16px] overflow-hidden hover:shadow-xl transition-all">
                            <div class="relative overflow-hidden">
                                <img src="../../dist/assets/Frame 48097242.png" alt="" class="w-full rounded-[16px]">
                            </div>
                            <div class="p-3 pb-4 text-center">
                                <a class="text-lg font-bold block cursor-pointer">
                                    Agency Name
                                </a>
                                <p class="mt-1 text-[#938F96]">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--book now -->
        <section class="mt-3">
            <div class="max-w-[1248px] w-full mx-auto px-4">
                <div class="rounded-[24px] overflow-hidden grid sm:grid-cols-2 items-stretch">
                    <div class="text-white bg-[#0A77FF] p-12 px-5 sm:px-12">
                        <div class="flex items-center h-full">
                            <div class="h-full">
                                <h1 class="font-bold text-[32px] mb-6 mt-12">Dream Travel To Istanbul</h1>
                                <p>Lorem ipsum dolor<br>
                                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore
                                    magna aliqua. Ut enim ad minim.
                                </p>
                                <router-link to="/"
                                    class="w-[143px] h-12 mt-6 rounded-lg bg-white text-sm text-[#0A77FF] mr-auto flex items-center justify-center">Book
                                    now</router-link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img alt="img" src="../../dist/assets/Frame 48097251.png" class="h-full">
                    </div>
                </div>
            </div>
        </section>

        <!-- fast search -->
        <section>
            <div class="max-w-[1248px] w-full mx-auto mt-10 px-5">
                <h2 class="text-[32px] font-bold text-[#1D1B20] mb-4" id="hotdeals">Fast search</h2>
                <div class="flex items-center gap-6">
                    <p>Origin:</p>
                    <!-- Swiper -->
                    <div class="swiper search py-2" ref="searchbox">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div @click="toggleTabs(1)"
                                    :class="{ 'text-black bg-transparent': openTab !== 1, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 1, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div @click="toggleTabs(2)"
                                    :class="{ 'text-black bg-transparent': openTab !== 2, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 2, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div @click="toggleTabs(3)"
                                    :class="{ 'text-black bg-transparent': openTab !== 3, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 3, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div @click="toggleTabs(4)"
                                    :class="{ 'text-black bg-transparent': openTab !== 4, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 4, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div @click="toggleTabs(5)"
                                    :class="{ 'text-black bg-transparent': openTab !== 5, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 5, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div @click="toggleTabs(6)"
                                    :class="{ 'text-black bg-transparent': openTab !== 6, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 6, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div @click="toggleTabs(7)"
                                    :class="{ 'text-black bg-transparent': openTab !== 7, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 7, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div @click="toggleTabs(8)"
                                    :class="{ 'text-black bg-transparent': openTab !== 8, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 8, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div @click="toggleTabs(9)"
                                    :class="{ 'text-black bg-transparent': openTab !== 9, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 9, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div @click="toggleTabs(10)"
                                    :class="{ 'text-black bg-transparent': openTab !== 10, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 10, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div @click="toggleTabs(11)"
                                    :class="{ 'text-black bg-transparent': openTab !== 11, 'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]': openTab === 11, }"
                                    class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center">
                                    hotels
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[126px] gap-y-8 mt-10">
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 7, block: openTab === 7 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 7, block: openTab === 7 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 8, block: openTab === 8 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 8, block: openTab === 8 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 8, block: openTab === 8 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 9, block: openTab === 9 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 9, block: openTab === 9 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 9, block: openTab === 9 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 9, block: openTab === 9 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 10, block: openTab === 10 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 10, block: openTab === 10 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 11, block: openTab === 11 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 11, block: openTab === 11 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 11, block: openTab === 11 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                    <router-link v-bind:class="{ hidden: openTab !== 11, block: openTab === 11 }" to="/"
                        class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]">
                        <img alt="img" class="rounded-[12px] h-full" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">Istanbul</h5>
                            <div class="flex items-center text-[#0A77FF] gap-4">
                                <router-link class="transition-all hover:font-bold" to="/">Flight</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Hotel</router-link>
                                <router-link class="transition-all hover:font-bold" to="/">Tour</router-link>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- visa -->
        <section class="mt-10">
            <div class="max-w-[1248px] w-full mx-auto px-5">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="font-bold text-[32px] text-[#1D1B20]">Visa</h2>
                    <select
                        class="border border-[#DCDFE4] rounded-xl text-sm text-[#1D1B20] w-[133px] h-12 px-6 bg-transparent">
                        <option>30 Days</option>
                        <option>25 Days</option>
                    </select>
                </div>
                <div class="grid sm:grid-cols-2 gap-x-5 gap-y-6">
                    <router-link to="/"
                        class="hover:shadow-xl group transition-all border border-[#DCDFE4] rounded-[16px] bg-white p-3 flex items-center gap-6">
                        <img alt="img" class="rounded-[12px]" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20]">Oman Visa</h5>
                            <p class="text-[#938F96] mt-1 mb-2">30 day</p>
                            <div class="flex items-center justify-between text-[#1D1B20] text-lg font-bold">
                                <p>354 USD</p>
                                <svg class="opacity-0 group-hover:opacity-100 transition-all"
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M5.86001 0.960043L14.89 3.96004C20.96 5.99004 20.96 9.30004 14.89 11.32L12.21 12.21L11.32 14.89C9.3 20.96 5.98 20.96 3.96 14.89L0.950006 5.87004C-0.389994 1.82004 1.81001 -0.389957 5.86001 0.960043ZM5.54001 6.34004L9.34 10.16C9.49 10.31 9.68001 10.38 9.87 10.38C10.06 10.38 10.25 10.31 10.4 10.16C10.69 9.87004 10.69 9.39004 10.4 9.10004L6.60001 5.28004C6.31001 4.99004 5.83001 4.99004 5.54001 5.28004C5.25001 5.57004 5.25001 6.05004 5.54001 6.34004Z"
                                        fill="#292D32" />
                                </svg>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/"
                        class="hover:shadow-xl group transition-all border border-[#DCDFE4] rounded-[16px] bg-white p-3 flex items-center gap-6">
                        <img alt="img" class="rounded-[12px]" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20]">Oman Visa</h5>
                            <p class="text-[#938F96] mt-1 mb-2">30 day</p>
                            <div class="flex items-center justify-between text-[#1D1B20] text-lg font-bold">
                                <p>354 USD</p>
                                <svg class="opacity-0 group-hover:opacity-100 transition-all"
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M5.86001 0.960043L14.89 3.96004C20.96 5.99004 20.96 9.30004 14.89 11.32L12.21 12.21L11.32 14.89C9.3 20.96 5.98 20.96 3.96 14.89L0.950006 5.87004C-0.389994 1.82004 1.81001 -0.389957 5.86001 0.960043ZM5.54001 6.34004L9.34 10.16C9.49 10.31 9.68001 10.38 9.87 10.38C10.06 10.38 10.25 10.31 10.4 10.16C10.69 9.87004 10.69 9.39004 10.4 9.10004L6.60001 5.28004C6.31001 4.99004 5.83001 4.99004 5.54001 5.28004C5.25001 5.57004 5.25001 6.05004 5.54001 6.34004Z"
                                        fill="#292D32" />
                                </svg>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/"
                        class="hover:shadow-xl group transition-all border border-[#DCDFE4] rounded-[16px] bg-white p-3 flex items-center gap-6">
                        <img alt="img" class="rounded-[12px]" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20]">Oman Visa</h5>
                            <p class="text-[#938F96] mt-1 mb-2">30 day</p>
                            <div class="flex items-center justify-between text-[#1D1B20] text-lg font-bold">
                                <p>354 USD</p>
                                <svg class="opacity-0 group-hover:opacity-100 transition-all"
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M5.86001 0.960043L14.89 3.96004C20.96 5.99004 20.96 9.30004 14.89 11.32L12.21 12.21L11.32 14.89C9.3 20.96 5.98 20.96 3.96 14.89L0.950006 5.87004C-0.389994 1.82004 1.81001 -0.389957 5.86001 0.960043ZM5.54001 6.34004L9.34 10.16C9.49 10.31 9.68001 10.38 9.87 10.38C10.06 10.38 10.25 10.31 10.4 10.16C10.69 9.87004 10.69 9.39004 10.4 9.10004L6.60001 5.28004C6.31001 4.99004 5.83001 4.99004 5.54001 5.28004C5.25001 5.57004 5.25001 6.05004 5.54001 6.34004Z"
                                        fill="#292D32" />
                                </svg>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/"
                        class="hover:shadow-xl group transition-all border border-[#DCDFE4] rounded-[16px] bg-white p-3 flex items-center gap-6">
                        <img alt="img" class="rounded-[12px]" src="../../dist/assets/Frame 48097276.png">
                        <div class="flex-grow">
                            <h5 class="text-lg font-bold text-[#1D1B20]">Oman Visa</h5>
                            <p class="text-[#938F96] mt-1 mb-2">30 day</p>
                            <div class="flex items-center justify-between text-[#1D1B20] text-lg font-bold">
                                <p>354 USD</p>
                                <svg class="opacity-0 group-hover:opacity-100 transition-all"
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M5.86001 0.960043L14.89 3.96004C20.96 5.99004 20.96 9.30004 14.89 11.32L12.21 12.21L11.32 14.89C9.3 20.96 5.98 20.96 3.96 14.89L0.950006 5.87004C-0.389994 1.82004 1.81001 -0.389957 5.86001 0.960043ZM5.54001 6.34004L9.34 10.16C9.49 10.31 9.68001 10.38 9.87 10.38C10.06 10.38 10.25 10.31 10.4 10.16C10.69 9.87004 10.69 9.39004 10.4 9.10004L6.60001 5.28004C6.31001 4.99004 5.83001 4.99004 5.54001 5.28004C5.25001 5.57004 5.25001 6.05004 5.54001 6.34004Z"
                                        fill="#292D32" />
                                </svg>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- tour -->
        <section class=mt-12>
            <div class="max-w-[1248px] w-full mx-auto px-5">
                <div class="flex items-center justify-between">
                    <h2 class="font-bold text-[32px] text-[#1D1B20]">Tour</h2>
                    <router-link to="/" class="flex items-center gap-2 text-[#1D1B20]">
                        <p>See all</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.29 15.8798L13.17 11.9998L9.29 8.11979C8.9 7.72978 8.9 7.09978 9.29 6.70978C9.68 6.31978 10.31 6.31978 10.7 6.70978L15.29 11.2998C15.68 11.6898 15.68 12.3198 15.29 12.7098L10.7 17.2998C10.31 17.6898 9.68 17.6898 9.29 17.2998C8.91 16.9098 8.9 16.2698 9.29 15.8798Z"
                                fill="#1D1B20" />
                        </svg>
                    </router-link>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6 mb-20">
                    <div>
                        <router-link to="/"><img alt="img" class="rounded-xl w-full"
                                src="../../dist/assets/Frame 48097281.png"></router-link>
                    </div>
                    <div>
                        <router-link to="/" class="mb-5 block"><img alt="img" class="rounded-xl w-full"
                                src="../../dist/assets/Frame 48097288.png"></router-link>
                        <router-link to="/"><img alt="img" class="rounded-xl w-full"
                                src="../../dist/assets/Frame 48097289.png"></router-link>
                    </div>
                    <div>
                        <router-link to="/" class="mb-5 block"><img alt="img" class="rounded-xl w-full"
                                src="../../dist/assets/Frame 48097289.png"></router-link>
                        <router-link to="/"><img alt="img" class="rounded-xl w-full"
                                src="../../dist/assets/Frame 48097288.png"></router-link>
                    </div>
                </div>
            </div>
        </section>


    </main>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore from 'swiper/core';
SwiperCore.use()

export default {

    setup() {

    },
    data() {
        return {
            openBookingTab: 1,
            openWayTab: 1,
            openTab: 1,
            openDestinationsTab: 1,
        };
    },
    methods: {
        toggleBookingTabs: function (tabNumber) {
            this.openBookingTab = tabNumber;
        },
        toggleWayTabs: function (tabNumber) {
            this.openWayTab = tabNumber;
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber;
        },
        toggleDestinationsTabs: function (tabNumber) {
            this.openDestinationsTab = tabNumber;
        }
    },
    mounted() {
        new Swiper(this.$refs.TopAgencies, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1020: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                },
            },
        }),
            new Swiper(this.$refs.searchbox, {
                loop: true,
                slidesPerView: 2,
                spaceBetween: 8,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                breakpoints: {
                    400: {
                        slidesPerView: 3,
                    },
                    576: {
                        slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 7,
                    },
                    992: {
                        slidesPerView: 9,
                    },
                    1200: {
                        slidesPerView: 10,
                    },
                    1280: {
                        slidesPerView: 11,
                    },
                },
            })
    }

}
</script>

<style></style>