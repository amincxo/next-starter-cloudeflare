// components/utils/PageVisitLogger.tsx
"use client";

import { useEffect } from 'react';

export interface ExtendedLogData {
  userAgent?: string;
  screenWidth?: number;
  screenHeight?: number;
  language?: string;
  referrer?: string;
  timestamp?: string;
  [key: string]: any; // برای اضافه کردن داده‌های دلخواه دیگر
}

interface PageVisitLoggerProps {
  urlToLog: string;
  pathToLog: string;
  loggerApiUrl: string;
  extendedData?: ExtendedLogData; // داده‌های اضافی
  logOnce?: boolean;
}

const PageVisitLogger: React.FC<PageVisitLoggerProps> = ({
  urlToLog,
  pathToLog,
  loggerApiUrl,
  extendedData = {}, // مقدار پیش‌فرض یک آبجکت خالی
  logOnce = true,
}) => {
  useEffect(() => {
    const logVisit = async () => {
      if (!urlToLog || !pathToLog || !loggerApiUrl) {
        console.warn('PageVisitLogger: Missing required props (urlToLog, pathToLog, loggerApiUrl).');
        return;
      }

      try {
        const bodyPayload = {
          url: urlToLog,
          path: pathToLog,
          timestamp: new Date().toISOString(), // زمان دقیق همیشه اضافه می‌شود
          ...extendedData, // اضافه کردن داده‌های اضافی
        };

        const response = await fetch(loggerApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyPayload),
        });


      } catch (error) {
      }
    };

    logVisit();
  }, logOnce ? [] : [urlToLog, pathToLog, loggerApiUrl, extendedData]);

  return null;
};

export default PageVisitLogger;