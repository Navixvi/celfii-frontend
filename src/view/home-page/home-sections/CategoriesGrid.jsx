import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadCategories } from "../../../redux/actions";

const CategoriesGrid = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const selectedCategories = categories ? categories.slice(0, 5) : [];

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <section className="container flex flex-wrap justify-center gap-24 my-24">
      {selectedCategories.map((category) => (
        <Link
          key={category.name}
          to={`/productos/${category.name.toLowerCase()}`}
          onClick={() => {
            localStorage.setItem("selectedCategory", category.name);
            window.scrollTo(0, 0);
          }}>
          <div className="text-center transition-transform duration-300 hover:text-primary">
            <img
              src={category.image}
              alt={category.name}
              className="w-36 h-36 sm:w-48 sm:h-48 border rounded-xl border-gray-100 object-cover transition-transform duration-300 hover:shadow-lg hover:scale-105"
            />
            <h3 className="mt-5 font-medium">{category.name}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CategoriesGrid;
