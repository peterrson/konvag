import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'; // ✅ IMPORT THIS
import { FaArrowRight, FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';

interface ServiceChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceDescription: string;
  serviceImage: string;
  subCount: number;
  returnUrl: string;
}

export default function SignUpChoiceModal({ 
  isOpen, 
  onClose, 
  serviceName, 
  serviceDescription, 
  serviceImage,
  subCount,
  returnUrl
}: ServiceChoiceModalProps) {
  
  const router = useRouter(); // ✅ INITIALIZE THIS

  if (!isOpen) return null;

  // Handle Client Choice
  const handleClientChoice = () => {
    const encodedReturn = encodeURIComponent(returnUrl || router.asPath); // ✅ NOW WORKS
    window.location.href = `/auth/register?role=client&redirect=${encodedReturn}`;
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#003d2e] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up relative">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="relative h-64 md:h-auto min-h-[400px]">
            <Image
              src={serviceImage}
              alt={serviceName}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003d2e] via-[#003d2e]/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-[#ff8c00]/20 px-3 py-1 rounded-full border border-[#ff8c00]/30 mb-2">
                <span className="text-[#ff8c00] text-xs font-bold uppercase tracking-wider">Konvag Premium</span>
              </div>
              <h2 className="text-3xl font-bold text-white">{serviceName}</h2>
              <p className="text-white/60 text-xs mt-1">{subCount} Sub-Categories Available</p>
            </div>
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Explore {serviceName}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {serviceDescription}
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/10">
              <h4 className="text-white font-bold text-sm mb-2">What to expect:</h4>
              <ul className="space-y-2 text-white/70 text-xs">
                <li className="flex items-center gap-2">✅ Trusted & vetted professionals</li>
                <li className="flex items-center gap-2">✅ Transparent, fixed pricing</li>
                <li className="flex items-center gap-2">✅ Service tracking & secure payments</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleClientChoice}
                className="flex-1 bg-[#ff8c00] text-[#003d2e] px-6 py-3 rounded-lg font-bold hover:bg-[#e67a00] transition text-center"
              >
                Sign Up to Continue <FaArrowRight className="inline w-4 h-4 ml-2" />
              </button>
              <button 
                onClick={onClose}
                className="flex-1 border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}