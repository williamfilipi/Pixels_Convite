import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CarouselIndicators } from "@/components/ui/carousel-indicators";

const Balloon = ({ color, size, delay, duration, left }) => {
  return (
    <div
      className="absolute animate-float-balloon"
      style={{
        left: `${left}%`,
        bottom: "-50px",
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <div
        className="rounded-full relative"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
        }}
      >
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-1 h-10 bg-gray-300"
          style={{ width: "2px" }}
        ></div>
      </div>
    </div>
  );
};

export function HeroSection() {
  const balloons = [
    { color: "#FF9AA2", size: 40, delay: 0, duration: 15, left: 10 },
    { color: "#FFDAC1", size: 30, delay: 2, duration: 18, left: 20 },
    { color: "#B5EAD7", size: 50, delay: 4, duration: 20, left: 30 },
    { color: "#C7CEEA", size: 35, delay: 1, duration: 17, left: 40 },
    { color: "#FFD166", size: 45, delay: 3, duration: 19, left: 50 },
    { color: "#FF9AA2", size: 25, delay: 5, duration: 16, left: 60 },
    { color: "#B5EAD7", size: 55, delay: 0, duration: 21, left: 70 },
    { color: "#FFDAC1", size: 35, delay: 2, duration: 18, left: 80 },
    { color: "#C7CEEA", size: 40, delay: 4, duration: 22, left: 90 },
  ];

  return (
    <div className="relative bg-white py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-2">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&q=80"
              alt="Logo Pixel Convites"
              className="h-14 mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold mb-1 text-[#FF9AA2]">
            PIXEL<span className="text-[#67B99A]">convites</span>
          </h1>
          <h2 className="text-xl font-bold text-[#67B99A] mb-2">
            Mais de 230 opções disponíveis!
          </h2>
          <p className="text-[#333333] max-w-3xl mx-auto mb-4 text-sm">
            Explore nossa coleção de convites digitais — simples, animados e
            interativos.
          </p>

          <div className="relative w-full max-w-2xl mx-auto mb-4">
            <div className="flex items-center border-2 border-[#B5EAD7] rounded-full bg-white overflow-hidden">
              <input
                type="text"
                placeholder="Digite aqui o tema da sua festa"
                className="w-full py-3 px-6 outline-none text-[#333333]"
              />
              <button className="bg-[#B5EAD7] p-3 rounded-full mr-2">
                <Search className="h-6 w-6 text-[#67B99A]" />
              </button>
            </div>
          </div>

          <div className="relative w-full h-20">
            {balloons.map((balloon, index) => (
              <Balloon key={index} {...balloon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Search(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}
