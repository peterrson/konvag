import { FaBell, FaCheckCircle, FaExclamationTriangle, FaBan, FaEnvelope } from 'react-icons/fa';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationDrawer({ isOpen, onClose }: NotificationDrawerProps) {
  if (!isOpen) return null;

  const notifications = [
    { id: 1, type: 'message', text: 'New message request from Sarah K.', time: '2 mins ago', icon: FaEnvelope },
    { id: 2, type: 'approval', text: 'Your profile has been approved!', time: '1 hour ago', icon: FaCheckCircle },
    { id: 3, type: 'alert', text: 'Your account has been temporarily suspended.', time: '3 hours ago', icon: FaBan },
    { id: 4, type: 'info', text: 'New provider joined your area: Plumber in Lagos.', time: '5 hours ago', icon: FaExclamationTriangle },
  ];

  return (
    <div className="absolute right-0 top-14 w-80 bg-[#021410] border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-md">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h3 className="text-white font-bold">Notifications</h3>
        <button onClick={onClose} className="text-white/50 hover:text-white text-sm">Mark all read</button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notif) => (
          <div key={notif.id} className="p-4 border-b border-white/10 hover:bg-white/5 transition-colors flex gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              notif.type === 'approval' ? 'bg-green-500/20 text-green-400' :
              notif.type === 'alert' ? 'bg-red-500/20 text-red-400' :
              'bg-[#ff8c00]/20 text-[#ff8c00]'
            }`}>
              <notif.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-sm">{notif.text}</p>
              <p className="text-white/40 text-xs mt-1">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-white/10 text-center">
        <button className="text-[#ff8c00] text-sm hover:text-[#e67a00]">View All Notifications</button>
      </div>
    </div>
  );
}