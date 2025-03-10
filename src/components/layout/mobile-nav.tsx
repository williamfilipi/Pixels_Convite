import { Home, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/cart-context";

export function MobileNav() {
  const { cartCount } = useCart();
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-[#B5EAD7] md:hidden">
      <div className="grid h-full grid-cols-3">
        <Link
          to="/"
          className="flex flex-col items-center justify-center text-[#67B99A]"
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Loja</span>
        </Link>
        <Link
          to="/carrinho"
          className="flex flex-col items-center justify-center text-[#67B99A] relative"
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute top-1 right-[calc(50%-12px)] bg-[#FF9AA2] text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
            {cartCount}
          </span>
          <span className="text-xs mt-1">Carrinho</span>
        </Link>
        <Link
          to="/minha-conta"
          className="flex flex-col items-center justify-center text-[#67B99A]"
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Minha conta</span>
        </Link>
      </div>
    </div>
  );
}
