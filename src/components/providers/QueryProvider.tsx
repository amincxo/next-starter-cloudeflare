// src/components/providers/QueryProvider.tsx
"use client"; // این کامپوننت باید یک Client Component باشد

import React from "react";
import { QueryClient, QueryClientProvider, QueryClientConfig } from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // برای توسعه (اختیاری)

// تنظیمات پیش‌فرض برای React Query (اختیاری)
const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 دقیقه، داده‌ها برای این مدت تازه در نظر گرفته میشن
      // refetchOnWindowFocus: false, // در صورت نیاز می‌تونید این رو هم فعال کنید
    },
  },
};

function QueryProvider({ children }: { children: React.ReactNode }) {
  // QueryClient رو یکبار با useState می‌سازیم تا در رندرهای مختلف ثابت بمونه
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientConfig)
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> ابزار توسعه React Query (اختیاری) */}
    </QueryClientProvider>
  );
}

export default QueryProvider;