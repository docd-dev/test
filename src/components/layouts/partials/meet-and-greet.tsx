import Image from "next/image";

export const MeetAndGreet = ({}) => {
  return (
    <div id="meet-and-greet" className="pt-16 lg:pt-24">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-barlow font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white/100 to-white/40 !leading-[0.9] text-[18vw] xs:text-[16vw] md:text-[14vw] lg:text-[8vw] xl:text-[8vw] 2xl:text-[8vw]">
            Meet and Greet
          </h2>
          <p className="mt-5">
            Sign up now for an exclusive meet and greet with your favorite
            VTuber!
          </p>
          <p className="text-xs sm:text-sm mt-5">
            The registration will be closed on Nov 2, 17:00.
          </p>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-8 mt-10">
          <div className="relative isolate">
            <div className="relative z-10">
              <Image
                src="/img/meet/moona-hoshinova.3a87891.webp"
                alt="Moona Hoshinova"
                loading="lazy"
                className="aspect-[4/5] w-full"
                width={355}
                height={0}
              />
              <div className="absolute z-10 inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-950"></div>
            </div>
            <div className="relative z-20 flex flex-col items-center text-center -mt-10">
              <span className="font-heading text-white text-2xl !leading-[1.1] mt-3">
                Moona Hoshinova
              </span>
              <p className="text-xs sm:text-sm mt-2">
                Sat, Nov 4, 12:15 - 13:45
              </p>
              <a
                href="https://bit.ly/MGMoonaHoshinova"
                target="_blank"
                className="px-3 py-1.5 font-bold tracking-tight bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 rounded-lg mt-3"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="relative isolate">
            <div className="relative z-10">
              <Image
                src="/img/meet/pavolia-reine.56991c1.webp"
                alt="Pavolia Reine"
                loading="lazy"
                className="aspect-[4/5] w-full"
                width={355}
                height={0}
              />
              <div className="absolute z-10 inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-950"></div>
            </div>
            <div className="relative z-20 flex flex-col items-center text-center -mt-10">
              <span className="font-heading text-white text-2xl !leading-[1.1] mt-3">
                Pavolia Reine
              </span>
              <p className="text-xs sm:text-sm mt-2">
                Sat, Nov 4, 12:15 - 13:45
              </p>
              <a
                href="https://bit.ly/MGPavoliaReine"
                target="_blank"
                className="px-3 py-1.5 font-bold tracking-tight bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 rounded-lg mt-3"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="relative isolate">
            <div className="relative z-10">
              <Image
                src="/img/meet/ayunda-risu.ab5cb8e.webp"
                alt="Ayunda Risu"
                loading="lazy"
                className="aspect-[4/5] w-full"
                width={355}
                height={0}
              />
              <div className="absolute z-10 inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-950"></div>
            </div>
            <div className="relative z-20 flex flex-col items-center text-center -mt-10">
              <span className="font-heading text-white text-2xl !leading-[1.1] mt-3">
                Ayunda Risu
              </span>
              <p className="text-xs sm:text-sm mt-2">
                Sat, Nov 4, 10:30 - 12:00
              </p>
              <a
                href="https://bit.ly/MGAyundaRisu"
                target="_blank"
                className="px-3 py-1.5 font-bold tracking-tight bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 rounded-lg mt-3"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="relative isolate">
            <div className="relative z-10">
              <Image
                src="/img/meet/kobo-kanaeru.6df856d.webp"
                alt="Kobo Kanaeru"
                loading="lazy"
                className="aspect-[4/5] w-full"
                width={355}
                height={0}
              />
              <div className="absolute z-10 inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-950"></div>
            </div>
            <div className="relative z-20 flex flex-col items-center text-center -mt-10">
              <span className="font-heading text-white text-2xl !leading-[1.1] mt-3">
                Kobo Kanaeru
              </span>
              <p className="text-xs sm:text-sm mt-2">
                Sat, Nov 4, 10:30 - 12:00
              </p>
              <a
                href="https://bit.ly/MGKoboKanaeru"
                target="_blank"
                className="px-3 py-1.5 font-bold tracking-tight bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 rounded-lg mt-3"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
