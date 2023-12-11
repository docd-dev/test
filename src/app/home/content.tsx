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

import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import { guestStar } from "@/dummy/guest";
import { rundown } from "@/dummy/rundownd";
import {
  ArrowLeftIcon,
  ArrowRightCornerIcon,
  ArrowRightIcon,
} from "@/components/ui/SvgIcon";
import { brandLogo, brandName } from "@/dummy/brand";
import { adBanners } from "@/dummy/banner";
import { PortofolioReview } from "@/components/layouts/partials/portofolio";

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
                  <ArrowLeftIcon />
                </button>
                <button
                  className="slider-nav-btn btn-next"
                  tabIndex={-1}
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                >
                  <ArrowRightIcon />
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
                <ArrowRightCornerIcon />
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
                prevEl: "#rundown-slider .btn-prev",
                nextEl: "#rundown-slider .btn-next",
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
                    width={500}
                    height={625}
                    className="w-full h-full object-contain"
                  />
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
                  <ArrowLeftIcon />
                </button>
                <button
                  className="slider-nav-btn btn-next"
                  tabIndex={-1}
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                >
                  <ArrowRightIcon />
                </button>
              </div>
              <a
                href="/guests"
                className="py-4 pl-4 pr-3 rounded-full hover:bg-gray-900 text-white flex items-center justify-center gap-x-1 transition-colors duration-300"
                data-v-wave-boundary="true"
              >
                <span className="tracking-tight text-xs sm:text-sm">
                  View rundown
                </span>
                <ArrowRightCornerIcon />
              </a>
            </div>
          </div>
        </section>

        {/* brands */}
        <section id="brands" className="pt-16 lg:pt-24">
          <div className="container">
            <h2 className="font-barlow font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/100 !leading-[1.1] text-[18vw] xs:text-[16vw] md:text-[14vw] lg:text-[15vw] xl:text-[15vw] 2xl:text-[14vw] text-center">
              Tenants
            </h2>
          </div>

          <div className="mt-6 lg:mt-10">
            <div id="brands-slider" className="swiper">
              <Swiper
                slidesPerView={"auto"}
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                className="group cursor-grab"
                wrapperClass="!ease-linear"
                loop
                autoplay={{
                  delay: 0,
                }}
                speed={2500}
              >
                {brandLogo.map((e, key) => (
                  <SwiperSlide
                    key={key}
                    className="slide-item relative flex flex-col items-center text-center gap-y-3 swiper-slide-duplicate"
                  >
                    <div className="aspect-square w-full flex items-center justify-center bg-white text-black overflow-hidden smooth-corners sc-3">
                      <img
                        src={e}
                        alt={brandName[key]}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span
                      data-v-4b3c4590=""
                      className="text-white tracking-tight text-xs sm:text-sm line-clamp-2"
                    >
                      {brandName[key]}
                    </span>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="container flex flex-col items-center mt-5 lg:mt-10">
              <a
                href="/tenants"
                className="py-4 pl-4 pr-3 rounded-full hover:bg-gray-900 text-white flex items-center justify-center gap-x-1 transition-colors duration-300"
                data-v-wave-boundary="true"
              >
                <span className="tracking-tight text-xs sm:text-sm">
                  View all tenants
                </span>
                <ArrowRightCornerIcon />
              </a>
            </div>
          </div>
        </section>

        {/* add banner */}
        <div id="ad-banner" className="swiper pt-16 lg:pt-24">
          <Swiper
            slidesPerView={"auto"}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            className="group !py-10 lg:!py-16 slider-with-margin-on-first-and-last-item cursor-grab"
          >
            {adBanners.map((e, key) => (
              <SwiperSlide
                data-v-787f3024
                key={key}
                className="slide-item relative flex flex-col gap-y-3"
              >
                <a
                  href="https://widget.loket.com/widget/yfclp8ax1dizwjoea"
                  target="_blank"
                >
                  <img
                    src={e}
                    alt={"ad banner"}
                    loading="lazy"
                    className="banner-slide-img"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* porto review */}
        <PortofolioReview />

        {/* meet and greet */}
      </div>
    </>
  );
};
