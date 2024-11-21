import { useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFavs, clearCartFavs } from "../../redux/actions";

import CartItem from "../../components/cart-item/CartItem";
import WhatsAppButton from "../../components/whatsapp-button/WhatsAppButton";
import { saveToLocalStorage } from "../../helpers";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartFavs);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (!storedCart) saveToLocalStorage("cart", []);
    dispatch(loadCartFavs("cart"));
  }, [dispatch]);

  const calculateTotal = () => {
    return cart && cart.length > 0
      ? cart.reduce((total, item) => total + item.priceArs * item.quantity, 0).toFixed(2)
      : "0.00";
  };

  const handleClearCart = () => {
    dispatch(clearCartFavs("cart"));
  };

  return (
    <div className="max-w-3xl p-4 mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-3xl font-semibold text-center">Mi Carrito</h2>

      {cart && cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-600">
          <ShoppingCart className="w-16 h-16 mb-4 text-gray-400" />
          <p className="mb-4 text-xl font-semibold">Tu carrito está vacío.</p>
          <p className="mb-6 text-gray-500">
            {`Para añadir productos, haz click en el botón de "Agregar al carrito" dentro del detalle
            del producto.`}
          </p>
          <Link to="/productos">
            <button className="px-6 py-3 text-white transition-all duration-300 bg-gray-500 rounded-full shadow hover:bg-gray-600">
              Explorar productos
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart && cart.length && cart.map((item) => <CartItem key={item.id} item={item} />)}
          </ul>

          <div className="flex justify-between pt-4 mt-6 text-xl font-semibold text-gray-700 border-t">
            <span>Total:</span>
            <span>ARS {calculateTotal()}</span>
          </div>

          <WhatsAppButton cartItems={cart} isCartPage={true} />

          <button
            onClick={handleClearCart}
            className="w-full py-2 mt-4 text-white transition-colors duration-300 bg-red-600 rounded-full hover:bg-red-700">
            Vaciar Carrito
          </button>

          <div className="mt-6 text-center text-gray-500">
            ¿Quieres descubrir más?{" "}
            <Link to="/productos" className="text-red-600 hover:underline">
              Explora otros productos de nuestra tienda aquí
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
