import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How it Works' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About Us' },
  ];

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <nav className="bg-[#003d2e] shadow-lg fixed top-0 left-0 w-full z-50 border-b border-[#ff8c00]/20 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        {/* ✅ BIG CURVED LOGO - NO TEXT */}
        <Link href="/" className="flex items-center group">
          <div className="w-22 h-22 relative rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/logos/konvag-logo.png"
              alt="Konvag"
              fill
              className="object-contain"
              priority
            />
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

        {/* Auth / Account Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative group">
              <button className="flex items-center gap-2 text-white hover:text-[#ff8c00] transition">
                <FaUserCircle className="w-8 h-8" />
                <span className="text-sm font-medium">{user?.name || 'Profile'}</span>
              </button>
              <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                <div className="p-2">
                  <Link href="/dashboard/provider" className="block px-4 py-2 text-[#003d2e] hover:bg-[#ff8c00]/20 rounded-lg transition">Dashboard</Link>
                  <Link href="/dashboard/provider/profile" className="block px-4 py-2 text-[#003d2e] hover:bg-[#ff8c00]/20 rounded-lg transition">My Profile</Link>
                  <Link href="/dashboard/provider/settings" className="block px-4 py-2 text-[#003d2e] hover:bg-[#ff8c00]/20 rounded-lg transition">Settings</Link>
                  <hr className="my-1 border-gray-200" />
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition">Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link href="/auth/login" className="text-white/90 font-medium hover:text-[#ff8c00] transition">Log In</Link>
              <div className="relative group">
                <button className="bg-[#ff8c00] text-[#003d2e] px-6 py-2.5 rounded-lg font-medium hover:bg-[#e67a00] transition shadow-sm flex items-center gap-2">
                  Sign Up <FaChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="p-2">
                    <Link href="/auth/register?role=client" className="block px-4 py-3 text-[#003d2e] hover:bg-[#ff8c00]/10 rounded-lg transition">
                      <div className="font-bold text-sm">I need a service</div>
                      <div className="text-xs text-gray-500">Find and hire trusted professionals</div>
                    </Link>
                    <Link href="/auth/register?role=provider&type=individual" className="block px-4 py-3 text-[#003d2e] hover:bg-[#ff8c00]/10 rounded-lg transition">
                      <div className="font-bold text-sm">I offer a service</div>
                      <div className="text-xs text-gray-500">Turn your skills into income</div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/auth/business-onboarding" className="bg-white text-[#003d2e] px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition shadow-sm border border-transparent">
                Konvag for Business
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
    </nav>
  );
}