import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFavs, loadProducts } from "../../redux/actions";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "../../helpers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


import Cards from "../../components/cards/Cards";
import Filter from "../../components/filter/Filter";
import SearchBar from "../../components/searchbar/SearchBar";
import Pagination from "../../components/pagination/Pagination";
import { ListFilter } from "lucide-react";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const { categoria } = useParams();
  const { favourites } = useSelector((state) => state.cartFavs);
  const { products, totalItems, loading } = useSelector((state) => state.products);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    page: 1,
    perPage: 54,
    name: "",
    sort: "newest",
    category: categoria || "",
    price: { min: "", max: "" },
    ...loadFromLocalStorage("filters"),
  });

  const title = categoria
    ? `${categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase()} (${totalItems})`
    : `Todos los productos (${totalItems})`;

  const updateFilters = (newFilters) => {
    const { category, ...updatedFilters } = { ...filters, ...newFilters, page: 1 };
    setFilters({ category, ...updatedFilters });
    saveToLocalStorage("filters", { ...updatedFilters });
    const urlFilters = (({ name, page }) => ({ name, page }))({
      ...updatedFilters,
    });
    const searchParams = new URLSearchParams(
      Object.fromEntries(
        Object.entries(urlFilters).filter(
          ([, value]) => value !== "" && value !== null && value !== undefined
        )
      )
    );
    navigate({
      pathname: `/productos${category ? `/${category}` : ""}`,
      search: searchParams.toString(),
    });
  };

  const updatePagintation = (newPage) => {
    setFilters({ ...filters, ...newPage });
    saveToLocalStorage("filters", { ...filters, ...newPage });
    const urlFilters = (({ name, page }) => ({ name, page }))({ ...filters, ...newPage });
    const searchParams = new URLSearchParams(
      Object.fromEntries(
        Object.entries(urlFilters).filter(
          ([, value]) => value !== "" && value !== null && value !== undefined
        )
      )
    );
    navigate({
      pathname: `/productos${filters.category ? `/${filters.category}` : ""}`,
      search: searchParams.toString(),
    });
  };

  const updateSearch = (newFilters) => {
    const updatedFilters = {
      page: 1,
      perPage: 54,
      name: newFilters.name,
      sort: "newest",
      category: "",
      price: { min: "", max: "" },
    };
    setFilters(updatedFilters);
    removeFromLocalStorage("filters");
    saveToLocalStorage("filters", updatedFilters);
    const urlFilters = (({ name, page }) => ({ name, page }))({ ...updatedFilters });
    const searchParams = new URLSearchParams(
      Object.fromEntries(
        Object.entries(urlFilters).filter(
          ([, value]) => value !== "" && value !== null && value !== undefined
        )
      )
    );
    navigate({
      pathname: "/productos",
      search: searchParams.toString(),
    });
  };

  const hasValidProps = (obj) => {
    for (let key in obj) {
      if ((key === "category" || key === "price") && obj[key] !== "")
        if (typeof obj[key] === "object" && obj[key] !== null) {
          if (Object.values(obj[key]).some((val) => val || val === 0)) return true;
        } else return true;
    }
    return false;
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    setFilters((prev) => ({
      ...prev,
      name: queryParams.get("name") || "",
      page: parseInt(queryParams.get("page")) || 1,
      category: categoria || "",
    }));
  }, [search, categoria]);

  useEffect(() => {
    dispatch(loadProducts(filters));
    dispatch(loadCartFavs("favorites"));
  }, [dispatch, filters]);

  return (
    <div className="px-5 py-4 my-5 md:mx-10">
      <div className="flex flex-wrap items-center justify-between gap-8 mb-10 font-medium md:gap-10">
        <h2 className="w-full text-2xl lg:text-3xl lg:w-auto">{title}</h2>
        <div className="flex items-center justify-between w-full gap-6 lg:w-auto lg:justify-end">
          <button className="flex items-center gap-2" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <ListFilter />
            <span className="hidden sm:block">{isFilterOpen ? "Ocultar" : "Mostrar"} filtros</span>
            <span className="sm:hidden">Filtros</span>
            <div
              className={`w-2 h-2 rounded-full ${hasValidProps(filters) ? "bg-red-500" : "hidden"}`}
            />
          </button>
          <SearchBar onSearch={(name) => updateSearch({ name })} variant="card" />
        </div>
      </div>

      <div className="relative flex gap-5">
        <aside
          className={`z-30 absolute top-0 left-0 bg-white transform transition-all ${
            isFilterOpen ? "translate-x-0 w-screen md:w-80" : "-translate-x-80 w-0"
          } h-[calc(100vh-250px)] overflow-visible transition-width duration-300`}>
          <Filter updateFilters={updateFilters} filters={filters} isOpen={isFilterOpen} />
        </aside>
        <div
          className={`w-full flex-1 transition-all duration-300 ${
            isFilterOpen ? "ml-80" : "ml-0"
          }`}>
          {loading ? (
            <div className="grid grid-cols-3 gap-x-10 gap-y-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>
                    <Skeleton height={100} borderRadius={0} />
                    <div className="mt-4">
                      <Skeleton width="80%" height={20} borderRadius={0} />
                      <Skeleton width="60%" height={20} borderRadius={0} />
                    </div>
                  </div>
                ))}
            </div>
          ) : products.length === 0 ? (
            <p>No se encontraron productos.</p>
          ) : (
            <div>
              <Cards products={products} favourites={favourites} isFilterOpen={isFilterOpen} />
              <Pagination
                currentPage={filters.page}
                totalPages={Math.ceil(totalItems / filters.perPage)}
                onPageChange={(newPage) => updatePagintation({ page: newPage })}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
