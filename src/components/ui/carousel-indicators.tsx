import React from "react";
import { cn } from "@/lib/utils";

interface CarouselIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSelect: (index: number) => void;
  className?: string;
}

export function CarouselIndicators({
  totalSlides,
  currentSlide,
  onSelect,
  className,
}: CarouselIndicatorsProps) {
  return (
    <div
      className={cn("flex items-center justify-center gap-2 mt-4", className)}
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={cn(
            "w-3 h-3 rounded-full transition-all",
            currentSlide === index ? "bg-primary" : "bg-muted",
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
