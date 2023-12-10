import Image from "next/image";

export const HeroContent = ({}) => {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col items-center justify-center relative isolate lg:pt-2 2xl:pt-6"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/img/icc-2023-bg-pattern.38380c4.svg"
            className="pointer-events-none select-none w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950 via-[20%] lg:via-[5%] via-transparent to-[80%] lg:to-[95%] to-gray-950"></div>
        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="relative isolate mb-16 sm:mb-0 row-span-2 z-50">
              <div className="relative z-10 flex flex-col items-center sm:items-start justify-end py-16 rounded-2xl h-full">
                <div className="relative isolate">
                  <span className="uppercase block mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/100">
                    Indonesia Comic Con 2023 ⚡️
                  </span>
                  <h1
                    id="hero-title"
                    className={`relative z-10 text-white font-akira tracking-tight text-[9vw] xs:text-[9vw] sm:text-[8vw] md:text-[7vw] lg:text-[4vw] xl:text-[2.75vw] 2xl:text-[2.8vw] 3xl:text-[2.6vw] !leading-[1.1] uppercase`}
                  >
                    Bringing
                    <br />
                    the Best
                    <br />
                    <span className="text-red-600">Pop </span>
                    <span className="text-accent-yellow-base">
                      Cu
                      <a href="/login" className="">
                        l
                      </a>
                      ture
                    </span>{" "}
                    Experience
                  </h1>
                  <div className="absolute z-30 right-0 bottom-[50%] hover:scale-[1.1] transition-transform duration-300">
                    <img
                      src="/img/captain-icc-2023-pose-3.83d6c0d.svg"
                      width="514.88"
                      height="610.75"
                      className="w-28 xl:w-32 2xl:w-36 pointer-events-none select-none animate-[slow-bounce_10s_linear_infinite] drop-shadow-xl"
                    />
                  </div>
                  <div className="absolute z-50 left-0 bottom-0 lg:top-0 animate-[slow-bounce-emoji-cool_12s_linear_infinite]">
                    <div
                      className="emoji group aspect-square p-2 rounded-full bg-white/60 backdrop-blur-lg translate-y-[80%] lg:-translate-y-[80%] -translate-x-[20%] lg:-translate-x-[40%]"
                      style={{
                        transform: "translate(-32px, -64px)",
                      }}
                    >
                      <div className="aspect-square w-14 xl:w-16 rounded-full bg-white flex items-center justify-center">
                        <div className="w-10 xl:w-12 -rotate-12 group-hover:scale-[2.1] transition-transform duration-300">
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              overflow: "hidden",
                              margin: "0px auto",
                            }}
                          >
                            <Image
                              src="/assets/emoji-cool.gif"
                              alt="emoji-cool"
                              width={0}
                              height={0}
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-2 items-center mt-4 lg:mt-6">
                  <a
                    href="/ticket"
                    className="px-6 py-5 bg-accent-yellow-base rounded-full flex items-center justify-center text-black font-bold tracking-tight hover:bg-accent-yellow-darken transition-colors"
                    data-v-wave-boundary="true"
                  >
                    Get your ticket
                  </a>
                  <a
                    href="/"
                    aria-current="page"
                    className="px-6 py-5 border border-white rounded-full flex items-center justify-center text-white font-bold tracking-tight hover:bg-white hover:text-black transition-colors nuxt-link-exact-active nuxt-link-active"
                    data-v-wave-boundary="true"
                  >
                    Be part of ICC
                  </a>
                </div>
              </div>
              <div className="absolute z-0 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 h-1 w-[80%] rounded-b-full overflow-hidden grid grid-cols-3">
                <span className="h-full bg-red-600"></span>
                <span className="h-full bg-accent-yellow-lighten"></span>
                <span className="h-full bg-sky-500"></span>
              </div>
              <div className="lg:hidden absolute z-20 bottom-0 left-0">
                <img
                  src="/img/thunderbolt.86d554d.svg"
                  className="w-16 pointer-events-none select-none translate-y-[110%] -translate-x-[20%] rotate-[-15deg]"
                />
              </div>
              <div className="lg:hidden absolute z-20 bottom-0 right-0">
                <img
                  src="/img/thunderbolt.86d554d.svg"
                  className="w-10 pointer-events-none select-none translate-y-[20%] translate-x-[30%] scale-x-[-1] rotate-[15deg]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="group bg-gradient-to-b from-red-600 to-red-700 rounded-2xl overflow-hidden relative isolate px-6 py-6 3xl:py-8 h-full">
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                  <div></div>
                  <span className="text-white font-heading text-4xl mt-6">
                    Nov 4-5, 2023
                  </span>
                  <span className="text-white tracking-tight mt-3">
                    Jakarta Convention Center (JCC) Senayan, Assembly,
                    Cendrawasih, and Plenary Hall
                  </span>
                  <span className="text-white text-xs sm:text-sm tracking-tight mt-3">
                    10 AM - 9 PM
                  </span>
                </div>
                <img
                  src="/img/captain-icc-2023-pose-4.a33ab79.webp"
                  className="absolute z-40 top-0 rotate-[-30deg] right-0 translate-x-[30%] w-28 lg:w-32 2xl:w-36 3xl:w-40 pointer-events-none select-none group-hover:scale-[1.2] transition-transform duration-300"
                />
              </div>
              <div className="absolute z-50 right-0 top-0 sm:top-auto sm:bottom-0 animate-[slow-bounce-emoji-surprised_12s_linear_infinite]">
                <div
                  className="emoji group aspect-square p-2 rounded-full bg-white/60 backdrop-blur-lg -translate-y-[100%] sm:translate-y-[50%] translate-x-[20%] sm:translate-x-[40%]"
                  style={{ transform: "translate(32px, 40px)" }}
                >
                  <div className="aspect-square w-14 xl:w-16 rounded-full bg-white flex items-center justify-center">
                    <div className="w-10 xl:w-12 rotate-12 group-hover:scale-[2.1] transition-transform duration-300">
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                          margin: "0px auto",
                        }}
                      >
                        <Image
                          src="/assets/emoji-surprised.gif"
                          alt="emoji-surprised"
                          width={0}
                          height={0}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-accent-yellow-base rounded-2xl overflow-hidden relative isolate px-10 py-10 group">
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                <span className="text-black tracking-tight">
                  The biggest event in the year to celebrate
                </span>
                <span className="text-black font-heading text-4xl lg:text-5xl !leading-none uppercase mt-1">
                  5 Pop Culture Pillars
                </span>
                <div className="pillar-list w-full relative mt-6 h-[2.25rem] lg:h-[2.5rem] 2xl:h-[3.75rem]">
                  <span>
                    <div
                      className="line"
                      style={{
                        display: "block",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <div className="word" style={{ display: "inline-block" }}>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          C
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          o
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          m
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          i
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          c
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          s
                        </div>
                      </div>
                    </div>
                  </span>
                  <span>
                    <div
                      className="line"
                      style={{
                        display: "block",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <div className="word" style={{ display: "inline-block" }}>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          T
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          o
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          y
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          s
                        </div>
                      </div>
                    </div>
                  </span>
                  <span>
                    <div
                      className="line"
                      style={{
                        display: "block",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <div className="word" style={{ display: "inline-block" }}>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          M
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          o
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          v
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          i
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          e
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          s
                        </div>
                      </div>
                    </div>
                  </span>
                  <span>
                    <div
                      className="line"
                      style={{
                        display: "block",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <div className="word" style={{ display: "inline-block" }}>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          G
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          a
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          m
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          e
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0%, -100%) rotateX(90deg)",
                            opacity: 0,
                            visibility: "hidden",
                          }}
                        >
                          s
                        </div>
                      </div>
                    </div>
                  </span>
                  <span>
                    <div
                      className="line"
                      style={{
                        display: "block",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <div className="word" style={{ display: "inline-block" }}>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                            visibility: "inherit",
                          }}
                        >
                          L
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                            visibility: "inherit",
                          }}
                        >
                          i
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                            visibility: "inherit",
                          }}
                        >
                          f
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                            visibility: "inherit",
                          }}
                        >
                          e
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                            visibility: "inherit",
                          }}
                        >
                          s
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                            visibility: "inherit",
                          }}
                        >
                          t
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                            visibility: "inherit",
                          }}
                        >
                          y
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                            visibility: "inherit",
                          }}
                        >
                          l
                        </div>
                        <div
                          className="char"
                          style={{
                            display: "inline-block",
                            transform: "translate(0px, 0px)",
                            opacity: 1,
                            visibility: "inherit",
                          }}
                        >
                          e
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <img
                src="/img/captain-icc-2023-pose-1.df3ac13.svg"
                className="absolute z-0 bottom-0 translate-y-[20%] scale-x-[-1] 2xl:translate-y-[30%] left-0 -translate-x-[30%] w-20 lg:w-24 2xl:w-32 rotate-12 pointer-events-none select-none group-hover:scale-y-110 group-hover:scale-x-[-1] group-hover:rotate-[24deg] transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 lg:order-last">
              <a
                href="/dg-awards-2023"
                className="hero-links-card-border p-px rounded-2xl bg-gradient-to-r from-red-500"
              >
                <div className="hero-links-card bg-gradient-to-r from-gray-900 to-gray-950">
                  <div className="hero-links-content">
                    <h6 className="hero-links-title">DG Awards 2023</h6>
                    <p className="hero-links-description">
                      The biggest gaming award event in Indonesia is coming.
                    </p>
                  </div>
                  <a
                    href="/dg-awards-2023"
                    className="hero-links-button"
                    data-v-wave-boundary="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 rotate-45"
                    >
                      <path d="M14.4291 18.8201C14.2391 18.8201 14.0491 18.7501 13.8991 18.6001C13.6091 18.3101 13.6091 17.8301 13.8991 17.5401L19.4391 12.0001L13.8991 6.46012C13.6091 6.17012 13.6091 5.69012 13.8991 5.40012C14.1891 5.11012 14.6691 5.11012 14.9591 5.40012L21.0291 11.4701C21.3191 11.7601 21.3191 12.2401 21.0291 12.5301L14.9591 18.6001C14.8091 18.7501 14.6191 18.8201 14.4291 18.8201Z"></path>
                      <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"></path>
                    </svg>
                  </a>
                </div>
              </a>
              <a
                href="/championship-of-cosplay"
                className="hero-links-card-border p-px rounded-2xl bg-gradient-to-r from-accent-yellow-base"
              >
                <div className="hero-links-card bg-gradient-to-r from-gray-900 to-gray-950">
                  <div className="hero-links-content">
                    <h6 className="hero-links-title">
                      Championship of Cosplay
                    </h6>
                    <p className="hero-links-description">
                      Unleash your inner hero at Cosplay Competition! Join the
                      fun and win a total prize of Rp50,000,000.
                    </p>
                  </div>
                  <a
                    href="/championship-of-cosplay"
                    className="hero-links-button"
                    data-v-wave-boundary="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 rotate-45"
                    >
                      <path d="M14.4291 18.8201C14.2391 18.8201 14.0491 18.7501 13.8991 18.6001C13.6091 18.3101 13.6091 17.8301 13.8991 17.5401L19.4391 12.0001L13.8991 6.46012C13.6091 6.17012 13.6091 5.69012 13.8991 5.40012C14.1891 5.11012 14.6691 5.11012 14.9591 5.40012L21.0291 11.4701C21.3191 11.7601 21.3191 12.2401 21.0291 12.5301L14.9591 18.6001C14.8091 18.7501 14.6191 18.8201 14.4291 18.8201Z"></path>
                      <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"></path>
                    </svg>
                  </a>
                </div>
              </a>
              <a
                href="/fanmate-fest"
                className="hero-links-card-border p-px rounded-2xl bg-gradient-to-r from-sky-500"
              >
                <div className="hero-links-card bg-gradient-to-r from-gray-900 to-gray-950">
                  <div className="hero-links-content">
                    <h6 className="hero-links-title">FanMate Fest</h6>
                    <p className="hero-links-description">
                      Get a chance to win a huge prize and have a chance to be
                      the next Cosplay Idol, Sign-up FanMate account and
                      register as a creator!
                    </p>
                  </div>
                  <a
                    href="/fanmate-fest"
                    className="hero-links-button"
                    data-v-wave-boundary="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 rotate-45"
                    >
                      <path d="M14.4291 18.8201C14.2391 18.8201 14.0491 18.7501 13.8991 18.6001C13.6091 18.3101 13.6091 17.8301 13.8991 17.5401L19.4391 12.0001L13.8991 6.46012C13.6091 6.17012 13.6091 5.69012 13.8991 5.40012C14.1891 5.11012 14.6691 5.11012 14.9591 5.40012L21.0291 11.4701C21.3191 11.7601 21.3191 12.2401 21.0291 12.5301L14.9591 18.6001C14.8091 18.7501 14.6191 18.8201 14.4291 18.8201Z"></path>
                      <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"></path>
                    </svg>
                  </a>
                </div>
              </a>
            </div>
            <div
              data-v-b6266080=""
              id="hero-gallery"
              data-cursor-text="View Gallery"
              className="flex flex-col items-center relative isolate"
            >
              <a
                data-v-b6266080=""
                href="/gallery"
                className="relative z-10 flex flex-col -space-y-[50%]"
              >
                <img
                  data-v-b6266080=""
                  src="/img/hero-gallery-01.1a1c50c.webp"
                  className="relative z-50"
                />
                <img
                  data-v-b6266080=""
                  src="/img/hero-gallery-02.8639736.webp"
                  className="relative z-40 scale-[.9]"
                />
                <img
                  data-v-b6266080=""
                  src="/img/hero-gallery-03.dac5b72.webp"
                  className="relative z-30 scale-[.8]"
                />
                <img
                  data-v-b6266080=""
                  src="/img/hero-gallery-04.61344aa.webp"
                  className="relative z-20 scale-[.7]"
                />
              </a>
              <a
                data-v-b6266080=""
                href="/gallery"
                className="relative z-20 flex items-center gap-x-1 text-white text-xs sm:text-sm tracking-tight hover:underline"
              >
                <span data-v-b6266080="">
                  View the last edition of ICC's excitement
                </span>
                <svg
                  data-v-b6266080=""
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5"
                >
                  <path d="M14.4291 18.8201C14.2391 18.8201 14.0491 18.7501 13.8991 18.6001C13.6091 18.3101 13.6091 17.8301 13.8991 17.5401L19.4391 12.0001L13.8991 6.46012C13.6091 6.17012 13.6091 5.69012 13.8991 5.40012C14.1891 5.11012 14.6691 5.11012 14.9591 5.40012L21.0291 11.4701C21.3191 11.7601 21.3191 12.2401 21.0291 12.5301L14.9591 18.6001C14.8091 18.7501 14.6191 18.8201 14.4291 18.8201Z"></path>
                  <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute z-30 bottom-0 translate-y-[70%] left-0 translate-x-[5%]">
          <img
            src="/img/thunderbolt.86d554d.svg"
            className="pointer-events-none select-none w-24 rotate-[-15deg]"
          />
        </div>
        <div className="hidden lg:block absolute z-30 top-0 right-0 -translate-x-[5%]">
          <img
            src="/img/thunderbolt.86d554d.svg"
            className="pointer-events-none select-none w-16 scale-x-[-1] rotate-[15deg]"
          />
        </div>
      </section>
    </>
  );
};
