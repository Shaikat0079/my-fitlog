"use client";

import Link from "next/link";

const WorkoutError = ({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black text-[#c4f000]">Oops!</h1>

        <h2 className="mt-4 text-2xl font-bold text-white">
          Something went wrong
        </h2>

        <p className="mt-3 text-gray-400">
          We couldn&apos;t load the workouts.
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
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutError;
