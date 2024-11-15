import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCartFavs, updateCart } from "../../redux/actions";
import QuantityCounter from "../../components/counter/QuantityCounter";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <li
      key={item.id}
      className="flex flex-col sm:flex-row items-center sm:justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow space-y-4 sm:space-y-0 sm:space-x-4">
      
      <img
        src={item.images[0].url}
        alt={item.images[0].altText}
        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
      />

      <div className="flex-1 text-center sm:text-left">
        <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
        <p className="text-gray-600">ARS {item.priceArs}</p>
      </div>

      <div className="flex items-center">
        <QuantityCounter
          initialQuantity={quantity}
          maxQuantity={item.stock}
          onChange={(newQuantity) => {
            setQuantity(newQuantity);
            dispatch(updateCart("cart", { ...item, quantity: newQuantity }));
          }}
        />
      </div>

      <button
        onClick={() => dispatch(removeCartFavs("cart", item))}
        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors mt-2 sm:mt-0">
        Eliminar
      </button>
    </li>
  );
};

export default CartItem;
