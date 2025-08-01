import { CheckCircle, Bot } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  // Función para manejar el clic del botón de WhatsApp
  const handleWhatsAppClick = () => {
    const phoneNumber = "525637677719";
    const message = "Hola, quiero info y cotización de su chatbot.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-neutral-50 to-neutral-100 flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 xl:gap-16 items-center">
        {/* Text Content */}
        <div className="text-left lg:text-left order-1 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-neutral-800 font-extrabold text-shadow-md leading-tight mb-4 sm:mb-6">
            Convierte visitantes en clientes con chatbots que trabajan por ti{" "}
            <span className="text-blue-600 text-shadow-md">24/7</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-base xl:text-lg text-neutral-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Atiende clientes al instante, genera más ventas y ahorra tiempo con
            un chatbot personalizado para WhatsApp o tu sitio web.{" "}
          </p>

          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            <li className="flex items-center text-neutral-700 text-sm sm:text-base justify-start lg:justify-start">
              <CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
              Responde múltiples clientes al mismo tiempo
            </li>
            <li className="flex items-center text-neutral-700 text-sm sm:text-base justify-start lg:justify-start">
              <CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
              Ahorra tiempo en tareas repetitivas
            </li>
            <li className="flex items-center text-neutral-700 text-sm sm:text-base justify-start lg:justify-start">
              <CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
              Se adapta a tu negocio y estilo de comunicación
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-start lg:justify-start">
            {" "}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 w-auto sm:w-auto px-6 py-3 bg-green-600 text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-green-700 transition duration-300 shadow-md cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              Solicita cotización
            </button>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 w-auto sm:w-auto px-6 py-3 bg-transparent text-blue-600 hover:text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-blue-600 border border-blue-600 transition duration-300 shadow-md cursor-pointer"
            >
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              Demo online
            </a>
          </div>
        </div>

        {/* Visual / Illustration */}
        <div className="flex justify-center items-center order-2 lg:order-2">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              src="/Hero-bot.png"
              alt="Chatbot illustration"
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}