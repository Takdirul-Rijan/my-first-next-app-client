export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          What Our <span className="text-blue-500">Customers</span> Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-left">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-500 text-2xl">“</span>
              </div>
              <p className="text-gray-700 italic mb-4">
                Great products and super fast delivery!
              </p>
            </div>
            <h3 className="font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">Verified Customer</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-left">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-green-500 text-2xl">“</span>
              </div>
              <p className="text-gray-700 italic mb-4">
                Excellent customer service. Highly recommended!
              </p>
            </div>
            <h3 className="font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-sm text-gray-500">Happy Shopper</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-left">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-purple-500 text-2xl">“</span>
              </div>
              <p className="text-gray-700 italic mb-4">
                Amazing quality products at great prices. Love E-Shop!
              </p>
            </div>
            <h3 className="font-semibold text-gray-800">Emily Carter</h3>
            <p className="text-sm text-gray-500">Returning Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
