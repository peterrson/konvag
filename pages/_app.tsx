import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes'; // 👈 Import ThemeProvider
import Navbar from '@/components/layout/Navbar';
import DashboardNavbar from '@/components/layout/DashboardNavbar';
import Footer from '@/components/layout/Footer';
import { AuthProvider } from '@/context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/dashboard');

  return (
    <AuthProvider>
      {/* ✅ Wrap everything in ThemeProvider */}
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {isDashboard ? <DashboardNavbar /> : <Navbar />}
        <Component {...pageProps} />
        {!isDashboard && <Footer />}
      </ThemeProvider>
    </AuthProvider>
  );
}