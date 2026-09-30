import Link from "next/link";
import { Dumbbell, ArrowLeft } from "lucide-react";

const WorkoutNotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#c4f000]/10">
          <Dumbbell size={40} className="text-[#c4f000]" />
        </div>

        <p className="text-7xl font-black text-[#c4f000]">404</p>

        <h1 className="mt-4 text-3xl font-bold text-white">
          Workout Not Found
        </h1>

        <p className="mt-4 text-gray-400">
          The workout you are looking for doesn&apos;t exist or may have been
          removed.
        </p>

        <Link
          href="/"
          className="btn mt-8 rounded-full border-0 bg-[#c4f000] px-7 text-black hover:bg-[#d4ff33]"
        >
          <ArrowLeft size={18} />
          Browse Workouts
        </Link>
      </div>
    </div>
  );
};

export default WorkoutNotFound;
