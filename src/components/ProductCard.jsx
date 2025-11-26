"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleDetails = () => {
    // console.log("Details btn");
    // console.log("current session info", session);
    // console.log("product id", product.id);
    if (!session) {
      router.push(`/login?callbackUrl=/products/${product.id}`);
    } else {
      router.push(`/products/${product.id}`);
    }
  };

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain rounded"
        />
      </div>

      <h2 className="font-bold text-lg mt-2">{product.title}</h2>
      <p className="text-gray-500 text-sm">{product.shortDescription}</p>
      <p className="font-semibold mt-1">${product.price}</p>

      <div className="text-center mt-2">
        <button
          onClick={handleDetails}
          className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Details
        </button>
      </div>
    </div>
  );
}
