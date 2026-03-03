// app/page.tsx
import Header from "../components/Header";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
 
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});
 
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
 
 
      {/* Page container (light background, centered content) */}
      <main className="flex-1">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10 py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] items-center gap-8">
            {/* LEFT ILLUSTRATION */}
            <div className="hidden lg:block">
              <Image
                src="/illustration.png"
                alt="Illustration"
                width={720}
                height={520}
                priority
                className="w-full h-auto"
              />
            </div>
 
            {/* RIGHT LOGIN CARD */}
            <div className="w-full max-w-md justify-self-center lg:justify-self-auto">
              {/* Card container with easy-to-read named colors */}
              {/* Top-to-bottom gradient: light sky blue → strong blue → deep indigo */}
              <div
                className="
                  relative
                  rounded-[18px]
                  text-white
                  p-8 sm:p-10
                  shadow-[0_24px_48px_rgba(0,0,0,0.35)]
                  bg-gradient-to-b from-sky-400 via-blue-600 to-indigo-900
                "
              >
                {/* Left and right soft edge darkening (subtle black fades) */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute inset-y-0 left-4 w-16
                    bg-[radial-gradient(60%_140%_at_0%_50%,rgba(0,0,0,0.35),rgba(0,0,0,0)_70%)]
                    blur-[6px]
                  "
                />
                <span
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute inset-y-0 right-4 w-16
                    bg-[radial-gradient(60%_140%_at_100%_50%,rgba(0,0,0,0.35),rgba(0,0,0,0)_70%)]
                    blur-[6px]
                  "
                />
 
                {/* Soft white glow behind the logo at the top center */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute left-1/2 -translate-x-1/2
                    top-8
                    h-44 w-44
                    rounded-full
                    bg-[radial-gradient(closest-side,rgba(255,255,255,0.95),rgba(255,255,255,0.2)_60%,transparent_100%)]
                    blur-[18px]
                  "
                />
 
                {/* Very gentle outer darkening (vignette) */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute inset-0 rounded-[18px]
                    bg-[radial-gradient(120%_140%_at_50%_0%,rgba(0,0,0,0)_20%,rgba(0,0,0,0.12)_60%,rgba(0,0,0,0.28)_100%)]
                  "
                />
 
                {/* CONTENT ABOVE OVERLAYS */}
                <div className="relative z-10">
                  {/* WELCOME (keeps your Playfair font + spacing) */}
                  <h2
                    className={`${playfair.className} text-center text-[30px] sm:text-[34px] leading-none tracking-[0.6em] mb-6 font-bold`}
                  >
                    WELCOME
                  </h2>
 
                  {/* Logo oval pill (white with gentle shadows) */}
                  <div className="flex justify-center mb-8">
                <div
                  className="
                  bg-white
                  w-[130px] sm:w-[180px]
                  h-[70px] sm:h-[85px]
                  rounded-[50%]
                  flex items-center justify-center
                  shadow-lg
                "
                >
                  <img
                    src="/stackly.png"
                    alt="Stackly Logo"
                    className="h-6 sm:h-8 object-contain"
                  />
                </div>
              </div>
 
 
                  {/* thin separator like the mock */}
                  <div className="h-px w-full bg-white/25 mb-4" />
 
                  {/* Email with left icon and thin line */}
                  <div className="mb-4">
                    <div className="relative">
                      <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 pl-1.5 text-white/80">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 0 8 6 8-6"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <input
                        type="email"
                        placeholder="Email ID"
                        className="
                          w-full bg-transparent text-white placeholder-white/80
                          border-b border-white/40
                          focus:border-white focus:outline-none
                          py-2 pl-7 transition
                        "
                        aria-label="Email ID"
                        autoComplete="email"
                      />
                    </div>
                  </div>
 
                  {/* Password inside a translucent white panel (glassy look) */}
                  <div className="mb-5">
                    <div className="bg-white/20 rounded-md p-3">
                      <div className="relative">
                        <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 pl-1.5 text-white/80">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                              d="M17 11H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-2 0V8a3 3 0 1 0-6 0v3"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <input
                          type="password"
                          placeholder="Password"
                          className="
                            w-full bg-transparent text-white placeholder-white/70
                            border-b border-white/40
                            focus:border-white focus:outline-none
                            py-2 pl-7 pr-9 transition
                          "
                          aria-label="Password"
                          autoComplete="current-password"
                        />
                      </div>
                    </div>
                  </div>
 
                  {/* Row: remember + forgot */}
                  <div className="flex items-center justify-between text-[13px] mb-4">
                    <label className="inline-flex items-center gap-2 select-none">
                      <input type="checkbox" className="accent-sky-400" />
                      <span className="tracking-wide">Remember me</span>
                    </label>
                    <button className="text-white/90 hover:underline">Forgot Password?</button>
                  </div>
 
                  {/* LOGIN button: left-to-right blue → lighter blue */}
                  <button
                    className="
                      w-full rounded-md
                      bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300
                      shadow-[0_8px_18px_rgba(37,99,235,0.40)]
                      active:translate-y-[1px]
                      hover:brightness-[1.05]
                      transition
                      text-white font-semibold py-2
                      border border-white/20
                    "
                  >
                    LOGIN
                  </button>
 
                  {/* small divider + signup */}
                  <div className="h-px w-full bg-white/15 mt-5 mb-3" />
                  <p className="text-center text-sm">
                    <span className="text-rose-300">Don’t have an account?</span>{" "}
                    <button className="underline-offset-2 hover:underline">Click here</button>
                  </p>
                </div>
              </div>
            </div>
            {/* END RIGHT LOGIN CARD */}
          </div>
        </div>
      </main>
    </div>
  );
}