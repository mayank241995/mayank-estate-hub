import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "1234567890";
    const message = "Hello! I'm interested in your real estate services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCall = () => {
    // Replace with actual phone number
    window.location.href = "tel:+15551234567";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* Call Button */}
      <button
        onClick={handleCall}
        className="floating-btn bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="floating-btn bg-green-500 hover:bg-green-600 text-white"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingButtons;