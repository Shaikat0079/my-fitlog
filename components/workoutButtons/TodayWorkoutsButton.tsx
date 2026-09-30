"use client";

import { WorkoutsContext } from "@/context/WorkoutsProvider";
import { IWorkout } from "@/Types/workout.type";

import { CalendarPlus } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const TodayWorkoutsButton = ({ workout }: { workout: IWorkout }) => {
  const { todayWorkouts, setTodayWorkouts } = useContext(WorkoutsContext);

  const handleTodayWorkouts = () => {
    // Check if workout is already added
    const alreadyAdded = todayWorkouts.some(
      (item: IWorkout) => item.id === workout.id,
    );

    if (alreadyAdded) {
      toast.info("Workout is already in today's plan!");
      return;
    }

    setTodayWorkouts([...todayWorkouts, workout]);

    toast.success(`${workout.name} added to today's plan!`);
  };

  return (
    <button
      onClick={handleTodayWorkouts}
      className="btn border-0 bg-lime-400 text-black hover:bg-lime-300"
    >
      <CalendarPlus className="h-5 w-5" />
      Add to today&apos;s plan
    </button>
  );
};

export default TodayWorkoutsButton;
