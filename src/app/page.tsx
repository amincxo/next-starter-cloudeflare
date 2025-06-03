'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";




export default function Home() {



  return (
    <div className="flex flex-col font-vazir min-h-screen">

      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        {/* در اینجا می‌توانید بخش‌های دیگری اضافه کنید */}
      </main>
      <Footer />
    </div>
  );
}
