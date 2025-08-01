import { Facebook, Instagram, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-sm sm:text-base">
        {/* Brand Info */}
        <div className="text-left lg:col-span-1">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
            Hembi
          </h2>
          <p className="leading-relaxed max-w-md text-neutral-100">
            Automatiza tu negocio con chatbots inteligentes para Web
            y WhatsApp. Servicio rápido, generan leads y ahorran tiempo.
          </p>
        </div>

        {/* Contacto */}
        <div className="text-left lg:col-span-1">
          <h3 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">
            Contacto
          </h3>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-center gap-3 sm:gap-4 justify-start">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-2 rounded-lg flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Email
                </p>
                <a
                  href="mailto:contacto@hembi.com"
                  className="text-neutral-100 hover:text-cyan-500 hover:underline transition-colors duration-200 text-sm sm:text-base"
                >
                  contacto@hembi.com
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3 sm:gap-4 justify-start">
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-2 rounded-lg flex-shrink-0">
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/525637677719"
                  className="text-neutral-100 hover:text-green-500 hover:underline transition-colors duration-200 text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +52 56 3767 7719
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3 sm:gap-4 justify-start">
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-2 rounded-lg flex-shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Ubicación
                </p>
                <p className="text-neutral-100 text-sm sm:text-base">
                  Ciudad de México, México
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 sm:gap-4 justify-start">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 p-2 rounded-lg flex-shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Horarios
                </p>
                <p className="text-neutral-100 text-sm sm:text-base">
                  Lun - Vie: 9:00 - 18:00
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="text-left sm:col-span-2 lg:col-span-1">
          <h3 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">
            Síguenos
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4 justify-start">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg flex-shrink-0">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Facebook
                </p>
                <a
                  href="#"
                  className="text-neutral-100 hover:text-blue-500 hover:underline transition-colors duration-200 text-sm sm:text-base"
                >
                  @HembiBots
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 justify-start">
              <div className="bg-gradient-to-br from-pink-400 to-pink-700 p-2 rounded-lg flex-shrink-0">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Instagram
                </p>
                <a
                  href="#"
                  className="text-neutral-100 hover:text-pink-500 hover:underline transition-colors duration-200 text-sm sm:text-base"
                >
                  @hembi.bots
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 justify-start">
              <div className="bg-gradient-to-br from-gray-700 to-black p-2 rounded-lg flex-shrink-0">
                <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Twitter
                </p>
                <a
                  href="#"
                  className="text-neutral-100 hover:text-sky-500 hover:underline transition-colors duration-200 text-sm sm:text-base"
                >
                  @HembiBots
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-8 pt-6 border-t border-neutral-500">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-neutral-300">
          <div>
            &copy; {new Date().getFullYear()} Hembi. Todos los derechos
            reservados.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="/privacy-policy"
              className="hover:text-white hover:underline transition-colors duration-200"
            >
              Política de Privacidad
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-white hover:underline transition-colors duration-200"
            >
              Términos de Servicio
            </a>
            <a
              href="/data-deletion"
              className="hover:text-white hover:underline transition-colors duration-200"
            >
              Eliminación de Datos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
