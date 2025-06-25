"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export default function EventSliderControls({ onPrev, onNext }: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <button onClick={onPrev} className="p-2 bg-white rounded-md shadow-2xl border border-black">
          <ChevronLeft />
        </button>
        <button onClick={onNext} className="p-2 bg-white rounded-md shadow-2xl border border-black">
          <ChevronRight />
        </button>
      </div>
      <button className="text-blue-600 hover:underline text-sm whitespace-nowrap">
        See All
      </button>
    </div>
  );
}
