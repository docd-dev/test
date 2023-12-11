import Image from "next/image";

export const PortofolioReview = ({}) => {
  return (
    <div id="portfolio-review" className="pt-16 lg:pt-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-barlow font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white/100 to-white/40 !leading-[0.9] text-[18vw] xs:text-[16vw] md:text-[14vw] lg:text-[8vw] xl:text-[8vw] 2xl:text-[8vw]">
              Portfolio Review
            </h2>
            <p className="mt-5">
              Calling all artists, content creators, and art enthusiasts! Get
              your art portfolio reviewed by industry professionals who are
              passionate about supporting and nurturing artistic talent.
            </p>
            <div className="mt-10 text-xs sm:text-sm">
              <span className="font-bold tracking-tight text-white">
                Notes:
              </span>
              <ul className="list-disc pl-5 flex flex-col gap-y-2 mt-2">
                <li>
                  Portfolio Review will be held on Indonesia Comic Con, Nov 4-5,
                  2023, in Jakarta Convention Center.
                </li>
                <li>
                  You may sign up for more than one category or more than one
                  studio.
                </li>
                <li>
                  The chosen participants will get a free entry ticket to
                  Indonesia Comic Con (no need to buy the ticket).
                </li>
                <li>The registration will be closed on October 19, 2023.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4 w-full">
            <div className="w-full rounded-2xl bg-gray-900 flex flex-col items-center text-center px-4 sm:px-8 py-5 sm:py-8">
              <a
                href="https://www.instagram.com/manhwakitaculture"
                target="_blank"
                className="rounded-full bg-gradient-to-tr from-yellow-500 to-rose-600 p-0.5 aspect-square flex items-center justify-center active:scale-95 transition"
              >
                <div className="aspect-square w-16 flex-shrink-0 overflow-hidden border-[3px] border-gray-900 rounded-full">
                  <Image
                    src="/img/portofolio/mkc-studio.a702225.webp"
                    alt="Portfolio Review by MKC Studio"
                    className="w-full h-full object-contain"
                    width={100}
                    height={1000}
                  />
                </div>
              </a>
              <div className="flex flex-col items-center mt-3">
                <h6 className="font-bold tracking-tight text-base sm:text-lg text-white !leading-[1.4]">
                  Portfolio Review by MKC Studio
                </h6>
                <p className="text-xs sm:text-sm !leading-normal mt-2">
                  For Sketch Artist, Line Artist, Colorist, Storyboard Sketsa
                </p>
                <a
                  href="https://forms.gle/cYV3cEBKJYzVQzMPA"
                  target="_blank"
                  className="px-4 py-2 !leading-none rounded-lg bg-sky-600 text-white hover:bg-sky-700 mt-6 font-bold tracking-tight transition-colors duration-300"
                >
                  Join
                </a>
              </div>
            </div>
            <div className="w-full rounded-2xl bg-gray-900 flex flex-col items-center text-center px-4 sm:px-8 py-5 sm:py-8">
              <a
                href="https://www.instagram.com/tawakalanimation"
                target="_blank"
                className="rounded-full bg-gradient-to-tr from-yellow-500 to-rose-600 p-0.5 aspect-square flex items-center justify-center active:scale-95 transition"
              >
                <div className="aspect-square w-16 flex-shrink-0 overflow-hidden border-[3px] border-gray-900 rounded-full">
                  <Image
                    src="/img/portofolio/tawakal.ac1ffb8.webp"
                    alt="Portfolio Review by Tawakal Animation"
                    className="w-full h-full object-contain"
                    width={100}
                    height={1000}
                  />
                </div>
              </a>
              <div className="flex flex-col items-center mt-3">
                <h6 className="font-bold tracking-tight text-base sm:text-lg text-white !leading-[1.4]">
                  Portfolio Review by Tawakal Animation
                </h6>
                <a
                  href="https://forms.gle/6Z3k9FHT3DQ1NKri7"
                  target="_blank"
                  className="px-4 py-2 !leading-none rounded-lg bg-sky-600 text-white hover:bg-sky-700 mt-6 font-bold tracking-tight transition-colors duration-300"
                >
                  Join
                </a>
              </div>
            </div>
            <div className="w-full rounded-2xl bg-gray-900 flex flex-col items-center text-center px-4 sm:px-8 py-5 sm:py-8">
              <a
                href="https://www.instagram.com/brandoville_studios"
                target="_blank"
                className="rounded-full bg-gradient-to-tr from-yellow-500 to-rose-600 p-0.5 aspect-square flex items-center justify-center active:scale-95 transition"
              >
                <div className="aspect-square w-16 flex-shrink-0 overflow-hidden border-[3px] border-gray-900 rounded-full">
                  <Image
                    src="/img/portofolio/brandoville.8fae3d1.webp"
                    alt="Portfolio Review by Brandoville Academy"
                    className="w-full h-full object-contain"
                    width={100}
                    height={1000}
                  />
                </div>
              </a>
              <div className="flex flex-col items-center mt-3">
                <h6 className="font-bold tracking-tight text-base sm:text-lg text-white !leading-[1.4]">
                  Portfolio Review by Brandoville Academy
                </h6>
                <p className="text-xs sm:text-sm !leading-normal mt-2">
                  For Concept Artist, 2D Animation Artist, 3D Animation Artist,
                  3D Modeling Artist, Lighting and Compositing Artist, VFX
                  Artist, Technical Director, Game Programmer
                </p>
                <a
                  href="https://forms.gle/QwfthB2Jc8trV91EA"
                  target="_blank"
                  className="px-4 py-2 !leading-none rounded-lg bg-sky-600 text-white hover:bg-sky-700 mt-6 font-bold tracking-tight transition-colors duration-300"
                >
                  Join
                </a>
              </div>
            </div>
            <div className="w-full rounded-2xl bg-gray-900 flex flex-col items-center text-center px-4 sm:px-8 py-5 sm:py-8">
              <a
                href="https://www.instagram.com/mncgramedia"
                target="_blank"
                className="rounded-full bg-gradient-to-tr from-yellow-500 to-rose-600 p-0.5 aspect-square flex items-center justify-center active:scale-95 transition"
              >
                <div className="aspect-square w-16 flex-shrink-0 overflow-hidden border-[3px] border-gray-900 rounded-full">
                  <Image
                    src="/img/portofolio/m&amp;c.d20742e.webp"
                    alt="Portfolio Review by m&amp;c! - KOLONI"
                    className="w-full h-full object-contain"
                    width={100}
                    height={1000}
                  />
                </div>
              </a>
              <div className="flex flex-col items-center mt-3">
                <h6 className="font-bold tracking-tight text-base sm:text-lg text-white !leading-[1.4]">
                  Portfolio Review by m&amp;c! - KOLONI
                </h6>
                <p className="text-xs sm:text-sm !leading-normal mt-2">
                  Terbitkan komikmu di penerbit M&amp;C - KOLONI. List genre
                  komik yang dicari: Horror, Thriller, Action/Adventure, Slice
                  of Life, Komedi, Romance, Komik Islami
                </p>
                <a
                  href="https://forms.gle/hPVFVU13kgHoD7nf6"
                  target="_blank"
                  className="px-4 py-2 !leading-none rounded-lg bg-sky-600 text-white hover:bg-sky-700 mt-6 font-bold tracking-tight transition-colors duration-300"
                >
                  Join
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
