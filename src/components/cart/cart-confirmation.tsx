import { useState, useEffect } from "react";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { useCart } from "@/context/cart-context";

interface ProductDetails {
  id: number;
  name: string;
  price: number;
  image: string;
  options?: Record<string, string>;
}

export function CartConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const productDetails = (location.state?.productDetails as ProductDetails) || {
    id: 1,
    name: "Convite animado A Bela e a Fera",
    price: 25.0,
    image:
      "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=200&q=80",
    options: {
      "Remoção de créditos": "Não",
      "Foto ou vídeo": "Não",
      "Alteração de música": "Não",
      "Mensagem de confirmação": "Não",
      "Taxa de urgência": "Não",
      "Arte auxiliar em PDF": "Não",
    },
  };

  // Adicionar o produto ao carrinho quando a página carregar
  useEffect(() => {
    if (location.state?.productDetails) {
      addToCart(productDetails);
    }
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleViewCart = () => {
    navigate("/carrinho");
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  // Calcular preço total com base nas opções
  const calculateTotalPrice = () => {
    let total = productDetails.price;

    // Adicionar valores extras com base nas opções selecionadas
    if (productDetails.options) {
      if (productDetails.options["Remoção de créditos"] === "Sim") total += 10;
      if (productDetails.options["Foto ou vídeo"] === "Sim") total += 8;
      if (productDetails.options["Alteração de música"] === "Sim") total += 3;
      if (productDetails.options["Taxa de urgência"] === "Sim") total += 4;
      if (productDetails.options["Arte auxiliar em PDF"] === "Sim") total += 15;
    }

    return total;
  };

  const totalPrice = calculateTotalPrice();

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

        <div className="max-w-3xl mx-auto bg-[#FFDAC1] bg-opacity-20 p-6 rounded-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-[#67B99A] rounded-full p-3">
              <Check className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center text-[#FF9AA2] mb-2">
            Produto adicionado ao carrinho!
          </h1>

          <p className="text-center text-gray-600 mb-8">
            Seu produto foi adicionado ao carrinho com sucesso. Você pode
            continuar comprando ou finalizar sua compra agora.
          </p>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex items-start">
              <div className="w-24 h-24 rounded overflow-hidden mr-4">
                <Image
                  src={productDetails.image}
                  alt={productDetails.name}
                  className="w-full h-full object-cover"
                  fallback="https://via.placeholder.com/96"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-[#333333] mb-1">
                  {productDetails.name}
                </h3>
                <p className="text-[#67B99A] font-bold mb-2">
                  R$ {productDetails.price.toFixed(2)}
                </p>

                {productDetails.options &&
                  Object.entries(productDetails.options).length > 0 && (
                    <div className="mt-2">
                      <h4 className="text-sm font-medium text-[#333333] mb-1">
                        Opções selecionadas:
                      </h4>
                      <ul className="text-xs text-gray-600">
                        {Object.entries(productDetails.options).map(
                          ([option, value]) => (
                            <li
                              key={option}
                              className="flex justify-between mb-1"
                            >
                              <span>{option}:</span>
                              <span className="font-medium">{value}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-medium text-[#333333] mb-2">
              Resumo do pedido
            </h3>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal do produto:</span>
                <span>R$ {productDetails.price.toFixed(2)}</span>
              </div>

              {productDetails.options && (
                <>
                  {productDetails.options["Remoção de créditos"] === "Sim" && (
                    <div className="flex justify-between text-sm">
                      <span>Remoção de créditos:</span>
                      <span>R$ 10,00</span>
                    </div>
                  )}

                  {productDetails.options["Foto ou vídeo"] === "Sim" && (
                    <div className="flex justify-between text-sm">
                      <span>Adicionar foto ou vídeo:</span>
                      <span>R$ 8,00</span>
                    </div>
                  )}

                  {productDetails.options["Alteração de música"] === "Sim" && (
                    <div className="flex justify-between text-sm">
                      <span>Alteração de música:</span>
                      <span>R$ 3,00</span>
                    </div>
                  )}

                  {productDetails.options["Taxa de urgência"] === "Sim" && (
                    <div className="flex justify-between text-sm">
                      <span>Taxa de urgência:</span>
                      <span>R$ 4,00</span>
                    </div>
                  )}

                  {productDetails.options["Arte auxiliar em PDF"] === "Sim" && (
                    <div className="flex justify-between text-sm">
                      <span>Arte auxiliar em PDF:</span>
                      <span>R$ 15,00</span>
                    </div>
                  )}
                </>
              )}

              <div className="border-t border-[#C7CEEA] pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="flex-1 bg-[#FF9AA2] hover:bg-[#ff8a94] text-white py-3"
              onClick={handleViewCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Ver Carrinho
            </Button>

            <Button
              variant="outline"
              className="flex-1 border-[#67B99A] text-[#67B99A] hover:bg-[#67B99A] hover:text-white"
              onClick={handleContinueShopping}
            >
              Continuar Comprando
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
