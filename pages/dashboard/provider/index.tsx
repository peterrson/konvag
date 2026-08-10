import Head from 'next/head';
import Link from 'next/link';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { FaStar, FaClock, FaCheckCircle, FaDollarSign, FaBriefcase } from 'react-icons/fa';

// Mock data (replace with real API later)
const mockData = {
  earnings: { total: '$12,450', thisMonth: '$2,180', growth: '+12.5%' },
  jobs: { total: 148, completed: 132, pending: 16 },
  rating: 4.9,
  reviews: 87,
  responseTime: '2.5 min',
  upcomingJobs: [
    { id: 1, service: 'Home Cleaning', client: 'Sarah Johnson', time: 'Today, 2:00 PM', status: 'confirmed' },
    { id: 2, service: 'Plumbing Repair', client: 'Michael Chen', time: 'Tomorrow, 10:00 AM', status: 'pending' },
    { id: 3, service: 'Electrical Fix', client: 'Emma Davis', time: 'Fri, 4:00 PM', status: 'confirmed' },
  ],
  recentActivity: [
    { id: 1, action: 'completed', job: 'Home Cleaning', client: 'Sarah Johnson', amount: '$85.00', time: '2 hours ago' },
    { id: 2, action: 'reviewed', job: 'Plumbing Repair', client: 'Michael Chen', amount: '$120.00', time: '5 hours ago' },
    { id: 3, action: 'booked', job: 'Electrical Fix', client: 'Emma Davis', amount: '$95.00', time: '1 day ago' },
    { id: 4, action: 'completed', job: 'Garden Maintenance', client: 'David Kim', amount: '$150.00', time: '2 days ago' },
  ],
};

export default function ProviderDashboardPage() {
  return (
    <>
      <Head>
        <title>Provider Dashboard — Konvag</title>
        <meta name="description" content="Manage your services, earnings, and jobs" />
      </Head>
      
      <div className="min-h-screen bg-[#021410] pt-20 pl-0 md:pl-64">
        <DashboardSidebar />
        <div className="p-6 md:p-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-white/60">Welcome back, John! Here's your performance overview.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/10 transition">
                <span className="flex items-center gap-2">
                  <FaClock className="text-[#ff8c00]" />
                  Update Availability
                </span>
              </button>
              <button className="bg-[#ff8c00] text-[#00251d] px-4 py-2 rounded-lg font-bold hover:bg-[#e67a00] transition">
                View Profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm font-medium">Total Earnings</span>
                <div className="w-8 h-8 bg-[#ff8c00]/20 rounded-lg flex items-center justify-center">
                  <FaDollarSign className="text-[#ff8c00] w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white">{mockData.earnings.total}</div>
              <div className="text-sm text-[#ff8c00] mt-1">{mockData.earnings.growth} from last month</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm font-medium">Total Jobs</span>
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FaBriefcase className="text-blue-400 w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white">{mockData.jobs.total}</div>
              <div className="text-sm text-white/60 mt-1">{mockData.jobs.completed} completed • {mockData.jobs.pending} pending</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm font-medium">Rating</span>
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                {mockData.rating}
                <span className="text-white/40 text-lg">/ 5.0</span>
              </div>
              <div className="text-sm text-white/60 mt-1">{mockData.reviews} reviews</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm font-medium">Response Time</span>
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <FaCheckCircle className="text-green-400 w-4 h-4" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white">{mockData.responseTime}</div>
              <div className="text-sm text-white/60 mt-1">Avg. response to new jobs</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Upcoming Jobs</h2>
                <Link href="/dashboard/provider/jobs" className="text-[#ff8c00] text-sm hover:text-[#e67a00] transition">
                  View All →
                </Link>
              </div>
              <div className="space-y-4">
                {mockData.upcomingJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${job.status === 'confirmed' ? 'bg-[#ff8c00]' : 'bg-yellow-400'}`}></div>
                      <div>
                        <p className="text-white font-medium">{job.service}</p>
                        <p className="text-white/60 text-sm">{job.client}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm">{job.time}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${job.status === 'confirmed' ? 'bg-[#ff8c00]/20 text-[#ff8c00]' : 'bg-yellow-400/20 text-yellow-400'}`}>
                        {job.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {mockData.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                    <div className="w-8 h-8 bg-[#ff8c00]/20 rounded-full flex items-center justify-center shrink-0">
                      {activity.action === 'completed' && <FaCheckCircle className="text-[#ff8c00] w-4 h-4" />}
                      {activity.action === 'reviewed' && <FaStar className="text-yellow-400 w-4 h-4" />}
                      {activity.action === 'booked' && <FaClock className="text-blue-400 w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-white text-sm">{activity.job}</p>
                      <p className="text-white/50 text-xs">{activity.client} • {activity.amount}</p>
                      <p className="text-white/40 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ff8c00] text-[#00251d] px-6 py-3 rounded-lg font-bold hover:bg-[#e67a00] transition">
                + Create New Listing
              </button>
              <button className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition">
                Update Availability
              </button>
              <button className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition">
                View Messages
              </button>
              <button className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition">
                Manage Services
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}