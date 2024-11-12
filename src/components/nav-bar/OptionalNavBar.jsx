import { Search } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const OptionalNavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      name: "Accesorio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQk9VQwgAicbc2qfmTG-9_4A4IEWPS7v50fw&s",
    },
    {
      name: "Repuesto",
      image:
        "https://static.landkit.engeni.com/assets/2649/7a51a2c2-be1f-407f-ac9d-50d8cf89af35/1e3194e2acff4a5399c6.jpg",
    },
    {
      name: "Equipos",
      image: "https://www.cronista.com/files/image/419/419139/61d3378d218ac.jpg",
    },
    {
      name: "Otros",
      image:
        "https://electronicaonline.net/wp-content/uploads/2024/05/Historia-de-la-Electronica.jpg",
    },
  ];

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      localStorage.removeItem("selectedCategory");
      localStorage.removeItem("sortOrder");
      localStorage.removeItem("minPrice");
      localStorage.removeItem("maxPrice");

      const params = new URLSearchParams({
        page: 1,
        perPage: 54,
        name: searchTerm,
        category: "",
        sort: "newest",
        minPrice: "",
        maxPrice: "",
      });

      navigate(`/productos?${params.toString()}`);
    }
  };

  const handleCategoryClick = (category) => {
    localStorage.removeItem("sortOrder");
    localStorage.removeItem("minPrice");
    localStorage.removeItem("maxPrice");

    localStorage.setItem("selectedCategory", category);

    const params = new URLSearchParams({
      page: 1,
      perPage: 54,
      category: category,
      sort: "newest",
      minPrice: "",
      maxPrice: "",
    });

    navigate(`/productos?${params.toString()}`);
    window.scrollTo(0, 0);
  };

  return (
    pathname === "/" && (
      <div className="w-2/3 px-10 absolute left-1/2 transform -translate-x-1/2 bg-white shadow-md h-16 rounded-[10px] hidden md:flex md:items-center md:justify-between z-50">
        <ul className="hidden lg:flex lg:gap-x-4">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                to="/productos"
                onClick={() => handleCategoryClick(category.name)}
                className="pr-4 font-medium transition-all duration-200 border-r text-md text-secondary hover:text-primary"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <form className="w-full relative flex gap-x-[10px] lg:w-fit">
          <label className="flex items-center justify-center group">
            <Search />
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Buscar..."
            className="w-full outline-none lg:w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-200"
          />
        </form>
      </div>
    )
  );
};

export default OptionalNavBar;
