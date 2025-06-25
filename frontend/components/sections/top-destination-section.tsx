"use client";

import Image from "next/image";
import { ChevronRight, MapPin } from "lucide-react";
import React from "react";

import Welcome1 from "@/assets/images/welcome-1.png";

const topDestinations = [
  {
    name: "Kebun Jubung",
    location: "Sukorambi, Jember, Jawa Timur",
    image: Welcome1,
  },
  {
    name: "Air Terjun Tumpak Sewu",
    location: "Lumajang, Jawa Timur",
    image: Welcome1,
  },
  {
    name: "Pantai Papuma",
    location: "Jember, Jawa Timur",
    image: Welcome1,
  },
  {
    name: "Kebun Raya Bedugul",
    location: "Tabanan, Bali",
    image: Welcome1,
  },
  {
    name: "Gunung Bromo",
    location: "Probolinggo, Jawa Timur",
    image: Welcome1,
  },
  {
    name: "Pura Ulun Danu",
    location: "Baturiti, Bali",
    image: Welcome1,
  },
  {
    name: "Danau Beratan",
    location: "Bali",
    image: Welcome1,
  },
];

const TopDestinationSection = () => {
  return (
    <section className="w-full px-5 py-5 max-w-screen-xl mx-auto">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold">Place of Interest</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Discover hidden gems and breathtaking destinations across Indonesia, perfect for relaxing, exploring nature, and making unforgettable memories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gambar Besar di kiri */}
        <div className="flex flex-col items-start">
        <div className="relative w-full h-full max-h-[485px] rounded-2xl overflow-hidden group">
            <Image
            src={topDestinations[0].image}
            alt={topDestinations[0].name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-6">
            <h3 className="text-xl font-bold mb-2 text-center hover:underline transition">{topDestinations[0].name}</h3>
            <p className="text-sm text-center mb-4">
                Kebun Jubung adalah destinasi alam di Jember yang menawarkan keindahan hutan, udara segar, dan suasana asri untuk liburan keluarga maupun healing alami.
            </p>
            <button className="px-4 py-2 border border-white text-white rounded-lg text-sm hover:bg-white hover:text-black transition flex items-center gap-2">
                Read More
                <ChevronRight className="w-4 h-4" />
            </button>
            </div>

            {/* Lokasi di pojok bawah */}
            <div className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {topDestinations[0].location}
            </div>
        </div>
        </div>

        {/* Grid 6 gambar kecil di kanan */}
        <div className="grid grid-cols-3 gap-4 h-[500px]">
            {topDestinations.slice(1, 7).map((dest, index) => (
                <div key={index} className="flex flex-col items-start group">
                {/* Gambar dengan overlay */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                    <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                    <button className="px-4 py-2 border border-white text-white rounded-lg text-sm hover:bg-white hover:text-black transition flex items-center gap-2">
                        Read More
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    </div>
                </div>

                {/* Teks di bawah gambar */}
                <div className="mt-2">
                    <h4 className="text-xs font-semibold group-hover:underline transition ">{dest.name}</h4>
                    <div className="flex items-center text-[10px] text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {dest.location}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default TopDestinationSection;
