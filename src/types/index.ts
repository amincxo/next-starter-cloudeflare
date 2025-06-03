// types/index.ts
import { LucideIcon } from "lucide-react";

export interface User {
  id: string;
  name: string;
  email?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon; // استفاده از LucideIcon برای آیکون‌ها
}