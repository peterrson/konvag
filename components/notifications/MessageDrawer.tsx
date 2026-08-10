import { FaPaperPlane, FaCircle } from 'react-icons/fa';
import { useState } from 'react';

interface MessageDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MessageDrawer({ isOpen, onClose }: MessageDrawerProps) {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: 'Sarah K.', text: 'Hi! I need a plumber urgently.', time: '10:30 AM', isMe: false },
    { id: 2, sender: 'You', text: 'Hi Sarah! I am available right now.', time: '10:32 AM', isMe: true },
    { id: 3, sender: 'Sarah K.', text: 'Great! Can you come to Ikeja?', time: '10:33 AM', isMe: false },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setChatHistory([...chatHistory, { id: Date.now(), sender: 'You', text: message, time: 'Now', isMe: true }]);
    setMessage('');
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-14 w-80 md:w-96 bg-[#021410] border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-md">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-[#ff8c00]/20 rounded-full flex items-center justify-center text-white font-bold">SK</div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#003d2e]"></div>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Sarah K.</p>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span className="flex items-center gap-1"><FaCircle className="w-1.5 h-1.5 text-green-500" /> Online</span>
              <span>•</span>
              <span>Nigeria, Lagos</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="text-white/50 hover:text-white">✕</button>
      </div>

      {/* Chat Area */}
      <div className="h-64 overflow-y-auto p-4 space-y-3 bg-black/20">
        {chatHistory.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
              msg.isMe ? 'bg-[#ff8c00] text-[#003d2e]' : 'bg-white/10 text-white'
            }`}>
              <p>{msg.text}</p>
              <p className="text-[10px] opacity-70 mt-1 text-right">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-white/10 flex gap-2">
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#ff8c00]"
        />
        <button onClick={handleSend} className="bg-[#ff8c00] text-[#003d2e] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#e67a00] transition">
          <FaPaperPlane className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}