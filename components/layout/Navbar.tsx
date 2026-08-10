import Link from 'next/link';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How it Works' },
    { href: '/blog', label: 'Blog' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About Us' },
  ];

  const handleLogout = () => { 
    logout(); 
    window.location.href = '/'; 
  };

  return (
    <nav className="bg-[#021410] shadow-lg fixed top-0 left-0 w-full z-50 border-b border-[#ff8c00]/20 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
            <span className="text-3xl font-bold text-[#003d2e]">K</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl font-bold text-white group-hover:text-[#ff8c00] transition">KONVAG</span>
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#ff8c00]/80 uppercase">PREMIUM SERVICES MARKETPLACE</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/90 font-medium hover:text-[#ff8c00] transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <Link href="/dashboard/provider" className="flex items-center gap-2 text-white/90 hover:text-[#ff8c00] transition">
              <FaUserCircle className="w-6 h-6" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
          ) : (
            <>
              <Link href="/auth/login" className="text-white/90 font-medium hover:text-[#ff8c00] transition">
                Log In
              </Link>
              <Link href="/auth/register" className="bg-[#ff8c00] text-[#003d2e] px-6 py-2.5 rounded-lg font-medium hover:bg-[#e67a00] transition shadow-sm">
                Sign Up
              </Link>
              <Link href="/become-provider" className="bg-white text-[#003d2e] px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition shadow-sm">
                Become a Provider
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}