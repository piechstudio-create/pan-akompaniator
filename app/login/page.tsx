
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useShop();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email === 'error@example.com') {
        setError('Nieprawidłowy adres email lub hasło.');
        setIsLoading(false);
      } else {
        login();
        setIsLoading(false);
        router.push('/dashboard');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:flex lg:w-1/2 bg-brand-900 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2000&auto=format&fit=crop')] bg-cover"></div>
        <div className="relative z-10 max-w-lg px-12 text-center text-white">
          <h2 className="text-4xl font-serif font-bold leading-tight italic">"Talent to dopiero początek. Reszta to praca i dobre narzędzia."</h2>
          <p className="text-slate-400 mt-4">- Pan Akompaniator</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-brand-900">Witaj w backstage'u</h1>
            <p className="text-slate-500 mt-2">Zaloguj się do swojego konta.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100">{error}</div>}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-accent-500 transition-colors"
                  placeholder="twoj@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Hasło</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-accent-500 transition-colors"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-900 text-white font-bold py-3 rounded-lg hover:bg-accent-500 transition flex items-center justify-center disabled:opacity-70"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Zaloguj się <ArrowRight className="ml-2 w-4 h-4" /></>}
            </button>
          </form>
          <div className="mt-8 text-center text-sm text-slate-500">
            Nie masz konta? <Link href="/courses" className="text-brand-900 font-bold hover:underline">Kup kurs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
