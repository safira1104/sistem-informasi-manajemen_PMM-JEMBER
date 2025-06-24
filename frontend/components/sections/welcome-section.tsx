"use client";
import { Playfair_Display } from "next/font/google";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Welcome1 from "@/assets/images/welcome-1.png";
import Welcome2 from "@/assets/images/welcome-2.png";
import Welcome3 from "@/assets/images/welcome-3.png";
import Welcome4 from "@/assets/images/welcome-4.png";
import Welcome5 from "@/assets/images/welcome-5.png";
import SearchBar from "./search-bar";
import ThumbnailSliderCard from "./cards/thumbnail-slider-card";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const slides = [
  {
    image: Welcome1,
    text: "Your visit supports the preservation of Kebun Jubung's natural beauty",
  },
  {
    image: Welcome2,
    text: "To enhance the experience, safety, and comfort of every visitor",
  },
  {
    image: Welcome3,
    text: "Together, let's move towards sustainable community-based eco-tourism",
  },
  {
    image: Welcome4,
    text: "To preserve the cultural and ecological heritage of Kebun Jubung for future generations",
  },
  {
    image: Welcome5,
    text: "To preserve the cultural and ecological heritage of Kebun Jubung for future generations",
  },
];

const WelcomeSection = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className={`relative flex min-h-screen items-center justify-center overflow-hidden ${playfair.className}`}>
      {/* Background Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-black"
      >
        <Image
          src={slides[index].image}
          alt={`Welcome ${index + 1}`}
          fill
          className="object-fit"
        />
      </motion.div>

      {/* Input Search di Tengah Atas */}
      <div className="absolute top-10 w-full z-30">
        <SearchBar />
      </div>

      {/* Teks */}
      <motion.div
        key={slides[index].text}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute items-center left-10 z-20 max-w-xl text-white text-left"
        style={{
          textShadow: `
            2px 2px 6px rgba(0, 0, 0, 0.6),
            4px 4px 10px rgba(0, 0, 0, 0.8),
            0px 0px 30px rgba(0, 0, 0, 0.9)
          `,
        }}
      >
        <h1 className="text-4xl md:text-4xl font-bold">
          {slides[index].text}
        </h1>
      </motion.div>

        <ThumbnailSliderCard
          slides={slides}
          activeIndex={index}
          onSelect={(i) => setIndex(i)}
        />
      {/* Dots Manual */}
      <div className="absolute bottom-10 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default WelcomeSection;
