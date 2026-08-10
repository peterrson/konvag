import Head from 'next/head';
import Link from 'next/link';
import { FaStar, FaClock, FaShoppingBag, FaHeart, FaCheckCircle, FaUser, FaClipboardList } from 'react-icons/fa';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

// Mock data for Client Dashboard
const mockData = {
  orders: { total: 24, completed: 18, pending: 6 },
  favorites: 12,
  activeBookings: [
    { id: 1, service: 'Home Cleaning', provider: 'Sarah Johnson', time: 'Today, 2:00 PM', status: 'confirmed' },
    { id: 2, service: 'Plumbing Repair', provider: 'Michael Chen', time: 'Tomorrow, 10:00 AM', status: 'pending' },
  ],
  recentOrders: [
    { id: 1, service: 'Electrical Fix', provider: 'Emma Davis', amount: '$95.00', status: 'completed', date: '2 days ago' },
    { id: 2, service: 'Garden Maintenance', provider: 'David Kim', amount: '$150.00', status: 'completed', date: '5 days ago' },
    { id: 3, service: 'Tech Support', provider: 'Adebola O.', amount: '$50.00', status: 'pending', date: '1 day ago' },
  ],
};

export default function ClientDashboardPage() {
  return (
    <>
      <Head>
        <title>Client Dashboard — Konvag</title>
        <meta name="description" content="Manage your orders, bookings, and favorites" />
      </Head>
      
      <div className="min-h-screen bg-[#00251d] pt-20 pl-0 md:pl-64">
        <DashboardSidebar />
        
        <div className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Client Dashboard</h1>
              <p className="text-white/60">Welcome back! Track your bookings and manage your service needs.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-[#ff8c00] text-[#00251d] px-4 py-2 rounded-lg font-bold hover:bg-[#e67a00] transition shadow-lg">
                Post a New Job
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm font-medium">Total Orders</span>
                <div className="w-8 h-8 bg-[#ff8c00]/20 rounded-lg flex items-center justify-center">
                  <FaShoppingBag className="text-[#ff8c00] w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white">{mockData.orders.total}</div>
              <div className="text-sm text-white/60 mt-1">{mockData.orders.completed} completed • {mockData.orders.pending} pending</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm font-medium">Favorites</span>
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <FaHeart className="text-red-400 w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white">{mockData.favorites}</div>
              <div className="text-sm text-white/60 mt-1">Saved providers</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm font-medium">Active Bookings</span>
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FaClipboardList className="text-blue-400 w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white">{mockData.activeBookings.length}</div>
              <div className="text-sm text-white/60 mt-1">Jobs in progress</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm font-medium">Avg. Rating</span>
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                4.9 <span className="text-white/40 text-lg">/ 5.0</span>
              </div>
              <div className="text-sm text-white/60 mt-1">Across 87 reviews</div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Active Bookings</h2>
                <Link href="/dashboard/client/bookings" className="text-[#ff8c00] text-sm hover:text-[#e67a00] transition">
                  View All →
                </Link>
              </div>
              <div className="space-y-4">
                {mockData.activeBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${booking.status === 'confirmed' ? 'bg-[#ff8c00]' : 'bg-yellow-400'}`}></div>
                      <div>
                        <p className="text-white font-medium">{booking.service}</p>
                        <p className="text-white/60 text-sm">{booking.provider}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm">{booking.time}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${booking.status === 'confirmed' ? 'bg-[#ff8c00]/20 text-[#ff8c00]' : 'bg-yellow-400/20 text-yellow-400'}`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-6">Recent Orders</h2>
              <div className="space-y-4">
                {mockData.recentOrders.map((order) => (
                  <div key={order.id} className="flex gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                    <div className="w-8 h-8 bg-[#ff8c00]/20 rounded-full flex items-center justify-center shrink-0">
                      {order.status === 'completed' ? <FaCheckCircle className="text-[#ff8c00] w-4 h-4" /> : <FaClock className="text-blue-400 w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-white text-sm">{order.service}</p>
                      <p className="text-white/50 text-xs">{order.provider} • {order.amount}</p>
                      <p className="text-white/40 text-xs mt-1">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}