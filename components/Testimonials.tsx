const testimonials = [
  {
    name: "Sarah Ahmed",
    review: "Amazing taste and quick delivery. I loved every bite.",
  },
  {
    name: "John Smith",
    review: "Best food ordering experience I've ever had.",
  },
  {
    name: "Nusrat Jahan",
    review: "Fresh food, affordable price and excellent service.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
    rounded-2xl
    border
    border-gray-200
    dark:border-gray-800
    bg-white
    dark:bg-gray-900
    p-6
    hover:shadow-xl
    transition
  "
            >
              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}