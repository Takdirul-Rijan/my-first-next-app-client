"use client";
import Swal from "sweetalert2";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us. We'll get back to you soon.",
      confirmButtonText: "OK",
      showConfirmButton: true,
    });

    e.target.reset();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>

      <div className="bg-white shadow p-6 rounded-lg max-w-3xl mx-auto">
        <p className="text-gray-700 leading-7">
          Have questions, feedback, or need help with your order? Our team at{" "}
          <span className="font-semibold text-blue-600">E-Shop</span> is always
          here to assist you. Feel free to reach out using any of the methods
          below.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <h2 className="font-semibold text-lg">📞 Customer Support</h2>
            <p className="text-gray-700">+880 1234-567890</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">📧 Email Us</h2>
            <p className="text-gray-700">support@eshop.com</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">📍 Office Address</h2>
            <p className="text-gray-700">Dhaka, Bangladesh.</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold text-lg mb-2">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
