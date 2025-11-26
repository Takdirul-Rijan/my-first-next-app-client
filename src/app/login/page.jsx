"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [callbackUrl, setCallbackUrl] = useState("/");

  useEffect(() => {
    const url = searchParams.get("callbackUrl");

    // console.log("Callback URL from query:", url);

    if (url) setCallbackUrl(url);
  }, [searchParams]);

  useEffect(() => {
    if (status === "authenticated") {
      Swal.fire({
        title: "Login Successful! 🎉",
        text: "Redirecting you...",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        router.push(callbackUrl);
      }, 1500);
    }
  }, [status, callbackUrl, router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="p-8 border rounded-xl shadow-lg w-full max-w-sm bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Welcome to E-Shop!
        </h2>

        <button
          onClick={() => signIn("google", { callbackUrl })}
          className="btn flex items-center justify-center bg-white text-black border border-[#e5e5e5] rounded-lg w-full py-3 mb-4 hover:bg-gray-100 transition ease-in-out"
        >
          {/* Google Icon */}
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="mr-2"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
}
