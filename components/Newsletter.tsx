import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center">
            <Mail className="w-10 h-10 text-white" />
          </div>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Subscribe to Our Newsletter
          </h2>

          <p className="mt-4 text-orange-100 max-w-2xl mx-auto">
            Stay updated with our latest food collections, exclusive offers,
            discounts and delicious recipes delivered directly to your inbox.
          </p>

        </div>

        <form className="mt-10 max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="
              flex-1
              rounded-xl
              border
              border-white/30
              bg-white
              px-5
              py-4
              text-gray-900
              outline-none
              focus:ring-2
              focus:ring-orange-300
            "
          />

          <button
            type="submit"
            className="
              rounded-xl
              bg-black
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-gray-900
            "
          >
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}