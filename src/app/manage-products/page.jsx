"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { GridLoader } from "react-spinners";

export default function ManageProductsPage() {
  const queryClient = useQueryClient();
  const [modalImage, setModalImage] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get(
      "https://my-first-next-app-server.vercel.app/add-product"
    );

    // console.log("Products fetched", res.data);

    return res.data;
  };

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const deleteProduct = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete Product?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
    });

    if (!confirm.isConfirmed) return;

    await axios.delete(
      `https://my-first-next-app-server.vercel.app/products/${id}`
    );
    Swal.fire("Deleted!", "Product removed successfully.", "success");
    queryClient.invalidateQueries(["products"]);
  };

  if (isLoading)
    return (
      <p className="text-center mt-6">
        <GridLoader />
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Products</h1>

      {products.length === 0 && (
        <p className="text-center text-gray-500">No products added yet.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="border p-4 rounded-lg shadow bg-white hover:shadow-lg transition"
          >
            {item.image ? (
              <img
                src={item.image}
                width={400}
                height={250}
                alt={item.title}
                className="h-40 w-full object-contain rounded"
              />
            ) : (
              <div className="h-40 w-full bg-gray-200 flex items-center justify-center rounded text-gray-500">
                No Image
              </div>
            )}

            <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.shortDescription}</p>
            <p className="font-bold mt-2">${item.price}</p>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setModalImage(item.image)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View
              </button>

              <button
                onClick={() => deleteProduct(item._id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="relative">
            <img
              src={modalImage}
              width={800}
              height={800}
              alt="Product"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
