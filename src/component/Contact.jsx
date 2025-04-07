import React from "react";
import { useState } from "react";

function Contact({ darkMode }) {
  const endpoint = String(import.meta.env.VITE_FORMSPREE_ENDPOINT);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 100);
  };
  return (
    <section
      id="contact"
      className={`py-10 px-6 bg-gradient-to-br ${
        darkMode ? "from-gray-900 to-gray-800" : "from-gray-100 to-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold md:mb-5 md:mt-5">
            Let’s Create Something Impactful
          </h2>
          <h3 className="text-2xl font-semibold mb-6 text-green-500 md:mt-5">
            Got an idea? Let’s turn it into reality — together.
          </h3>

          <p className="mb-8 text-lg leading-relaxed">
            I enjoy building everything from intuitive frontends to robust
            backends that scale. If you’re looking for someone who can blend
            design, logic, and performance — I’d love to hear from you!
          </p>

          <div
            className={`mb-8 py-4 px-5 inline-block rounded-lg font-semibold shadow-sm${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-100 border border-gray-200"
            }`}
          >
            <span>
              💡 Let's connect and build custom solutions that make a
              difference.
            </span>
          </div>
        </div>
        <div className="w-full">
          <form
            action={endpoint}
            method="POST"
            onSubmit={handleSubmit}
            className={`space-y-2 p-5 rounded-xl shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div>
              <input
                type="hidden"
                name="_next"
                value="https://http://localhost:5173/thank-you"
              />
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Name :
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-gray-50 border-gray-300"
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Email :
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="youremail@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-gray-50 border-gray-300"
                }`}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Message :
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-gray-50 border-gray-300"
                }`}
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-6 rounded-lg font-bold text-white bg-green-500 hover:bg-green-600 transition-colors duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                darkMode
                  ? "focus:ring-offset-gray-800"
                  : "focus:ring-offset-white"
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
