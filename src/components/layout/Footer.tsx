// components/layout/Footer.tsx
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'; // آیکون‌های نمونه

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-slate-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-right">
          <div>
            <h3 className="text-lg font-semibold text-brand-light mb-3">درباره ما</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              من امین بروایه هستم که به ارائه راه‌حل‌های نوآورانه برای بهبود زندگی و کسب‌وکارها متعهدم
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-light mb-3">لینک‌های مفید</h3>
            <ul className="space-y-2">
              <li><a href="#commingsoon" className="text-sm text-slate-400 hover:text-brand-accent transition-colors">سیاست حفظ حریم خصوصی</a></li>
              <li><a href="#commingsoon" className="text-sm text-slate-400 hover:text-brand-accent transition-colors">شرایط استفاده از خدمات</a></li>
              <li><a href="#commingsoon" className="text-sm text-slate-400 hover:text-brand-accent transition-colors">سوالات متداول</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-light mb-3">ارتباط با ما</h3>
            <div className="flex justify-center md:justify-end space-x-4 space-x-reverse">
              <a href="#" aria-label="spacer" className=""></a>
              <a href="https://www.linkedin.com/in/amin-borvayeh/" aria-label="LinkedIn" className="text-slate-400 hover:text-brand-blue transition-colors"><Linkedin size={24} /></a>
              <a href="#notYet" aria-label="Twitter" className="text-slate-400 hover:text-brand-blue transition-colors"><Twitter size={24} /></a>
              <a href="https://github.com/amincxo" aria-label="GitHub" className="text-slate-400 hover:text-brand-accent transition-colors"><Github size={24} /></a>
              <a href="mailto:borvayehamin@gmail.com" aria-label="Email" className="text-slate-400 hover:text-brand-purple transition-colors"><Mail size={24} /></a>
            </div>
            <p className="text-sm text-slate-400 mt-3">borvayehamin@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-sm text-slate-200">
            &copy; {currentYear} تمامی حقوق برای وب‌سایت امین بروایه محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;