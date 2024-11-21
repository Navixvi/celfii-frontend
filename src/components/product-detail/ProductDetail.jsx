import { useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartFavs, removeCartFavs } from "../../redux/actions";

import QuantityCounter from "../counter/QuantityCounter";
import ImageCarousel from "../../components/image-carousel/ImageCarousel";

const ProductDetail = ({ product, cart, isFavourite, whatsappLink }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const item = cart && cart.find((item) => item.id === product.id);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    if (isFavourite) {
      dispatch(removeCartFavs("favourites", product));
      toast.info("Producto eliminado de favoritos");
    } else {
      dispatch(addCartFavs("favourites", product));
      toast.success("Producto agregado a favoritos");
    }
  };

  const handleCartClick = (product) => {
    const newQuantity = item && item.length ? item.quantity + product.quantity : product.quantity;
    if (newQuantity <= product.stock) {
      dispatch(addCartFavs("cart", product));
      toast.success("Producto agregado al carrito");
    } else toast.error(`Has alcanzado el límite de stock, no puedes agregar más productos.`);
  };

  return (
    <>
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          {product.images && product.images.length > 0 ? (
            <ImageCarousel images={product.images} />
          ) : (
            <p>No hay imágenes disponibles para este producto.</p>
          )}
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <span className="my-4 text-lg font-medium text-gray-400">{product.category? product.category.name : ""}</span>
          <span className="mb-4 text-2xl font-semibold text-gray-700">ARS {product.priceArs}</span>
          {item && item.quantity >= product.stock ? (
            <button
              onClick={() => handleCartClick({ ...product, quantity })}
              disabled={item && item.quantity >= product.stock}
              className="px-4 py-2 mt-4 text-white transition bg-gray-500 rounded"
            >
              Sin stock
            </button>
          ) : (
            <>
              {product.stock <= 1 ? (
                product.stock < 1 ? (
                  <span className="px-3 py-1 text-lg font-semibold">Sin stock</span>
                ) : (
                  <span className="px-3 py-1 text-lg font-semibold">1 unidad</span>
                )
              ) : (
                <QuantityCounter
                  initialQuantity={quantity}
                  maxQuantity={product.stock}
                  onChange={(newQuantity) => setQuantity(newQuantity)}
                  cartQuantity={item ? item.quantity : 0}
                />
              )}
              <div className="mt-4">
                {product.stock === 0 ? (
                  <button
                    onClick={() => window.open(whatsappLink, "_blank")}
                    className="w-full p-4 font-medium text-white transition bg-green-500 hover:bg-green-700"
                  >
                    Consultar disponibilidad por WhatsApp
                  </button>
                ) : (
                  <button
                    onClick={() => handleCartClick({ ...product, quantity })}
                    disabled={item && item.quantity >= product.stock}
                    className="w-full p-4 mt-4 font-medium text-white transition bg-black hover:bg-red-500"
                  >
                    + Agregar al carrito
                  </button>
                )}
              </div>
            </>
          )}
          {cart && cart.length ? (
            <Link
              to="/cart"
              className="p-4 mt-4 font-medium text-center text-gray-600 transition bg-gray-100 hover:bg-gray-200"
            >
              Ver Carrito
            </Link>
          ) : null}
          <hr className="mt-10" />
          <div className="flex-1 my-6">
            <h3 className="mb-2 text-xl font-semibold">Descripción</h3>
            <p className="mt-4 text-gray-500 whitespace-pre-line">{product.description}</p>
          </div>
        </div>
        <button onClick={toggleFavourite} className="absolute top-0 right-2">
          <Heart
            size={28}
            stroke={0}
            fill={isFavourite ? "#de3f3f" : "#d6d6d6"}
            className="hover:fill-red-500"
          />
        </button>
      </div>
    </>
  );
};
export default ProductDetail;
