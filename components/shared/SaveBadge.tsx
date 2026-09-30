"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { BookmarkCheck } from "lucide-react";

import { WorkoutsContext } from "@/context/WorkoutsProvider";

const SaveBadge = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error(
      "SaveBadge must be used inside WorkoutsProvider"
    );
  }

  const { savedWorkouts } = context;

  return (
    <Link
      href="/my-plan"
      className="group flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-zinc-800"
    >
      <div className="relative">
        <BookmarkCheck className="h-6 w-6 text-lime-400 transition group-hover:scale-110" />

        {savedWorkouts.length > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1 text-xs font-bold text-black">
            {savedWorkouts.length}
          </span>
        )}
      </div>

      <span className="hidden font-semibold text-white sm:block">
        Saved
      </span>
    </Link>
  );
};

export default SaveBadge;