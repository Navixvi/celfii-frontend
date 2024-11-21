import { Wrench, Package, ShoppingBag, MessageCircleReply } from "lucide-react";

const FeaturesSection = () => {
  const featuresData = [
    {
      icon: <ShoppingBag size={30} />,
      title: "Compra Fácil y Rápida",
      description:
        "Selecciona los productos que deseas comprar y agrégales al carrito para un proceso de compra rápido y sin complicaciones.",
    },
    {
      icon: <Package size={30} />,
      title: "Consulta de Stock Disponible",
      description:
        "Verifica fácilmente la disponibilidad de productos en nuestro stock. Siempre estarás informado sobre lo que tenemos disponible antes de realizar tu compra.",
    },
    {
      icon: <MessageCircleReply size={30} />,
      title: "Asistencia en WhatsApp",
      description:
        "Una vez listo, haz clic en el botón para contactarnos a través de WhatsApp, donde recibirás asistencia personalizada para finalizar tu compra.",
    },
    {
      icon: <Wrench size={30} />,
      title: "Reparaciones de Dispositivos",
      description:
        "Además de productos, también aceptamos reparaciones. Comunícate con nosotros para más información sobre nuestros servicios de reparación.",
    },
  ];

  return (
    <section className="relative p-6 mt-20 sm:p-12 md:p-20">
      <div className="flex flex-wrap justify-center my-24">
        <h2 className="pt-20 text-2xl font-semibold text-center border-t-8 border-primary">
          ¿Por Qué Elegir Cel-Fii?
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-center md:justify-between">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="shadow-md group hover:bg-[0_0] bg-custom-gradient bg-no-repeat bg-[0_0.63rem] flex flex-col items-center w-full gap-4 px-8 py-12 bg-white lg:w-[48%] 2xl:w-1/5 transition-all duration-200"
          >
            <div className="flex items-center justify-center w-16 h-16 text-white bg-red-500 rounded-full">
              <div className="flex items-center justify-center transition-all duration-200 border-4 border-red-500 rounded-full group-hover:p-5">
                {feature.icon}
              </div>
            </div>
            <h3 className="my-3 text-xl font-semibold">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="absolute w-full py-30 bg-primary -z-10 top-1/2" />
    </section>
  );
};

export default FeaturesSection;
