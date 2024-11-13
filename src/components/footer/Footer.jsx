import { socialMediaIcons } from "./menu";

import SocialIcons from "./SocialIcons";
import ItemsContainer from "./ItemsContainer";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className="bg-black mt-60">
      {!pathname.startsWith("/product") && !pathname.startsWith("/admin") && (
        <div className="p-8 text-center bg-gray-50 sm:p-12 md:py-20 md:px-24 lg:py-32 lg:px-40">
          <p className="text-lg font-medium md:text-xl">Estamos aquí para ti</p>
          <h3 className="my-5 text-2xl font-semibold md:text-3xl lg:text-4xl font-poppins">
            ¿Tienes Preguntas?
          </h3>
          <p className="px-4 text-sm font-medium leading-relaxed sm:px-12 md:px-16 lg:px-32 xl:px-40">
            En Cel-Fii, valoramos tu experiencia y queremos asegurarnos de que tengas toda la
            información que necesitas. Si tienes alguna pregunta sobre nuestros productos, servicios
            o cualquier otro tema, no dudes en contactarnos a través de WhatsApp. Nuestro equipo
            está disponible para ayudarte y responder a tus inquietudes de manera rápida y
            eficiente. ¡Escríbenos y hablemos!
          </p>
          <button className="px-6 py-3 mt-8 text-sm rounded-full primary-btn md:text-base">
            Abrir Chat
          </button>
        </div>
      )}
      <div className="px-20 2xl:px-0">
        <ItemsContainer />
        <div className="container flex items-center justify-between pt-2 pb-8 text-sm text-center text-gray-400">
          <span>
            &copy; {new Date().getFullYear()} Cel-Fii. Todos los derechos reservados.
            Terminos・Políticas de privacidad
          </span>
          <SocialIcons icons={socialMediaIcons} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
