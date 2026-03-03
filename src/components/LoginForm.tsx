"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Demo credentials — replace with API call later
  const DEMO = { email: "admin@example.com", password: "Admin@123" };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    await new Promise((r) => setTimeout(r, 500));

    if (email === DEMO.email && password === DEMO.password) {
      if (remember) localStorage.setItem("demo-remember", "1");
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Email */}
      <div className="relative">
        <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 pl-1.5 text-white/80">
          {/* mail icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 0 8 6 8-6"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          type="email"
          placeholder="Email ID"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent text-white placeholder-white/80 border-b border-white/40 focus:border-white focus:outline-none py-2 pl-7 transition"
        />
      </div>

      {/* Password */}
      <div className="bg-white/20 rounded-md p-3">
        <div className="relative">
          <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 pl-1.5 text-white/80">
            {/* lock icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M17 11H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-2 0V8a3 3 0 1 0-6 0v3"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent text-white placeholder-white/70 border-b border-white/40 focus:border-white focus:outline-none py-2 pl-7 pr-9 transition"
          />
        </div>
      </div>

      {/* Row: remember + forgot */}
      <div className="flex items-center justify-between text-[13px]">
        <label className="inline-flex items-center gap-2 select-none">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="accent-sky-400"
          />
          <span className="tracking-wide">Remember me</span>
        </label>
        <button type="button" className="text-white/90 hover:underline">
          Forgot Password?
        </button>
      </div>

      {/* Error (if any) */}
      {error && <p className="text-rose-300 text-sm">{error}</p>}

      {/* Login button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 disabled:opacity-70 shadow-[0_8px_18px_rgba(37,99,235,0.40)] active:translate-y-[1px] hover:brightness-[1.05] transition text-white font-semibold py-2 border border-white/20"
      >
        {loading ? "Logging in..." : "LOGIN"}
      </button>

      {/* small divider + signup */}
      <div className="h-px w-full bg-white/15 mt-5 mb-3" />
      <p className="text-center text-sm">
        <span className="text-rose-300">Don’t have an account?</span>{" "}
        <button type="button" className="underline-offset-2 hover:underline">Click here</button>
      </p>
    </form>
  );
}
