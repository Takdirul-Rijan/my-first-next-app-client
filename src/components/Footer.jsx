"use client";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Footer() {
  const { data: session } = useSession();
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">E-Shop</h3>
            <p className="text-gray-600 text-sm">
              Your trusted online store for electronics, furniture, wearables,
              accessories, and more. Quality products at affordable prices.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>

              {!session && (
                <li>
                  <Link href="/login" className="hover:text-blue-600">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-700">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
          © 2025 E-Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
