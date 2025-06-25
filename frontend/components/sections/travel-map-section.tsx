"use client";

import Image from "next/image";
import React from "react";
import MapImage from "@/assets/images/potrait.png"; // Gambar potret denah wisata

const TravelMapSection = () => {
  return (
    <section className="w-full px-4 md:px-10 py-16 bg-white">
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row gap-8 items-start">
        {/* Gambar di kiri */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md">
            <Image
              src={MapImage}
              alt="Travel Map"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Konten teks di kanan */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4">Denah Wisata</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Jelajahi Kebun Jubung dengan mudah melalui denah wisata ini. Temukan area menarik seperti taman bunga, spot kuliner, tempat istirahat, dan jalur trekking. Denah ini akan memudahkanmu merencanakan perjalanan dan menikmati setiap sudut keindahan alam yang ditawarkan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelMapSection;
