// components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { LogIn, UserCircle, Zap, Menu, X } from 'lucide-react'; // آیکون‌های Menu و X اضافه شدند
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // بستن منوی موبایل هنگام تغییر سایز به دسکتاپ
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is md breakpoint in Tailwind
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <header className="bg-brand-dark/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 space-x-reverse text-xl font-bold text-brand-light">
          {/* <Zap className="h-7 w-7 text-brand-purple" /> */}
          <Image src="/favicon.ico" width={24} height={24} alt='logo' className='mr-2 pb-1 ' />
          <span>امین چت بات</span> 
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 space-x-reverse items-center text-brand-light">
          <Link href="#features" className=""></Link>
          <Link href="#features" className="hover:text-brand-accent transition-colors">ویژگی‌ها</Link>
          <Link href="#about" className="hover:text-brand-accent transition-colors">درباره ما</Link>
          <Link href="#contact" className="hover:text-brand-accent transition-colors">تماس با ما</Link>
        </nav>

        {/* User Area / Login Button - Desktop & Mobile (if space allows, or adjust as needed) */}
        <div className="hidden md:flex items-center space-x-3 space-x-reverse">
          {isLoading ? (
            <div className="h-5 w-20 bg-gray-700 rounded animate-pulse"></div>
          ) : isAuthenticated && user ? (
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className="text-sm text-brand-light mr-2 ">سلام، {user.name}</span>
              <UserCircle className="h-6 w-6 text-brand-accent" />
            </div>
          ) : (
            <Link href="/login" className="flex items-center text-sm bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300">
              ورود / ثبت نام
              <LogIn className="h-4 w-4 ml-1 rtl:mr-1 rtl:ml-0" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-md p-1"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div dir='rtl' className="md:hidden absolute top-full text-brand-light left-0 right-0 bg-slate-800 shadow-xl z-40 border-t border-slate-700">
          <nav className="flex flex-col space-y-1 px-4 py-3">
            <Link href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-brand-accent transition-colors" onClick={toggleMobileMenu}>ویژگی‌ها</Link>
            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-brand-accent transition-colors" onClick={toggleMobileMenu}>درباره ما</Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-brand-accent transition-colors" onClick={toggleMobileMenu}>تماس با ما</Link>
            
            <hr className="border-slate-700 my-2"/>

            {/* User Area / Login Button for Mobile Menu */}
            <div className="px-3 py-2">
              {isLoading ? (
                <div className="h-5 w-24 bg-gray-700 rounded animate-pulse"></div>
              ) : isAuthenticated && user ? (
                  <div className="flex items-center space-x-2 space-x-reverse text-base">
                    <UserCircle className="h-6 w-6 text-brand-accent" />
                  <span>سلام، {user.name}</span>
                </div>
              ) : (
                <Link href="/login" className="flex w-full items-center justify-center text-base bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white px-4 py-2.5 rounded-md shadow-md transition-all duration-300" onClick={toggleMobileMenu}>
                  <LogIn className="h-5 w-5 ml-1 rtl:mr-1 rtl:ml-0" />
                  ورود / ثبت نام
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;