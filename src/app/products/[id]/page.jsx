"use client";

import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { RiseLoader } from "react-spinners";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: products } = useProducts();

  // console.log(id);
  // console.log("all products", products);

  const product = products?.find((p) => p.id === Number(id));

  if (!product)
    return (
      <div className="flex justify-center items-center mt-10">
        <RiseLoader />
      </div>
    );

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 border">
        <Image
          src={product.image}
          alt={product.title}
          width={900}
          height={550}
          className="w-full h-[420px] object-contain rounded-xl bg-gray-50 p-4"
        />

        <h1 className="text-3xl font-bold mt-6">{product.title}</h1>

        <p className="text-gray-600 mt-3 leading-relaxed whitespace-pre-line">
          {product.fullDescription}
        </p>

        <div className="mt-6 space-y-1 text-gray-700">
          <p className="font-semibold text-xl">${product.price}</p>
          <p className="text-sm text-gray-500">
            Date: {new Date(product.date).toISOString().split("T")[0]}
          </p>
          <p className="text-sm">Priority: {product.priority}</p>
          <p className="text-sm">Category: {product.category}</p>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => router.push("/products")}
            className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Back to All Products
          </button>

          <button
            onClick={() => router.push("/add-product")}
            className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
