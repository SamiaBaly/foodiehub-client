export default function FoodsLoading() {
  return (
    <main className="min-h-screen bg-slate-950 p-8">

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl overflow-hidden animate-pulse"
          >
            <div className="h-48 bg-slate-800" />
            <div className="p-5 space-y-3">
              <div className="h-5 bg-slate-800 rounded" />
              <div className="h-4 bg-slate-800 rounded w-3/4" />
              <div className="h-10 bg-slate-800 rounded mt-4" />
            </div>
          </div>
        ))}

      </div>

    </main>
  );
}