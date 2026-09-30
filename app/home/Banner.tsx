import Image from "next/image";
import Link from "next/link";

import hero from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="hero min-h-[650px] overflow-hidden rounded-3xl bg-[#111318]">

        <div className="hero-content w-full flex-col gap-10 py-16 lg:flex-row-reverse lg:justify-between">

          {/* HERO IMAGE */}
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 rounded-full bg-[#c4f000]/10 blur-3xl" />

            <Image
              src={hero}
              width={600}
              height={600}
              alt="Workout training"
              priority
              className="relative w-full object-contain"
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-2xl">

            {/* LABEL */}
            <p className="mb-4 text-sm font-bold tracking-[0.25em] text-[#c4f000]">
              WORKOUT LIBRARY
            </p>

            {/* HEADING */}
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Train with intent.
              <br />
              <span className="text-[#c4f000]">
                Log every set.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-xl py-6 text-base leading-7 text-gray-400 sm:text-lg">
              FitLog is a dark, no-nonsense gym companion. Pick a workout,
              add it to today&apos;s plan, track every set, and watch your
              progress build throughout the week.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

             

              <Link
                href="#workouts"
                className="btn rounded-full border-gray-700 bg-transparent px-8 text-white hover:border-[#c4f000] hover:bg-[#c4f000]/10"
              >
                Explore Workouts
              </Link>

            </div>

            {/* SMALL STATS */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-800 pt-6">

              <div>
                <p className="text-2xl font-bold text-white">
                  10+
                </p>
                <p className="text-sm text-gray-500">
                  Workouts
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  20+
                </p>
                <p className="text-sm text-gray-500">
                  Muscle Groups
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  24/7
                </p>
                <p className="text-sm text-gray-500">
                  Access
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;