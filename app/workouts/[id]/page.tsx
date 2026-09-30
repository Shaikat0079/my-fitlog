import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { IWorkout } from "@/Types/workout.type";
import SavedWorkoutsButton from "@/components/workoutButtons/SavedWorkoutsButton";
import TodayWorkoutsButton from "@/components/workoutButtons/TodayWorkoutsButton";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (id: string): Promise<IWorkout> => {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  // Workout doesn't exist
  if (response.status === 404) {
    notFound();
  }

  // Other errors
  if (!response.ok) {
    throw new Error(`Failed to fetch workout: ${response.status}`);
  }

  const data: IWorkout = await response.json();

  return data;
};

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-[#0f1014] px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* BACK */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-lime-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to workouts
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* IMAGE */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl sm:h-[600px] lg:h-[780px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* DETAILS */}
          <div>
            {/* NAME */}
            <h1 className="text-4xl font-black uppercase sm:text-5xl">
              {workout.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 text-gray-300">{workout.description}</p>

            {/* MUSCLE GROUPS */}
            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-4 py-1.5 text-sm font-medium text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* INFORMATION */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-[#1b1e24]">
              <InfoRow label="EQUIPMENT" value={workout.equipment} />

              <InfoRow label="DIFFICULTY" value={workout.difficulty} />

              <InfoRow label="SETS" value={String(workout.sets)} />

              <InfoRow label="REPS" value={workout.reps} />

              <InfoRow label="DURATION" value={`${workout.duration} min`} />

              <InfoRow
                label="CALORIES"
                value={`${workout.caloriesBurned} kcal`}
              />

              <InfoRow label="RATING" value={String(workout.rating)} last />
            </div>

            {/* INSTRUCTIONS */}
            <section className="mt-8">
              <h2 className="text-2xl font-bold uppercase">Instructions</h2>

              <ol className="mt-4 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-3 text-gray-200">
                    <span className="font-semibold text-lime-400">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <TodayWorkoutsButton workout={workout} />

              <SavedWorkoutsButton workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
  last?: boolean;
}

const InfoRow = ({ label, value, last = false }: InfoRowProps) => {
  return (
    <div
      className={`grid grid-cols-2 px-4 py-4 ${
        !last ? "border-b border-zinc-800" : ""
      }`}
    >
      <span className="text-sm font-bold text-gray-300">{label}</span>

      <span className="text-sm text-white">{value}</span>
    </div>
  );
};

export default WorkoutDetailsPage;
