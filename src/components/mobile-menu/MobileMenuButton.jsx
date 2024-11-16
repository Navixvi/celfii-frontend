import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";

const MobileMenuButton = ({ links }) => (
  <Disclosure as="div" className="md:hidden">
    {({ open }) => (
      <>
        <DisclosureButton className="ml-2">
          <span className="sr-only">Abrir menú principal</span>
          {open ? (
            <X className="block h-6 w-6 hover:no-underline" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </DisclosureButton>
        <DisclosurePanel className="absolute top-15 left-0 z-10 w-50 bg-white transition-all duration-300">
          <ul className="flex flex-col gap-4 py-4 px-6">
            {links.map((item) => (
              <li key={item.name} className="text-white">
                <a
                  href={item.link}
                  className="block px-4 py-2 text-lg font-medium text-black rounded-md hover:bg-red-500 hover:text-white transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </DisclosurePanel>
      </>
    )}
  </Disclosure>
);

export default MobileMenuButton;
