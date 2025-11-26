import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-green-400 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          Welcome to E-Shop
        </h1>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          Discover high-quality products curated just for you.
        </p>

        <Link
          href="/products"
          className="inline-block bg-white text-blue-600 hover:bg-blue-50 transition px-8 py-4 rounded-lg text-lg font-semibold shadow-md"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
