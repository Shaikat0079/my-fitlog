"use client";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { IWorkout } from "@/Types/workout.type";
import { createContext, useState } from "react";

interface IWorkoutsContext {
  todayWorkouts: IWorkout[];
  setTodayWorkouts: Dispatch<SetStateAction<IWorkout[]>>;

  savedWorkouts: IWorkout[];
  setSavedWorkouts: Dispatch<SetStateAction<IWorkout[]>>;
}

export const WorkoutsContext = createContext<IWorkoutsContext>({
  todayWorkouts: [],
  setTodayWorkouts: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
});

// import React from 'react';

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [todayWorkouts, setTodayWorkouts] = useState<IWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

  const sharedData = {
    todayWorkouts,
    setTodayWorkouts,
    savedWorkouts,
    setSavedWorkouts,
  };
  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
