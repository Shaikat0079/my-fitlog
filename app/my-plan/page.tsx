"use client";

import React, { useContext } from "react";
import { Clock3, Dumbbell, Flame } from "lucide-react";

import { WorkoutsContext } from "@/context/WorkoutsProvider";
import Tabs from "@/components/Tabs";

const ListedWorkouts = () => {
  const { todayWorkouts } = useContext(WorkoutsContext);

  // Total workout duration
  const totalMinutes = todayWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  // Total calories
  const totalCalories = todayWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <>
    <div className="mx-auto container my-10">
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-zinc-800 bg-[#1b1e24] shadow-lg sm:grid-cols-3">
        
        {/* Exercises */}
        <div className="flex items-center gap-4 p-6">
          <div className="rounded-xl bg-lime-400/10 p-3">
            <Dumbbell className="h-7 w-7 text-lime-400" />
          </div>

          <div>
            <div className="text-sm font-medium text-gray-400">
              Exercises
            </div>

            <div className="text-3xl font-bold text-white">
              {todayWorkouts.length}
            </div>
          </div>
        </div>

        {/* Minutes */}
        <div className="flex items-center gap-4 border-t border-zinc-800 p-6 sm:border-l sm:border-t-0">
          <div className="rounded-xl bg-lime-400/10 p-3">
            <Clock3 className="h-7 w-7 text-lime-400" />
          </div>

          <div>
            <div className="text-sm font-medium text-gray-400">
              Minutes
            </div>

            <div className="text-3xl font-bold text-white">
              {totalMinutes}
            </div>
          </div>
        </div>

        {/* Calories */}
        <div className="flex items-center gap-4 border-t border-zinc-800 p-6 sm:border-l sm:border-t-0">
          <div className="rounded-xl bg-lime-400/10 p-3">
            <Flame className="h-7 w-7 text-lime-400" />
          </div>

          <div>
            <div className="text-sm font-medium text-gray-400">
              Calories
            </div>

            <div className="text-3xl font-bold text-white">
              {totalCalories}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Tabs/>
    </>
  );
};

export default ListedWorkouts;