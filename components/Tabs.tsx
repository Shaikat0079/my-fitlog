"use client";

import React, { useContext, useMemo, useState } from "react";
import { Clock, Flame, Star, Check, X, Dumbbell } from "lucide-react";
import { WorkoutsContext } from "@/context/WorkoutsProvider";
import { IWorkout } from "@/Types/workout.type";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

const Tabs = () => {
  const { todayWorkouts, setTodayWorkouts, savedWorkouts, setSavedWorkouts } =
    useContext(WorkoutsContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );

  // Decide which workouts to display
  const currentWorkouts = activeTab === "today" ? todayWorkouts : savedWorkouts;

  // Sort workouts
  const sortedWorkouts = useMemo(() => {
    const workouts = [...currentWorkouts];

    switch (sortBy) {
      case "Duration":
        return workouts.sort(
          (a: IWorkout, b: IWorkout) => a.duration - b.duration,
        );

      case "Calories":
        return workouts.sort(
          (a: IWorkout, b: IWorkout) => a.caloriesBurned - b.caloriesBurned,
        );

      case "Rating":
        return workouts.sort((a: IWorkout, b: IWorkout) => b.rating - a.rating);

      default:
        return workouts;
    }
  }, [currentWorkouts, sortBy]);

  // Mark workout as completed
  const handleDone = (id: number) => {
    const workout = todayWorkouts.find(
      (workout: IWorkout) => workout.id === id,
    );

    setTodayWorkouts((prev: IWorkout[]) =>
      prev.filter((workout: IWorkout) => workout.id !== id),
    );

    toast.success(
      workout ? `${workout.name} completed!` : "Workout marked as completed!",
    );
  };

  // Remove workout
  const handleRemove = (id: number) => {
    if (activeTab === "today") {
      const workout = todayWorkouts.find(
        (workout: IWorkout) => workout.id === id,
      );

      setTodayWorkouts((prev: IWorkout[]) =>
        prev.filter((workout: IWorkout) => workout.id !== id),
      );

      toast.info(
        workout
          ? `${workout.name} removed from today's plan.`
          : "Workout removed from today's plan.",
      );
    } else {
      const workout = savedWorkouts.find(
        (workout: IWorkout) => workout.id === id,
      );

      setSavedWorkouts((prev: IWorkout[]) =>
        prev.filter((workout: IWorkout) => workout.id !== id),
      );

      toast.info(
        workout
          ? `${workout.name} removed from saved workouts.`
          : "Workout removed from saved workouts.",
      );
    }
  };

  return (
    <div className="container mx-auto my-10 px-4">
      {/* TOP SECTION */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {/* TABS */}
        <div className="tabs tabs-box rounded-2xl bg-[#1b1e24] p-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`tab rounded-xl px-5 ${
              activeTab === "today"
                ? "bg-[#111318] text-lime-400"
                : "text-gray-400"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`tab rounded-xl px-5 ${
              activeTab === "saved"
                ? "bg-[#111318] text-lime-400"
                : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        {/* SORT */}
        <div className="flex items-center gap-3">
          <label className="text-lg font-medium text-white">Sort By</label>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "Duration" | "Calories" | "Rating")
            }
            className="select select-bordered w-64 rounded-2xl border-gray-700 bg-transparent text-white"
          >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>

      {/* WORKOUT LIST */}
      <div className="mt-10 space-y-5">
        {sortedWorkouts.length === 0 ? (
          <div className="rounded-2xl border border-gray-800 bg-[#191c22] p-10 text-center">
            <p className="text-gray-400">
              {activeTab === "today"
                ? "No workouts in today's plan."
                : "No saved workouts."}
            </p>
          </div>
        ) : (
          sortedWorkouts.map((workout: IWorkout) => (
            <div
              key={workout.id}
              className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-[#191c22] p-5 md:flex-row md:items-center"
            >
              {/* IMAGE */}
              <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-2xl md:w-44">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* INFORMATION */}
              <div className="flex-1">
                {/* NAME */}
                <h2 className="text-xl font-bold text-white">{workout.name}</h2>

                {/* MUSCLE GROUPS */}
                <div className="mt-1 flex flex-wrap gap-2">
                  {workout.muscleGroups.map((muscle: string) => (
                    <span key={muscle} className="text-gray-400">
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* STATS */}
                <div className="mt-4 flex flex-wrap items-center gap-5">
                  {/* Duration */}
                  <div className="flex items-center gap-2 text-white">
                    <Clock size={18} className="text-lime-400" />
                    <span>{workout.duration} min</span>
                  </div>

                  {/* Calories */}
                  <div className="flex items-center gap-2 text-white">
                    <Flame size={18} className="text-lime-400" />
                    <span>{workout.caloriesBurned} kcal</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 text-white">
                    <Star size={18} className="text-lime-400" />
                    <span>{workout.rating}</span>
                  </div>

                  {/* Equipment */}
                  <div className="flex items-center gap-2 text-white">
                    <Dumbbell size={18} className="text-lime-400" />
                    <span>{workout.equipment}</span>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-3">
                {/* View Details */}
                <Link
                  href={`/workouts/${workout.id}`}
                  className="btn rounded-full border-gray-600 bg-transparent px-6 text-white hover:bg-gray-800"
                >
                  View Details
                </Link>

                {/* Mark Done */}
                {activeTab === "today" && (
                  <button
                    onClick={() => handleDone(workout.id)}
                    className="btn rounded-full border-0 bg-lime-400 px-6 text-black hover:bg-lime-300"
                  >
                    <Check size={18} />
                    Mark as Done
                  </button>
                )}

                {/* Remove */}
                <button
                  onClick={() => handleRemove(workout.id)}
                  className="btn btn-circle btn-ghost text-gray-400 hover:text-white"
                  title="Remove workout"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tabs;
