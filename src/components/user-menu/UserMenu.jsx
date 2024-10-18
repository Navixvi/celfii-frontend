import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";
import { logoutUser } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import logoLocal from "../../assets/logo-local.jpg";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">Abrir menú usuario</span>
          <img className="w-8 h-8 rounded-full" src={logoLocal} alt="" />
        </MenuButton>
      </div>
      <MenuItems className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem>
          {({ active }) => (
            <Link
              to="perfil"
              className={classNames(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700"
              )}
            >
              Perfil
            </Link>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <Link
              to="configuracion"
              className={classNames(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700"
              )}
            >
              Configuración
            </Link>
          )}
        </MenuItem>
        {userData && (
          <MenuItem>
            {({ active }) => (
              <Link
                to="login"
                onClick={() => dispatch(logoutUser())}
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Cerrar sesión
              </Link>
            )}
          </MenuItem>
        )}
      </MenuItems>
    </Menu>
  );
};
export default UserMenu;