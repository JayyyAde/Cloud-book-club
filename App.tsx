
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import { User, AuthState, UserRole } from './types.ts';
import { MOCK_USER } from './constants.tsx';

// --- Auth Context ---
interface AuthContextType extends AuthState {
  login: (email: string, pass: string) => void;
  logout: () => void;
  register: (name: string, email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>(() => {
    const saved = localStorage.getItem('cbc_auth');
    return saved ? JSON.parse(saved) : { user: null, isAuthenticated: false };
  });

  const login = (email: string, pass: string) => {
    const user = { ...MOCK_USER, email };
    const state = { user, isAuthenticated: true };
    setAuth(state);
    localStorage.setItem('cbc_auth', JSON.stringify(state));
  };

  const register = (name: string, email: string) => {
    const user = { ...MOCK_USER, name, email, id: Math.random().toString(36).substr(2, 9) };
    const state = { user, isAuthenticated: true };
    setAuth(state);
    localStorage.setItem('cbc_auth', JSON.stringify(state));
  };

  const logout = () => {
    setAuth({ user: null, isAuthenticated: false });
    localStorage.removeItem('cbc_auth');
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

// --- Components ---
const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-bold text-emerald-900 font-serif tracking-tight">
              CloudBook<span className="text-emerald-600">Club</span>
            </Link>
            {isAuthenticated && (
              <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
                <Link to="/dashboard" className="text-gray-500 hover:text-emerald-700 px-1 pt-1 text-sm font-semibold transition-colors">Dashboard</Link>
                <Link to="/clubs" className="text-gray-500 hover:text-emerald-700 px-1 pt-1 text-sm font-semibold transition-colors">Clubs</Link>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="flex items-center space-x-3 group">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{user?.name}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">2026 Scholar</p>
                  </div>
                  <img className="h-10 w-10 rounded-full ring-2 ring-emerald-50" src={user?.avatar} alt="" />
                </Link>
                <button
                  onClick={() => { logout(); navigate('/'); }}
                  className="bg-gray-50 text-gray-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition-all border border-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 hover:text-emerald-700 px-4 py-2 text-sm font-bold transition-colors">Login</Link>
                <Link to="/register" className="bg-emerald-800 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-emerald-900 transition-all shadow-sm">Get Started</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Pages ---
import LandingPage from './pages/LandingPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import ClubListPage from './pages/ClubListPage.tsx';
import ClubDetailPage from './pages/ClubDetailPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import AdminManagementPage from './pages/AdminManagementPage.tsx';
import DiscussionPage from './pages/DiscussionPage.tsx';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/clubs" element={<ClubListPage />} />
              <Route path="/clubs/:id" element={<ClubDetailPage />} />
              <Route path="/clubs/:id/admin" element={<AdminManagementPage />} />
              <Route path="/clubs/:id/discussion/:bookId" element={<DiscussionPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-xl font-bold text-emerald-900 font-serif mb-4">CloudBookClub</p>
              <p className="text-gray-400 text-sm mb-6">Built to celebrate and analyze African literature collectively.</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">
                &copy; 2026 CloudBook Club Platform. Lagos, Nigeria.
              </p>
            </div>
          </footer>
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
