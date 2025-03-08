import { useState } from "react";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export function ProductDetail() {
  const navigate = useNavigate();
  const [removeCredits, setRemoveCredits] = useState("não");
  const [wantsPdfArt, setWantsPdfArt] = useState("não");
  const [pdfOptions, setPdfOptions] = useState({
    confirmPresence: false,
    directions: false,
    giftSuggestion: false,
  });

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    // Lógica para adicionar ao carrinho
    alert("Produto adicionado ao carrinho!");
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna da imagem */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=600&q=80"
              alt="Convite Animado A Bela e a Fera"
              className="w-full h-auto"
            />
            <div className="grid grid-cols-3 gap-2 mt-2">
              <img
                src="https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=200&q=80"
                alt="Miniatura 1"
                className="w-full h-24 object-cover rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=200&q=80"
                alt="Miniatura 2"
                className="w-full h-24 object-cover rounded"
              />
              <img
                src="https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=200&q=80"
                alt="Miniatura 3"
                className="w-full h-24 object-cover rounded"
              />
            </div>
          </div>

          {/* Coluna dos detalhes */}
          <div>
            <div className="flex items-center text-sm text-[#67B99A] mb-2">
              <Link to="/">Início</Link>
              <span className="mx-2">»</span>
              <Link to="/categoria/animados">Convite Animado</Link>
              <span className="mx-2">»</span>
              <span>
                Tag Redonda Aniversário Era uma Vez A Bela e a Fera 15 anos
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#333333] mb-2">
              Tag Redonda Aniversário Era uma Vez A Bela e a Fera 15 anos
            </h1>
            <p className="text-gray-600 mb-4">
              Garantimos a entrega do seu convite em até{" "}
              <strong>3 dias úteis</strong>, excluindo feriados, a partir da
              confirmação da compra (não incluindo o dia da aquisição). O frete
              é gratuito, pois realizamos{" "}
              <strong>
                entregas exclusivamente de forma digital via WhatsApp
              </strong>
              . Seu convite será personalizado conforme o modelo do site, com
              base nas informações do formulário de compra.
            </p>

            <div className="text-3xl font-bold text-[#67B99A] mb-6">
              R$ 25,00
            </div>
            <div className="bg-[#FFDAC1] bg-opacity-30 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold text-[#FF9AA2] mb-4">
                DADOS DA TAG
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[#333333] mb-1">
                    Nome<span className="text-[#FF9AA2]">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#C7CEEA] rounded"
                    placeholder="Nome do aniversariante"
                  />
                </div>
                <div>
                  <label className="block text-[#333333] mb-1">
                    Idade<span className="text-[#FF9AA2]">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#C7CEEA] rounded"
                    placeholder="Idade"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[#333333] mb-1">
                    Data<span className="text-[#FF9AA2]">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#C7CEEA] rounded"
                    placeholder="DD/MM/AAAA"
                  />
                </div>
                <div>
                  <label className="block text-[#333333] mb-1">
                    Hora<span className="text-[#FF9AA2]">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#C7CEEA] rounded"
                    placeholder="00:00"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[#333333] mb-1">
                  Local<span className="text-[#FF9AA2]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#C7CEEA] rounded"
                  placeholder="Salão de Festas / Minha Casa / Buffet XXX"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Informe o nome do espaço onde ocorrerá o evento
                </p>
              </div>

              <div className="mb-4">
                <label className="block text-[#333333] mb-1">Endereço</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#C7CEEA] rounded"
                  placeholder="Rua/Avenida, Numero, Bairro, Cidade, Estado"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Informe o endereço completo ou parcial do evento
                </p>
              </div>
            </div>
            <div className="bg-[#C7CEEA] bg-opacity-20 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold text-[#FF9AA2] mb-4">
                OPÇÕES ADICIONAIS
              </h2>

              <div className="mb-4">
                <h3 className="font-medium text-[#333333] mb-2">
                  Remoção dos créditos no final do vídeo?
                </h3>
                <RadioGroup
                  value={removeCredits}
                  onValueChange={setRemoveCredits}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="remove-credits-yes" />
                    <Label htmlFor="remove-credits-yes">
                      Sim (custo adicional de R$ 10,00)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="não" id="remove-credits-no" />
                    <Label htmlFor="remove-credits-no">
                      Não (sem custo adicional)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-[#333333] mb-2">
                  Arte auxiliar em PDF
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Deseja adquirir a Arte auxiliar em PDF?
                </p>
                <RadioGroup
                  value={wantsPdfArt}
                  onValueChange={setWantsPdfArt}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="pdf-art-yes" />
                    <Label htmlFor="pdf-art-yes">
                      Sim (custo adicional de R$ 15,00)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="não" id="pdf-art-no" />
                    <Label htmlFor="pdf-art-no">Não</Label>
                  </div>
                </RadioGroup>
              </div>

              {wantsPdfArt === "sim" && (
                <div className="ml-6 border-l-2 border-[#B5EAD7] pl-4 mb-4">
                  <h3 className="font-medium text-[#333333] mb-2">
                    Selecione as opções desejadas:
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="confirm-presence"
                        checked={pdfOptions.confirmPresence}
                        onCheckedChange={(checked) =>
                          setPdfOptions({
                            ...pdfOptions,
                            confirmPresence: checked === true,
                          })
                        }
                      />
                      <label
                        htmlFor="confirm-presence"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Confirme sua presença
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="directions"
                        checked={pdfOptions.directions}
                        onCheckedChange={(checked) =>
                          setPdfOptions({
                            ...pdfOptions,
                            directions: checked === true,
                          })
                        }
                      />
                      <label
                        htmlFor="directions"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Saiba como chegar
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="gift-suggestion"
                        checked={pdfOptions.giftSuggestion}
                        onCheckedChange={(checked) =>
                          setPdfOptions({
                            ...pdfOptions,
                            giftSuggestion: checked === true,
                          })
                        }
                      />
                      <label
                        htmlFor="gift-suggestion"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Sugestão de presente
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Button
              className="w-full bg-[#FF9AA2] hover:bg-[#ff8a94] text-white py-3 text-lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
