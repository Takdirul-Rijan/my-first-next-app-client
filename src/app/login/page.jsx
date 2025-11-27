"use client";

import LoginPageComponent from "@/components/LoginPageComponent";
import { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // render nothing on server
  return <LoginPageComponent />;
}
