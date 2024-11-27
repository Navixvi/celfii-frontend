import logo from "../../assets/logo-celfii2.png";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

import CartButton from "../buttons/CartButton";
import OptionalNavBar from "./OptionalNavBar";
import ResponsiveMenuButton from "./ResponsiveMenu";

const NavBar = () => {
  const links = [
    { name: "Productos", link: "/productos?page=1", current: false },
    { name: "Reparaciones", link: "/reparaciones", current: false },
    { name: "Nosotros", link: "/nosotros", current: false },
    { name: "Contacto", link: "/contacto", current: false },
  ];

  return (
    <nav className="z-10">
      <div className="flex items-center justify-between py-4 md:mx-12">
        <div className="mr-14 md:hidden">
          <div className="p-2 text-2xl">
            <ResponsiveMenuButton links={links} />
          </div>
        </div>
        <div>
          <Link to="/">
            <img alt="Cel-Fii" src={logo} className="w-auto h-12" />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {links.map((item) => (
              <li
                key={item.name}
                className="inline-block px-3 py-1 font-semibold duration-200 hover:text-primary">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/favourites"
            className="p-0 text-2xl duration-200 rounded-full hover:bg-primary hover:text-white">
            <Heart />
          </Link>
          <CartButton />
        </div>
      </div>
      <OptionalNavBar />
    </nav>
  );
};
export default NavBar;
