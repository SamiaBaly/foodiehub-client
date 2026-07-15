export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-extrabold">
            Contact <span className="text-blue-500">Us</span>
          </h1>

          <p className="text-slate-400 mt-5">
            Wed love to hear from you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Send a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold"
              >
                Send Message
              </button>

            </form>

          </div>

          <div className="space-y-8">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-3">
                📧 Email
              </h3>

              <p className="text-slate-400">
                support@foodiehub.com
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-3">
                📞 Phone
              </h3>

              <p className="text-slate-400">
                +880 1700-000000
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-3">
                📍 Address
              </h3>

              <p className="text-slate-400">
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-3">
                Join Our Mission 🌍
              </h3>

              <p>
                Together we can reduce food waste and help people in need.
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}