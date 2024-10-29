import { DisclosureButton } from "@headlessui/react";
import { Menu, X } from "lucide-react";

const MobileMenuButton = () => (
  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white-400 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="sr-only">Abrir menú principal</span>
      <Menu className="block h-6 w-6 group-data-[open]:hidden" aria-hidden="true" />
      <X className="hidden h-6 w-6 group-data-[open]:block" aria-hidden="true" />
    </DisclosureButton>
  </div>
);

export default MobileMenuButton;
