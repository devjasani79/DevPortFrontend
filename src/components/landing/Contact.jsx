export default function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Left Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Have questions about DevPort? Our support team is here to help you
            with bookings, deliveries, and enterprise solutions.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">
            <p>
              📍 <span className="font-medium">Head Office:</span> Pune, India
            </p>
            <p>
              📧 <span className="font-medium">Email:</span>{" "}
              support@devport.com || devjasani79@gmail.com
            </p>
            <p>
              📞 <span className="font-medium">Phone:</span> +91 7888117903
            </p>
          </div>
        </div>

        {/* Right Form */}
        <form className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
