// src/app/(auth)/login/page.tsx
"use client";

import BackgroundMedia from '@/components/BackgroundMedia'; 
import { useForm, SubmitHandler } from "react-hook-form";
import type { LoginFormInputs, LoginApiResponse, LoginApiError } from '@/types/login.type'; 
import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';


async function loginUser(credentials: LoginFormInputs): Promise<LoginApiResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password,
    }),
  });

  let responseData: any;

  try {
    responseData = await response.json();
  } catch (jsonError) {
    if (!response.ok) {
      throw {
        message: `خطای ${response.status}: ${response.statusText || 'پاسخ سرور معتبر نیست.'}`,
        statusCode: response.status,
      } as LoginApiError;
    } else {
      throw { message: 'پاسخ غیرمنتظره از سرور دریافت شد.' } as LoginApiError;
    }
  }

  if (!response.ok) {
    const errorPayload: LoginApiError = {
      message: responseData?.message || `نام کاربری یا رمز عبور اشتباه است.`,
      statusCode: response.status,
      errors: responseData?.errors,
    };
    throw errorPayload;
  }
  return responseData as LoginApiResponse;
}


export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormInputs>({
    mode: "onTouched"
  });

  const mutation = useMutation<LoginApiResponse, LoginApiError, LoginFormInputs>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      router.push('/chat');
    },
    onError: (error) => {
      console.error("Login error object:", error);
      if (error.errors && typeof error.errors === 'object') {
        (Object.keys(error.errors) as Array<keyof LoginFormInputs>).forEach((key) => {
          const fieldErrorMessages = error.errors![key];
          let messageContent = "خطای نامشخص برای این فیلد";
          if (Array.isArray(fieldErrorMessages) && fieldErrorMessages.length > 0) {
            messageContent = fieldErrorMessages.join(', ');
          } else if (typeof fieldErrorMessages === 'string') {
            messageContent = fieldErrorMessages;
          }
          setError(key, { type: 'server', message: messageContent });
        });
      } else if (error.message) {
        setError("root.serverError" as any, { type: "server", message: error.message });
      } else {
        setError("root.serverError" as any, { type: "server", message: "خطایی در ارتباط با سرور رخ داد. لطفاً دوباره تلاش کنید." });
      }
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    mutation.mutate(data);
  };

  const videoSources = useMemo(() => ({
    mobile: "/videos/login-mobile.mp4",
    desktop: "/videos/login-desktop.mp4"
  }), []);

  const imageSources = useMemo(() => ({
    mobile: "/images/login-bg-mobile.webp",
    desktop: "/images/login-bg-desktop.webp"
  }), []);

  useEffect(() => {
    document.title = "ورود به حساب کاربری";
  }, []);

  const handleSignup = () => {
    router.push('/signup');
  };

  return (
    <>
      <Head>
        <title>ورود به حساب کاربری</title>
      </Head>
      <div className="relative flex min-h-screen flex-col items-center font-vazir justify-center text-white">
        <BackgroundMedia
          videoSources={videoSources}
          imageSources={imageSources}
          altText="پس زمینه صفحه ورود"
        />
        <div className="relative z-10 w-full max-w-md rounded-xl bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="mb-10 text-center text-3xl font-bold tracking-tight">
            ورود به حساب کاربری
          </h1>
          <form dir='rtl' onSubmit={handleSubmit(onSubmit)} className="space-y-6"> 

            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="block mb-1.5 text-sm font-medium text-gray-300" 
              >
                نام کاربری
              </label>
              <input
                id="username"
                type="text"
                {...register('username', {
                  required: 'وارد کردن نام کاربری الزامی است',
                })}
                className={`
                  block w-full rounded-lg border
                  bg-slate-800/60 
                  px-3 py-2.5 
                  text-sm text-white shadow-sm appearance-none
                  focus:outline-none focus:ring-0
                  ${errors.username || (mutation.error?.errors && mutation.error.errors.username)
                    ? 'border-rose-500 focus:border-rose-500'
                    : 'border-slate-600 focus:border-sky-500'}
                `}
                placeholder="نام کاربری خود را وارد کنید" 
                disabled={mutation.isPending}
              />
              {errors.username && (
                <p className="mt-1.5 text-xs text-rose-400">{errors.username.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1.5 text-sm font-medium text-gray-300" 
              >
                رمز عبور
              </label>
              <input
                id="password"
                type="password"
                {...register('password', {
                  required: 'وارد کردن رمز عبور الزامی است',
                  minLength: { value: 6, message: 'رمز عبور باید حداقل ۶ کاراکتر باشد' },
                })}
                className={`
                  block w-full rounded-lg border
                  bg-slate-800/60 
                  px-3 py-2.5 
                  text-sm text-white shadow-sm appearance-none
                  focus:outline-none focus:ring-0
                  ${errors.password || (mutation.error?.errors && mutation.error.errors.password)
                    ? 'border-rose-500 focus:border-rose-500'
                    : 'border-slate-600 focus:border-sky-500'}
                `}
                placeholder="رمز عبور خود را وارد کنید" 
                disabled={mutation.isPending}
              />
              {errors.password && (
                  <p className="mt-1.5 text-xs text-rose-400">{errors.password.message}</p>
              )}
            </div>

            {errors.root?.serverError && (
              <p className="rounded-md bg-rose-500/20 p-3 text-center text-sm text-rose-300 border border-rose-500/30">
                {(errors.root.serverError as any).message}
              </p>
            )}
            {mutation.isError && !mutation.error.errors && !errors.root?.serverError && (
                 <p className="rounded-md bg-rose-500/20 p-3 text-center text-sm text-rose-300 border border-rose-500/30">
                   {mutation.error.message || "خطایی در سرور رخ داد."}
                 </p>
            )}

            <div>
              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:from-sky-600 hover:to-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
              >
                {mutation.isPending ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 rtl:ml-3 ltr:mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    در حال ورود...
                  </div>
                ) : (
                  'ورود'
                )}
              </button>
            </div>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-400">
              حساب کاربری ندارید؟{' '}
              <span
                onClick={handleSignup}
                className="group font-medium text-sky-400 hover:text-sky-300 transition-colors duration-300 cursor-pointer inline-flex items-center gap-1.5"
                role="link"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleSignup()}
              >
                ثبت نام کنید
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </span>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}