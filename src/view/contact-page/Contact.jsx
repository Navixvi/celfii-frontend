import { Phone } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { socialMediaIcons } from "../../components/footer/menu";
import SocialIcons from "../../components/footer/SocialIcons";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contacto") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="max-w-3xl p-6 mx-auto mt-8 space-y-6">
      <h2 className="mb-4 text-4xl font-semibold text-gray-800">Contáctanos</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.
        Estaremos encantados de asistirte.
      </p>

      <h3 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Información de Contacto</h3>
      <p className="text-lg text-gray-700">WhatsApp: +54 9 2604 54-5982</p>
      <a
        href="https://wa.me/5492604545982"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-green-600 transition hover:text-green-700"
      >
        <Phone size={24} />
        <span className="text-lg font-semibold">Enviar mensaje por WhatsApp</span>
      </a>
      <p className="text-lg text-gray-700">Email: cel-fii@cel-fii.com</p>
      <p className="text-lg text-gray-700">
        Dirección: Av. Ing. Julio Balloffet 1488, M5600 San Rafael, Mendoza{" "}
      </p>
      <p className="text-lg text-gray-700">Encuéntranos en la siguiente dirección:</p>

      <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">Seguinos en las Redes</h3>
      <SocialIcons icons={socialMediaIcons} customClass="text-gray-700 hover:text-blue-600" />
      
      <div className="mt-8 border shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.79326208388!2d-68.35480043034727!3d-34.62506699473024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679081e37b0ae6d%3A0xab19bb885c203d96!2sCel-Fii!5e0!3m2!1ses-419!2sar!4v1729162892037!5m2!1ses-419!2sar"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Cel-Fii"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
