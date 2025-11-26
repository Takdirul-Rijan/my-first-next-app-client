"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();

  const linkClass = (path) =>
    `px-3 py-1 rounded-md border transition ${
      pathname === path
        ? "border-blue-600 bg-blue-50 text-blue-600"
        : "border-transparent text-gray-800 hover:border-gray-300 hover:bg-gray-100"
    }`;

  if (status === "loading") {
    return (
      <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition"
          >
            E-Shop
          </Link>
          <div>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-cyan-400 shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition"
        >
          E-Shop
        </Link>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>

        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          {!session && (
            <Link href="/login" className={linkClass("/login")}>
              Login
            </Link>
          )}

          {session && (
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-1"
              >
                {session.user?.name}{" "}
                <span
                  className={`transition-transform ${
                    dropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <div className="px-4 py-2 border-b text-gray-700">
                    <p className="font-semibold">{session.user?.name}</p>
                    <p className="text-sm text-gray-500">
                      {session.user?.email}
                    </p>
                  </div>
                  <Link
                    href="/add-product"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/manage-products"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Manage Products
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white p-4 space-y-4">
          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={linkClass("/products")}
            onClick={() => setOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={linkClass("/about")}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={linkClass("/contact")}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          {!session && (
            <Link
              href="/login"
              className={linkClass("/login")}
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          )}

          {session && (
            <div>
              <button
                onClick={() => setDropdown(!dropdown)}
                className="bg-gray-200 px-4 py-2 rounded-lg w-full text-left hover:bg-gray-300 flex items-center gap-1"
              >
                {session.user?.name}{" "}
                <span
                  className={`transition-transform ${
                    dropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {dropdown && (
                <div className="mt-2 w-full bg-white border rounded-lg shadow-lg">
                  <div className="px-4 py-2 border-b text-gray-700">
                    <p className="font-semibold">{session.user?.name}</p>
                    <p className="text-sm text-gray-500">
                      {session.user?.email}
                    </p>
                  </div>
                  <Link
                    href="/add-product"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/manage-products"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Manage Products
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
