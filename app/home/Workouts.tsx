import React from "react";
import WorkoutCard from "@/components/shared/WorkoutCard";
import { IWorkout } from "@/Types/workout.type";

const getWorkouts = async (): Promise<IWorkout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: IWorkout[] = await response.json();

  return data;
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();
//   console.log(workoutsData);

  return (
    <div id="workouts" className="mx-auto container py-20">
        <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-white">
        Workouts
      </h1>

      <p className="mt-2 text-gray-400">
        Choose a workout and start training.
      </p>
    </div>
      {
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workoutsData.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      }
    </div>
  );
};

export default Workouts;
