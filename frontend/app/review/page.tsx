"use client";

import React, { JSX, useState } from "react";
import { FaGoogle, FaFacebookF, FaTripadvisor, FaAmazon, FaCheckCircle } from "react-icons/fa";
import ReviewCard from "@/components/review-card"; // komponen review-card
//import { fetchReviews } from "@/lib/api-client"; // Menggunakan fungsi fetch dari lib
import { review } from "@/types"; // Import interface Review

// nanti kalau backend dah jadi
const getPlatformIcon = (platform: string): JSX.Element => {
  switch (platform.toLowerCase()) {
    case 'google': return <FaGoogle className="text-xl text-blue-500" />;
    case 'facebook': return <FaFacebookF className="text-xl text-blue-700" />;
    case 'tripadvisor': return <FaTripadvisor className="text-xl text-green-500" />;
    case 'amazon': return <FaAmazon className="text-xl text-orange-500" />;
    default: return <FaCheckCircle className="text-xl text-gray-500" />; // Default icon
  }
};

// Data dummy untuk ditampilkan
const DUMMY_REVIEWS: review[] = [
  {
    id: 1, // ID unik
    name: "Ahmad Budi",
    platform: "Google", // String platform, akan di-map ke ikon
    text: "Pelayanannya sangat cepat dan memuaskan! Produk yang saya terima juga sesuai deskripsi. Pasti akan order lagi.",
    time: "2 jam yang lalu",
    icon: getPlatformIcon("Google"), // Panggil fungsi helper di sini
  },
  {
    id: 2,
    name: "Siti Rahayu",
    platform: "Facebook",
    text: "Barang bagus, sesuai harapan. Pengiriman agak lama tapi kualitas terjamin. Terima kasih!",
    time: "Kemarin",
    icon: getPlatformIcon("Facebook"),
  },
  {
    id: 3,
    name: "Michael Tan",
    platform: "Tripadvisor",
    text: "Pengalaman yang luar biasa! Antarmuka mudah digunakan dan fitur-fitur sangat membantu. Sangat direkomendasikan.",
    time: "3 hari yang lalu",
    icon: getPlatformIcon("Tripadvisor"),
  },
  {
    id: 4,
    name: "Linda Wijaya",
    platform: "Amazon",
    text: "Produk yang kokoh dan fungsional. Sangat cocok untuk kebutuhan saya. Bintang lima!",
    time: "1 minggu yang lalu",
    icon: getPlatformIcon("Amazon"),
  },
  {
    id: 5,
    name: "Rio Pratama",
    platform: "Lainnya", // Contoh platform lain
    text: "Cukup baik, ada beberapa hal yang perlu ditingkatkan tapi secara keseluruhan oke.",
    time: "2 minggu yang lalu",
    icon: getPlatformIcon("Lainnya"),
  },
];

export default function ReviewListPage() {
  const [reviews, setReviews] = useState<review[]>(DUMMY_REVIEWS);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function loadReviews() {
//       try {
//         setLoading(true);
//         const data = await fetchReviews(); // Memanggil fungsi dari API client

//         // Memproses data untuk menyertakan komponen ikon yang sesuai
//         const processedReviews: review[] = data.map((review: any) => ({ // data: any karena dari API belum pasti sama persis
//             id: review.id, // Asumsikan ada ID dari backend
//             name: review.name,
//             platform: review.platform,
//             text: review.text,
//             time: review.time,
//             icon: getPlatformIcon(review.platform) // Mapping platform string ke JSX.Element
//         }));
//         setReviews(processedReviews);
//       } catch (err: any) {
//         console.error("Error fetching reviews:", err);
//         setError(err.message || "Gagal memuat review. Silakan coba lagi nanti.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadReviews();
//   }, []);

  //if (loading) return <div className="text-center p-8">Memuat review...</div>;
  //if (error) return <div className="text-center p-8 text-red-500">{error}</div>;
  if (reviews.length === 0) return <div className="text-center p-8">Belum ada review.</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold whitespace-nowrap">
          All Reviews <span className="text-yellow-500">4.8</span> {/* Nanti ini bisa dihitung dinamis */}
        </h2>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-lg">
          <span className="flex items-center gap-1"><FaGoogle /> 4.7</span>
          <span className="flex items-center gap-1"><FaFacebookF /> 4.9</span>
          <span className="flex items-center gap-1"><FaTripadvisor /> 4.8</span>
          <span className="flex items-center gap-1"><FaAmazon /> 5.0</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} /> // Menggunakan review.id sebagai key
        ))}
      </div>
    </div>
  );
}