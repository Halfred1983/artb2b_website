"use client";

import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/network-data";
import { useLanguage } from "@/context/LanguageContext";

interface AppStoreButtonsProps {
  variant?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export default function AppStoreButtons({
  variant = "light",
  size = "md",
  className = "",
}: AppStoreButtonsProps) {
  const { tr } = useLanguage();

  const isDark = variant === "dark";
  const isSmall = size === "sm";

  const paddingClasses = isSmall ? "px-4 py-2.5 rounded-xl gap-2.5" : "px-5 py-3 rounded-2xl gap-3";
  const iconClasses = isSmall ? "w-5 h-5 shrink-0" : "w-6 h-6 shrink-0";
  const subLabelClasses = isSmall ? "text-[9px]" : "text-[10px]";
  const mainLabelClasses = isSmall ? "text-xs" : "text-sm";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* Apple App Store Button */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download ARTB2B on the App Store"
        className={`inline-flex items-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 border ${paddingClasses} ${
          isDark
            ? "bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800"
            : "bg-zinc-950 hover:bg-zinc-800 text-white border-zinc-950"
        }`}
      >
        <svg className={`${iconClasses} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.24-.59 2.94-1.39z" />
        </svg>
        <div className="text-left leading-tight">
          <p className={`${subLabelClasses} uppercase font-bold tracking-wider text-zinc-400`}>
            {tr("Download on the", "Consíguelo en el")}
          </p>
          <p className={`${mainLabelClasses} font-bold font-sans tracking-tight text-white`}>
            App Store
          </p>
        </div>
      </a>

      {/* Google Play Store Button */}
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get ARTB2B on Google Play"
        className={`inline-flex items-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 border ${paddingClasses} ${
          isDark
            ? "bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800"
            : "bg-white hover:bg-zinc-50 text-zinc-950 border-zinc-200"
        }`}
      >
        <svg className={`${iconClasses} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
        </svg>
        <div className="text-left leading-tight">
          <p
            className={`${subLabelClasses} uppercase font-bold tracking-wider ${
              isDark ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            {tr("Get it on", "Disponible en")}
          </p>
          <p
            className={`${mainLabelClasses} font-bold font-sans tracking-tight ${
              isDark ? "text-white" : "text-zinc-950"
            }`}
          >
            Google Play
          </p>
        </div>
      </a>
    </div>
  );
}
