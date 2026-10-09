"use client";

import { useState, type SubmitEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const DEMO_USERNAME = "admin";
  const DEMO_PASSWORD = "2tX6*{zL3(.Y!75.xDV}D0Rn%4H1qJJ*";

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  setError("");

  if (
    username === DEMO_USERNAME &&
    password === DEMO_PASSWORD
  ) {
    router.push("/dashboard");
  } else {
    setError("Invalid username or password.");
  }
};

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <div className="w-160 mb-8">
        <img className="site-logo" alt="MSF-RSF logo" src="/msf_rsf.jpg" />
      </div>
      <div>
        <h1 className="mb-4 text-center text-3xl font-bold">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <p role="alert" className="text-center text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}