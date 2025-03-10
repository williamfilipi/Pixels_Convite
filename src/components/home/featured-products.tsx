import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Convite animado Jardim das abelhinhas",
    price: 75.0,
    image:
      "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?w=400&q=80",
    path: "/produto/jardim-abelhinhas",
  },
  {
    id: 2,
    name: "Convite animado O Pequeno Príncipe",
    price: 75.0,
    image:
      "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=400&q=80",
    path: "/produto/pequeno-principe",
  },
  {
    id: 3,
    name: "Convite animado Bosque Encantado",
    price: 75.0,
    image:
      "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=400&q=80",
    path: "/produto/bosque-encantado",
  },
  {
    id: 4,
    name: "Convite animado Festa Unicórnio",
    price: 75.0,
    image:
      "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=400&q=80",
    path: "/produto/unicornio",
  },
];

export function FeaturedProducts({
  title = "Nossos Convites",
}: {
  title?: string;
}) {
  return (
    <section className="py-6 bg-[#FFFFFF]">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-[#FF9AA2]">{title}</h2>

          {title === "Convites Mais Populares" && (
            <div className="relative w-64 hidden md:block">
              <div className="flex items-center border-2 border-[#B5EAD7] rounded-full bg-white overflow-hidden">
                <input
                  type="text"
                  placeholder="Buscar convites"
                  className="w-full py-2 px-4 outline-none text-[#333333] text-sm"
                />
                <button className="bg-[#B5EAD7] p-2 rounded-full mr-1">
                  <Search className="h-4 w-4 text-[#67B99A]" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#C7CEEA]"
            >
              <Link to={product.path} className="block relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
              </Link>
              <div className="p-3">
                <Link to={product.path} className="block">
                  <h3 className="text-xs sm:text-sm font-medium text-[#333333] mb-1 line-clamp-2 h-8">
                    {product.name}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-[#67B99A] mb-2">
                    R$ {product.price.toFixed(2)}
                  </p>
                </Link>
                <Link to={`/produto/${product.id}`}>
                  <Button
                    className="w-full bg-[#FF9AA2] hover:bg-[#ff8a94] text-white text-xs py-1 h-8"
                    size="sm"
                  >
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Adicionar
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
