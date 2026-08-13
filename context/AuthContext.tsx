import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  user: any | null;
  activeRole: 'client' | 'provider';
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  switchRole: (role: 'client' | 'provider') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ id: number; name: string; email: string; role: string } | null>(null);
  const [activeRole, setActiveRole] = useState<'client' | 'provider'>('provider');

  useEffect(() => {
    const storedUser = localStorage.getItem('konvag_user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));

      // ✅ Read the role from localStorage and set it
      const storedRole = localStorage.getItem('konvag_user_role');
      if (storedRole === 'client' || storedRole === 'provider') {
        setActiveRole(storedRole as 'client' | 'provider');
      } else {
        setActiveRole('provider'); // fallback
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // ✅ Simulate reading the role from the register page
        const savedRole = localStorage.getItem('konvag_user_role');
        const role = (savedRole === 'client' || savedRole === 'provider') ? savedRole : 'provider';

        const mockUser = { id: 1, name: 'John Doe', email, role };
        localStorage.setItem('konvag_user', JSON.stringify(mockUser));
        localStorage.setItem('konvag_user_role', role); // ensure it's saved

        setIsLoggedIn(true);
        setUser(mockUser);
        setActiveRole(role as 'client' | 'provider');
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem('konvag_user');
    localStorage.removeItem('konvag_user_role');
    setIsLoggedIn(false);
    setUser(null);
    setActiveRole('provider');
  };

  const switchRole = (role: 'client' | 'provider') => {
    setActiveRole(role);
    localStorage.setItem('konvag_user_role', role);
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