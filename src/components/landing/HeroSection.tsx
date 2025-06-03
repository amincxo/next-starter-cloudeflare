"use client";

// components/landing/HeroSection.tsx
import { PlayCircle } from "lucide-react";
import PageVisitLogger, { ExtendedLogData } from '@/components/utils/PageVisitLogger'; 
import { useState , useEffect } from 'react';

const HeroSection = () => {
        const [pageDetails, setPageDetails] = useState<{
        host: string;
        path: string;
        extendedData: ExtendedLogData;
      } | null>(null);
    
      useEffect(() => {
        if (typeof window !== "undefined") {
          setPageDetails({
            host: window.location.hostname,
            path: window.location.pathname,
            extendedData: {
              userAgent: navigator.userAgent,
              screenWidth: window.screen.width,
              screenHeight: window.screen.height,
              viewportWidth: window.innerWidth, // عرض ویوپورت مرورگر
              viewportHeight: window.innerHeight, // ارتفاع ویوپورت مرورگر
              language: navigator.language,
              languages: navigator.languages, // آرایه‌ای از زبان‌های ترجیحی کاربر
              referrer: document.referrer, // از چه صفحه‌ای به این صفحه آمده
              platform: navigator.platform, // سیستم عامل (ممکن است دقیق نباشد)
              connection: (navigator as any).connection ? { // اطلاعات اتصال شبکه
                effectiveType: (navigator as any).connection.effectiveType, // مثلا 4g, 3g
                rtt: (navigator as any).connection.rtt, // Round Trip Time
                downlink: (navigator as any).connection.downlink,
              } : undefined,
              // میتوانید موارد دلخواه دیگری هم اضافه کنید
              // مثلا:
              cookiesEnabled: navigator.cookieEnabled,
              deviceMemory: (navigator as any).deviceMemory, // حافظه دستگاه (در گیگابایت)
            }
          });
        }
      }, []);




  return (
    <section className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center text-center px-6 py-12 bg-gradient-to-b from-brand-dark via-slate-800 to-brand-dark relative overflow-hidden">
        {pageDetails && (
        <PageVisitLogger
          urlToLog={pageDetails.host}
          pathToLog={pageDetails.path}
          loggerApiUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/logger`}
          extendedData={pageDetails.extendedData}
        />
      )}
      {/* Optional: Abstract background elements */}
      <div className="absolute inset-0 opacity-10">
         {/* Example: SVG background pattern or animated particles (requires more setup) */}
      </div>

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl md:text-6xl text-brand-light font-extrabold mb-14 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">
            انقلاب هوش مصنوعی
          </span>
          <br />
          <div className="mt-5" >
            آینده را امروز تجربه کنید
          </div>
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10">
          پلتفرم ما با بهره‌گیری از آخرین دستاوردهای هوش مصنوعی، راه‌حل‌های نوآورانه برای چالش‌های شما ارائه می‌دهد.
        </p>

        {/* Video Player */}
        <div className="w-full max-w-2xl mx-auto aspect-video rounded-xl shadow-2xl overflow-hidden border-2 border-brand-purple/50 mb-10 bg-slate-900">
          <video
            preload="none"
            className="w-full h-full object-cover"
            src="/videos/AI-Video-Landing.mp4" // ویدیو باید در public/videos/hero-video.mp4 قرار گیرد
            controls
            poster="/images/video-poster.webp" // پوستر ویدیو (اختیاری) در public/images/video-poster.jpg
          >
              <track
              src="/videos/captions/ai-video-landing-en.vtt" 
              kind="captions"
              srcLang="en"
              label="English"
              />
            مرورگر شما از تگ ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>

        <button className="px-8 py-3 bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center mx-auto">
          <PlayCircle className="h-6 w-6 mr-2" />
          شروع کنید
        </button>
      </div>
    </section>
  );
};
export default HeroSection;