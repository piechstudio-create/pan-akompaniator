import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Cart = () => {
  const { cart, removeFromCart, cartTotal, clearCart } = useShop();
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [email, setEmail] = useState('');

  if (step === 'success') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50">
         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
           <ShieldCheck className="w-10 h-10 text-green-600" />
         </div>
         <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">Dziękujemy za zamówienie!</h2>
         <p className="text-slate-600 mb-8 max-w-md">
           Potwierdzenie płatności oraz linki do pobrania plików zostały wysłane na Twój adres email: <span className="font-bold">{email}</span>.
         </p>
         <Link to="/" className="bg-brand-900 text-white px-8 py-3 rounded-lg hover:bg-brand-800 transition">
           Wróć do strony głównej
         </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-serif font-bold text-slate-300 mb-4">Twój koszyk jest pusty</h2>
        <Link to="/tracks" className="text-accent-500 hover:underline">Przeglądaj podkłady</Link>
      </div>
    );
  }

  const handlePayment = () => {
     // Simulate P24 redirection and success callback
     setTimeout(() => {
        setStep('success');
        clearCart();
     }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8">
        {step === 'cart' ? 'Twój Koszyk' : 'Kasa / Płatność'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items List / Checkout Form */}
        <div className="md:col-span-2 space-y-6">
          {step === 'cart' ? (
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              {cart.map((item) => (
                <div key={item.product.id} className="p-6 border-b border-slate-100 last:border-0 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <img src={item.product.image} alt={item.product.title} className="w-16 h-16 rounded object-cover bg-slate-100" />
                     <div>
                       <h3 className="font-bold text-brand-900">{item.product.title}</h3>
                       <p className="text-xs text-slate-500 uppercase">{item.product.type === 'TRACK' ? 'Podkład MP3+WAV' : 'Kurs Video'}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-6">
                     <span className="font-bold text-slate-700">{item.product.price} PLN</span>
                     <button onClick={() => removeFromCart(item.product.id)} className="text-red-400 hover:text-red-600">
                       <Trash2 className="w-5 h-5" />
                     </button>
                   </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
               <h3 className="font-bold text-lg mb-4 text-brand-900">Dane Kupującego</h3>
               <div className="space-y-4">
                 <div>
                   <label className="block text-sm font-bold mb-1 text-slate-700">Adres Email</label>
                   <input 
                     type="email" 
                     className="w-full border border-slate-300 rounded p-2 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" 
                     placeholder="jan@example.com"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                   />
                   <p className="text-xs text-slate-500 mt-1">Na ten adres wyślemy linki do pobrania.</p>
                 </div>
                 <div className="pt-4">
                   <h3 className="font-bold text-lg mb-4 text-brand-900">Metoda Płatności</h3>
                   <div className="border border-accent-500 bg-accent-50 p-4 rounded flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        {/* Placeholder for Przelewy24 Logo */}
                        <div className="w-12 h-8 bg-brand-900 text-white text-[8px] flex items-center justify-center font-bold rounded">P24</div>
                        <span className="font-bold text-brand-900">Szybki przelew / BLIK (Przelewy24)</span>
                      </div>
                      <div className="w-4 h-4 rounded-full border-4 border-accent-500"></div>
                   </div>
                 </div>
               </div>
            </div>
          )}
        </div>

        {/* Summary Sidebar */}
        <div className="md:col-span-1">
           <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 sticky top-24">
              <h3 className="font-bold text-brand-900 mb-4">Podsumowanie</h3>
              <div className="flex justify-between mb-2 text-sm text-slate-600">
                <span>Wartość koszyka:</span>
                <span>{cartTotal} PLN</span>
              </div>
              <div className="flex justify-between mb-6 text-sm text-slate-600 border-b border-slate-200 pb-4">
                <span>Rabat:</span>
                <span>0 PLN</span>
              </div>
              <div className="flex justify-between mb-8 text-xl font-bold text-brand-900">
                <span>Do zapłaty:</span>
                <span>{cartTotal} PLN</span>
              </div>

              {step === 'cart' ? (
                <button 
                  onClick={() => setStep('checkout')}
                  className="w-full bg-accent-500 text-white font-bold py-3 rounded hover:bg-accent-600 transition flex items-center justify-center"
                >
                  Przejdź do kasy <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button 
                  onClick={handlePayment}
                  disabled={!email.includes('@')}
                  className="w-full bg-brand-900 text-white font-bold py-3 rounded hover:bg-brand-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Kupuję i płacę
                </button>
              )}
              
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4" /> Bezpieczne płatności SSL
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};