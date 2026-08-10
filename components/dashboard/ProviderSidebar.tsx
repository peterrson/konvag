import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaTachometerAlt, FaCalendarAlt, FaMoneyBillWave, FaStar, FaUser, FaCog, FaSignOutAlt, FaExchangeAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function ProviderSidebar() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [role, setRole] = useState<'provider' | 'client'>('provider');

  const menuItems = [
    { label: 'Dashboard', icon: FaTachometerAlt, href: '/dashboard/provider' },
    { label: 'My Jobs', icon: FaCalendarAlt, href: '/dashboard/provider/jobs' },
    { label: 'Earnings', icon: FaMoneyBillWave, href: '/dashboard/provider/earnings' },
    { label: 'Reviews', icon: FaStar, href: '/dashboard/provider/reviews' },
    { label: 'Profile', icon: FaUser, href: '/dashboard/provider/profile' },
    { label: 'Settings', icon: FaCog, href: '/dashboard/provider/settings' },
  ];

  const toggleRole = () => {
    setRole(role === 'provider' ? 'client' : 'provider');
    // In a real app, this would trigger a context change and redirect
    alert(`Switched to ${role === 'provider' ? 'Client' : 'Provider'} mode!`);
  };

  return (
    <aside className="w-64 bg-[#021410] border-r border-[#ff8c00]/10 h-screen fixed left-0 top-20 overflow-y-auto z-40 hidden md:block">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 bg-[#ff8c00] rounded-xl flex items-center justify-center">
            <span className="text-xl font-bold text-[#00251d]">K</span>
          </div>
          <div>
            <h2 className="text-white font-bold">Konvag Panel</h2>
            <p className="text-[#ff8c00]/60 text-xs">{role === 'provider' ? 'Provider' : 'Client'} Mode</p>
          </div>
        </div>

        {/* Role Switcher */}
        <div className="bg-white/10 rounded-xl p-3 mb-6 border border-white/10">
          <div className="flex items-center justify-between text-white/80 text-sm">
            <span className={role === 'provider' ? 'text-[#ff8c00] font-bold' : ''}>Provider</span>
            <button onClick={toggleRole} className="bg-[#ff8c00]/20 p-1 rounded-lg hover:bg-[#ff8c00]/30 transition">
              <FaExchangeAlt className="w-4 h-4 text-[#ff8c00]" />
            </button>
            <span className={role === 'client' ? 'text-[#ff8c00] font-bold' : ''}>Client</span>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.href;
            return (
              <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-[#ff8c00] text-[#00251d] font-bold shadow-lg shadow-[#ff8c00]/20' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-white/10">
          <Link href="/auth/logout" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200">
            <FaSignOutAlt className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}