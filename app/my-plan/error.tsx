"use client";

import Link from "next/link";
import { RefreshCcw, ClipboardList } from "lucide-react";

const MyPlanError = ({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#c4f000]/10">
          <ClipboardList size={40} className="text-[#c4f000]" />
        </div>

        <h1 className="text-4xl font-black text-white">Plan Error</h1>

        <p className="mt-4 text-gray-400">
          We couldn&apos;t load your workout plan.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn rounded-full border-0 bg-[#c4f000] px-6 text-black hover:bg-[#d4ff33]"
          >
            <RefreshCcw size={18} />
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

export default MyPlanError;
