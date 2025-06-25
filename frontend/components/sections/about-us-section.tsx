"use client";

import Image from "next/image";
import React from "react";
import Landscape from "@/assets/images/landscape.png"; // jika pakai import statis

const AboutUsSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Kebun Jubung</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-8">
          Kebun Jubung merupakan destinasi wisata alam yang terletak di Kecamatan Sukorambi, Jember. Tempat ini menawarkan pesona alam yang asri, udara segar, dan keindahan hutan yang cocok untuk aktivitas rekreasi keluarga maupun healing. Selain itu, Kebun Jubung juga menjadi tempat favorit untuk fotografi alam, trekking ringan, dan menikmati ketenangan suasana pedesaan.
        </p>

        {/* Placeholder untuk video: pakai gambar landscape */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src={Landscape}
            alt="Video Placeholder"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
