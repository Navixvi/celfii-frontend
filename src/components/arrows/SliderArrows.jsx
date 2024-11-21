import { ChevronLeft, ChevronRight } from "lucide-react";

export const SliderPrevArrow = ({ onClick }) => (
  <div
    className="absolute z-10 transition-transform duration-300 ease-in-out transform cursor-pointer -left-4 sm:-left-2 md:-left-10 top-48 md:top-1/3 hover:scale-125"
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6 text-gray-700 md:w-8 md:h-8 hover:text-gray-900" />
  </div>
);

export const SliderNextArrow = ({ onClick }) => (
  <div
    className="absolute z-10 transition-transform duration-300 ease-in-out transform cursor-pointer -right-4 sm:-right-2 md:-right-10 top-48 md:top-1/3 hover:scale-125"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6 text-gray-700 md:w-8 md:h-8 hover:text-gray-900" />
  </div>
);
