import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ImageCarousel = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const maxVisibleImages = 4;
  const extraImages = images.length - maxVisibleImages;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className="relative flex items-center justify-center w-full overflow-hidden transition-all duration-300 transform bg-white border cursor-pointer aspect-square"
        onClick={() => openModal(currentIndex)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].altText || "Imagen del producto"}
          className="object-cover w-full h-full"
        />

        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 p-2 transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}>
            <ChevronLeft className="text-white" />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 p-2 transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}>
            <ChevronRight className="text-white" />
          </button>
        )}
      </div>

      <div className="flex mt-4 space-x-2">
        {images.slice(0, maxVisibleImages).map((image, index) => (
          <div
            key={index}
            className="relative w-20 h-20 overflow-hidden bg-gray-100 border-2 border-transparent cursor-pointer hover:border-blue-500"
            onClick={() => {
              setCurrentIndex(index);
              if (index === maxVisibleImages - 1 && extraImages > 0) {
                openModal(index);
              }
            }}>
            <img
              src={image.url}
              alt={image.altText || `Imagen ${index + 1}`}
              className="object-cover w-full h-full"
            />
            {index === maxVisibleImages - 1 && extraImages > 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-lg text-white bg-black bg-opacity-50 font-semisemibold">
                +{extraImages}
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}>
          <button
            className="absolute text-2xl font-semibold text-white top-4 right-4"
            onClick={closeModal}>
            <X />
          </button>
          <div
            className="relative w-full max-w-2xl overflow-hidden bg-white h-96"
            onClick={(e) => e.stopPropagation()}>
            {currentIndex > 0 && (
              <button
                className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 left-4 top-1/2"
                onClick={prevImage}>
                <ChevronLeft />
              </button>
            )}
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].altText || `Imagen ${currentIndex + 1}`}
              className="object-contain w-full h-full"
            />
            {currentIndex < images.length - 1 && (
              <button
                className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full right-4 top-1/2"
                onClick={nextImage}>
                <ChevronRight />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
