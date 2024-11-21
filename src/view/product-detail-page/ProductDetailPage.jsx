import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadCartFavs, loadProduct, loadProducts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";
import ProductDetail from "../../components/product-detail/ProductDetail";
import FeaturedProductsSlider from "../../view/home-page/home-sections/FeaturedProductsSlider";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { favourites, cart } = useSelector((state) => state.cartFavs);
  const { product, loading, error } = useSelector((state) => state.products);
  const { products } = useSelector((state) => state.products);

  const featuredProducts = products.slice(0, 10);
  const isFavourite = favourites ? favourites?.some((fav) => fav.id === product?.id) : false;

  const phoneNumber = "+5492604545982";
  const message = `¡Hola! Quería consultar por el producto ${product.name}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    dispatch(loadCartFavs());
    dispatch(loadProduct(id));
    dispatch(loadProducts());
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  if (error) return <p>Error al cargar detalles del producto: {error}</p>;

  return (
    <div className="relative py-28">
      <div className="container mx-auto">
        {loading && (
          <div className="flex flex-col gap-6 md:flex-row">
            <Skeleton height={500} width={500} borderRadius={0} />
            <div className="flex flex-col flex-1 gap-2">
              <Skeleton height={30} width="70%" borderRadius={0} />
              <Skeleton height={30} width="50%" borderRadius={0} />
              <Skeleton height={30} width="20%" />
              <Skeleton height={30} width={100} borderRadius={0} />
            </div>
          </div>
        )}
        {!loading && (
          <ProductDetail
            product={product}
            cart={cart}
            isFavourite={isFavourite}
            whatsappLink={whatsappLink}
          />
        )}
        
        <div className="p-12 my-20 bg-gray-100">
          <h3 className="text-xl font-semibold text-center">
            ¿Tienes preguntas sobre este producto?
          </h3>
          <p className="mt-2 text-center text-gray-600">
            Si tienes alguna duda, ¡estamos para ayudarte! Puedes contactarnos directamente por
            WhatsApp.
          </p>
          <button
            onClick={() => window.open(whatsappLink, "_blank")}
            className="w-full px-4 py-2 mt-4 font-semibold text-center text-white transition bg-green-500 hover:bg-green-700"
          >
            Contáctanos por WhatsApp
          </button>
        </div>

        {featuredProducts.length > 0 ? (
          <FeaturedProductsSlider products={featuredProducts} />
        ) : (
          <p>Cargando productos destacados...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
