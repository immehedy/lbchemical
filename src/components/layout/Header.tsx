import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const Header = () => {


  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm">
      <div className="md:hidden container mx-auto p-4 text-sm text-gray-700 flex flex-col md:flex-row items-center justify-between">
        <span className="w-full text-center font-semibold">
          Need Help? Call us: <strong className="text-[var(--primary)]">+88 01897717462</strong>
        </span>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-row sm:items-center justify-between gap-y-2 h-auto sm:h-20">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="Thread Park" width={200} height={60} className="object-contain" priority />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
    <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
      Home
    </Link>
    <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition">
      Services
    </Link>
    <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
      About
    </Link>
    <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
      Contact
    </Link>
  </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm sm:text-base">
              <Phone className="w-7 h-7 text-[var(--primary)]" />
              <div className="flex flex-col sm:space-x-2">
                <span className="text-xs sm:text-sm font-semibold uppercase opacity-50">Call Us</span>
                <span className="font-bold text-[var(--primary)] text-base sm:text-lg">+88 01897717462</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;