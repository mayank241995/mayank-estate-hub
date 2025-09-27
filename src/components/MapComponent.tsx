import React from "react";

const MapComponent: React.FC = () => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.621449061552!2d77.58998327615588!3d13.059750912937352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19ebec8a2c69%3A0xb40052f47e33761e!2sNandagokula%20Estates!5e0!3m2!1sen!2sin!4v1758967047720!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapComponent;
