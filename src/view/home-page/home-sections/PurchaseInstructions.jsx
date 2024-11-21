import { CircleCheckBig, SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PurchaseInstructions = () => (
  <section className="p-6 sm:p-12 md:p-20">
    <div className="px-8 py-12 transition-all duration-200 bg-red-50 font-poppins hover:shadow-md group">
      <h2 className="text-2xl font-semibold">¿Cómo realizar tu compra?</h2>
      <p className="my-6 font-medium">
        Nuestro e-commerce acepta pagos con cualquier tarjeta de crédito o débito. Sigue estos pasos
        para realizar tu compra:
      </p>
      <ul className="mx-12 space-y-6">
        <li className="flex gap-4">
          <CircleCheckBig strokeWidth={2.5} className="text-red-500" />
          Seleccionalos productos que deseas comprar y agrégalos al carrito.
        </li>
        <li className="flex gap-4">
          <CircleCheckBig strokeWidth={2.5} className="text-red-500" />
          Revisa el detalle de tu compra en el carrito.
        </li>
        <li className="flex gap-4">
          <CircleCheckBig strokeWidth={2.5} className="text-red-500" />
          Una vez listo, haz click en el botón que te llevará a nuestro WhatsApp.
        </li>
        <li className="flex gap-4">
          <CircleCheckBig strokeWidth={2.5} className="text-red-500" />
          En WhatsApp, se enviará el mensaje con el detalle de tu compra y te asistiremos en la
          transacción.
        </li>
        <li className="text-red-500 hover:text-red-600">
          <Link className="flex items-center gap-4">
            <SquareArrowOutUpRight strokeWidth={2.5} />
            Ver mas detalles
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default PurchaseInstructions;
