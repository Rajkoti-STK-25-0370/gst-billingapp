"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200/60 bg-white">
      <div className="mx-auto max-w-[1200px] w-full px-5 sm:px-10 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/stackly.png" alt="Stackly" width={28} height={28} />
          <span className="text-sm font-medium tracking-wide text-gray-700">
            GST BILLING
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-800 hover:text-gray-900">
            Log in or create account
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.3 0 6.2 1.1 8.5 3.2l6.4-6.4C35.5 2.1 30.1 0 24 0 14.6 0 6.4 5.4 2.5 13.3l7.9 6.1C12.3 13.5 17.6 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.6 24.6c0-1.5-.1-2.6-.4-3.7H24v7h12.7c-.6 3-2.5 5.6-5.4 7.4l8.3 6.3c4.8-4.4 7-10.8 7-17z"/>
              <path fill="#4A90E2" d="M8.8 27.4a14.6 14.6 0 0 1 0-6.8l-7.9-6.1C-.6 17 0 20.4 0 24s.6 7 1.7 9.5l7.1-6.1z"/>
              <path fill="#FBBC05" d="M24 48c6.1 0 11.2-2 14.9-5.4l-8.3-6.3c-2.3 1.5-5.3 2.4-8.6 2.4-6.4 0-11.7-4-13.6-9.6l-7.9 6.1C6.4 42.6 14.6 48 24 48z"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </header>
  );
}