import { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/auth/AuthLayout';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <AuthLayout title="Reset Password" subtitle="Enter your email and we'll send you a reset link" type="login">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all" placeholder="you@example.com" required />
          </div>
          <button type="submit" disabled={isLoading} className={`w-full py-3 rounded-lg font-bold text-[#003d2e] transition-all ${isLoading ? 'bg-[#ff8c00]/70 cursor-not-allowed' : 'bg-[#ff8c00] hover:bg-[#e67a00] transform hover:scale-[1.02]'}`}>
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
          <div className="text-center">
            <Link href="/auth/login" className="text-sm text-white/70 hover:text-[#ff8c00] transition-colors">← Back to Login</Link>
          </div>
        </form>
      ) : (
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-[#ff8c00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Check your email</h3>
          <p className="text-white/70">We've sent a password reset link to <span className="text-[#ff8c00]">{email}</span></p>
          <button onClick={() => setSubmitted(false)} className="mt-6 text-[#ff8c00] hover:text-[#e67a00] transition-colors">Try again</button>
        </div>
      )}
    </AuthLayout>
  )
}