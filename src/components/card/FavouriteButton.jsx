import { Heart } from "lucide-react";

const FavouriteButton = ({ isHover, isFavourite, onClick }) => {
  return (
    <div
      className={`absolute top-0 right-4 w-10 h-12 transition-transform duration-300 overflow-hidden flex items-center ${
        isHover ? "translate-y-0" : "-translate-y-12"
      }`}
    >
      <div
        onClick={onClick}
        className={`h-full w-full rounded-bl-md rounded-br-md flex items-center cursor-pointer justify-center ${
          isHover ? "bg-red-600 hover:bg-red-600" : "bg-red-600"
        }`}
      >
        <Heart
          className="transition-transform duration-300"
          fill={isFavourite ? "#7f1d1d" : "white"}
          stroke={0}
        />
      </div>
    </div>
  );
};
export default FavouriteButton;
