// components/landing/FeaturesSection.tsx
"use client";

import { useQuery } from '@tanstack/react-query';
import { Feature } from '@/types';
import { Brain, Zap, ShieldCheck, BarChart3 } from 'lucide-react'; // آیکون‌های نمونه

// تابع نمونه برای دریافت داده‌های ویژگی‌ها از API
// TODO: این تابع را با فراخوانی API واقعی خود جایگزین کنید
const fetchFeatures = async (): Promise<Feature[]> => {
//   console.log("Fetching features data...");
  // شبیه‌سازی فراخوانی API
  await new Promise(resolve => setTimeout(resolve, 1000));

  // داده‌های نمونه - این داده‌ها باید از API شما بیایند
  return [
    { id: '1', title: 'پردازش زبان طبیعی', description: 'درک و تولید متن انسانی با دقت بالا برای کاربردهای متنوع.', icon: Brain },
    { id: '2', title: 'یادگیری ماشین پیشرفته', description: 'مدل‌های قدرتمند برای پیش‌بینی، طبقه‌بندی و تحلیل داده‌ها.', icon: Zap },
    { id: '3', title: 'امنیت هوشمند', description: 'حفاظت از داده‌ها و سیستم‌های شما با استفاده از الگوریتم‌های امنیتی مبتنی بر AI.', icon: ShieldCheck },
    { id: '4', title: 'تحلیل داده‌های بزرگ', description: 'استخراج بینش‌های ارزشمند از مجموعه داده‌های حجیم و پیچیده.', icon: BarChart3 },
  ];
};

const FeaturesSection = () => {
  const { data: features, isLoading, isError, error } = useQuery<Feature[], Error>({
    queryKey: ['features'],
    queryFn: fetchFeatures,
  });

  if (isLoading) {
    return (
      <section id="features" className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-light mb-4">بارگذاری ویژگی‌ها...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-lg shadow-xl animate-pulse">
                <div className="h-12 w-12 bg-slate-700 rounded-full mx-auto mb-4"></div>
                <div className="h-6 w-3/4 bg-slate-700 rounded mx-auto mb-3"></div>
                <div className="h-4 w-full bg-slate-700 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-slate-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section id="features" className="py-16 md:py-24 text-brand-light bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-500">خطا در بارگذاری ویژگی‌ها</h2>
          <p className="text-slate-400">{error?.message || "مشکلی پیش آمده است."}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-light mb-6">
          ویژگی‌های <span className="text-brand-purple">منحصر به فرد</span> ما
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 mb-12 md:mb-16 text-lg">
          با استفاده از تکنولوژی‌های پیشرفته هوش مصنوعی، امکانات گسترده‌ای را برای رشد و بهینه‌سازی کسب‌وکار شما فراهم می‌کنیم.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features?.map((feature) => (
            <div key={feature.id} className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl shadow-2xl hover:shadow-brand-purple/30 transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center">
              {feature.icon && (
                <div className="p-4 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full mb-6 inline-block">
                   <feature.icon className="h-10 w-10 text-white" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3 text-brand-light">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;