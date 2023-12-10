"use client";

import { HeroContent } from "@/components/layouts/partials/hero";

export const HomeContent = ({}) => {
  return (
    <>
      {/* hero */}
      <div className="flex-auto pt-16 lg:pt-24">
        <HeroContent />
        <div className="mt-10 flex items-center justify-center">
          <a
            href="/"
            aria-current="page"
            className="magnetic nuxt-link-exact-active nuxt-link-active"
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
      </div>
    </>
  );
};
