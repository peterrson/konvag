import { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/auth/AuthLayout';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) { newErrors.email = 'Email is required'; isValid = false; }
    else if (!emailRegex.test(formData.email)) { newErrors.email = 'Please enter a valid email address'; isValid = false; }
    if (!formData.password) { newErrors.password = 'Password is required'; isValid = false; }
    else if (formData.password.length < 6) { newErrors.password = 'Password must be at least 6 characters'; isValid = false; }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name as keyof typeof errors]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (validateForm()) {
    setIsLoading(true);
    try {
      await login(formData.email, formData.password);
      
      // ✅ Check if there's a redirect URL in the query params
      const urlParams = new URLSearchParams(window.location.search);
      const redirectTo = urlParams.get('redirect') || '/dashboard/provider';
      
      window.location.href = redirectTo;
    } catch (error) {
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }
};

  return (
    <AuthLayout title="Welcome Back" subtitle="Log in to your Konvag account to book or offer services" type="login">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all`} placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">Password</label>
          <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} className={`w-full px-4 py-3 bg-white/10 border ${errors.password ? 'border-red-400' : 'border-white/20'} rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all`} placeholder="••••••••" />
          {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} className="w-4 h-4 rounded border-white/20 bg-white/10 text-[#ff8c00] focus:ring-[#ff8c00]" />
            <span className="text-sm text-white/70">Remember me</span>
          </label>
          <Link href="/auth/forgot-password" className="text-sm text-[#ff8c00] hover:text-[#e67a00] transition-colors">Forgot password?</Link>
        </div>
        <button type="submit" disabled={isLoading} className={`w-full py-3 rounded-lg font-bold text-[#003d2e] transition-all ${isLoading ? 'bg-[#ff8c00]/70 cursor-not-allowed' : 'bg-[#ff8c00] hover:bg-[#e67a00] transform hover:scale-[1.02]'}`}>
          {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg> Logging in...</span> : 'Log In'}
        </button>
        <div className="text-center text-white/40 text-xs mt-2">Demo: Any valid email and password (min 6 chars) will work</div>
      </form>
    </AuthLayout>
  )
}