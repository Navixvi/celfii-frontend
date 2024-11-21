import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";

const ResponsiveMenuButton = ({ links }) => (
  <Disclosure as="div" className="md:hidden">
    {({ open }) => (
      <>
        <DisclosureButton className="ml-2">
          <span className="sr-only">Abrir menú principal</span>
          {open ? (
            <X className="block w-6 h-6 hover:no-underline" aria-hidden="true" />
          ) : (
            <Menu className="block w-6 h-6" aria-hidden="true" />
          )}
        </DisclosureButton>
        <DisclosurePanel className="absolute left-0 z-10 transition-all duration-300 bg-white top-15 w-50">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {links.map((item) => (
              <li key={item.name} className="text-white">
                <a
                  href={item.link}
                  className="block px-4 py-2 text-lg font-medium text-black transition-colors rounded-md hover:bg-red-500 hover:text-white"
                >
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

export default ResponsiveMenuButton;
