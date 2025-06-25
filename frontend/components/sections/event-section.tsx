"use client";

import React, { useState } from "react";
import EventCard from "./cards/event-card";
import EventSliderControls from "./cards/event-slider-controls";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    name: "Festival Kopi Kebun Jubung",
    image: "https://picsum.photos/400/250?random=1",
    startDate: "2025-06-25T10:00:00",
    endDate: "2025-06-27T18:00:00",
  },
  {
    id: 2,
    name: "Pameran Flora dan Fauna",
    image: "https://picsum.photos/400/250?random=2",
    startDate: "2025-06-28T08:00:00",
    endDate: "2025-06-29T16:00:00",
  },
  {
    id: 3,
    name: "Kuliner Malam Kebun Jubung",
    image: "https://picsum.photos/400/250?random=3",
    startDate: "2025-07-01T17:00:00",
    endDate: "2025-07-01T22:00:00",
  },
  {
    id: 4,
    name: "Kuliner Malam Kebun Jubung",
    image: "https://picsum.photos/400/250?random=4",
    startDate: "2025-07-01T17:00:00",
    endDate: "2025-07-01T22:00:00",
  },
];

export default function EventSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const visibleEvents = events.slice(index, index + 2);

  const nextSlide = () => {
    if (index + 2 < events.length) {
      setDirection(1);
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  return (
    <section className="w-full px-4 md:px-10 py-10">
      <div className="flex justify-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Whats on Kebun Jubung</h2>
            <p className="text-gray-600">
              Looking for fun and inspiration this week? Explore the latest
              happenings and activities at Kebun Jubung!
            </p>
          </div>

          <EventSliderControls onPrev={prevSlide} onNext={nextSlide} />

          {/* Animasi geser dua card */}
          <div className="overflow-hidden">
            <motion.div
              key={index} // trigger re-render & animation
              className="flex space-x-4"
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {visibleEvents.map((event) => (
                <EventCard
                  key={event.id}
                  name={event.name}
                  image={event.image}
                  startDate={event.startDate}
                  endDate={event.endDate}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
