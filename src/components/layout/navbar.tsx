import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

export function Navbar() {
  const { cartCount } = useCart();
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#C7CEEA]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6 text-[#333333]" />
            <span className="sr-only">Menu</span>
          </Button>
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#FF9AA2]">PIXEL</span>
            <span className="text-lg text-[#67B99A] ml-1">convites</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 ml-6">
            <Link
              to="/produtos"
              className="text-sm font-medium hover:underline text-[#67B99A]"
            >
              Nossos Produtos
            </Link>
            <Link
              to="/sobre"
              className="text-sm font-medium hover:underline text-[#67B99A]"
            >
              Conheça Nossa História
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-[#67B99A]" />
            <span className="sr-only">Buscar</span>
          </Button>
          <Link to="/carrinho">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5 text-[#67B99A]" />
              <span className="sr-only">Carrinho</span>
              <span className="absolute -top-1 -right-1 bg-[#FF9AA2] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
