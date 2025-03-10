import { ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { useCart } from "@/context/cart-context";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export function CartPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 0; // Frete grátis
  const total = subtotal + shipping;

  return (
    <div className="bg-white min-h-screen">
      <div className="container py-6">
        <button
          onClick={handleGoBack}
          className="flex items-center text-[#67B99A] mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar
        </button>

        <h1 className="text-2xl font-bold text-[#FF9AA2] mb-6">Meu Carrinho</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
            <Link to="/">
              <Button className="bg-[#67B99A] hover:bg-[#5aa88a]">
                Continuar Comprando
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center border-b border-[#C7CEEA] py-4"
                >
                  <div className="w-20 h-20 rounded overflow-hidden mr-4 mb-3 sm:mb-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      fallback="https://via.placeholder.com/80"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-[#333333] mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[#67B99A] font-bold">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center mt-3 sm:mt-0">
                    <div className="flex items-center border border-[#C7CEEA] rounded mr-4">
                      <button
                        className="px-2 py-1 text-[#67B99A]"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="px-2 py-1">{item.quantity}</span>
                      <button
                        className="px-2 py-1 text-[#67B99A]"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-[#FF9AA2]"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FFDAC1] bg-opacity-20 p-4 rounded-lg">
              <h2 className="text-xl font-bold text-[#333333] mb-4">
                Resumo do Pedido
              </h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="text-[#67B99A]">Grátis</span>
                </div>
                <div className="border-t border-[#C7CEEA] pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#FF9AA2] hover:bg-[#ff8a94] text-white py-3 text-lg mb-3">
                Finalizar Compra
              </Button>

              <Link to="/">
                <Button
                  variant="outline"
                  className="w-full border-[#67B99A] text-[#67B99A] hover:bg-[#67B99A] hover:text-white"
                >
                  Continuar Comprando
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
