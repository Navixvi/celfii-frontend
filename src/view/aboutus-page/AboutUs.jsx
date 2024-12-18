import video from '../../assets/celfii-video.mp4'

const AboutUs = () => {
  return (
    <div className="max-w-3xl p-6 mx-auto mt-8">
      <h2 className="mb-6 text-4xl font-semibold text-gray-800">Sobre Nosotros</h2>

      <h3 id="mision-y-vision" className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
        Misión y Visión
      </h3>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        Nuestra misión es proporcionar productos de alta calidad a precios accesibles, asegurando la
        satisfacción total de nuestros clientes. Queremos ser el líder en la venta de dispositivos
        móviles y accesorios en la región.
      </p>

      <h3 id="equipo-de-trabajo" className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
        Equipo de Trabajo
      </h3>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        Contamos con un equipo de profesionales dedicados que están siempre listos para ayudarte.
        Nuestros técnicos especializados en reparación de celulares garantizan un servicio rápido y
        eficiente.
      </p>

      <h3 id="servicios-ofrecidos" className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
        Servicios Ofrecidos
      </h3>
      <ul className="mb-4 space-y-2 text-lg text-gray-700 list-disc list-inside">
        <li>Venta de celulares de última generación</li>
        <li>Reparación de dispositivos móviles</li>
        <li>Venta de accesorios y repuestos</li>
        <li>Asesoría en tecnología móvil</li>
      </ul>

      <h3 id="horario-de-atencion" className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
        Horario de Atención
      </h3>
      <p className="text-lg leading-relaxed text-gray-700">
        Lunes a Viernes: <span className="font-semibold">9:00 - 13:00 y 16:45 - 20:45 </span>
        <br />
        Sábados: <span className="font-semibold">9:30 - 13:00 </span>
      </p>
      <video
        className="w-full mt-16"
        controls
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutUs;
