import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#C7CEEA] bg-opacity-20 text-[#333333] border-t border-[#B5EAD7]">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF9AA2]">
              PIXEL<span className="text-[#67B99A]">convites</span>
            </h3>
            <p className="text-sm mb-4">
              Transformamos cada história e momento em uma experiência
              inesquecível com nossos convites personalizados.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/pixelconvites"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF9AA2]"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com/pixelconvites"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF9AA2]"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="mailto:contato@pixelconvites.com.br"
                className="hover:text-[#FF9AA2]"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF9AA2]">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/produtos"
                  className="hover:underline hover:text-[#67B99A]"
                >
                  Nossos Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="hover:underline hover:text-[#67B99A]"
                >
                  Conheça Nossa História
                </Link>
              </li>
              <li>
                <Link
                  to="/como-comprar"
                  className="hover:underline hover:text-[#67B99A]"
                >
                  Como Comprar
                </Link>
              </li>
              <li>
                <Link
                  to="/depoimentos"
                  className="hover:underline hover:text-[#67B99A]"
                >
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF9AA2]">
              Contato
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#67B99A]" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#67B99A]" />
                <span>contato@pixelconvites.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#B5EAD7] mt-8 pt-6 text-center text-xs">
          <p>
            © {new Date().getFullYear()} PIXEL convites. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
