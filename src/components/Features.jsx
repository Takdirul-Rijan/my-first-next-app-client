export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Shop With <span className="text-blue-500">E-Shop</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">
              Lightning-Fast Delivery
            </h3>
            <p className="opacity-90">
              Get your products delivered to your doorstep swiftly and safely.
            </p>
          </div>

          <div className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="opacity-90">
              Shop from a collection carefully curated for top-tier quality.
            </p>
          </div>

          <div className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">
              24/7 Customer Support
            </h3>
            <p className="opacity-90">
              Our friendly support team is always here to help, day or night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
