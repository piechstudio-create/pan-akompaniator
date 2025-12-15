import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useShop();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulation of API request delay
    setTimeout(() => {
      if (email === 'error@example.com') {
        setError('Nieprawidłowy adres email lub hasło.');
        setIsLoading(false);
      } else {
        login(); // Context login
        setIsLoading(false);
        navigate('/dashboard');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Visuals */}
      <div className="hidden lg:flex lg:w-1/2 bg-brand-900 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-brand-900/50"></div>
        
        <div className="relative z-10 max-w-lg px-12 text-center text-white">
          <div className="mb-8">
            <span className="text-accent-500 font-bold tracking-widest uppercase text-xs">Akademia Akompaniatora</span>
            <h2 className="text-4xl font-serif font-bold mt-4 leading-tight">"Talent to dopiero początek. Reszta to praca i dobre narzędzia."</h2>
          </div>
          <p className="text-slate-400 italic font-light">- Pan Akompaniator</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
          
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-brand-900">Witaj w backstage'u</h1>
            <p className="text-slate-500 mt-2">Zaloguj się, aby uzyskać dostęp do swoich kursów.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100 flex items-center">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors bg-slate-50 focus:bg-white"
                  placeholder="twoj@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Hasło</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors bg-slate-50 focus:bg-white"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-end mt-2">
                <a href="#" className="text-xs text-accent-600 hover:text-accent-700 font-medium">Nie pamiętasz hasła?</a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-900 text-white font-bold py-3 rounded-lg hover:bg-accent-500 transition-all shadow-lg hover:shadow-accent-500/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Zaloguj się <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-500">
            Nie masz jeszcze konta?{' '}
            <Link to="/courses" className="text-brand-900 font-bold hover:underline">
              Kup dostęp do kursu
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
             <p className="text-xs text-slate-400 mb-2">Możesz użyć dowolnego maila do demo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};