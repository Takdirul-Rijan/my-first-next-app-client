export default function AboutPage() {
  return (
    <div className="text-gray-800">
      <div className="bg-gray-100 text-black py-16">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-extrabold mb-4">About E-Shop</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your trusted destination for premium products, smooth shopping, and
            a modern digital buying experience.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-7 text-lg">
            At <span className="font-semibold text-blue-600">E-Shop</span>, we
            aim to provide high-quality products with a seamless shopping
            experience. Whether it's electronics, home decor, accessories, or
            lifestyle essentials — we bring the best to your doorstep.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-14">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose E-Shop?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <h3 className="font-bold text-xl mb-3">✔ Premium Quality</h3>
              <p className="text-gray-600">
                Carefully selected products that meet strict quality standards.
              </p>
            </div>

            <div className="bg-white p-6 shadow rounded-lg text-center">
              <h3 className="font-bold text-xl mb-3">✔ Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery right to your home or office.
              </p>
            </div>

            <div className="bg-white p-6 shadow rounded-lg text-center">
              <h3 className="font-bold text-xl mb-3">✔ Secure Payment</h3>
              <p className="text-gray-600">
                Safe, trusted, and encrypted payment processing.
              </p>
            </div>

            <div className="bg-white p-6 shadow rounded-lg text-center">
              <h3 className="font-bold text-xl mb-3">✔ Customer Support</h3>
              <p className="text-gray-600">
                Friendly support here to help anytime you need.
              </p>
            </div>

            <div className="bg-white p-6 shadow rounded-lg text-center">
              <h3 className="font-bold text-xl mb-3">✔ Trending Products</h3>
              <p className="text-gray-600">
                Stay updated with the latest electronics and lifestyle items.
              </p>
            </div>

            <div className="bg-white p-6 shadow rounded-lg text-center">
              <h3 className="font-bold text-xl mb-3">✔ Affordable Prices</h3>
              <p className="text-gray-600">
                Best value without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-14 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 leading-7">
          E-Shop started with a simple idea — to make online shopping smoother,
          smarter, and enjoyable. We combine modern design with trusted
          products, creating an experience that customers love.
        </p>
      </div>
    </div>
  );
}
