"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";

interface Slide {
  image: StaticImageData;
  text: string;
}

interface ThumbnailSliderCardProps {
  slides: Slide[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const ThumbnailSliderCard: React.FC<ThumbnailSliderCardProps> = ({
  slides,
  activeIndex,
  onSelect,
}) => {
  const maxVisible = 3;
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [slidingOutIndex, setSlidingOutIndex] = useState<number | null>(null);

  const [thumbnailOrder, setThumbnailOrder] = useState<number[]>(
    slides.map((_, i) => i).filter((i) => i !== activeIndex)
  );

  useEffect(() => {
    setThumbnailOrder((prevOrder) => {
      const filtered = prevOrder.filter((i) => i !== activeIndex);
      return [...filtered, activeIndex];
    });
  }, [activeIndex]);

  useEffect(() => {
    if (visibleStartIndex > thumbnailOrder.length - maxVisible) {
      setVisibleStartIndex(
        Math.max(0, thumbnailOrder.length - maxVisible)
      );
    }
  }, [thumbnailOrder, visibleStartIndex]);

  const handleClick = (clickedIndex: number) => {
    // Trigger animasi sebelum ganti slide
    setSlidingOutIndex(clickedIndex);
    onSelect(clickedIndex);

    const posInOrder = thumbnailOrder.findIndex((i) => i === clickedIndex);

    if (posInOrder >= visibleStartIndex + maxVisible) {
      setVisibleStartIndex((prev) =>
        Math.min(prev + 1, thumbnailOrder.length - maxVisible)
      );
    } else if (posInOrder < visibleStartIndex) {
      setVisibleStartIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const visibleIndexes = thumbnailOrder.slice(
    visibleStartIndex,
    visibleStartIndex + maxVisible
  );

  return (
    <div className="absolute bottom-24 right-10 z-30 flex gap-4 overflow-hidden">
      {visibleIndexes.map((slideIndex) => {
        const isSlidingOut =
          slidingOutIndex !== null && slideIndex < slidingOutIndex;

        return (
          <button
            key={slideIndex}
            onClick={() => handleClick(slideIndex)}
            className={`overflow-hidden rounded-lg shadow-lg border-2 border-transparent hover:border-white transition-all duration-300 ${
              isSlidingOut ? "animate-slide-left" : ""
            }`}
          >
            <Image
              src={slides[slideIndex].image}
              alt={`Slide ${slideIndex + 1}`}
              width={150}
              height={180}
              className="object-cover w-[150px] h-[180px] hover:scale-105 transition-transform duration-300 drop-shadow-xl"
            />
          </button>
        );
      })}
    </div>
  );
};

export default ThumbnailSliderCard;
