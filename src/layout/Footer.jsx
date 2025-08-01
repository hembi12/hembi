// src/layout/Footer.jsx
import { Facebook, Instagram, Mail, MessageSquare, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Hembi Bots</h2>
          <p>
            Automatiza tu atención al cliente con chatbots inteligentes para Web y WhatsApp. Servicio rápido, sin código y personalizado.
          </p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="font-semibold text-white mb-3">Enlaces</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Inicio</a></li>
            <li><a href="/privacy-policy" className="hover:text-white transition">Política de Privacidad</a></li>
            <li><a href="/terms-of-service" className="hover:text-white transition">Términos de Servicio</a></li>
            <li><a href="/data-deletion" className="hover:text-white transition">Eliminación de Datos</a></li>
          </ul>
        </div>

        {/* Contacto & redes */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contacto</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <a href="mailto:hello@hembibots.com" className="hover:text-white transition">hello@hembibots.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <a href="https://wa.me/5219999999999" className="hover:text-white transition">WhatsApp</a>
            </li>
          </ul>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white"><Twitter size={18} /></a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-xs mt-10 text-slate-500">
        &copy; {new Date().getFullYear()} Hembi Bots. Todos los derechos reservados.
      </div>
    </footer>
  );
}