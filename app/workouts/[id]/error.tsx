"use client";

import Link from "next/link";

const WorkoutDetailsError = ({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-[#c4f000]">404</h1>

        <h2 className="mt-4 text-2xl font-bold text-white">
          Workout unavailable
        </h2>

        <p className="mt-3 text-gray-400">
          We couldn&apos;t load this workout. It may have been removed or
          something went wrong.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn rounded-full bg-[#c4f000] px-6 text-black hover:bg-[#d4ff33]"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="btn rounded-full border-gray-700 bg-transparent px-6 text-white hover:border-[#c4f000]"
          >
            Workouts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsError;
