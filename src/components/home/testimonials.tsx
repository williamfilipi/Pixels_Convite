import { useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CarouselIndicators } from "@/components/ui/carousel-indicators";

const testimonials = [
  {
    id: 1,
    name: "Priscielen Ribas",
    username: "@priscielenribas",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priscielen",
    content:
      "Fiz o convite do meu filho e foi enviado no prazo certo e foram muito solícitos com todas as informações. Agradeço pelo lindo trabalho e indicarei vocês para nossos familiares e amigos!!! ❤️❤️",
  },
  {
    id: 2,
    name: "Maria Silva",
    username: "@mariasilva",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    content:
      "Amei os convites para o aniversário da minha filha! Todos os convidados elogiaram muito o design e a qualidade. Com certeza voltarei a comprar!",
  },
  {
    id: 3,
    name: "João Santos",
    username: "@joaosantos",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
    content:
      "Atendimento excelente e entrega super rápida. Os convites ficaram ainda mais bonitos pessoalmente do que nas fotos. Recomendo!",
  },
  {
    id: 4,
    name: "Ana Oliveira",
    username: "@anaoliveira",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    content:
      "Já é a terceira vez que compro com a Euforia Convites e sempre fico encantada com o resultado. Qualidade impecável e design único!",
  },
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  return (
    <section className="py-12 bg-[#f8f5f2]">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-[#8b6e5c] mb-2">
          QUEM JA COMPROU E RECOMENDA
        </h2>
        <p className="text-center text-[#8b6e5c] mb-8">
          Confira algumas avaliações de nossos clientes em nossa página do
          Instagram:{" "}
          <a
            href="https://instagram.com/EuforiaConvites"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            @EuforiaConvites
          </a>
        </p>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-[#e2d9d0]">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-[#8b6e5c]">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-[#a08b7d]">
                          {testimonial.username}
                        </p>
                      </div>
                      <Instagram className="ml-auto text-[#8b6e5c] w-5 h-5" />
                    </div>
                    <p className="text-[#8b6e5c]">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-[#f0e9e4] rounded-full shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-[#8b6e5c]" />
            <span className="sr-only">Anterior</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-[#f0e9e4] rounded-full shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-[#8b6e5c]" />
            <span className="sr-only">Próximo</span>
          </Button>
        </div>

        <CarouselIndicators
          totalSlides={testimonials.length}
          currentSlide={currentSlide}
          onSelect={setCurrentSlide}
          className="mt-6"
        />
      </div>
    </section>
  );
}
