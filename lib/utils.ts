import { data } from "@/constants/data";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const debounce = <T extends (...args: any[]) => unknown>(
  func: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;
  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const searchIcon = (q: string) => {
  // @ts-ignore
  const allIcons: any[] = Object.values(data).map((i) => i.map((k) => k));

  let icons: { id: string; label: string; icon: any }[] = [].concat(
    ...allIcons
  );

  return icons.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
};
