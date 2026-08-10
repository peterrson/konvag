import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import IdentityLocationForm from '@/components/forms/IdentityLocationForm';

export default function BecomeProviderPage() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', category: '', experience: '', bio: '', 
    portfolio: null as File | null, agreeTerms: false,
    // Identity & Location fields
    nin: '', bvn: '', state: '', lga: '', city: '', streetAddress: '', houseNumber: '', nearestBusStop: '', postalCode: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const categories = ['Home & Domestic', 'Health & Wellness', 'Beauty & Personal Care', 'Automotive Services', 'Technology & Digital', 'Education & Tutoring', 'Event & Entertainment', 'Business & Professional', 'Travel & Logistics', 'Construction & Real Estate', 'Agriculture & Environment', 'Finance & Investment', 'Fashion & Apparel', 'Food & Culinary', 'Media & Communication', 'Security & Safety', 'Child & Elderly Care', 'Sports & Recreation', 'Spiritual & Religious', 'General Services'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setFormData(prev => ({ ...prev, portfolio: e.target.files![0] }));
  };
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, agreeTerms: e.target.checked }));
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setIsSubmitted(true); }, 2000);
  };

  if (isSubmitted) {
    return (
      <>
        <Head><title>Application Submitted — Konvag</title></Head>
        <main className="min-h-screen relative pt-20 flex items-center justify-center">
          <div className="fixed inset-0 z-0 w-full h-screen bg-[#003d2e]"></div>
          <div className="relative z-10 container mx-auto px-4 max-w-md">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center shadow-2xl">
              <div className="w-20 h-20 bg-[#ff8c00]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Application Submitted! 🎉</h2>
              <p className="text-white/70 mb-6">Thank you for applying to become a Konvag provider. Our team will verify your details and get back to you within 24–48 hours.</p>
              <Link href="/">
                <button className="bg-[#ff8c00] text-[#003d2e] px-8 py-3 rounded-lg font-bold hover:bg-[#e67a00] transition w-full">Back to Home</button>
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head><title>Become a Provider — Konvag</title></Head>
      <main className="min-h-screen relative pt-20 pb-16">
        <div className="fixed inset-0 z-0 w-full h-screen">
          <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
            <div className="relative h-full w-full bg-[#003d2e]/30"><div className="absolute inset-0 bg-[#003d2e]/80 mix-blend-multiply"></div></div>
            <div className="relative h-full w-full bg-[#003d2e]/30"><div className="absolute inset-0 bg-[#003d2e]/80 mix-blend-multiply"></div></div>
            <div className="relative h-full w-full bg-[#003d2e]/30"><div className="absolute inset-0 bg-[#003d2e]/80 mix-blend-multiply"></div></div>
            <div className="relative h-full w-full bg-[#003d2e]/30"><div className="absolute inset-0 bg-[#003d2e]/80 mix-blend-multiply"></div></div>
          </div>
          <div className="absolute inset-0 bg-[#003d2e]/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Become a <span className="text-[#ff8c00]">Provider</span></h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Join Konvag and turn your skills into income. Fill out the form below to get started.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-white/80 mb-1">Full Name</label><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="John Doe" /></div>
                <div><label className="block text-sm font-medium text-white/80 mb-1">Email Address</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="you@example.com" /></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-white/80 mb-1">Phone Number</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="+234 800 000 0000" /></div>
                <div><label className="block text-sm font-medium text-white/80 mb-1">Service Category</label><select name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"><option value="" className="text-black">Select a category</option>{categories.map((cat) => <option key={cat} value={cat} className="text-black">{cat}</option>)}</select></div>
              </div>

              <div><label className="block text-sm font-medium text-white/80 mb-1">Years of Experience</label><input type="number" name="experience" value={formData.experience} onChange={handleChange} required min="0" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="e.g. 3" /></div>

              <div><label className="block text-sm font-medium text-white/80 mb-1">Professional Bio</label><textarea name="bio" value={formData.bio} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all resize-none" placeholder="Tell us about your skills, experience, and what makes you a great provider..." /></div>

              <div><label className="block text-sm font-medium text-white/80 mb-1">Portfolio / Work Samples (Optional)</label><input type="file" accept="image/*,.pdf" onChange={handleFileChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white/70 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#ff8c00] file:text-[#003d2e] file:font-bold hover:file:bg-[#e67a00] transition-all focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00]" />{formData.portfolio && <p className="mt-2 text-sm text-[#ff8c00]">✅ {formData.portfolio.name}</p>}</div>

              {/* 🟠 Reusable Identity & Location Form */}
              <IdentityLocationForm formData={formData} setFormData={setFormData} />

              <div className="flex items-start gap-3">
                <input type="checkbox" id="agreeTerms" checked={formData.agreeTerms} onChange={handleCheckbox} required className="w-5 h-5 mt-0.5 rounded border-white/20 bg-white/10 text-[#ff8c00] focus:ring-[#ff8c00]" />
                <label htmlFor="agreeTerms" className="text-sm text-white/70">I agree to Konvag's <Link href="/terms" className="text-[#ff8c00] hover:text-[#e67a00]">Terms of Service</Link> and <Link href="/privacy" className="text-[#ff8c00] hover:text-[#e67a00]">Privacy Policy</Link></label>
              </div>

              <button type="submit" disabled={isLoading} className={`w-full py-4 rounded-lg font-bold text-[#003d2e] text-lg transition-all ${isLoading ? 'bg-[#ff8c00]/70 cursor-not-allowed' : 'bg-[#ff8c00] hover:bg-[#e67a00] transform hover:scale-[1.02] shadow-lg'}`}>
                {isLoading ? <span className="flex items-center justify-center gap-3"><svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg> Submitting...</span> : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}