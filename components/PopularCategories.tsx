const categories = [
  { name: "Pizza", icon: "🍕" },
  { name: "Burger", icon: "🍔" },
  { name: "Chicken", icon: "🍗" },
  { name: "Noodles", icon: "🍜" },
  { name: "Healthy", icon: "🥗" },
  { name: "Dessert", icon: "🍰" },
];

export default function PopularCategories() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Popular Categories
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Explore foods by your favorite categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="
    rounded-2xl
    border
    border-gray-200
    dark:border-gray-800
    bg-white
    dark:bg-gray-900
    p-6
    text-center
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
            >
              <div className="text-5xl mb-4">{category.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {category.name}
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                20+ Delicious Items
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}