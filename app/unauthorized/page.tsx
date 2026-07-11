import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      {/* Background */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-500/20 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center shadow-2xl backdrop-blur-xl">

        <div className="mb-6 text-7xl animate-bounce">
          🔒
        </div>

        <h1 className="text-6xl font-extrabold text-red-500">
          401
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Unauthorized Access
        </h2>

        <p className="mt-5 text-slate-400 leading-7">
          You dont have permission to access this page.
          <br />
          Please log in with an authorized account or return to the homepage.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/login"
            prefetch={false}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            🔑 Login
          </Link>

          <Link
            href="/"
            prefetch={false}
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            🏠 Home
          </Link>

          <Link
            href="/foods"
            prefetch={false}
            className="rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
          >
            🍔 Browse Foods
          </Link>

        </div>

      </div>

    </main>
  );
}