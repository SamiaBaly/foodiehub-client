export default function DashboardLoading() {
  return (
    <main className="min-h-screen bg-slate-950 p-8">

      <div className="animate-pulse">

        <div className="h-10 w-72 bg-slate-800 rounded-lg mb-8" />

        <div className="grid md:grid-cols-3 gap-6">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-32 bg-slate-900 rounded-2xl"
            />
          ))}

        </div>

        <div className="mt-8 h-[400px] bg-slate-900 rounded-2xl" />

      </div>

    </main>
  );
}