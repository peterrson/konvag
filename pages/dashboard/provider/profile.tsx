import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import { FaCamera, FaSave, FaTrash, FaPlus, FaUpload, FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import ProviderSidebar from '@/components/dashboard/ProviderSidebar';

export default function ProviderProfilePage() {
  // --- BASIC INFO ---
  const [formData, setFormData] = useState({
    headline: 'Professional Plumber with 8+ years of experience',
    aboutMe: 'I am a certified plumber specializing in residential and commercial installations, repairs, and maintenance. I pride myself on fast response times, clean work, and fair pricing.',
    category: 'Home & Domestic',
    location: 'Lagos, Nigeria',
    phone: '+234 800 000 0000',
    email: 'john.doe@example.com',
  });

  // --- SKILLS ---
  const [skills, setSkills] = useState<string[]>(['Plumbing', 'Pipe Installation', 'Water Heaters', 'Drain Cleaning']);
  const [newSkill, setNewSkill] = useState('');

  // --- EXPERIENCE ---
  const [experience, setExperience] = useState([
    { id: 1, role: 'Senior Plumber', company: 'Ace Plumbing Co.', years: '2018 - Present', description: 'Managed residential plumbing projects and led a team of 5 technicians.' },
    { id: 2, role: 'Junior Plumber', company: 'FixIt Right', years: '2016 - 2018', description: 'Assisted with emergency repairs and routine maintenance.' },
  ]);

  // --- EDUCATION ---
  const [education, setEducation] = useState([
    { id: 1, degree: 'Diploma in Plumbing Engineering', school: 'Lagos State Polytechnic', year: '2016' },
  ]);

  // --- CERTIFICATIONS ---
  const [certifications, setCertifications] = useState([
    { id: 1, name: 'Certified Master Plumber - Nigeria (CMPN)', file: 'certificate-cmpn.pdf' },
  ]);

  // --- PRICING PACKAGES ---
  const [pricing, setPricing] = useState([
    { id: 1, name: 'Basic', price: '₦15,000', description: 'Standard inspection and minor repair (1 hour)', delivery: '2 days' },
    { id: 2, name: 'Standard', price: '₦35,000', description: 'Full diagnostic + complex repair (up to 3 hours)', delivery: '1 day' },
    { id: 3, name: 'Premium', price: '₦60,000', description: 'Complete overhaul + 30-day service guarantee', delivery: '6 hours' },
  ]);

  // --- STATE HANDLERS ---
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'cover') => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (type === 'profile') setProfileImage(event.target?.result as string);
        if (type === 'cover') setCoverImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <>
      <Head>
        <title>My Profile — Provider Dashboard</title>
      </Head>
      
      <div className="min-h-screen bg-[#021410] pt-20 pl-0 md:pl-64">
        <ProviderSidebar />
        
        <div className="p-6 md:p-8 max-w-6xl mx-auto">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <div>
              <h1 className="text-3xl font-bold text-white">My Profile</h1>
              <p className="text-white/60 text-sm">Manage your public profile, skills, and service offerings.</p>
            </div>
            <div className="flex gap-4">
              {isEditing ? (
                <button 
                  onClick={handleSave}
                  className="bg-[#ff8c00] text-[#00251d] px-6 py-2.5 rounded-lg font-bold hover:bg-[#e67a00] transition flex items-center gap-2 shadow-lg"
                >
                  <FaSave /> Save Profile
                </button>
              ) : (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="bg-white/10 text-white px-6 py-2.5 rounded-lg border border-white/20 hover:bg-white/20 transition"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* ================= COVER & PROFILE IMAGE ================= */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 mb-8 relative">
            {/* Cover Image */}
            <div className="h-48 md:h-56 w-full bg-[#003d2e] relative">
              {coverImage ? (
                <Image src={coverImage} alt="Cover" fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/30 text-lg font-medium">
                  Add a Cover Image
                </div>
              )}
              {isEditing && (
                <label className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-white/20 transition border border-white/20">
                  <span className="flex items-center gap-2 text-sm"><FaUpload /> Upload Cover</span>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'cover')} className="hidden" />
                </label>
              )}
            </div>

            {/* Profile Image (Overlapping) */}
            <div className="absolute -bottom-12 left-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#00251d] bg-[#003d2e] shadow-xl">
                {profileImage ? (
                  <Image src={profileImage} alt="Profile" fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/40 text-4xl font-bold">
                    JD
                  </div>
                )}
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-[#ff8c00] text-[#00251d] p-2 rounded-full cursor-pointer hover:bg-[#e67a00] transition border-2 border-[#00251d]">
                    <FaCamera className="w-4 h-4" />
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'profile')} className="hidden" />
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* ================= MAIN PROFILE CONTENT ================= */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN: Personal Info & Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-fit">
              <h3 className="text-xl font-bold text-white mb-4">Professional Headline</h3>
              {isEditing ? (
                <input 
                  type="text" 
                  name="headline" 
                  value={formData.headline} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all text-sm"
                  placeholder="e.g. Expert Web Developer with 5 years experience"
                />
              ) : (
                <p className="text-white/90 text-sm leading-relaxed">{formData.headline}</p>
              )}

              <div className="mt-6 space-y-3 text-white/70 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-white/40">📍</span>
                  <span>{formData.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/40">📞</span>
                  <span>{formData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/40">✉️</span>
                  <span>{formData.email}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-bold mb-2">Rating</h4>
                <div className="flex items-center gap-2">
                  <div className="flex text-[#ff8c00]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <span className="text-white font-bold">4.9</span>
                  <span className="text-white/40 text-sm">(87 reviews)</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Bio, Skills, Experience, Pricing */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* About Me */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
                {isEditing ? (
                  <textarea 
                    name="aboutMe" 
                    value={formData.aboutMe} 
                    onChange={handleChange} 
                    rows={5} 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all resize-none"
                  />
                ) : (
                  <p className="text-white/80 text-sm leading-relaxed">{formData.aboutMe}</p>
                )}
              </div>

              {/* Skills */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((skill) => (
                    <span key={skill} className="bg-[#ff8c00]/20 text-[#ff8c00] px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-[#ff8c00]/30">
                      {skill}
                      {isEditing && (
                        <button onClick={() => removeSkill(skill)} className="hover:text-red-400 transition">
                          <FaTrash className="w-3 h-3" />
                        </button>
                      )}
                    </span>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={newSkill} 
                      onChange={(e) => setNewSkill(e.target.value)} 
                      onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                      placeholder="Add a skill (e.g. 'React')" 
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all text-sm"
                    />
                    <button onClick={addSkill} className="bg-[#ff8c00] text-[#00251d] px-4 py-2 rounded-lg font-bold hover:bg-[#e67a00] transition">
                      <FaPlus />
                    </button>
                  </div>
                )}
              </div>

              {/* Experience */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">Experience</h3>
                  {isEditing && <button className="text-[#ff8c00] text-sm hover:text-[#e67a00] transition">+ Add New</button>}
                </div>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-white font-bold">{exp.role}</h4>
                          <p className="text-white/60 text-sm">{exp.company}</p>
                        </div>
                        <span className="text-white/40 text-xs">{exp.years}</span>
                      </div>
                      <p className="text-white/60 text-xs mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Packages (Like Fiverr!) */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Service Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {pricing.map((pkg) => (
                    <div key={pkg.id} className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
                      <h4 className="text-[#ff8c00] font-bold text-lg">{pkg.name}</h4>
                      <p className="text-white font-bold text-2xl mt-1">{pkg.price}</p>
                      <p className="text-white/60 text-xs mt-2">{pkg.description}</p>
                      <div className="mt-3 text-white/40 text-xs flex items-center gap-2">
                        <span>🕒 {pkg.delivery}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}