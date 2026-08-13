import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { 
  FaCheckCircle, FaTimes, FaUpload, FaImage, 
  FaUser, FaBuilding, FaClock, FaMoneyBillWave, 
  FaUsers, FaMapMarkerAlt, FaCog, FaChevronDown, 
  FaSearch, FaEdit, FaLock, FaEnvelope, FaPlus, FaTrash, FaCamera, FaTag
} from 'react-icons/fa';
import { serviceCategories } from '@/data/serviceCategories';

export default function BusinessOnboarding() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ================= FORM DATA =================
  const [formData, setFormData] = useState({
    // Step 1: Verify Business
    businessName: '', cacRegNumber: '', taxId: '', cacDocument: null as File | null,
    // Step 2: Profile
    logoImage: null as File | null, coverImage: null as File | null, companyBio: '',
    // Step 3: Contact Info
    contactBusinessName: '', phone: '', email: '', state: '', lga: '', city: '', streetAddress: '',
    // Step 4: Operations
    businessCategory: '', businessSize: '', yearFounded: '',
    bankName: '', accountNumber: '', accountName: '',
    locations: [{ id: 1, state: '', lga: '', city: '', streetAddress: '', isHeadOffice: true }],
    adminFullName: '', adminRole: '', adminPassword: '',
    // Step 5: Universal Service Catalog
    services: [{
      id: 1,
      title: '',
      category: '',
      subCategory: '',
      image: null as File | null,
      price: '',
      pricingModel: 'fixed',
      serviceType: 'one-time',
      deliveryTime: '1-3 days',
      tagline: '',
      description: '',
      includedItems: [] as string[],
      // Food/Restaurant specific fields
      cuisineType: '',
      dietaryPreferences: [] as string[],
      portionSize: '',
      menuCategory: '',
      pickupAvailable: false,
      deliveryAvailable: false,
      specialInstructions: '',
      // Service/Plumber specific fields
      equipmentProvided: false,
      serviceArea: '',
      certifications: '',
    }],
    // Step 6: KYC
    idCardFront: null as File | null, idCardBack: null as File | null, faceImage: null as File | null,
  });

  // ================= STEPS =================
  const steps = [
    { id: 1, title: 'Verify your business', desc: 'Business name, CAC, Tax ID, and CAC document.' },
    { id: 2, title: 'Setup your profile', desc: 'Logo, cover image, and company bio.' },
    { id: 3, title: 'Verify your contact info', desc: 'Phone, email, and physical address.' },
    { id: 4, title: 'Business Admin & Operations', desc: 'Profile, info, locations, payments, security.' },
    { id: 5, title: 'Setup your service catalog', desc: 'Add services, images, prices, and detailed info.' },
    { id: 6, title: 'KYC Verification', desc: 'Upload ID and verify your face.' },
  ];

  const handleStart = (id: number) => { setCurrentStep(id); setIsModalOpen(true); };
  const handleCloseModal = () => { setIsModalOpen(false); setCurrentStep(null); };
  const handleComplete = () => {
    if (currentStep !== null && !completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setIsModalOpen(false); setCurrentStep(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, [field]: e.target.files[0] });
    }
  };

  // ================= SERVICE CATALOG =================
  const addService = () => {
    const newId = formData.services.length > 0 ? Math.max(...formData.services.map(s => s.id)) + 1 : 1;
    setFormData({
      ...formData,
      services: [...formData.services, {
        id: newId,
        title: '', category: '', subCategory: '', image: null, price: '', pricingModel: 'fixed',
        serviceType: 'one-time', deliveryTime: '1-3 days', tagline: '', description: '',
        includedItems: [], cuisineType: '', dietaryPreferences: [], portionSize: '', menuCategory: '',
        pickupAvailable: false, deliveryAvailable: false, specialInstructions: '',
        equipmentProvided: false, serviceArea: '', certifications: ''
      }]
    });
  };

  const removeService = (id: number) => {
    if (formData.services.length === 1) { alert("You must have at least one service."); return; }
    setFormData({ ...formData, services: formData.services.filter(s => s.id !== id) });
  };

  const updateService = (id: number, field: string, value: any) => {
    setFormData({
      ...formData,
      services: formData.services.map(s => s.id === id ? { ...s, [field]: value } : s)
    });
  };

  const handleServiceImage = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        services: formData.services.map(s => s.id === id ? { ...s, image: e.target.files![0] } : s)
      });
    }
  };

  const addIncludedItem = (serviceId: number) => {
    const service = formData.services.find(s => s.id === serviceId);
    if (!service) return;
    const input = document.getElementById(`included-input-${serviceId}`) as HTMLInputElement;
    if (input && input.value.trim() !== '') {
      updateService(serviceId, 'includedItems', [...service.includedItems, input.value.trim()]);
      input.value = '';
    }
  };

  const removeIncludedItem = (serviceId: number, index: number) => {
    const service = formData.services.find(s => s.id === serviceId);
    if (service) {
      const newItems = service.includedItems.filter((_, i) => i !== index);
      updateService(serviceId, 'includedItems', newItems);
    }
  };

  const toggleDietary = (serviceId: number, diet: string) => {
    const service = formData.services.find(s => s.id === serviceId);
    if (service) {
      const current = service.dietaryPreferences || [];
      const newPrefs = current.includes(diet) ? current.filter(d => d !== diet) : [...current, diet];
      updateService(serviceId, 'dietaryPreferences', newPrefs);
    }
  };

  // ================= LOCATIONS =================
  const addLocation = () => {
    const newId = formData.locations.length > 0 ? Math.max(...formData.locations.map(l => l.id)) + 1 : 1;
    setFormData({ ...formData, locations: [...formData.locations, { id: newId, state: '', lga: '', city: '', streetAddress: '', isHeadOffice: false }] });
  };
  const removeLocation = (id: number) => {
    if (formData.locations.length === 1) { alert("You must have at least one location."); return; }
    setFormData({ ...formData, locations: formData.locations.filter(l => l.id !== id) });
  };
  const updateLocation = (id: number, field: string, value: string) => {
    setFormData({ ...formData, locations: formData.locations.map(l => l.id === id ? { ...l, [field]: value } : l) });
  };

  // ================= REAL FACE VERIFICATION =================
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraOn(true);
        setShowInstructions(false);
      }
    } catch (err) {
      alert("Camera access denied. Please allow camera permissions in your browser settings.");
    }
  };

  const takeSelfie = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(videoRef.current, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'selfie.jpg', { type: 'image/jpeg' });
          setFormData({ ...formData, faceImage: file });
          alert("✅ Face captured successfully!");
          stopCamera();
        }
      }, 'image/jpeg');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOn(false);
    }
  };

  // ================= CONSTANTS =================
  const nigerianStates = ['Lagos', 'Abuja FCT', 'Oyo', 'Ogun', 'Osun', 'Ondo', 'Ekiti', 'Kwara', 'Kano', 'Kaduna', 'Rivers', 'Delta', 'Edo'];
  const lgas = ['Ikeja', 'Lagos Island', 'Eti-Osa', 'Ajeromi-Ifelodun', 'Surulere', 'Mushin', 'Oshodi-Isolo', 'Kosofe', 'Amuwo-Odofin', 'Badagry', 'Ikorodu', 'Epe'];
  const banks = ['Access Bank', 'First Bank', 'GTBank', 'Zenith Bank', 'UBA', 'Opay', 'PalmPay', 'Stanbic IBTC', 'Fidelity Bank', 'Sterling Bank', 'Keystone Bank', 'Union Bank', 'Heritage Bank'];
  const dietaryOptions = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Halal', 'Kosher', 'Nut-Free', 'Dairy-Free'];
  const cuisineOptions = ['African', 'Continental', 'Asian', 'Fast Food', 'Local', 'Fusion', 'Mediterranean'];
  const menuCategories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Beverages', 'Desserts', 'Groceries'];

  // ================= SIDEBAR =================
  const [activeTab, setActiveTab] = useState('profile');
  const sidebarMenus = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'business', label: 'Business info', icon: FaBuilding },
    { id: 'locations', label: 'Locations & Branches', icon: FaMapMarkerAlt },
    { id: 'payments', label: 'Payment methods', icon: FaMoneyBillWave },
    { id: 'security', label: 'Admin & Security', icon: FaLock },
  ];

  const allCompleted = completedSteps.length === steps.length;
  const handleGoLive = () => { if (allCompleted) alert('🎉 Your business is now live on Konvag!'); };

  return (
    <>
      <Head><title>Business Onboarding — Konvag</title></Head>
      <main className="min-h-screen bg-white pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#003d2e] mb-4">Get Started with <span className="text-[#ff8c00]">Konvag for Business</span></h1>
            <p className="text-gray-600 text-lg">We are delighted to have you on board. You're just a few steps away from fully setting up your corporate account.</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
            <div className="h-full bg-[#003d2e] rounded-full transition-all duration-500" style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}></div>
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
                    <div><h3 className="text-lg font-bold text-[#003d2e]">{step.title}</h3><p className="text-gray-500 text-sm mt-1">{step.desc}</p></div>
                  </div>
                  <button onClick={() => isCompleted ? null : handleStart(step.id)} className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${isCompleted ? 'bg-gray-100 text-gray-400 cursor-default' : 'bg-[#003d2e] text-white hover:bg-[#003d2e]/90'}`} disabled={isCompleted}>{isCompleted ? 'Completed' : 'Start'}</button>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <button onClick={handleGoLive} disabled={!allCompleted} className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${allCompleted ? 'bg-[#ff8c00] text-[#003d2e] hover:bg-[#ff8c00]/90 shadow-lg cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>{allCompleted ? 'Go live and start processing orders' : `Complete all steps (${completedSteps.length}/${steps.length})`}</button>
          </div>
        </div>
      </main>

      {/* ================= STEP 1 ================= */}
      {isModalOpen && currentStep === 1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"><FaTimes className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-[#003d2e] mb-4">Verify Your Business</h2>
            <div className="space-y-4">
              <div><label className="block text-sm font-bold text-black mb-1">Registered business name <span className="text-red-500">*</span></label><input type="text" value={formData.businessName} onChange={(e) => setFormData({...formData, businessName: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="Enter registered name" required /></div>
              <div><label className="block text-sm font-bold text-black mb-1">CAC Registration number <span className="text-red-500">*</span></label><input type="text" value={formData.cacRegNumber} onChange={(e) => setFormData({...formData, cacRegNumber: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="RC-123456" required /></div>
              <div><label className="block text-sm font-bold text-black mb-1">Tax Identification number <span className="text-red-500">*</span></label><input type="text" value={formData.taxId} onChange={(e) => setFormData({...formData, taxId: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="Enter Tax ID" required /></div>
              <div><label className="block text-sm font-bold text-black mb-1">Upload CAC document <span className="text-red-500">*</span></label><div className="mt-1 flex items-center justify-center w-full"><label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"><div className="flex flex-col items-center justify-center pt-5 pb-6"><FaUpload className="w-8 h-8 text-gray-400 mb-2" /><p className="text-sm text-gray-500">{formData.cacDocument ? formData.cacDocument.name : 'Click to upload'}</p><p className="text-xs text-gray-400">PDF, PNG, JPG up to 20MB</p></div><input type="file" accept=".pdf,.png,.jpg,.jpeg" className="hidden" onChange={(e) => handleFileUpload(e, 'cacDocument')} /></label></div></div>
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200"><button onClick={handleCloseModal} className="px-6 py-2.5 text-black font-medium">Cancel</button><button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 shadow-md">Save & Complete</button></div>
          </div>
        </div>
      )}

      {/* ================= STEP 2 ================= */}
      {isModalOpen && currentStep === 2 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"><FaTimes className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-[#003d2e] mb-4">Setup Your Company Profile</h2>
            <div className="space-y-6">
              <div><label className="block text-sm font-bold text-black mb-2">Add your business logo</label><div className="mt-1 flex items-center justify-center w-full"><label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition relative rounded-xl overflow-hidden">{formData.logoImage ? (<div className="flex flex-col items-center justify-center"><p className="text-sm font-medium text-[#003d2e]">✅ {formData.logoImage.name}</p><p className="text-xs text-gray-400">Click to change</p></div>) : (<div className="flex flex-col items-center justify-center pt-5 pb-6"><FaImage className="w-10 h-10 text-gray-400 mb-2" /><p className="text-sm text-gray-500">Upload your store logo</p><p className="text-xs text-gray-400 mt-1">PNG, JPG, SVG up to 5MB</p></div>)}<input type="file" accept=".png,.jpg,.jpeg,.svg" className="hidden" onChange={(e) => handleFileUpload(e, 'logoImage')} /></label></div></div>
              <div><label className="block text-sm font-bold text-black mb-2">Add a cover image (Optional)</label><div className="mt-1 flex items-center justify-center w-full"><label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">{formData.coverImage ? (<div className="flex flex-col items-center justify-center"><p className="text-sm font-medium text-[#003d2e]">✅ {formData.coverImage.name}</p><p className="text-xs text-gray-400">Click to change</p></div>) : (<div className="flex flex-col items-center justify-center pt-5 pb-6"><FaUpload className="w-8 h-8 text-gray-400 mb-2" /><p className="text-sm text-gray-500">Upload cover image</p><p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p></div>)}<input type="file" accept=".png,.jpg,.jpeg" className="hidden" onChange={(e) => handleFileUpload(e, 'coverImage')} /></label></div></div>
              <div><label className="block text-sm font-bold text-black mb-1">Company Bio</label><textarea value={formData.companyBio} onChange={(e) => setFormData({ ...formData, companyBio: e.target.value })} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black resize-none" placeholder="Tell us about your business..." /></div>
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200"><button onClick={handleCloseModal} className="px-6 py-2.5 text-black font-medium">Cancel</button><button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 shadow-md">Save & Complete</button></div>
          </div>
        </div>
      )}

      {/* ================= STEP 3 ================= */}
      {isModalOpen && currentStep === 3 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"><FaTimes className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-[#003d2e] mb-4">Verify Your Contact Info</h2>
            <div className="space-y-4">
              <div><label className="block text-sm font-bold text-black mb-1">Business Name <span className="text-red-500">*</span></label><input type="text" value={formData.contactBusinessName} onChange={(e) => setFormData({...formData, contactBusinessName: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="Business Name" required /></div>
              <div><label className="block text-sm font-bold text-black mb-1">Phone Number <span className="text-red-500">*</span></label><input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="+234 800 000 0000" required /></div>
              <div><label className="block text-sm font-bold text-black mb-1">Email Address <span className="text-red-500">*</span></label><input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="admin@company.com" required /></div>
              <div><label className="block text-sm font-bold text-black mb-1">State <span className="text-red-500">*</span></label><select value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black"><option>Select State</option>{nigerianStates.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
              <div><label className="block text-sm font-bold text-black mb-1">LGA <span className="text-red-500">*</span></label><select value={formData.lga} onChange={(e) => setFormData({...formData, lga: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black"><option>Select LGA</option>{lgas.map((l) => <option key={l} value={l}>{l}</option>)}</select></div>
              <div><label className="block text-sm font-bold text-black mb-1">City <span className="text-red-500">*</span></label><input type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="Ikeja" required /></div>
              <div><label className="block text-sm font-bold text-black mb-1">Street Address <span className="text-red-500">*</span></label><input type="text" value={formData.streetAddress} onChange={(e) => setFormData({...formData, streetAddress: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="79, Ogba Road..." required /></div>
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200"><button onClick={handleCloseModal} className="px-6 py-2.5 text-black font-medium">Cancel</button><button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 shadow-md">Save & Complete</button></div>
          </div>
        </div>
      )}

      {/* ================= STEP 4 ================= */}
      {isModalOpen && currentStep === 4 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full shadow-2xl relative max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between bg-gray-50 shrink-0">
              <h2 className="text-2xl font-bold text-[#003d2e] flex items-center gap-2"><FaCog className="text-[#ff8c00]" /> Business Admin & Operations</h2>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-700"><FaTimes className="w-5 h-5" /></button>
            </div>
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto shrink-0">
                <nav className="space-y-1">
                  {sidebarMenus.map((m) => (
                    <button key={m.id} onClick={() => setActiveTab(m.id)} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${activeTab === m.id ? 'bg-[#003d2e] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}><m.icon className="w-4 h-4" /> {m.label}</button>
                  ))}
                </nav>
              </div>
              <div className="flex-1 p-8 overflow-y-auto bg-white">
                {activeTab === 'profile' && (
                  <div className="space-y-4 max-w-2xl">
                    <h3 className="text-lg font-bold text-[#003d2e] mb-4">Admin Profile</h3>
                    <div><label className="block text-sm text-black font-medium mb-1">Admin Full Name <span className="text-red-500">*</span></label><input type="text" value={formData.adminFullName} onChange={(e) => setFormData({...formData, adminFullName: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="John Doe" required /></div>
                    <div><label className="block text-sm text-black font-medium mb-1">Admin Role <span className="text-red-500">*</span></label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" required><option>CEO / Founder</option><option>Operations Manager</option><option>Finance Manager</option><option>HR Manager</option></select></div>
                    <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition mt-2">Save Profile</button>
                  </div>
                )}
                {activeTab === 'business' && (
                  <div className="space-y-4 max-w-2xl">
                    <h3 className="text-lg font-bold text-[#003d2e] mb-4">Business Info</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="block text-sm text-black font-medium mb-1">Category <span className="text-red-500">*</span></label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" required><option>Select Category</option><option>Home & Domestic Services</option><option>Technology & Digital</option><option>Construction & Real Estate</option><option>Health & Wellness</option></select></div>
                    </div>
                    <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition mt-2">Save Info</button>
                  </div>
                )}
                {activeTab === 'locations' && (
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex justify-between items-center mb-4"><h3 className="text-lg font-bold text-[#003d2e]">Locations</h3><button onClick={addLocation} className="flex items-center gap-2 bg-[#ff8c00] text-[#003d2e] px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#e67a00] transition shadow-sm"><FaPlus className="w-3 h-3" /> Add Branch</button></div>
                    {formData.locations.map((loc, i) => (
                      <div key={loc.id} className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4 relative">
                        <h4 className="font-bold text-[#003d2e] text-sm mb-3">{loc.isHeadOffice ? '🏢 Head Office' : `📍 Branch ${i}`}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div><label className="block text-sm text-black font-medium mb-1">State <span className="text-red-500">*</span></label><select value={loc.state} onChange={(e) => updateLocation(loc.id, 'state', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" required><option>Select State</option>{nigerianStates.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
                          <div><label className="block text-sm text-black font-medium mb-1">LGA <span className="text-red-500">*</span></label><select value={loc.lga} onChange={(e) => updateLocation(loc.id, 'lga', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" required><option>Select LGA</option>{lgas.map((l) => <option key={l} value={l}>{l}</option>)}</select></div>
                        </div>
                        <div className="mt-3"><label className="block text-sm text-black font-medium mb-1">City <span className="text-red-500">*</span></label><input type="text" value={loc.city} onChange={(e) => updateLocation(loc.id, 'city', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="Ikeja" required /></div>
                        <div className="mt-3"><label className="block text-sm text-black font-medium mb-1">Street Address <span className="text-red-500">*</span></label><input type="text" value={loc.streetAddress} onChange={(e) => updateLocation(loc.id, 'streetAddress', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="79, Ogba Road..." required /></div>
                      </div>
                    ))}
                    <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition mt-4">Save Locations</button>
                  </div>
                )}
                {activeTab === 'payments' && (
                  <div className="space-y-4 max-w-2xl">
                    <h3 className="text-lg font-bold text-[#003d2e] mb-4">Payment Methods</h3>
                    <div><label className="block text-sm text-black font-medium mb-1">Select Bank <span className="text-red-500">*</span></label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" required><option>Select Bank</option>{banks.map((b) => <option key={b} value={b}>{b}</option>)}</select></div>
                    <div><label className="block text-sm text-black font-medium mb-1">Account Number <span className="text-red-500">*</span></label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="0123456789" required /></div>
                    <div><label className="block text-sm text-black font-medium mb-1">Account Name <span className="text-red-500">*</span></label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="Konvag Solutions Ltd" required /></div>
                    <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition mt-2">Save Payment</button>
                  </div>
                )}
                {activeTab === 'security' && (
                  <div className="space-y-4 max-w-2xl">
                    <h3 className="text-lg font-bold text-[#003d2e] mb-4">Admin & Security</h3>
                    <div><label className="block text-sm text-black font-medium mb-1">Admin Email</label><div className="p-2 border rounded bg-gray-50 flex items-center gap-2 text-black"><FaEnvelope className="text-gray-400 w-4 h-4" />{formData.email || 'Not set'}</div></div>
                    <div><label className="block text-sm text-black font-medium mb-1">Change Password <span className="text-red-500">*</span></label><input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d2e] bg-white text-black" placeholder="New password..." required /></div>
                    <button className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition mt-2">Update Security</button>
                  </div>
                )}
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3 bg-gray-50 shrink-0">
              <button onClick={handleCloseModal} className="px-6 py-2.5 text-black font-medium">Cancel</button>
              <button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 transition shadow-md">Save & Complete Step 4</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= STEP 5: UNIVERSAL SERVICE MANAGER ================= */}
      {isModalOpen && currentStep === 5 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"><FaTimes className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-[#003d2e] mb-2">Setup Your Service Catalog</h2>
            <p className="text-gray-500 mb-4">Add your services, items, or menu options. Fill in the details specific to your business.</p>

            {formData.services.map((svc, index) => {
              const isFoodCategory = svc.category?.toLowerCase().includes('food') || svc.category?.toLowerCase().includes('culinary');
              
              return (
                <div key={svc.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6 relative">
                  
                  {/* CARD HEADER */}
                  <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#003d2e] text-white text-xs font-bold px-3 py-1 rounded-full">Service #{index + 1}</span>
                      <span className="text-sm text-gray-400">|</span>
                      <span className="text-sm text-gray-500 italic">{svc.category || 'Select a category'}</span>
                    </div>
                    <button onClick={() => removeService(svc.id)} className="text-red-400 hover:text-red-600 transition"><FaTrash className="w-4 h-4" /></button>
                  </div>

                  {/* MAIN CONTENT GRID */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* LEFT COLUMN: IMAGE UPLOADER */}
                    <div className="lg:col-span-1">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Service Image <span className="text-red-500">*</span></label>
                      <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer relative overflow-hidden group">
                        {svc.image ? (
                          <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                              <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">Change Image</span>
                            </div>
                            {/* Preview logic using URL.createObjectURL */}
                            <img 
                              src={URL.createObjectURL(svc.image)} 
                              alt="Service preview" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                            <FaImage className="w-8 h-8 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-500 font-medium">Upload your service image</p>
                            <p className="text-xs text-gray-400 mt-1">PNG, JPG, SVG up to 5MB</p>
                          </div>
                        )}
                        <input 
                          type="file" 
                          accept=".png,.jpg,.jpeg,.svg" 
                          className="absolute inset-0 opacity-0 cursor-pointer" 
                          required 
                          onChange={(e) => handleServiceImage(svc.id, e)} 
                        />
                      </div>
                    </div>

                    {/* MIDDLE COLUMN: CORE DETAILS */}
                    <div className="lg:col-span-1 space-y-3">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Service Title <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          value={svc.title} 
                          onChange={(e) => updateService(svc.id, 'title', e.target.value)} 
                          className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]" 
                          placeholder="e.g. Jollof Rice & Chicken, Premium Plumbing" 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Category <span className="text-red-500">*</span></label>
                        <select 
                          value={svc.category} 
                          onChange={(e) => updateService(svc.id, 'category', e.target.value)} 
                          className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]" 
                          required
                        >
                          <option value="">Select Category</option>
                          {serviceCategories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Sub-Category <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          value={svc.subCategory} 
                          onChange={(e) => updateService(svc.id, 'subCategory', e.target.value)} 
                          className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]" 
                          placeholder="e.g. Plumbing, Catering" 
                          required 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1">Price (₦) <span className="text-red-500">*</span></label>
                          <input 
                            type="number" 
                            value={svc.price} 
                            onChange={(e) => updateService(svc.id, 'price', e.target.value)} 
                            className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]" 
                            placeholder="15000" 
                            required 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1">Delivery / Prep Time</label>
                          <select 
                            value={svc.deliveryTime} 
                            onChange={(e) => updateService(svc.id, 'deliveryTime', e.target.value)} 
                            className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]"
                          >
                            <option>15 mins</option>
                            <option>30 mins</option>
                            <option>1 hour</option>
                            <option>Same day</option>
                            <option>1-3 days</option>
                            <option>1 week</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: ADVANCED / DYNAMIC OPTIONS */}
                    <div className="lg:col-span-1 space-y-3">
                      {/* Food/Restaurant specific fields */}
                      {isFoodCategory ? (
                        <>
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Cuisine Type</label>
                            <select 
                              value={svc.cuisineType} 
                              onChange={(e) => updateService(svc.id, 'cuisineType', e.target.value)} 
                              className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]"
                            >
                              <option value="">Select Cuisine</option>
                              {cuisineOptions.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Dietary Preferences</label>
                            <div className="flex flex-wrap gap-2">
                              {dietaryOptions.map(d => (
                                <button 
                                  key={d}
                                  type="button"
                                  onClick={() => toggleDietary(svc.id, d)}
                                  className={`text-xs px-3 py-1 rounded-full border transition ${svc.dietaryPreferences.includes(d) ? 'bg-[#003d2e] text-white border-[#003d2e]' : 'bg-white text-gray-600 border-gray-300 hover:border-[#003d2e]'}`}
                                >
                                  {d}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-1">Menu Category</label>
                              <select 
                                value={svc.menuCategory} 
                                onChange={(e) => updateService(svc.id, 'menuCategory', e.target.value)} 
                                className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]"
                              >
                                <option value="">Select</option>
                                {menuCategories.map(m => <option key={m} value={m}>{m}</option>)}
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-1">Portion Size</label>
                              <select 
                                value={svc.portionSize} 
                                onChange={(e) => updateService(svc.id, 'portionSize', e.target.value)} 
                                className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]"
                              >
                                <option value="">Select</option>
                                <option>Single</option>
                                <option>Serves 2</option>
                                <option>Serves 4</option>
                                <option>Family Pack</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-4 text-sm">
                            <label className="flex items-center gap-2 text-gray-700">
                              <input type="checkbox" checked={svc.pickupAvailable} onChange={(e) => updateService(svc.id, 'pickupAvailable', e.target.checked)} className="w-4 h-4 text-[#003d2e] focus:ring-[#003d2e]" />
                              Pickup Available
                            </label>
                            <label className="flex items-center gap-2 text-gray-700">
                              <input type="checkbox" checked={svc.deliveryAvailable} onChange={(e) => updateService(svc.id, 'deliveryAvailable', e.target.checked)} className="w-4 h-4 text-[#003d2e] focus:ring-[#003d2e]" />
                              Delivery Available
                            </label>
                          </div>
                        </>
                      ) : (
                        /* Service/Plumber specific fields */
                        <>
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Service Area (LGA/State)</label>
                            <input type="text" value={svc.serviceArea} onChange={(e) => updateService(svc.id, 'serviceArea', e.target.value)} className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]" placeholder="e.g. Ikeja, Lagos" />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Certifications</label>
                            <input type="text" value={svc.certifications} onChange={(e) => updateService(svc.id, 'certifications', e.target.value)} className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]" placeholder="e.g. Master Plumber License" />
                          </div>
                          <div className="flex items-center gap-3 text-sm mt-2">
                            <label className="flex items-center gap-2 text-gray-700">
                              <input type="checkbox" checked={svc.equipmentProvided} onChange={(e) => updateService(svc.id, 'equipmentProvided', e.target.checked)} className="w-4 h-4 text-[#003d2e] focus:ring-[#003d2e]" />
                              I provide my own tools/equipment
                            </label>
                          </div>
                        </>
                      )}
                    </div>

                  </div>

                  {/* BOTTOM SECTION: DESCRIPTION & CHECKLIST (Full Width) */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="mb-3">
                      <label className="block text-sm font-bold text-gray-700 mb-1">Short Tagline</label>
                      <input type="text" value={svc.tagline} onChange={(e) => updateService(svc.id, 'tagline', e.target.value)} className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e]" placeholder="e.g. Spicy, authentic, locally sourced" />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-bold text-gray-700 mb-1">Full Description <span className="text-red-500">*</span></label>
                      <textarea 
                        value={svc.description} 
                        onChange={(e) => updateService(svc.id, 'description', e.target.value)} 
                        rows={3} 
                        className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e] resize-none" 
                        placeholder="Describe your service, ingredients, process, or guarantees..." 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">What's Included</label>
                      <div className="flex gap-2 mb-2">
                        <input 
                          id={`included-input-${svc.id}`} 
                          type="text" 
                          className="flex-1 border border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-[#003d2e] text-sm" 
                          placeholder="e.g. Free drink, 30-day warranty" 
                          onKeyDown={(e) => e.key === 'Enter' && addIncludedItem(svc.id)}
                        />
                        <button onClick={() => addIncludedItem(svc.id)} className="bg-[#003d2e] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#003d2e]/90 transition">Add</button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {svc.includedItems.map((item, i) => (
                          <span key={i} className="bg-[#003d2e]/10 text-[#003d2e] px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-[#003d2e]/20">
                            ✅ {item}
                            <button onClick={() => removeIncludedItem(svc.id, i)} className="text-[#003d2e]/50 hover:text-red-500 transition"><FaTimes className="w-3 h-3" /></button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <button onClick={addService} className="flex items-center gap-2 bg-[#003d2e] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#003d2e]/90 transition"><FaPlus /> Add Another Service</button>
            
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200">
              <button onClick={handleCloseModal} className="px-6 py-2.5 text-black font-medium">Cancel</button>
              <button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 shadow-md">Save & Complete</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= STEP 6: KYC ================= */}
      {isModalOpen && currentStep === 6 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"><FaTimes className="w-5 h-5" /></button>
            <h2 className="text-2xl font-bold text-[#003d2e] mb-2">KYC Verification</h2>
            <p className="text-gray-500 mb-6">Upload a valid government ID and verify your face.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-black mb-2">ID Card (Front) <span className="text-red-500">*</span></label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                  <div className="flex flex-col items-center justify-center">
                    <FaUpload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-black">{formData.idCardFront ? formData.idCardFront.name : 'Click to upload Front ID'}</p>
                  </div>
                  <input type="file" accept="image/*" className="hidden" required onChange={(e) => handleFileUpload(e, 'idCardFront')} />
                </label>
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">ID Card (Back) <span className="text-red-500">*</span></label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                  <div className="flex flex-col items-center justify-center">
                    <FaUpload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-black">{formData.idCardBack ? formData.idCardBack.name : 'Click to upload Back ID'}</p>
                  </div>
                  <input type="file" accept="image/*" className="hidden" required onChange={(e) => handleFileUpload(e, 'idCardBack')} />
                </label>
              </div>
              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white text-center relative">
                <div className="flex flex-col items-center justify-center">
                  <FaCamera className="w-12 h-12 text-gray-400 mb-3" />
                  <h4 className="text-lg font-bold text-black mb-1">Face Verification <span className="text-red-500">*</span></h4>
                  {formData.faceImage ? (
                    <div className="flex flex-col items-center">
                      <p className="text-green-600 font-bold mb-2">✅ Face captured successfully!</p>
                      <button onClick={() => setFormData({...formData, faceImage: null})} className="text-red-500 text-sm hover:underline">Retake</button>
                    </div>
                  ) : isCameraOn ? (
                    <div className="w-full max-w-md mx-auto">
                      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border-2 border-[#003d2e] shadow-inner mb-3">
                        <video ref={videoRef} autoPlay playsInline className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                      <div className="flex gap-3 justify-center">
                        <button onClick={takeSelfie} className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#003d2e]/90 transition">📸 Capture Selfie</button>
                        <button onClick={stopCamera} className="bg-gray-200 text-black px-6 py-2 rounded-lg font-bold hover:bg-gray-300 transition">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {showInstructions ? (
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-4 text-left">
                          <h5 className="font-bold text-[#003d2e] mb-3 text-lg">📋 Face Verification Guide</h5>
                          <ul className="space-y-2 text-sm text-black mb-4">
                            <li className="flex items-start gap-2"><span className="text-[#ff8c00] font-bold">1.</span> Position your face in the center of the camera frame.</li>
                            <li className="flex items-start gap-2"><span className="text-[#ff8c00] font-bold">2.</span> <strong>Turn your head slowly to the LEFT</strong> until the camera clearly sees your side profile.</li>
                            <li className="flex items-start gap-2"><span className="text-[#ff8c00] font-bold">3.</span> Return to the center, then <strong>turn your head slowly to the RIGHT</strong>.</li>
                            <li className="flex items-start gap-2"><span className="text-[#ff8c00] font-bold">4.</span> Return to the center, and <strong>NOD your head up and down</strong> once.</li>
                            <li className="flex items-start gap-2"><span className="text-[#ff8c00] font-bold">5.</span> Look straight into the camera and click <strong>"Start Verification"</strong>.</li>
                          </ul>
                          <div className="flex justify-end gap-3">
                            <button onClick={() => setShowInstructions(false)} className="px-4 py-2 text-gray-600 hover:text-black transition">Cancel</button>
                            <button onClick={startCamera} className="bg-[#003d2e] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#003d2e]/90 transition shadow-sm">🚀 Start Verification</button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm text-black mb-4">Make sure your face matches the ID card above.</p>
                          <button onClick={() => setShowInstructions(true)} className="bg-[#003d2e] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003d2e]/90 transition shadow-md">
                            Click to Verify Face
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200">
              <button onClick={handleCloseModal} className="px-6 py-2.5 text-black font-medium">Cancel</button>
              <button onClick={handleComplete} className="px-6 py-2.5 bg-[#003d2e] text-white rounded-lg font-bold hover:bg-[#003d2e]/90 shadow-md">Save & Complete</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}