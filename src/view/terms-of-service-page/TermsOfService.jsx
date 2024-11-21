import { sections } from "./constants";

const TermsOfService = () => {
  return (
    <div className="max-w-3xl p-6 mx-auto mt-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-4xl font-semibold text-gray-800">Términos de Servicio</h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">{section.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;
