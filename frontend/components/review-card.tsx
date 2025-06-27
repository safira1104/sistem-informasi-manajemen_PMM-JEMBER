import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle } from "react-icons/fa";
import { Review } from "@/types"; // Import interface Review

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-xl">{review.icon}</span>
            <p className="font-medium">{review.name}</p>
            <FaCheckCircle className="text-blue-500" />
          </div>
          <span className="text-sm text-gray-500">{review.time}</span>
        </div>
        {/* Anda bisa membuat komponen Rating bintang dinamis di sini */}
        <p className="text-yellow-400">★★★★★</p>
        <p className="mt-2 text-sm text-gray-700">{review.text}</p>
      </CardContent>
    </Card>
  );
}