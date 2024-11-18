import { ChevronLeft, ChevronRight } from "lucide-react";

const ImagesArrowButton = ({ product, onClick, index }) => {
  return (
    product.images &&
    product.images.length > 1 && (
      <>
        {index > 0 && (
          <button
            onClick={(e) => onClick(e, "prev")}
            className="absolute top-0 left-0 h-full p-2 hover:bg-gray-800/50"
          >
            <ChevronLeft className="text-white" />
          </button>
        )}
        {index < product.images.length - 1 && (
          <button
            onClick={(e) => onClick(e, "next")}
            className="absolute top-0 right-0 h-full p-2 hover:bg-gray-800/50"
          >
            <ChevronRight className="text-white" />
          </button>
        )}
      </>
    )
  );
};
export default ImagesArrowButton;
