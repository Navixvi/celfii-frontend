import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartFavs, removeCartFavs } from "../../redux/actions";

import FavouriteButton from "./FavouriteButton";
import ImagesArrowButton from "./ImagesArrowButton";

const Card = ({ product, favourites }) => {
  const dispatch = useDispatch();
  const isFavourite = favourites?.some((fav) => fav.id === product.id);
  const [isHover, setIsHover] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleToggleFavourite = (e) => {
    e.stopPropagation();
    if (isFavourite) {
      dispatch(removeCartFavs("favourites", product));
      toast.info("Producto eliminado de favoritos", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      dispatch(addCartFavs("favourites", product));
      toast.success("Producto agregado a favoritos", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleArrowImage = (e, arrow) => {
    e.stopPropagation();
    if (arrow === "prev")
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
    if (arrow === "next")
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
  };

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative w-full overflow-hidden transition-all duration-300 ease-in-out cursor-pointer sm:max-w-[300px] sm:mx-auto">
      <div
        className={`relative w-full flex items-center justify-center overflow-hidden transition-all duration-300 transform bg-white border aspect-[3/4] ${
          isHover ? "shadow-md" : ""
        } sm:aspect-square sm:rounded-md`}>
        {product.images && product.images[0] && (
          <Link to={`/product/${product.id}`}>
            <img
              className={`object-cover max-w-[${product.images[0].width}px] max-h-[${product.images[0].height}px]`}
              src={product.images[currentImageIndex].url}
              alt={product.images[currentImageIndex].altText || product.name}
              width={product.images[currentImageIndex].width}
              height={product.images[currentImageIndex].height}
            />
          </Link>
        )}
        <ImagesArrowButton
          product={product}
          onClick={handleArrowImage}
          index={currentImageIndex}
          className="hidden sm:flex"
        />
      </div>
      <Link to={`/product/${product.id}`}>
        <div className="h-20 mt-4 font-poppins">
          <h3 className="text-sm md:text-lg text-gray-500 truncate">{product.name}</h3>
          <p className="mt-1 text-xs md:text-lg font-medium text-gray-900">${product.priceArs}</p>
          <div className={`relative h-5 overflow-hidden text-center`}>
            <div
              className={`absolute w-full transition-transform duration-300 text-left bot-0 ${
                isHover ? "sm:translate-y-0" : "sm:-translate-y-12"
              }`}>
              <span className="text-xs md:text-lg text-red-500">{product.category.name}</span>
            </div>
          </div>
        </div>
      </Link>

      <FavouriteButton
        isHover={isHover}
        isFavourite={isFavourite}
        onClick={handleToggleFavourite}
      />
    </div>
  );
};

export default Card;
