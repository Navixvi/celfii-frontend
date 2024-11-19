import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadCartFavs, loadProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


import ProductDetail from "../../components/product-detail/ProductDetail";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { favourites, cart } = useSelector((state) => state.cartFavs);
  const { product, loading, error } = useSelector((state) => state.products);

  const isFavourite = favourites ? favourites?.some((fav) => fav.id === product?.id) : false;

  useEffect(() => {
    dispatch(loadCartFavs());
    dispatch(loadProduct(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="relative max-w-6xl p-6 mx-auto mt-2 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Esqueleto de imagen */}
          <Skeleton height={300} width={300} />
          {/* Esqueleto de detalles */}
          <div className="flex-1">
            <Skeleton height={40} width="70%" />
            <Skeleton height={20} width="50%" className="mt-2" />
            <Skeleton height={150} className="mt-4" />
            <div className="mt-4 flex gap-4">
              <Skeleton height={40} width={100} />
              <Skeleton height={40} width={100} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <p>Error al cargar detalles del producto: {error}</p>;

  return (
    <div className="relative max-w-6xl p-6 mx-auto mt-2 bg-white rounded-lg shadow-lg">
      <ProductDetail product={product} cart={cart} isFavourite={isFavourite} />
    </div>
  );
};

export default ProductDetailPage;
