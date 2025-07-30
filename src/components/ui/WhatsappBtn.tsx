'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const WhatsappBtn = () => {
  const [whatsAppLink, setWhatsAppLink] = useState<string>('');

  const phoneNumber = '+8801897717462';

  useEffect(() => {
    const isMobile = /iPhone|Android|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    const baseUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

    setWhatsAppLink(baseUrl);
  }, [phoneNumber]);

  return (
    <Link
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
    >
      <Phone className="w-5 h-5" />
    </Link>
  );
};

export default WhatsappBtn;
