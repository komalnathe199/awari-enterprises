import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
  const OWNER_WHATSAPP = "919623792563"; 
  const message = "Hi Awari Enterprises, I want to know more about your waste cooking oil collection services.";
  const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-widget hover-lift"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WhatsAppWidget;
