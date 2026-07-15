export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold">
            About <span className="text-blue-500">FoodieHub</span>
          </h1>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            FoodieHub is a community-driven platform that helps reduce food
            waste by connecting people who have extra food with those who need
            it. Together, we can build a world where good food never goes to
            waste.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition">
            <div className="text-5xl mb-5">🎯</div>

            <h2 className="text-2xl font-bold mb-3">
              Our Mission
            </h2>

            <p className="text-slate-400">
              Our mission is to reduce food waste and connect communities
              through responsible food sharing.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-green-500 transition">
            <div className="text-5xl mb-5">🤝</div>

            <h2 className="text-2xl font-bold mb-3">
              Community
            </h2>

            <p className="text-slate-400">
              FoodieHub enables restaurants, individuals and volunteers to
              donate food safely and efficiently.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-500 transition">
            <div className="text-5xl mb-5">🌍</div>

            <h2 className="text-2xl font-bold mb-3">
              Our Vision
            </h2>

            <p className="text-slate-400">
              Creating a future where surplus food reaches people instead of
              landfills.
            </p>
          </div>

        </div>

        <div className="mt-20 bg-slate-900 border border-slate-800 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Choose FoodieHub?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="flex gap-4">
              <span className="text-3xl">✅</span>

              <div>
                <h3 className="font-semibold text-xl">
                  Easy Food Sharing
                </h3>

                <p className="text-slate-400 mt-2">
                  Share food in just a few clicks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">🍔</span>

              <div>
                <h3 className="font-semibold text-xl">
                  Reduce Food Waste
                </h3>

                <p className="text-slate-400 mt-2">
                  Every shared meal helps save the environment.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">🔒</span>

              <div>
                <h3 className="font-semibold text-xl">
                  Secure Platform
                </h3>

                <p className="text-slate-400 mt-2">
                  Safe authentication with Email & Google Login.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">❤️</span>

              <div>
                <h3 className="font-semibold text-xl">
                  Community First
                </h3>

                <p className="text-slate-400 mt-2">
                  Helping people while protecting the planet.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}