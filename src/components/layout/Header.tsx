import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const Header = () => {


  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm w-full">
       <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Header logo section */}
            <Image
              src="/logo.jpg"
              alt="LB Chemical Industries Logo"
              width={200}
              height={60}
              className="h-14 w-auto"
            />
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[var(--primary)] font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-[var(--primary)] font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-[var(--primary)] font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[var(--primary)] font-medium">
              Contact
            </a>
          </nav>
          <a href='#contact' className=" p-2 rounded-md bg-[var(--primary)] text-white font-semibold hover:bg-blue-700 curson-pointer">Get Quote</a>
        </div>
    </header>
  );
};

export default Header;