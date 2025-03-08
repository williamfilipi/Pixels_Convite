import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = "5511999999999",
  message = "Olá, gostaria de saber mais sobre os convites!",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-6 z-50 bg-[#67B99A] text-white rounded-full p-3 shadow-lg hover:bg-[#5aa98a] transition-colors"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}
