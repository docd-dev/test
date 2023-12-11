import Image from "next/image";

export const PartICC = () => {
  return (
    <section id="join-icc" className="pt-16 lg:pt-24">
      <div className="container">
        <h2 className="font-barlow font-extrabold uppercase flex flex-col items-center text-center !leading-[0.9] text-[18vw] xs:text-[16vw] md:text-[14vw] lg:text-[8vw] xl:text-[8vw] 2xl:text-[8vw]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white/100 to-white/40">
            BE PART OF
          </span>
          <span className="text-red-500">INDONESIA COMIC CON</span>
          <span className="text-accent-yellow-base">2023</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 lg:mt-20">
          <div className="rounded-3xl bg-gradient-to-b from-gray-900 flex flex-col items-center text-center py-16 lg:py-24 px-6 sm:px-10 relative isolate">
            <div className="absolute top-0 -translate-y-1/2 inset-x-0 w-full flex items-center justify-center">
              <div className="px-3 py-3 bg-gradient-to-l from-orange-500 to-rose-700 font-bold text-white uppercase rounded-full text-xs sm:text-sm flex items-center gap-x-1">
                <span className="!leading-none flex-shrink-0">
                  Tenant Application
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <Image
                src="/img/captain-icc-2023-pose-2.13a8502.svg"
                width="410"
                height="621"
                loading="lazy"
                className="select-none pointer-events-none w-28 sm:w-32 2xl:w-36 group-hover:scale-[1.1] transition-transform duration-300"
                alt="captain"
              />

              <h3 className="uppercase font-barlow font-extrabold text-white text-5xl sm:text-6xl xl:text-7xl !leading-none -mt-10 drop-shadow-md">
                Showcase Your Brand
              </h3>
              <div className="mt-6 max-w-xl mx-auto">
                <p>
                  Be part of something big by becoming a tenant at Indonesia
                  Comic Con, one of the largest pop culture event in Indonesia.
                </p>
              </div>
              <div className="available-space-progress w-full max-w-sm mx-auto mt-8">
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="progress-bar w-[100%] h-full rounded-full bg-gradient-to-r from-green-500 to-green-600"></div>
                </div>
                <span className="block text-gray-400 text-xs sm:text-sm tracking-tight mt-3">
                  100% space has been occupied.
                </span>
              </div>
              <a
                href="/exhibit"
                className="px-8 py-5 rounded-xl bg-white text-black font-bold tracking-tight mt-10 hover:bg-accent-yellow-base transition-colors duration-300"
                data-v-wave-boundary="true"
              >
                Book your space
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="application-card-border from-rose-600">
              <div className="application-card">
                <div className="application-content">
                  <h3 className="application-title">
                    Championship of Cosplay Application
                  </h3>
                  <p className="application-description">
                    Unleash your inner hero at Indonesia Comic Con's cosplay
                    competition! Join the fun and win big.
                  </p>
                </div>
                <a
                  href="/championship-of-cosplay"
                  className="application-button"
                >
                  Apply
                </a>
              </div>
            </div>
            <div className="application-card-border from-accent-yellow-darken">
              <div className="application-card">
                <div className="application-content">
                  <h3 className="application-title">
                    Artist Alley Application
                  </h3>
                  <p className="application-description">
                    Are you an artist or a creator? Showcase and sell your
                    artwork, crafts, and other merchandise directly to ICC’s
                    attendees.
                  </p>
                </div>
                <a
                  href="https://api.whatsapp.com/send/?phone=6281284671998&amp;text=Hi, Indonesia Comic Con. I want to register for Artist Alley in ICC"
                  target="_blank"
                  className="application-button"
                >
                  Apply
                </a>
              </div>
            </div>
            <div className="application-card-border from-emerald-600">
              <div className="application-card">
                <div className="application-content">
                  <h3 className="application-title">
                    Community Booth Application
                  </h3>
                  <p className="application-description">
                    Get a limited free booth for pop culture-related
                    communities.
                  </p>
                </div>
                <a
                  href="https://bit.ly/RegisCommunityBooth"
                  target="_blank"
                  className="application-button"
                >
                  Apply
                </a>
              </div>
            </div>
            <div className="application-card-border from-indigo-600">
              <div className="application-card">
                <div className="application-content">
                  <h3 className="application-title">
                    Media Partner Application
                  </h3>
                  <p className="application-description">
                    Become an official Indonesia Comic Con’s media partner.
                  </p>
                </div>
                <a
                  href="https://api.whatsapp.com/send/?phone=6281119220003&amp;text=Hi, Indonesia Comic Con. I want to apply as a media partner for ICC"
                  target="_blank"
                  className="application-button"
                >
                  Apply
                </a>
              </div>
            </div>
            <div className="mt-4 max-w-xl flex flex-col items-start">
              <p>
                Do you have any ideas on how we can work together to build a
                better Indonesia Comic Con? Please share your thoughts and
                suggestions.
              </p>
              <a
                href="/contact"
                className="mt-4 px-4 py-3 rounded-lg bg-gray-900 text-white font-bold tracking-tight !leading-none hover:bg-white hover:text-black transition-colors duration-300"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
