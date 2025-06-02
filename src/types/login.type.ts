// src/types/login.type.ts
export interface LoginFormInputs {
  username: string; // <<<< از email به username تغییر کرد
  password: string;
}

// تایپ برای پاسخ موفقیت آمیز API (این ساختار باید با پاسخ واقعی API شما مطابقت داشته باشه)
export interface LoginApiResponse {
  success: boolean;
  message: string;
  data?: any; // یا یک ساختار دقیق‌تر برای داده‌های پاسخ
  // مثال: اگر API شما توکن برمی‌گردونه
  // token?: string;
  // user?: { id: string; username: string; };
}

// تایپ برای پاسخ خطای API (این ساختار باید با پاسخ واقعی API شما مطابقت داشته باشه)
export interface LoginApiError {
  message: string;
  errors?: { [key: string]: string[] }; // مثال برای خطاهای ولیدیشن از سمت سرور
  statusCode?: number;
}