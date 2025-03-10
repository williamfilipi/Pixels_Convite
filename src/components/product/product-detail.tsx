import { useState, useCallback } from "react";
import { ArrowLeft, ShoppingCart, Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProductDetail() {
  const navigate = useNavigate();
  const [removeCredits, setRemoveCredits] = useState("não");
  const [wantsPdfArt, setWantsPdfArt] = useState("não");
  const [addPhoto, setAddPhoto] = useState("não");
  const [changeMusic, setChangeMusic] = useState("não");
  const [confirmationMessage, setConfirmationMessage] = useState("não");
  const [urgencyFee, setUrgencyFee] = useState("não");
  const [pdfOptions, setPdfOptions] = useState({
    confirmPresence: false,
    directions: false,
    giftSuggestion: false,
  });
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=600&q=80",
  );

  const thumbnails = [
    "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=200&q=80",
    "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=200&q=80",
    "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=200&q=80",
  ];

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    // Preparar os dados do produto para passar para a página de confirmação
    const productDetails = {
      id: 1, // Normalmente viria do produto atual
      name: "Tag Redonda Aniversário Era uma Vez A Bela e a Fera 15 anos",
      price: 25.0,
      image: mainImage,
      options: {
        "Remoção de créditos": removeCredits === "sim" ? "Sim" : "Não",
        "Foto ou vídeo": addPhoto === "sim" ? "Sim" : "Não",
        "Alteração de música": changeMusic === "sim" ? "Sim" : "Não",
        "Mensagem de confirmação":
          confirmationMessage !== "não" ? "Sim" : "Não",
        "Taxa de urgência": urgencyFee === "sim" ? "Sim" : "Não",
        "Arte auxiliar em PDF": wantsPdfArt === "sim" ? "Sim" : "Não",
      },
    };

    // Navegar para a página de confirmação com os detalhes do produto
    navigate("/carrinho/confirmacao", { state: { productDetails } });
  };

  const handleThumbnailClick = useCallback((image: string) => {
    setMainImage(image.replace("w=200", "w=600"));
  }, []);

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
              src={mainImage}
              alt="Convite Animado A Bela e a Fera"
              className="w-full h-auto"
            />
            <div className="grid grid-cols-3 gap-2 mt-2">
              {thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Miniatura ${index + 1}`}
                  className={`w-full h-24 object-cover rounded cursor-pointer ${mainImage.includes(thumbnail.split("?")[0]) ? "border-2 border-[#FF9AA2]" : ""}`}
                  onClick={() => handleThumbnailClick(thumbnail)}
                />
              ))}
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

            <div className="flex items-center mb-2">
              <div className="flex text-[#FFD166] mr-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <StarHalf className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-gray-500">(32 avaliações)</span>
            </div>

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

            <Tabs defaultValue="dados" className="mb-6">
              <TabsList className="grid w-full grid-cols-3 bg-[#FFDAC1] bg-opacity-30">
                <TabsTrigger
                  value="dados"
                  className="data-[state=active]:bg-[#FF9AA2] data-[state=active]:text-white"
                >
                  Dados
                </TabsTrigger>
                <TabsTrigger
                  value="especificacoes"
                  className="data-[state=active]:bg-[#FF9AA2] data-[state=active]:text-white"
                >
                  Especificações
                </TabsTrigger>
                <TabsTrigger
                  value="avaliacoes"
                  className="data-[state=active]:bg-[#FF9AA2] data-[state=active]:text-white"
                >
                  Avaliações
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="dados"
                className="bg-[#FFDAC1] bg-opacity-30 p-4 rounded-lg mt-2"
              >
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
              </TabsContent>

              <TabsContent
                value="especificacoes"
                className="bg-[#FFDAC1] bg-opacity-30 p-4 rounded-lg mt-2"
              >
                <h2 className="text-xl font-bold text-[#FF9AA2] mb-4">
                  ESPECIFICAÇÕES DO PRODUTO
                </h2>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Formato:</span>
                    <span>Vídeo MP4 para compartilhamento via WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Duração:</span>
                    <span>30 segundos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Resolução:</span>
                    <span>Full HD (1080x1920px)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Personalização:</span>
                    <span>Nome, idade, data, hora e local do evento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Música:</span>
                    <span>Inclusa (pode ser alterada por taxa adicional)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">
                      Prazo de entrega:
                    </span>
                    <span>3 dias úteis após confirmação do pagamento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Compatibilidade:</span>
                    <span>Todos os dispositivos que suportam WhatsApp</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent
                value="avaliacoes"
                className="bg-[#FFDAC1] bg-opacity-30 p-4 rounded-lg mt-2"
              >
                <h2 className="text-xl font-bold text-[#FF9AA2] mb-4">
                  AVALIAÇÕES DOS CLIENTES
                </h2>

                <div className="flex items-center mb-4">
                  <div className="flex text-[#FFD166] mr-2">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <StarHalf className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-lg font-medium">4.5/5</span>
                  <span className="text-sm text-gray-500 ml-2">
                    (32 avaliações)
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Maria Silva",
                      rating: 5,
                      date: "12/05/2023",
                      comment:
                        "Amei o convite! Ficou exatamente como eu queria e a entrega foi super rápida.",
                      avatar:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
                    },
                    {
                      name: "João Santos",
                      rating: 4,
                      date: "28/04/2023",
                      comment:
                        "Muito bonito e bem feito. Só achei que poderia ter mais opções de cores.",
                      avatar:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
                    },
                    {
                      name: "Ana Oliveira",
                      rating: 5,
                      date: "15/03/2023",
                      comment:
                        "Perfeito! Todos os convidados elogiaram muito o convite. Com certeza comprarei novamente.",
                      avatar:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
                    },
                  ].map((review, index) => (
                    <div
                      key={index}
                      className="border-b border-[#C7CEEA] pb-4 last:border-0"
                    >
                      <div className="flex items-center mb-2">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <div className="font-medium">{review.name}</div>
                          <div className="text-sm text-gray-500">
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex text-[#FFD166] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "fill-current" : ""}`}
                          />
                        ))}
                      </div>
                      <p className="text-[#333333]">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

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
                  FOTO OU VÍDEO
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Gostaria de adicionar uma foto ou um vídeo de até 6 segundos
                  do(a) aniversariante no convite?
                </p>
                <RadioGroup
                  value={addPhoto}
                  onValueChange={setAddPhoto}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="add-photo-yes" />
                    <Label htmlFor="add-photo-yes">
                      Sim (custo adicional de R$ 8,00)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="não" id="add-photo-no" />
                    <Label htmlFor="add-photo-no">Não</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-[#333333] mb-2">MÚSICA</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Alterar música do convite?
                </p>
                <RadioGroup
                  value={changeMusic}
                  onValueChange={setChangeMusic}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="change-music-yes" />
                    <Label htmlFor="change-music-yes">
                      Sim, trocar a música (custo adicional de R$ 3,00)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="não" id="change-music-no" />
                    <Label htmlFor="change-music-no">
                      Não, manter o mesmo modelo
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-[#333333] mb-2">
                  MENSAGEM DE CONFIRMAÇÃO
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Adicionar mensagem de confirmação? Esta mensagem fica no final
                  do convite, serve apenas para lembrar o convidado de confirmar
                  a sua presença, não tem função interativa como o PDF.
                </p>
                <RadioGroup
                  value={confirmationMessage}
                  onValueChange={setConfirmationMessage}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="não" id="confirmation-no" />
                    <Label htmlFor="confirmation-no">Não</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="data" id="confirmation-date" />
                    <Label htmlFor="confirmation-date">
                      Confirmar presença até dia XX/XX/XXXX
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="numero" id="confirmation-number" />
                    <Label htmlFor="confirmation-number">
                      Confirmar presença no número (XX) XXXXX-XXXX
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-[#333333] mb-2">
                  Taxa de Urgência
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Adicionar Taxa de Urgência
                </p>
                <RadioGroup
                  value={urgencyFee}
                  onValueChange={setUrgencyFee}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="não" id="urgency-no" />
                    <Label htmlFor="urgency-no">Não (R$ 0,00)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="urgency-yes" />
                    <Label htmlFor="urgency-yes">Sim (R$ 4,00)</Label>
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
