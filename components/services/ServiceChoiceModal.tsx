import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface ServiceChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceDescription: string;
  serviceImage: string;
  subCount: number;
}

export default function ServiceChoiceModal({ 
  isOpen, 
  onClose, 
  serviceName, 
  serviceDescription, 
  serviceImage,
  subCount
}: ServiceChoiceModalProps) {
  
  const router = useRouter();

  if (!isOpen) return null;

  // Function to handle the "I need this" click - saves current URL and goes to register
  const handleSignUpRedirect = () => {
    // Save the current URL so we can come back after sign up
    const returnUrl = encodeURIComponent(router.asPath);
    window.location.href = `/auth/register?redirect=${returnUrl}&role=client`;
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
              {subCount > 0 && <p className="text-white/60 text-xs mt-1">{subCount} Sub-Categories Available</p>}
            </div>
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Get Started with {serviceName}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {serviceDescription}
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/10">
              <h4 className="text-white font-bold text-sm mb-2">Why create an account?</h4>
              <ul className="space-y-2 text-white/70 text-xs">
                <li className="flex items-center gap-2">✅ Connect with vetted professionals</li>
                <li className="flex items-center gap-2">✅ Save your favorite providers</li>
                <li className="flex items-center gap-2">✅ Track your bookings in real-time</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* ✅ This button triggers the sign-up flow */}
              <button 
                onClick={handleSignUpRedirect}
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