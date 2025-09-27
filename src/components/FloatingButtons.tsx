import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "918548001234";
    const message = "Hello! I'm interested in your real estate services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCall = () => {
    // Replace with actual phone number
    window.location.href = "tel:+918548001234";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <button
        onClick={handleCall}
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center justify-center"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center justify-center"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingButtons;