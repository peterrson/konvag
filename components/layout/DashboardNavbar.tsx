import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FaUserCircle, FaBell, FaEnvelope, FaSearch } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';
import NotificationDrawer from '@/components/notifications/NotificationDrawer';
import MessageDrawer from '@/components/notifications/MessageDrawer';
import { serviceCategories } from '@/data/serviceCategories';

export default function DashboardNavbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof serviceCategories>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const filtered = serviceCategories.filter((category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      router.push(`/services/${searchResults[0].name.toLowerCase().replace(/\s+/g, '-')}`);
      setSearchQuery('');
      setIsSearchFocused(false);
    }
  };

  const handleLogout = () => { 
    logout(); 
    window.location.href = '/'; 
  };

  return (
    <nav className="bg-[#021410] shadow-lg fixed top-0 left-0 w-full z-50 border-b border-[#ff8c00]/20 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        <Link href="/dashboard/provider" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
            <span className="text-3xl font-bold text-[#003d2e]">K</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl font-bold text-white group-hover:text-[#ff8c00] transition">KONVAG</span>
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#ff8c00]/80 uppercase">PREMIUM SERVICES MARKETPLACE</span>
          </div>
        </Link>

        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search for services (e.g. Plumber, Electrician)..." 
              className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all pr-12"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ff8c00] text-[#003d2e] px-4 py-1 rounded-full text-sm font-bold hover:bg-[#e67a00] transition"
            >
              <FaSearch className="w-4 h-4" />
            </button>
          </form>

          {isSearchFocused && searchQuery.trim() !== '' && (
            <div className="absolute top-full left-0 w-full mt-2 bg-[#003d2e] border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50 max-h-64 overflow-y-auto">
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <Link
                    key={result.id}
                    href={`/services/${result.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchFocused(false);
                    }}
                    className="block px-4 py-3 hover:bg-white/10 border-b border-white/5 transition-colors last:border-b-0"
                  >
                    <div className="text-white font-medium">{result.name}</div>
                    <div className="text-white/50 text-xs">{result.description}</div>
                  </Link>
                ))
              ) : (
                <div className="px-4 py-4 text-white/50 text-sm text-center">
                  No services found matching "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <button 
              onClick={() => { setShowNotifications(!showNotifications); setShowMessages(false); }} 
              className="text-white/80 hover:text-white transition relative p-2"
            >
              <FaBell className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </button>
            <NotificationDrawer isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
          </div>

          <div className="relative">
            <button 
              onClick={() => { setShowMessages(!showMessages); setShowNotifications(false); }} 
              className="text-white/80 hover:text-white transition relative p-2"
            >
              <FaEnvelope className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-[#ff8c00] text-[#003d2e] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            <MessageDrawer isOpen={showMessages} onClose={() => setShowMessages(false)} />
          </div>

          <div className="relative group">
            <button className="flex items-center gap-2 text-white hover:text-[#ff8c00] transition">
              <FaUserCircle className="w-8 h-8" />
              <span className="text-sm font-medium">{user?.name || 'Profile'}</span>
            </button>
            <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
              <div className="p-2">
                <Link href="/dashboard/provider" className="block px-4 py-2 text-[#003d2e] hover:bg-[#ff8c00]/20 rounded-lg transition">Dashboard</Link>
                <Link href="/dashboard/provider/profile" className="block px-4 py-2 text-[#003d2e] hover:bg-[#ff8c00]/20 rounded-lg transition">My Profile</Link>
                <Link href="/dashboard/provider/settings" className="block px-4 py-2 text-[#003d2e] hover:bg-[#ff8c00]/20 rounded-lg transition">Settings</Link>
                <hr className="my-1 border-gray-200" />
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}