import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  user: any | null;
  activeRole: 'client' | 'provider'; // 👈 NEW
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  switchRole: (role: 'client' | 'provider') => void; // 👈 NEW
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ id: number; name: string; email: string; role: string } | null>(null);
  const [activeRole, setActiveRole] = useState<'client' | 'provider'>('provider'); // Default to provider

  useEffect(() => {
    const storedUser = localStorage.getItem('konvag_user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
      // Restore active role from storage
      const storedRole = localStorage.getItem('konvag_active_role');
      if (storedRole === 'client' || storedRole === 'provider') {
        setActiveRole(storedRole);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const mockUser = { id: 1, name: 'John Doe', email, role: 'provider' };
        localStorage.setItem('konvag_user', JSON.stringify(mockUser));
        localStorage.setItem('konvag_active_role', 'provider'); // Default to provider on login
        setIsLoggedIn(true);
        setUser(mockUser);
        setActiveRole('provider');
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem('konvag_user');
    localStorage.removeItem('konvag_active_role');
    setIsLoggedIn(false);
    setUser(null);
    setActiveRole('provider');
  };

  // ✅ NEW: Switch between Client and Provider mode
  const switchRole = (role: 'client' | 'provider') => {
    setActiveRole(role);
    localStorage.setItem('konvag_active_role', role);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, activeRole, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}