"use client";

import Image from "next/image";
import React from "react";
import Landscape from "@/assets/images/landscape.png";

const VirtualTourSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-4 md:px-10">
      <div className="mx-auto max-w-4xl">
        {/* Konten Teks */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-left">Let’s Stroll Around</h2>

          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-x-8 mb-8">
            <p className="text-gray-700 text-base">
              Temukan keindahan tersembunyi Kebun Jubung melalui pengalaman virtual yang memukau sebelum kamu menjelajahi langsung tempat aslinya.
            </p>
            <a
              href="#"
              className="text-blue-600 text-sm font-semibold hover:underline transition mt-2 md:mt-0 whitespace-nowrap"
            >
              View 360°
            </a>
          </div>
        </div>

        {/* Gambar preview */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src={Landscape}
            alt="Virtual Tour Preview"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
