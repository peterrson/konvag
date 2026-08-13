import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaUser, FaBriefcase, FaBuilding, FaUserTie } from 'react-icons/fa';

interface SignUpChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceImage: string;
  returnUrl: string; // The exact page to return to after sign up
}

export default function SignUpChoiceModal({ 
  isOpen, 
  onClose, 
  serviceName, 
  serviceImage,
  returnUrl
}: SignUpChoiceModalProps) {
  
  const [step, setStep] = useState<'main' | 'provider-type'>('main');

  if (!isOpen) return null;

  // Handle Client Choice
  const handleClientChoice = () => {
    const encodedReturn = encodeURIComponent(returnUrl || router.asPath);
    window.location.href = `/auth/register?role=client&redirect=${encodedReturn}`;
  };

  // Handle Provider Choice (Go to Step 2)
  const handleProviderChoice = () => {
    setStep('provider-type');
  };

  // Handle Individual Provider Choice
  const handleIndividualChoice = () => {
    const encodedReturn = encodeURIComponent(returnUrl);
    window.location.href = `/auth/register?role=provider&type=individual&redirect=${encodedReturn}`;
  };

  // Handle Organization Provider Choice
  const handleOrganizationChoice = () => {
    const encodedReturn = encodeURIComponent(returnUrl);
    window.location.href = `/auth/register?role=provider&type=organization&redirect=${encodedReturn}`;
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#003d2e] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          
          {/* Left Side: Service Image */}
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
              <p className="text-white/60 text-xs mt-1">You are one step away from connecting with professionals</p>
            </div>
          </div>

          {/* Right Side: Choice Logic */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            
            {/* ====== STEP 1: MAIN CHOICE ====== */}
            {step === 'main' && (
              <div className="animate-fade-in-up">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Get Started with {serviceName}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    To view providers and book services, please tell us who you are.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Client Button */}
                  <button 
                    onClick={handleClientChoice}
                    className="w-full flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-5 transition-all duration-300 hover:border-[#ff8c00]/50 text-left group"
                  >
                    <div className="w-12 h-12 bg-[#ff8c00]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#ff8c00]/30 transition-colors">
                      <FaUser className="text-[#ff8c00] w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg group-hover:text-[#ff8c00] transition-colors">
                        I need a service
                      </h4>
                      <p className="text-white/60 text-sm mt-1">
                        Find and hire trusted professionals.
                      </p>
                    </div>
                    <FaArrowRight className="text-white/40 group-hover:text-[#ff8c00] transition-colors w-4 h-4" />
                  </button>

                  {/* Provider Button */}
                  <button 
                    onClick={handleProviderChoice}
                    className="w-full flex items-center gap-4 bg-[#ff8c00]/10 hover:bg-[#ff8c00]/20 border border-[#ff8c00]/30 rounded-xl p-5 transition-all duration-300 hover:border-[#ff8c00]/70 text-left group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                      <FaBriefcase className="text-white w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg group-hover:text-[#ff8c00] transition-colors">
                        I offer a service
                      </h4>
                      <p className="text-white/60 text-sm mt-1">
                        Turn your skills into income.
                      </p>
                    </div>
                    <FaArrowRight className="text-white/40 group-hover:text-[#ff8c00] transition-colors w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ====== STEP 2: PROVIDER TYPE ====== */}
            {step === 'provider-type' && (
              <div className="animate-fade-in-up">
                <button 
                  onClick={() => setStep('main')}
                  className="text-white/50 hover:text-white text-sm mb-4 flex items-center gap-2 transition-colors"
                >
                  ← Back
                </button>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">How are you offering services?</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Choose your account type to get started.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Individual Provider */}
                  <button 
                    onClick={handleIndividualChoice}
                    className="w-full flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-5 transition-all duration-300 hover:border-[#ff8c00]/50 text-left group"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/30 transition-colors">
                      <FaUserTie className="text-blue-400 w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg group-hover:text-[#ff8c00] transition-colors">
                        Individual
                      </h4>
                      <p className="text-white/60 text-sm mt-1">
                        Freelancer, sole trader, or independent professional.
                      </p>
                    </div>
                    <FaArrowRight className="text-white/40 group-hover:text-[#ff8c00] transition-colors w-4 h-4" />
                  </button>

                  {/* Organization Provider */}
                  <button 
                    onClick={handleOrganizationChoice}
                    className="w-full flex items-center gap-4 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl p-5 transition-all duration-300 hover:border-purple-500/70 text-left group"
                  >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-500/30 transition-colors">
                      <FaBuilding className="text-purple-400 w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg group-hover:text-[#ff8c00] transition-colors">
                        Organization
                      </h4>
                      <p className="text-white/60 text-sm mt-1">
                        Company, agency, or registered business entity.
                      </p>
                    </div>
                    <FaArrowRight className="text-white/40 group-hover:text-[#ff8c00] transition-colors w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}