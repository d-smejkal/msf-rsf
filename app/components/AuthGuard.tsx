"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const value = sessionStorage.getItem("isAuthenticated");

    if (value !== "true") {
        router.replace("/");
    } else {
        setIsAuthenticated(true);
  }  }, [router]);

  if (!isAuthenticated) {
    return <p>Checking authentication...</p>;
  }

  return <>{children}</>;
}