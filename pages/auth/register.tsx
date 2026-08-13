import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AuthLayout from '@/components/auth/AuthLayout';
import IdentityLocationForm from '@/components/forms/IdentityLocationForm';

export default function RegisterPage() {
  const router = useRouter();
  const { role, type, redirect } = router.query;

  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', confirmPassword: '', agreeTerms: false,
    nin: '', bvn: '', phone: '', state: '', lga: '', city: '', 
    streetAddress: '', houseNumber: '', nearestBusStop: '', postalCode: '',
    skillCategory: '', yearsExperience: '',
    companyName: '', regNumber: '', website: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {} as any;
    if (!formData.fullName.trim()) { newErrors.fullName = 'Full name is required'; isValid = false; }
    if (!formData.email) { newErrors.email = 'Email is required'; isValid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = 'Invalid email'; isValid = false; }
    if (!formData.password) { newErrors.password = 'Password is required'; isValid = false; }
    else if (formData.password.length < 6) { newErrors.password = 'Password must be at least 6 characters'; isValid = false; }
    if (formData.confirmPassword !== formData.password) { newErrors.confirmPassword = 'Passwords do not match'; isValid = false; }
    if (!formData.agreeTerms) { newErrors.agreeTerms = 'You must agree to the Terms'; isValid = false; }
    if (!formData.phone) { newErrors.phone = 'Phone number is required'; isValid = false; }
    
    if (role === 'provider') {
      if (type === 'individual' && !formData.skillCategory) { newErrors.skillCategory = 'Skill category is required'; isValid = false; }
      if (type === 'organization' && !formData.companyName) { newErrors.companyName = 'Company name is required'; isValid = false; }
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name as keyof typeof errors]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => { 
        setIsLoading(false); 
        alert('Registration successful! (Demo)');

        // Save the role to localStorage
        const userRole = role === 'provider' ? 'provider' : 'client';
        localStorage.setItem('konvag_user_role', userRole);

        // ✅ FIX: Decode the redirect URL and handle missing values safely
        let redirectUrl = '/'; // Default fallback
        if (redirect) {
          try {
            // Decode the URL if it was encoded
            redirectUrl = decodeURIComponent(String(redirect));
          } catch (e) {
            redirectUrl = String(redirect);
          }
        } else {
          // Fallback to dashboard based on role
          redirectUrl = userRole === 'provider' ? '/dashboard/provider' : '/dashboard/client';
        }

        window.location.href = redirectUrl; 
      }, 1500);
    }
  };

  // Determine Role Display
  const roleDisplay = role === 'provider' 
    ? `Provider (${type === 'individual' ? 'Individual' : 'Organization'})` 
    : 'Client';

  return (
    <AuthLayout title="Create Account" subtitle="Join Konvag and start booking trusted services" type="register">
      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div className="bg-[#ff8c00]/20 border border-[#ff8c00]/30 rounded-lg p-3 text-center mb-2">
          <p className="text-[#ff8c00] text-sm font-bold">
            Signing up as: <span className="text-white uppercase">{roleDisplay}</span>
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="John Doe" />
          {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="••••••••" />
          {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1">Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="••••••••" />
          {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>}
        </div>

        {/* Conditional Fields for Providers */}
        {role === 'provider' && type === 'individual' && (
          <div className="bg-white/10 rounded-lg p-4 border border-white/10">
            <h4 className="text-[#ff8c00] font-bold text-sm mb-3">Individual Provider Details</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Your Skill Category</label>
                <input type="text" name="skillCategory" value={formData.skillCategory} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="e.g. Plumbing, Web Design" />
                {errors.skillCategory && <p className="mt-1 text-sm text-red-400">{errors.skillCategory}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Years of Experience</label>
                <input type="number" name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="e.g. 3" />
              </div>
            </div>
          </div>
        )}

        {role === 'provider' && type === 'organization' && (
          <div className="bg-white/10 rounded-lg p-4 border border-white/10">
            <h4 className="text-[#ff8c00] font-bold text-sm mb-3">Organization Details</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Company Name</label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="Konvag Solutions Ltd" />
                {errors.companyName && <p className="mt-1 text-sm text-red-400">{errors.companyName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Registration / CAC Number</label>
                <input type="text" name="regNumber" value={formData.regNumber} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="RC-123456" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Website (Optional)</label>
                <input type="text" name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="https://yourcompany.com" />
              </div>
            </div>
          </div>
        )}

        {/* Shared Identity & Location Form */}
        <IdentityLocationForm formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} />

        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="w-4 h-4 mt-1 rounded border-white/20 bg-white/10 text-[#ff8c00] focus:ring-[#ff8c00]" />
            <span className="text-sm text-white/70">I agree to the <Link href="/terms" className="text-[#ff8c00] hover:text-[#e67a00]">Terms of Service</Link> and <Link href="/privacy" className="text-[#ff8c00] hover:text-[#e67a00]">Privacy Policy</Link></span>
          </label>
          {errors.agreeTerms && <p className="mt-1 text-sm text-red-400">{errors.agreeTerms}</p>}
        </div>

        <button type="submit" disabled={isLoading} className={`w-full py-3 rounded-lg font-bold text-[#003d2e] transition-all ${isLoading ? 'bg-[#ff8c00]/70 cursor-not-allowed' : 'bg-[#ff8c00] hover:bg-[#e67a00] transform hover:scale-[1.02]'}`}>
          {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg> Creating account...</span> : 'Sign Up'}
        </button>
      </form>
    </AuthLayout>
  )
}