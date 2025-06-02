my-next-project/
├── .vscode/                # تنظیمات VS Code (اختیاری)
│   └── settings.json
├── .env.local              # متغیرهای محیطی محلی (در git قرار نگیره)
├── .eslintrc.json          # تنظیمات ESLint برای بررسی کد
├── .gitignore              # فایل‌ها و پوشه‌هایی که توسط Git نادیده گرفته میشن
├── next.config.mjs         # تنظیمات Next.js (یا .js)
├── package.json            # لیست پکیج‌ها و اسکریپت‌های پروژه
├── postcss.config.js       # تنظیمات PostCSS (اگر از Tailwind CSS استفاده می‌کنید)
├── README.md               # توضیحات پروژه
├── tailwind.config.ts      # تنظیمات Tailwind CSS (یا .js)
├── tsconfig.json           # تنظیمات TypeScript (همونی که بررسی کردیم)
├── public/                 # فایل‌های استاتیک (تصاویر، فونت‌ها، ویدیوها و ...)
│   ├── images/
│   ├── videos/
│   └── favicon.ico
└── src/                    # پوشه اصلی کدهای برنامه (استفاده از src اختیاری اما رایجه)
    ├── app/                # (App Router) مسیرها، लेआउट‌ها و UI اصلی برنامه
    │   ├── layout.tsx      # लेआउट اصلی و ریشه برنامه
    │   ├── globals.css     # استایل‌های سراسری (در layout.tsx وارد میشه)
    │   ├── page.tsx        # صفحه اصلی (مسیر '/')
    │   ├── loading.tsx     # کامپوننت پیش‌فرض برای نمایش هنگام بارگذاری مسیرها
    │   ├── not-found.tsx   # کامپوننت پیش‌فرض برای نمایش صفحه 404
    │   │
    │   ├── (auth)/         # گروه مسیر برای بخش احراز هویت (بدون تاثیر در URL)
    │   │   ├── login/
    │   │   │   └── page.tsx  # صفحه لاگین در مسیر /login
    │   │   ├── register/
    │   │   │   └── page.tsx
    │   │   └── layout.tsx  # लेआउट مخصوص مسیرهای احراز هویت (اختیاری)
    │   │
    │   ├── (dashboard)/    # گروه مسیر برای داشبورد
    │   │   ├── layout.tsx
    │   │   ├── page.tsx      # صفحه اصلی داشبورد
    │   │   └── settings/
    │   │       └── page.tsx
    │   │
    │   ├── _components/    # کامپوننت‌های خصوصی که فقط در یک مسیر خاص استفاده میشن (collocated)
    │   │   └── login-form.tsx
    │   │
    │   └── api/            # (App Router) مسیرهای API (Route Handlers)
    │       ├── auth/
    │       │   └── login/
    │       │       └── route.ts # کنترل‌کننده مسیر /api/auth/login
    │       └── products/
    │           └── route.ts
    │
    ├── pages/              # (Pages Router) اگر از Pages Router استفاده می‌کنید یا برای api routes در کنار App Router
    │   ├── _app.tsx        # کامپوننت اصلی برنامه (برای Pages Router)
    │   ├── _document.tsx   # برای تغییر ساختار اولیه HTML (برای Pages Router)
    │   ├── index.tsx       # صفحه اصلی (اگر از Pages Router برای UI استفاده می‌کنید)
    │   └── api/            # (Pages Router) مسیرهای API
    │       └── hello.ts
    │
    ├── components/         # کامپوننت‌های React اشتراکی و قابل استفاده مجدد در کل برنامه
    │   ├── ui/             # کامپوننت‌های پایه و عمومی UI (مثل دکمه، ورودی، کارت)
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   └── Modal.tsx
    │   ├── layout/         # کامپوننت‌های مربوط به ساختار کلی صفحه (مثل Navbar, Footer, Sidebar)
    │   │   ├── Navbar.tsx
    │   │   └── Footer.tsx
    │   └── feature-specific/ # کامپوننت‌های مربوط به یک بخش یا ویژگی خاص
    │       ├── product/
    │       │   └── ProductCard.tsx
    │       └── auth/
    │           └── AuthForm.tsx
    │
    ├── contexts/           # برای React Context API (اگر برای مدیریت وضعیت سراسری استفاده می‌کنید)
    │   └── AuthContext.tsx
    │
    ├── hooks/              # هوک‌های سفارشی React (Custom Hooks)
    │   ├── useAuth.ts
    │   ├── useDebounce.ts
    │   └── useMediaQuery.ts
    │
    ├── lib/                # توابع کمکی، ثابت‌ها، پیکربندی‌های اولیه و منطق‌های اشتراکی
    │   ├── actions.ts      # (App Router) توابع Server Actions
    │   ├── api.ts          # توابع مربوط به فراخوانی API از سمت کلاینت (می‌تونه بخشی از services باشه)
    │   ├── utils.ts        # توابع کمکی عمومی
    │   ├── constants.ts    # مقادیر ثابت (مثل کلیدهای API، پیام‌ها و ...)
    │   ├── validators/     # اسکیم‌های اعتبارسنجی (مثلاً با Zod)
    │   │   └── auth.schema.ts
    │   └── axiosInstance.ts # نمونه پیکربندی شده Axios (اگر ازش استفاده می‌کنید)
    │
    ├── services/           # لایه سرویس برای جداسازی منطق تجاری و ارتباط با API‌ها
    │   ├── auth.service.ts # سرویس‌های مربوط به احراز هویت
    │   ├── product.service.ts
    │   └── index.ts        # (اختیاری) برای export کردن همه سرویس‌ها از یکجا
    │
    ├── store/              # برای کتابخانه‌های مدیریت وضعیت سراسری مثل Zustand, Jotai, Redux
    │   ├── authStore.ts
    │   └── createStore.ts  # (اگر از Redux استفاده می‌کنید)
    │
    ├── styles/             # استایل‌های CSS اضافی (اگر globals.css در app کافی نیست)
    │   └── custom-theme.css
    │
    └── types/              # تعریف‌های TypeScript اشتراکی
        ├── index.d.ts      # برای تعریف تایپ‌های سراسری یا بسط دادن ماژول‌ها
        ├── auth.types.ts   # تایپ‌های مربوط به احراز هویت (مثلاً برای فرم و پاسخ API)
        ├── product.types.ts
        └── api.types.ts    # تایپ‌های مربوط به درخواست‌ها و پاسخ‌های عمومی API