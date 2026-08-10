import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import { FaCamera, FaSave, FaHeart, FaStar, FaClipboardList } from 'react-icons/fa';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

export default function ClientProfilePage() {
  const [formData, setFormData] = useState({
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+234 800 000 0000',
    location: 'Lagos, Nigeria',
    bio: 'Busy professional looking for reliable home services. I love clean spaces and working with trusted professionals.',
    preferredCategories: 'Home & Domestic, Technology & Digital',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Client profile updated successfully!');
  };

  return (
    <>
      <Head>
        <title>My Profile — Client Dashboard</title>
      </Head>
      
      <div className="min-h-screen bg-[#00251d] pt-20 pl-0 md:pl-64">
        <DashboardSidebar />
        
        <div className="p-6 md:p-8 max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">My Client Profile</h1>
            <div className="flex gap-4">
              {isEditing ? (
                <button 
                  onClick={handleSave}
                  className="bg-[#ff8c00] text-[#00251d] px-6 py-2 rounded-lg font-bold hover:bg-[#e67a00] transition flex items-center gap-2"
                >
                  <FaSave /> Save Changes
                </button>
              ) : (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="bg-white/10 text-white px-6 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#ff8c00]/30 bg-[#003d2e]">
                {profileImage ? (
                  <Image src={profileImage} alt="Profile" fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/40 text-4xl font-bold">
                    JD
                  </div>
                )}
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-[#ff8c00] text-[#00251d] p-2 rounded-full cursor-pointer hover:bg-[#e67a00] transition">
                    <FaCamera className="w-4 h-4" />
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                )}
              </div>
              <h2 className="text-2xl font-bold text-white mt-4">{formData.fullName}</h2>
              <p className="text-white/60 text-sm">Client</p>
            </div>

            {/* Client Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 bg-black/20 rounded-xl p-4 border border-white/10">
              <div className="text-center">
                <div className="text-[#ff8c00] text-xl font-bold">24</div>
                <div className="text-white/50 text-xs">Total Orders</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff8c00] text-xl font-bold">4.9</div>
                <div className="text-white/50 text-xs">Avg. Provider Rating</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff8c00] text-xl font-bold">12</div>
                <div className="text-white/50 text-xs">Saved Providers</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} disabled={!isEditing} className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all ${!isEditing && 'opacity-70 cursor-not-allowed'}`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} disabled={!isEditing} className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all ${!isEditing && 'opacity-70 cursor-not-allowed'}`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} disabled={!isEditing} className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all ${!isEditing && 'opacity-70 cursor-not-allowed'}`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} disabled={!isEditing} className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all ${!isEditing && 'opacity-70 cursor-not-allowed'}`} />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-white/80 mb-1">About Me</label>
              <textarea name="bio" value={formData.bio} onChange={handleChange} disabled={!isEditing} rows={4} className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all resize-none ${!isEditing && 'opacity-70 cursor-not-allowed'}`} />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-white/80 mb-1">Preferred Service Categories</label>
              <input type="text" name="preferredCategories" value={formData.preferredCategories} onChange={handleChange} disabled={!isEditing} className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all ${!isEditing && 'opacity-70 cursor-not-allowed'}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}