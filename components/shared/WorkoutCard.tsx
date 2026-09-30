import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

import { IWorkout } from "@/Types/workout.type";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`} className="block w-full max-w-sm">
      <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-[#1b1e24] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-xl">
        {/* Image */}
        <div className="relative h-64 w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 384px"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="mb-3 text-xl font-black uppercase tracking-wide text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mb-5 text-sm text-gray-300">{workout.equipment}</p>

          {/* Stats */}
          <div className="flex items-center gap-5 text-sm text-white">
            <div className="flex items-center gap-1.5">
              <Clock3 className="h-5 w-5 text-lime-400" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame className="h-5 w-5 text-lime-400" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Star className="h-5 w-5 text-lime-400" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
