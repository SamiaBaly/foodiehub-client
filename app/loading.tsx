export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">

        <div className="relative w-20 h-20">

          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-slate-700
            "
          />

          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-blue-500
              border-t-transparent
              animate-spin
            "
          />

        </div>

        <h2 className="text-2xl font-bold text-white">
          Loading...
        </h2>

        <p className="text-slate-400">
          Please wait a moment
        </p>

      </div>
    </main>
  );
}