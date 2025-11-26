"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function AddProductPage() {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const queryClient = useQueryClient();

  const onSubmit = async (data) => {
    // console.log("submitted data", data);
    // console.log("current session:", session);

    try {
      if (!session) return;

      data.price = Number(data.price);
      data.date = new Date().toISOString().split("T")[0];
      data.userId = session.user.id;

      await axios.post("http://localhost:5000/add-product", data);

      Swal.fire({
        title: "Product Added!",
        icon: "success",
      });

      reset();

      queryClient.invalidateQueries(["products", session.user.id]);
      router.push("/manage-products");
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Failed to add product",
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        <input
          {...register("title", { required: true })}
          placeholder="Product Title"
          className="w-full border p-2 rounded"
        />
        {errors.title && <p className="text-red-500">Title is required</p>}

        <input
          {...register("shortDescription", { required: true })}
          placeholder="Short Description"
          className="w-full border p-2 rounded"
        />
        {errors.shortDescription && (
          <p className="text-red-500">Short description is required</p>
        )}

        <textarea
          {...register("fullDescription", { required: true })}
          placeholder="Full Description"
          className="w-full border p-2 rounded h-32"
        />
        {errors.fullDescription && (
          <p className="text-red-500">Full description is required</p>
        )}

        <input
          {...register("price", { required: true })}
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
        />
        {errors.price && <p className="text-red-500">Price is required</p>}

        <input
          {...register("category", { required: true })}
          placeholder="Category"
          className="w-full border p-2 rounded"
        />
        {errors.category && (
          <p className="text-red-500">Category is required</p>
        )}

        <input
          {...register("priority", { required: true })}
          placeholder="Priority"
          className="w-full border p-2 rounded"
        />
        {errors.priority && (
          <p className="text-red-500">Priority is required</p>
        )}

        <input
          {...register("image", { required: true })}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        />
        {errors.image && <p className="text-red-500">Image URL is required</p>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-5 py-2 bg-green-600 text-white rounded-lg"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
