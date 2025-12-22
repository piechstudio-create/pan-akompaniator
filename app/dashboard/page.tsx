
"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PlayCircle, Award, Download, LogOut } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { COURSES } from '@/services/mockData';

export default function DashboardPage() {
  const { user, logout } = useShop();
  const router = useRouter();

  if (!user) {
    if (typeof window !== 'undefined') router.push('/login');
    return null;
  }

  const myCourses = COURSES.filter(course => user.purchasedCourseIds.includes(course.id));

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-brand-900 text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex items-center gap-4">
               <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="User" className="w-20 h-20 rounded-full border-2 border-accent-500 object-cover" />
               <div>
                 <h1 className="text-2xl font-serif font-bold">Witaj, {user.name}!</h1>
                 <p className="text-slate-300">Gotowy do dalszej nauki?</p>
               </div>
             </div>
             <button onClick={logout} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold flex items-center transition">
               <LogOut className="w-4 h-4 mr-2" /> Wyloguj
             </button>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 min-h-[400px]">
           <h2 className="text-xl font-bold text-brand-900 mb-6 flex items-center">
             <PlayCircle className="w-6 h-6 text-accent-500 mr-2" /> Moje Kursy
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {myCourses.map(course => (
               <div key={course.id} className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition bg-white flex flex-col">
                 <div className="relative h-48">
                   <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                   <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
                     <div className="h-full bg-accent-500 w-[45%]"></div>
                   </div>
                 </div>
                 <div className="p-5 flex-grow">
                   <h3 className="font-bold text-brand-900 mb-2">{course.title}</h3>
                   <p className="text-xs text-slate-500 mb-4">{course.lessonCount} lekcji • {course.level}</p>
                   <button className="text-sm font-bold text-accent-500 hover:text-accent-600">Kontynuuj &rarr;</button>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
