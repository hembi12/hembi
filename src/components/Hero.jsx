// components/Hero.jsx
import { Bot, CheckCircle, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-screen h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Automatiza tu negocio con{" "}
            <span className="text-cyan-400">Chatbots inteligentes</span>
          </h1>
          <p className="text-lg text-slate-300 mb-6">
            Creamos chatbots personalizados para tu sitio web o WhatsApp que
            atienden clientes, generan leads y ahorran tiempo.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="text-cyan-400 w-5 h-5 mr-2" />
              Disponible 24/7 para tus clientes
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-cyan-400 w-5 h-5 mr-2" />
              Integración con WhatsApp, Web o Messenger
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-cyan-400 w-5 h-5 mr-2" />
              Sin necesidad de conocimientos técnicos
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              ¡Quiero mi chatbot!
            </a>
            <a
              href="#demo"
              className="flex items-center text-cyan-300 hover:text-cyan-400 transition font-medium"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Ver demo en vivo
            </a>
          </div>
        </div>

        {/* Visual / Illustration */}
        <div className="flex justify-center">
          <Bot className="w-64 h-64 text-cyan-400 drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
}