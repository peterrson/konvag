import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { 
  FaCheckCircle, FaTimes, FaUpload, FaImage, 
  FaUser, FaBuilding, FaClock, FaMoneyBillWave, 
  FaUsers, FaMapMarkerAlt, FaCog, FaChevronDown, 
  FaSearch, FaEdit, FaLock, FaEnvelope, FaPhone
} from 'react-icons/fa';
import { serviceCategories } from '@/data/serviceCategories';

export default function BusinessOnboarding() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1
    businessName: '', registrationType: '', regNumber: '', taxId: '', cacDocument: null as File | null,
    // Step 2
    logoImage: null as File | null, coverImage: null as File | null, companyBio: '',
    // Step 3
    businessPhone: '', adminEmail: '', adminPhone: '',
    // Step 4 - Extended Settings
    businessCategory: '', businessSize: '', yearFounded: '',
    bankName: '', accountNumber: '', accountName: '',
    state: '', lga: '', city: '', streetAddress: '',
    adminFullName: '', adminRole: '', adminPassword: '',
    // Step 5
    selectedServices: [] as string[],
  });

  const steps = [
    { id: 1, title: 'Verify your business information', desc: 'Provide your RC Number, Tax ID, and legal business name.' },
    { id: 2, title: 'Setup your company profile', desc: 'Give your business a unique look with a logo, cover image, and bio.' },
    { id: 3, title: 'Verify your contact information', desc: 'Confirm the admin email and phone number for our records.' },
    { id: 4, title: 'Business Admin & Operations', desc: 'Manage your profile, location, payments, and security.' },
    { id: 5, title: 'Setup your service catalog', desc: 'Select the services your business provides from our list.' },
  ];

  const handleStart = (id: number) => {
    setCurrentStep(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(null);
  };

  const handleComplete = () => {
    if (currentStep !== null && !completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setIsModalOpen(false);
    setCurrentStep(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'cacDocument' | 'logoImage' | 'coverImage') => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, [field]: e.target.files[0] });
    }
  };

  // Step 5 Service Selector Logic
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredServices = serviceCategories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleService = (serviceName: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedServices.includes(serviceName);
      return {
        ...prev,
        selectedServices: isSelected 
          ? prev.selectedServices.filter(s => s !== serviceName)
          : [...prev.selectedServices, serviceName]
      };
    });
  };

  const allCompleted = completedSteps.length === steps.length;

  const handleGoLive = () => {
    if (allCompleted) {
      alert('🎉 Congratulations! Your business is now live on Konvag!');
    }
  };

  // ================= STEP 4 SIDEBAR & TABS =================
  const [activeTab, setActiveTab] = useState('profile');

  const sidebarMenus = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'business', label: 'Business information', icon: FaBuilding },
    { id: 'operations', label: 'Location & Branches', icon: FaMapMarkerAlt },
    { id: 'payments', label: 'Payment methods', icon: FaMoneyBillWave },
    { id: 'staff', label: 'Admin & Security', icon: FaLock },
    { id: 'settings', label: 'Settings', icon: FaCog },
  ];

  // Nigeria States & LGAs (Simplified for demo)
  const nigerianStates = ['Lagos', 'Abuja FCT', 'Oyo', 'Ogun', 'Osun', 'Ondo', 'Ekiti', 'Kwara', 'Kano', 'Kaduna', 'Rivers', 'Delta', 'Edo'];
  const lgas = ['Ikeja', 'Lagos Island', 'Eti-Osa', 'Ajeromi-Ifelodun', 'Surulere', 'Mushin', 'Oshodi-Isolo', 'Kosofe', 'Amuwo-Odofin', 'Badagry', 'Ikorodu', 'Epe'];

  // Nigerian Banks
  const banks = [
    'Access Bank', 'First Bank', 'GTBank', 'Zenith Bank', 'UBA', 'Opay', 'PalmPay', 
    'Stanbic IBTC', 'Fidelity Bank', 'Sterling Bank', 'Keystone Bank', 'Union Bank', 'Heritage Bank'
  ];

  return (
    <>
      <Head>
        <title>Business Onboarding — Konvag</title>
      </Head>
      
      <main className="min-h-screen bg-white pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#003d2e] mb-4">
              Get Started with <span className="text-[#ff8c00]">Konvag for Business</span>
            </h1>
            <p className="text-gray-600 text-lg">
              We are delighted to have you on board. You're just a few steps away from fully setting up your corporate account.
            </p>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
            <div 
              className="h-full bg-[#003d2e] rounded-full transition-all duration-500"
              style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
            ></div>
          </div>

          <div className="space-y-4">
            {steps.map((step) => {
              const isCompleted = completedSteps.includes(step.id);
              return (
                <div key={step.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isCompleted ? 'bg-[#003d2e]' : 'bg-gray-200'}`}>
                      {isCompleted ? <FaCheckCircle className="text-white w-5 h-5" /> : <span className="text-gray-500 text-sm font-bold">{step.id}</span>}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#003d2e]">{step.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => isCompleted ? null : handleStart(step.id)}
                    className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${isCompleted ? 'bg-gray-100 text-gray-400 cursor-default' : 'bg-[#003d2e] text-white hover:bg-[#003d2e]/90'}`}
                    disabled={isCompleted}
                  >
                    {isCompleted ? 'Completed' : 'Start'}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <button 
              onClick={handleGoLive}
              disabled={!allCompleted}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${allCompleted ? 'bg-[#ff8c00] text-[#003d2e] hover:bg-[#ff8c00]/90 shadow-lg cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              {allCompleted ? 'Go live and start processing orders' : `Complete all steps (${completedSteps.length}/${steps.length})`}
            </button>
          </div>
        </div>
      </main>

      {/* ================= STEPS 1, 2, 3 ================= (Code preserved for brevity, see full file) */}
      {isModalOpen && currentStep === 1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"><FaTimes className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-[#003d2e] mb-4">Verify Your Business</h2>
            <div className="space-y-5">
              <div><label className="block text-sm font-bold text-gray-800 mb-1">Registered business name</label><input type="text" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] transition bg-gray-50" placeholder="type business name" /></div>
              <div><label className="block text-sm font-bold text-gray-800 mb-1">How did you register your business?</label><div className="flex gap-4 mt-1"><label className="flex items-center gap-2 text-sm text-gray-700"><input type="radio" name="regType" value="cac" className="text-[#003d2e] focus:ring-[#003d2e]" /> CAC</label><label className="flex items-center gap-2 text-sm text-gray-700"><input type="radio" name="regType" value="others" className="text-[#003d2e] focus:ring-[#003d2e]" /> Others</label></div></div>
              <div><label className="block text-sm font-bold text-gray-800 mb-1">Your registration number</label><input type="text" value={formData.regNumber} onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] transition bg-gray-50" placeholder="enter registration number" /><p className="text-xs text-gray-500 mt-1 ml-1">This typically appears on the business registration certificate issued by the CAC.</p></div>
              <div><label className="block text-sm font-bold text-gray-800 mb-1">Tax identification number</label><input type="text" value={formData.taxId} onChange={(e) => setFormData({ ...formData, taxId: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] transition bg-gray-50" placeholder="enter identification number" /></div>
              <div><label className="block text-sm font-bold text-gray-800 mb-1">Upload CAC document</label><div className="mt-1 flex items-center justify-center w-full"><label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"><div className="flex flex-col items-center justify-center pt-5 pb-6"><FaUpload className="w-8 h-8 text-gray-400 mb-2" /><p className="text-sm text-gray-500">{formData.cacDocument ? formData.cacDocument.name : 'Click to upload'}</p><p className="text-xs text-gray-400 mt-1">We accept PDF, PNG & JPG files, up to 20MB</p></div><input type="file" accept=".pdf,.png,.jpg,.jpeg" className="hidden" onChange={(e) => handleFileUpload(e, 'cacDocument')} /></label></div></div>
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200"><button onClick={handleCloseModal} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 transition font-medium">Cancel</button><button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 transition shadow-md">Save & Complete</button></div>
          </div>
        </div>
      )}

      {isModalOpen && currentStep === 2 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"><FaTimes className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-[#003d2e] mb-4">Setup Your Company Profile</h2>
            <div className="space-y-6">
              <div><label className="block text-sm font-bold text-gray-800 mb-2">Add a store logo</label><div className="mt-1 flex items-center justify-center w-full"><label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition relative">{formData.logoImage ? (<div className="flex flex-col items-center justify-center"><p className="text-sm font-medium text-[#003d2e]">✅ {formData.logoImage.name}</p><p className="text-xs text-gray-400">Click to change</p></div>) : (<div className="flex flex-col items-center justify-center pt-5 pb-6"><FaImage className="w-10 h-10 text-gray-400 mb-2" /><p className="text-sm text-gray-500">Upload your store logo</p><p className="text-xs text-gray-400 mt-1">PNG, JPG, SVG up to 5MB</p></div>)}<input type="file" accept=".png,.jpg,.jpeg,.svg" className="hidden" onChange={(e) => handleFileUpload(e, 'logoImage')} /></label></div></div>
              <div><label className="block text-sm font-bold text-gray-800 mb-2">Add a cover image (Optional)</label><div className="mt-1 flex items-center justify-center w-full"><label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">{formData.coverImage ? (<div className="flex flex-col items-center justify-center"><p className="text-sm font-medium text-[#003d2e]">✅ {formData.coverImage.name}</p><p className="text-xs text-gray-400">Click to change</p></div>) : (<div className="flex flex-col items-center justify-center pt-5 pb-6"><FaUpload className="w-8 h-8 text-gray-400 mb-2" /><p className="text-sm text-gray-500">Upload cover image</p><p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p></div>)}<input type="file" accept=".png,.jpg,.jpeg" className="hidden" onChange={(e) => handleFileUpload(e, 'coverImage')} /></label></div></div>
              <div><label className="block text-sm font-bold text-gray-800 mb-1">Company Bio</label><textarea value={formData.companyBio} onChange={(e) => setFormData({ ...formData, companyBio: e.target.value })} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] transition bg-gray-50 resize-none" placeholder="Tell us about your business..." /></div>
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200"><button onClick={handleCloseModal} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 transition font-medium">Cancel</button><button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 transition shadow-md">Save & Complete</button></div>
          </div>
        </div>
      )}

      {isModalOpen && currentStep === 3 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"><FaTimes className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-[#003d2e] mb-4">Verify Your Contact Information</h2>
            <div className="space-y-5">
              <div><label className="block text-sm font-bold text-gray-800 mb-1">Business Phone number</label><div className="flex"><div className="flex items-center justify-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-700 font-medium">🇳🇬 +234</div><input type="tel" value={formData.businessPhone} onChange={(e) => setFormData({ ...formData, businessPhone: e.target.value })} className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] transition bg-gray-50" placeholder="8068760096" /></div><p className="text-xs text-gray-500 mt-2 ml-1">This number will be used to send you updates.</p></div>
              <div><label className="block text-sm font-bold text-gray-800 mb-1">Admin Email Address</label><input type="email" value={formData.adminEmail} onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] transition bg-gray-50" placeholder="admin@yourcompany.com" /></div>
              <div><label className="block text-sm font-bold text-gray-800 mb-1">Admin Phone (Optional)</label><input type="tel" value={formData.adminPhone} onChange={(e) => setFormData({ ...formData, adminPhone: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] transition bg-gray-50" placeholder="+234 800 000 0000" /></div>
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200"><button onClick={handleCloseModal} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 transition font-medium">Cancel</button><button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 transition shadow-md">Save & Complete</button></div>
          </div>
        </div>
      )}

      {/* ================= STEP 4 - FULL ADMIN SETTINGS PANEL ================= */}
      {isModalOpen && currentStep === 4 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full shadow-2xl relative max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50 shrink-0">
              <h2 className="text-2xl font-bold text-[#003d2e] flex items-center gap-2"><FaCog className="text-[#ff8c00]" /> Business Admin & Operations</h2>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-700 transition"><FaTimes className="w-5 h-5" /></button>
            </div>
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              {/* SIDEBAR */}
              <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto shrink-0">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Admin Menu</h3>
                <nav className="space-y-1">
                  {sidebarMenus.map((menu) => (
                    <button 
                      key={menu.id} 
                      onClick={() => setActiveTab(menu.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${activeTab === menu.id ? 'bg-[#003d2e] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                      <menu.icon className="w-4 h-4" /> {menu.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* MAIN CONTENT AREA */}
              <div className="flex-1 p-8 overflow-y-auto bg-white">
                
                {/* 1. PROFILE TAB */}
                {activeTab === 'profile' && (
                  <div className="space-y-6 max-w-2xl">
                    <h3 className="text-lg font-bold text-[#003d2e] mb-4">Admin Profile</h3>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Admin Full Name</label>
                      <input type="text" value={formData.adminFullName} onChange={(e) => setFormData({...formData, adminFullName: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e]" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Admin Role</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white">
                        <option>CEO / Founder</option>
                        <option>Operations Manager</option>
                        <option>Finance Manager</option>
                        <option>HR Manager</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Profile Picture</label>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"><FaUser className="w-8 h-8" /></div>
                        <button className="text-[#003d2e] font-medium text-sm hover:underline">Upload Photo</button>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition">Save Profile</button>
                    </div>
                  </div>
                )}

                {/* 2. BUSINESS INFORMATION TAB */}
                {activeTab === 'business' && (
                  <div className="space-y-6 max-w-2xl">
                    <h3 className="text-lg font-bold text-[#003d2e] mb-4">Business Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-700 font-medium mb-1">Business Category</label>
                        <select value={formData.businessCategory} onChange={(e) => setFormData({...formData, businessCategory: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white">
                          <option>Select Category</option>
                          <option>Home & Domestic Services</option>
                          <option>Technology & Digital</option>
                          <option>Construction & Real Estate</option>
                          <option>Health & Wellness</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 font-medium mb-1">Business Size</label>
                        <select value={formData.businessSize} onChange={(e) => setFormData({...formData, businessSize: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white">
                          <option>Select Size</option>
                          <option>1-10 Employees</option>
                          <option>11-50 Employees</option>
                          <option>51-200 Employees</option>
                          <option>200+ Employees</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Year Founded</label>
                      <input type="number" value={formData.yearFounded} onChange={(e) => setFormData({...formData, yearFounded: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e]" placeholder="2020" />
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition">Save Business Info</button>
                    </div>
                  </div>
                )}

                {/* 3. LOCATION & BRANCHES TAB */}
                {activeTab === 'operations' && (
                  <div className="space-y-6 max-w-2xl">
                    <h3 className="text-lg font-bold text-[#003d2e] mb-4">Location & Branches</h3>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">State</label>
                      <select value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white">
                        <option>Select State</option>
                        {nigerianStates.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">LGA</label>
                      <select value={formData.lga} onChange={(e) => setFormData({...formData, lga: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white">
                        <option>Select LGA</option>
                        {lgas.map((l) => <option key={l} value={l}>{l}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">City</label>
                      <input type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e]" placeholder="Ikeja" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Street Address</label>
                      <input type="text" value={formData.streetAddress} onChange={(e) => setFormData({...formData, streetAddress: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e]" placeholder="79, Ogba Road..." />
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition">Save Location</button>
                    </div>
                  </div>
                )}

                {/* 4. PAYMENT METHODS TAB */}
                {activeTab === 'payments' && (
                  <div className="space-y-6 max-w-2xl">
                    <h3 className="text-lg font-bold text-[#003d2e] mb-4">Payment Methods</h3>
                    <p className="text-sm text-gray-500 mb-4">Add your business bank account to receive payouts from Konvag.</p>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Select Bank</label>
                      <select value={formData.bankName} onChange={(e) => setFormData({...formData, bankName: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white">
                        <option>Select Bank</option>
                        {banks.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Account Number</label>
                      <input type="text" value={formData.accountNumber} onChange={(e) => setFormData({...formData, accountNumber: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e]" placeholder="0123456789" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Account Name</label>
                      <input type="text" value={formData.accountName} onChange={(e) => setFormData({...formData, accountName: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e]" placeholder="Konvag Solutions Ltd" />
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition">Save Payment Details</button>
                    </div>
                  </div>
                )}

                {/* 5. ADMIN & SECURITY TAB */}
                {activeTab === 'staff' && (
                  <div className="space-y-6 max-w-2xl">
                    <h3 className="text-lg font-bold text-[#003d2e] mb-4">Admin & Security</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                      <p className="text-sm text-gray-600">Manage who has access to your Konvag business dashboard. Add staff members and assign roles.</p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Admin Email</label>
                      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                        <FaEnvelope className="text-gray-400 w-4 h-4" />
                        <span className="text-gray-700">{formData.adminEmail || 'Not set'}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Change Admin Password</label>
                      <input type="password" value={formData.adminPassword} onChange={(e) => setFormData({...formData, adminPassword: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e]" placeholder="New password..." />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1">Two-Factor Authentication (2FA)</label>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-gray-600">Status:</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Inactive</span>
                        <button className="text-[#003d2e] text-sm font-medium hover:underline">Enable 2FA</button>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition">Update Security</button>
                    </div>
                  </div>
                )}

                {/* 6. SETTINGS TAB */}
                {activeTab === 'settings' && (
                  <div className="space-y-6 max-w-2xl">
                    <h3 className="text-lg font-bold text-[#003d2e] mb-4">Full Account Control</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-yellow-800 font-medium flex items-center gap-2"><FaEdit className="w-4 h-4" /> Need to change the business owner?</p>
                      <p className="text-xs text-yellow-600 mt-1">You can request a transfer of ownership to another admin. This will require verification.</p>
                      <button className="mt-2 text-[#003d2e] text-sm font-bold hover:underline">Request Ownership Transfer</button>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-800 font-medium flex items-center gap-2"><FaUsers className="w-4 h-4" /> Manage Staff Permissions</p>
                      <p className="text-xs text-blue-600 mt-1">Control what your team members can see and do on the Konvag platform.</p>
                      <button className="mt-2 text-[#003d2e] text-sm font-bold hover:underline">Manage Staff Access</button>
                    </div>
                    <div className="bg-white border border-gray-300 rounded-lg p-4">
                      <p className="text-sm text-gray-700 font-medium flex items-center gap-2"><FaLock className="w-4 h-4" /> Email Notifications</p>
                      <p className="text-xs text-gray-500 mt-1">Receive updates when new orders are placed, payments are received, or staff changes occur.</p>
                      <div className="flex items-center gap-2 mt-2">
                        <input type="checkbox" className="w-4 h-4 text-[#003d2e] focus:ring-[#003d2e]" defaultChecked />
                        <span className="text-sm text-gray-700">Send me marketing and promotional emails</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition">Save Settings</button>
                    </div>
                  </div>
                )}

              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3 bg-gray-50 shrink-0">
              <button onClick={handleCloseModal} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 transition font-medium">Cancel</button>
              <button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 transition shadow-md">Save & Complete Step 4</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= STEP 5 ================= */}
      {isModalOpen && currentStep === 5 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"><FaTimes className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-[#003d2e] mb-2">Setup Your Service Catalog</h2>
            <p className="text-gray-500 mb-6">Select the services your business offers from the list below. <span className="block text-xs text-gray-400 mt-1">({formData.selectedServices.length} of {serviceCategories.length} selected)</span></p>
            <div className="relative mb-6" ref={dropdownRef}>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white hover:border-[#003d2e] transition cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className="pl-3 pr-2 text-gray-400"><FaSearch className="w-4 h-4" /></div>
                <input type="text" placeholder="Search for services (e.g. Plumbing, Tech)..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="flex-1 py-3 px-2 outline-none text-gray-700" onFocus={() => setIsDropdownOpen(true)} />
                <div className="pr-3 text-gray-400"><FaChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} /></div>
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto z-10">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((cat) => {
                      const isSelected = formData.selectedServices.includes(cat.name);
                      return (
                        <div key={cat.id} onClick={() => toggleService(cat.name)} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition border-b border-gray-100 last:border-b-0">
                          <span className="text-gray-700 text-sm">{cat.name}</span>
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition ${isSelected ? 'bg-[#003d2e] border-[#003d2e]' : 'border-gray-300 bg-white'}`}>
                            {isSelected && <FaCheckCircle className="text-white w-3.5 h-3.5" />}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="px-4 py-4 text-gray-400 text-sm text-center">No services found matching "{searchTerm}"</div>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2 min-h-[40px] mb-6">
              {formData.selectedServices.map((service) => (
                <div key={service} className="inline-flex items-center gap-2 bg-[#003d2e]/10 text-[#003d2e] px-3 py-1 rounded-full text-sm font-medium">
                  {service}
                  <button onClick={() => toggleService(service)} className="text-[#003d2e]/50 hover:text-[#003d2e] transition"><FaTimes className="w-3 h-3" /></button>
                </div>
              ))}
              {formData.selectedServices.length === 0 && <span className="text-gray-400 text-sm italic">No services selected yet</span>}
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200">
              <button onClick={handleCloseModal} className="px-6 py-2.5 text-gray-600 hover:text-gray-800 transition font-medium">Cancel</button>
              <button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 transition shadow-md">Save & Complete</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}