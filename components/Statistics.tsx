const stats = [
  {
    number: "10K+",
    title: "Happy Customers",
  },
  {
    number: "500+",
    title: "Food Items",
  },
  {
    number: "100+",
    title: "Restaurant Partners",
  },
  {
    number: "4.9★",
    title: "Customer Rating",
  },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Our Journey in Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="
    rounded-2xl
    border
    border-gray-200
    dark:border-gray-800
    bg-gray-50
    dark:bg-gray-900
    py-10
    text-center
  "
            >
              <h3 className="text-4xl font-bold text-primary">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}