"use client";

import { WorkoutsContext } from "@/context/WorkoutsProvider";
import { IWorkout } from "@/Types/workout.type";

import { Bookmark } from "lucide-react";

import React, { useContext } from "react";
import { toast } from "react-toastify";

const SavedWorkoutsButton = ({ workout }: { workout: IWorkout }) => {
  const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutsContext);

  const handleSavedWorkouts = () => {
    // Check if workout is already saved
    const alreadySaved = savedWorkouts.some(
      (item: IWorkout) => item.id === workout.id,
    );

    if (alreadySaved) {
      toast.info("Workout is already saved!");
      return;
    }

    // Add workout
    setSavedWorkouts([...savedWorkouts, workout]);

    // Show success toast
    toast.success(`${workout.name} saved successfully!`);
  };

  return (
    <button
      onClick={handleSavedWorkouts}
      className="btn btn-outline text-white hover:border-[#c4f000] hover:text-[#c4f000]"
    >
      <Bookmark className="h-5 w-5" />
      Save for later
    </button>
  );
};

export default SavedWorkoutsButton;
