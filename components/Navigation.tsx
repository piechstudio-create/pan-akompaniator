
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, User, LogOut } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, user, logout } = useShop();
  const pathname = usePathname();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const isActive = (path: string) => pathname === path ? 'text-accent-400 font-semibold' : 'text-slate-300 hover:text-white';

  return (
    <nav className="sticky top-0 z-50 bg-brand-900/95 backdrop-blur-sm border-b border-brand-800 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img src="https://img.freepik.com/premium-photo/3d-avatar-boy-character-student-good-looking-cute-generative-ai_958165-42036.jpg?w=150" alt="Avatar" className="h-12 w-12 rounded-full border-2 border-accent-500" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold">Pan Akompaniator</span>
              <span className="text-[10px] text-accent-400 uppercase tracking-widest leading-none">Studio & Edukacja</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={isActive('/')}>Start</Link>
            <Link href="/courses" className={isActive('/courses')}>Kursy</Link>
            <Link href="/tracks" className={isActive('/tracks')}>Podkłady</Link>
            <Link href="/about" className={isActive('/about')}>O Projekcie</Link>
            
            <div className="flex items-center space-x-4 border-l border-brand-800 pl-6">
              {user ? (
                <div className="flex items-center space-x-3">
                  <Link href="/dashboard" className="text-sm text-slate-300 hover:text-accent-400">
                    Witaj, <span className="font-bold">{user.name.split(' ')[0]}</span>
                  </Link>
                  <button onClick={logout} className="text-slate-400 hover:text-white"><LogOut className="h-5 w-5" /></button>
                </div>
              ) : (
                <Link href="/login" className="flex items-center space-x-1 text-slate-300 hover:text-accent-400">
                  <User className="h-5 w-5" />
                  <span className="text-sm">Zaloguj</span>
                </Link>
              )}
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-slate-300" />
                {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>}
              </Link>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300">{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-900 border-t border-brand-800 p-4 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2">Start</Link>
          <Link href="/courses" onClick={() => setIsOpen(false)} className="block py-2">Kursy</Link>
          <Link href="/tracks" onClick={() => setIsOpen(false)} className="block py-2">Podkłady</Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="block py-2 text-accent-400">Logowanie</Link>
        </div>
      )}
    </nav>
  );
};
