"use client";

import { HeroContent } from "@/components/layouts/partials/hero";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { guestStar } from "@/dummy/guest";
import { rundown } from "@/dummy/rundownd";

export const HomeContent = ({}) => {
  return (
    <>
      <div className="flex-auto pt-16 lg:pt-24">
        {/* hero */}
        <HeroContent />

        {/* magnetic  */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="/"
            aria-current="page"
            className="magnetic next-link-exact-active next-link-active"
          >
            <div className="relative active:scale-95 transition-transform">
              <img
                src="/img/icc-circular-text.561ce94.svg"
                className="w-32 animate-spin-clockwise pointer-events-none select-none"
              />
              <div className="absolute inset-0 scale-[70%]">
                <img
                  src="/img/marble-gradient.979f33c.webp"
                  className="w-full animate-spin-anticlockwise pointer-events-none select-none"
                />
              </div>
            </div>
          </a>
        </div>

        {/* guest stars */}
        <section id="guest-stars" className="pt-16 lg:pt-24">
          <div className="container">
            <div className="relative isolate">
              <h2 className="title-guest-stars relative z-20 flex items-center justify-between gap-x-6 text-center">
                <span className="bg-gradient-to-r from-white/40 to-white/100">
                  Guest
                </span>
                <span className="bg-gradient-to-l from-white/40 to-white/100">
                  Stars
                </span>
              </h2>
              <div className="absolute z-10 top-1/2 -translate-y-1/3 left-1/2 -translate-x-1/2 select-none pointer-events-none">
                <div className="w-[200px] md:w-[240px] lg:w-[280px] xl:w-[400px] 2xl:w-[500px] opacity-50">
                  <div className="w-full h-full overflow-hidden m-[0px_auto]">
                    <Image
                      src="/assets/star-rain.gif"
                      alt="emoji-cool"
                      width={0}
                      height={0}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="guest-slider" className="swiper w-full mt-6 lg:mt-10">
            <Swiper
              slidesPerView={"auto"}
              freeMode={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                bulletClass: "!bottom-0 lg:hidden",
              }}
              navigation={{
                prevEl: ".btn-prev",
                nextEl: ".btn-next",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="!pb-12 cursor-grab"
              wrapperClass="slider-with-margin-on-first-and-last-item"
            >
              {guestStar.map((e, key) => (
                <SwiperSlide
                  key={key}
                  tag="a"
                  className="relative isolate aspect-[4/5] rounded-xl overflow-hidden slide-item"
                >
                  <Image
                    src={e.img}
                    alt={e.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="relative z-0 w-full h-full object-cover select-none pointer-events-none "
                  />
                  <div className="absolute z-10 inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 flex flex-col items-center justify-end px-2 lg:px-4 pb-4 lg:pb-6">
                    <a
                      href="/guests/larissa"
                      className="font-barlow font-extrabold text-white text-2xl sm:text-4xl 2xl:text-5xl !leading-[1.1] drop-shadow text-center"
                    >
                      {e.name}
                    </a>
                    <div className="text-xs sm:text-sm text-white mt-2 flex items-center gap-x-2">
                      <span className="line-clamp-1">
                        <span> Cosplayer</span>
                      </span>
                      <span className="bg-white/40 w-px h-1 flex-shrink-0"></span>
                      <span className="flex-shrink-0">Nov 4</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="container flex flex-col items-center gap-6 mt-5 lg:mt-10">
              <div className="hidden lg:flex gap-x-3 items-center justify-center">
                <button
                  className="slider-nav-btn btn-prev"
                  tabIndex={-1}
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-4"
                  >
                    <path d="M14.9993 20.67C14.8093 20.67 14.6193 20.6 14.4693 20.45L7.9493 13.93C6.8893 12.87 6.8893 11.13 7.9493 10.07L14.4693 3.55002C14.7593 3.26002 15.2393 3.26002 15.5293 3.55002C15.8193 3.84002 15.8193 4.32002 15.5293 4.61002L9.0093 11.13C8.5293 11.61 8.5293 12.39 9.0093 12.87L15.5293 19.39C15.8193 19.68 15.8193 20.16 15.5293 20.45C15.3793 20.59 15.1893 20.67 14.9993 20.67Z"></path>
                  </svg>
                </button>
                <button
                  className="slider-nav-btn btn-next"
                  tabIndex={-1}
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-4"
                  >
                    <path d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.61002C8.08961 4.32002 8.08961 3.84002 8.37961 3.55002C8.66961 3.26002 9.14961 3.26002 9.43961 3.55002L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z"></path>
                  </svg>
                </button>
              </div>
              <a
                href="/guests"
                className="py-4 pl-4 pr-3 rounded-full hover:bg-gray-900 text-white flex items-center justify-center gap-x-1 transition-colors duration-300"
                data-v-wave-boundary="true"
              >
                <span className="tracking-tight text-xs sm:text-sm">
                  View all guests
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-45 h-4"
                >
                  <path d="M14.4291 18.8201C14.2391 18.8201 14.0491 18.7501 13.8991 18.6001C13.6091 18.3101 13.6091 17.8301 13.8991 17.5401L19.4391 12.0001L13.8991 6.46012C13.6091 6.17012 13.6091 5.69012 13.8991 5.40012C14.1891 5.11012 14.6691 5.11012 14.9591 5.40012L21.0291 11.4701C21.3191 11.7601 21.3191 12.2401 21.0291 12.5301L14.9591 18.6001C14.8091 18.7501 14.6191 18.8201 14.4291 18.8201Z"></path>
                  <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* rundown section */}
        <section id="rundown-section" className="pt-16 lg:pt-24">
          <div className="container">
            <h2 className="font-barlow font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/100 !leading-[1.1] text-[18vw] xs:text-[16vw] md:text-[14vw] lg:text-[15vw] xl:text-[15vw] 2xl:text-[14vw] text-center">
              Rundown
            </h2>
          </div>
          <div id="rundown-slider" className="swiper w-full mt-6 lg:mt-10">
            <Swiper
              slidesPerView={"auto"}
              freeMode={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                bulletClass: "!bottom-0 lg:hidden",
              }}
              navigation={{
                prevEl: ".btn-prev",
                nextEl: ".btn-next",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="!pb-12 lg:!pb-0 slider-with-margin-on-first-and-last-item cursor-grab"
            >
              {rundown.map((e, key) => (
                <SwiperSlide key={key} className="slide-item">
                  <Image
                    src={e.img}
                    alt={e.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
};
