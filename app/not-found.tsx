import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        min-h-screen
        bg-slate-950
        flex
        items-center
        justify-center
        overflow-hidden
        relative
        px-6
      "
    >
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Floating Emojis */}
      <span className="absolute top-24 left-20 text-5xl animate-bounce">
        🍔
      </span>

      <span
        className="absolute top-44 right-24 text-4xl animate-bounce"
        style={{ animationDelay: "0.5s" }}
      >
        🍕
      </span>

      <span
        className="absolute bottom-24 left-32 text-4xl animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        🍟
      </span>

      <span
        className="absolute bottom-32 right-28 text-5xl animate-bounce"
        style={{ animationDelay: "1.5s" }}
      >
        🌮
      </span>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">

        <h1
          className="
            text-8xl
            md:text-9xl
            font-extrabold
            bg-gradient-to-r
            from-blue-500
            via-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
            animate-pulse
          "
        >
          404
        </h1>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        <p className="mt-5 text-slate-400 text-lg leading-8">
          Looks like this page has gone missing.
          <br />
          Lets get you back to delicious foods.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <Link
            href="/"
            className="
              px-8
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              transition
              hover:scale-105
            "
          >
            🏠 Back Home
          </Link>

          <Link
            href="/foods"
            className="
              px-8
              py-3
              rounded-xl
              border
              border-slate-700
              text-white
              hover:bg-slate-800
              transition
              hover:scale-105
            "
          >
            🍔 Explore Foods
          </Link>

        </div>

        {/* Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="w-48 h-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
        </div>

      </div>
    </main>
  );
}