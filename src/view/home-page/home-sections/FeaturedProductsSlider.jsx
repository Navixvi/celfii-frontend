import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProductsSlider = ({ products }) => {
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute -left-10 z-10 transition-transform duration-300 ease-in-out transform cursor-pointer top-[180px] sm:top-[180px] lg:top-[150px] hover:scale-125"
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-gray-700 md:w-8 md:h-8 hover:text-gray-900" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute -right-10 z-10 transition-transform duration-300 ease-in-out transform cursor-pointer top-[180px] lg:top-[150px] hover:scale-125"
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-gray-700 md:w-8 md:h-8 hover:text-gray-900" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative p-6 mt-20 sm:p-12 md:p-20">
      <h2 className="mb-2 text-xl font-semibold md:mb-8 md:mx-4 md:text-2xl">
        Nuestros productos seleccionados
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="flex flex-col items-center justify-center px-4 py-8 m-auto mb-4 transition-transform duration-300 ease-in-out transform max-w-72 md:mb-10 hover:scale-105 hover:shadow-md">
            <div className="relative w-full flex items-center justify-center overflow-hidden transition-all duration-300 transform bg-white border aspect-[3/4]">
              <img
                src={product.images[0].url}
                alt={product.name}
                className={`object-cover max-w-[${product.images[0].width}px] max-h-[${product.images[0].height}px]`}
              />
              </div>
              <h3 className="w-full mt-4 text-sm text-center text-gray-500 truncate font-poppins">
                {product.name}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ARS {product.priceArs}
              </p>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedProductsSlider;
