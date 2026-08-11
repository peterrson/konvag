import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { 
  FaTachometerAlt, FaCalendarAlt, FaMoneyBillWave, FaStar, 
  FaUser, FaCog, FaSignOutAlt, FaExchangeAlt, FaShoppingBag, 
  FaHeart, FaClipboardList
} from 'react-icons/fa';

export default function DashboardSidebar() {
  const router = useRouter();
  const { activeRole, switchRole, logout } = useAuth();
  const currentPath = router.pathname;

  const providerMenu = [
    { label: 'Dashboard', icon: FaTachometerAlt, href: '/dashboard/provider' },
    { label: 'My Jobs', icon: FaCalendarAlt, href: '/dashboard/provider/jobs' },
    { label: 'Earnings', icon: FaMoneyBillWave, href: '/dashboard/provider/earnings' },
    { label: 'Reviews', icon: FaStar, href: '/dashboard/provider/reviews' },
    { label: 'Profile', icon: FaUser, href: '/dashboard/provider/profile' },
    { label: 'Settings', icon: FaCog, href: '/dashboard/provider/settings' },
  ];

  const clientMenu = [
    { label: 'Dashboard', icon: FaTachometerAlt, href: '/dashboard/client' },
    { label: 'My Orders', icon: FaShoppingBag, href: '/dashboard/client/orders' },
    { label: 'Active Bookings', icon: FaClipboardList, href: '/dashboard/client/bookings' },
    { label: 'Favorites', icon: FaHeart, href: '/dashboard/client/favorites' },
    { label: 'Profile', icon: FaUser, href: '/dashboard/client/profile' },
    { label: 'Settings', icon: FaCog, href: '/dashboard/client/settings' },
  ];

  const menuItems = activeRole === 'provider' ? providerMenu : clientMenu;

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const toggleRole = () => {
    const newRole = activeRole === 'provider' ? 'client' : 'provider';
    switchRole(newRole);
    window.location.href = `/dashboard/${newRole}`;
  };

  return (
    <aside className="w-64 bg-[#00251d] border-r border-[#ff8c00]/10 h-screen fixed left-0 top-20 overflow-y-auto z-40 hidden md:block">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8 px-2">
          
          {/* ✅ ONLY THE REAL LOGO - BIG & CURVED (In Sidebar) */}
          <div className="w-12 h-12 relative rounded-xl overflow-hidden shrink-0">
            <Image
              src="/logos/konvag-logo.png"
              alt="Konvag"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-white font-bold">Konvag Panel</h2>
            <p className="text-[#ff8c00]/60 text-xs capitalize">{activeRole} Mode</p>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-3 mb-6 border border-white/10">
          <div className="flex items-center justify-between text-white/80 text-sm">
            <span className={activeRole === 'provider' ? 'text-[#ff8c00] font-bold' : 'text-white/60'}>Provider</span>
            <button 
              onClick={toggleRole} 
              className="bg-[#ff8c00]/20 p-2 rounded-lg hover:bg-[#ff8c00]/30 transition-all group"
            >
              <FaExchangeAlt className="w-4 h-4 text-[#ff8c00] group-hover:rotate-180 transition-transform duration-500" />
            </button>
            <span className={activeRole === 'client' ? 'text-[#ff8c00] font-bold' : 'text-white/60'}>Client</span>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#ff8c00] text-[#00251d] font-bold shadow-lg shadow-[#ff8c00]/20' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 w-full"
          >
            <FaSignOutAlt className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}