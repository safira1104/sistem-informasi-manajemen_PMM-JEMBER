"use client";

import Image from "next/image";
import React from "react";

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = React.useState("");

  React.useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const end = new Date(targetDate).getTime();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft("Sedang berlangsung");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const formatted = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
      setTimeLeft(formatted);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000); // update setiap detik
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-500 bg-opacity-70 text-white text-xs px-3 py-1 rounded-full shadow-md">
      {timeLeft}
    </div>
  );
}

type EventCardProps = {
  name: string;
  image: string;
  startDate: string;
  endDate: string;
};

export default function EventCard({
  name,
  image,
  startDate,
  endDate,
}: EventCardProps) {
  return (
    <div className="w-[280px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="relative px-3 pt-3">
        <Image
          src={image}
          alt={name}
          width={250} // atau 100% pakai layout="responsive"
          height={160}
          className="rounded-lg object-cover mx-auto"
        />
        <Countdown targetDate={endDate} />
      </div>
      <div className="px-5 pb-4 pt-3 text-sm">
        <p className="text-black font-medium text-xs">
          {new Date(startDate)
            .toLocaleString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
            .replace(/,/g, "")}{" "}
          -{" "}
          {new Date(endDate)
            .toLocaleString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
            .replace(/,/g, "")}
        </p>
        <h3 className="mt-2 text-green-700 font-semibold text-base hover:underline cursor-pointer transition-all duration-200">{name}</h3>
      </div>
    </div>
  );
}