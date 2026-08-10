import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn && typeof window !== 'undefined') {
      // ✅ Redirect to login with the EXACT page they are trying to visit
      router.replace(`/auth/login?redirect=${router.asPath}`);
    } else {
      setLoading(false);
    }
  }, [isLoggedIn, router]);

  if (loading || !isLoggedIn) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#003d2e]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#ff8c00] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}