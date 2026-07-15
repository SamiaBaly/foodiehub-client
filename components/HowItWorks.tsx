const steps = [
  {
    icon: "🔍",
    title: "Browse Foods",
    description: "Explore hundreds of delicious meals.",
  },
  {
    icon: "🛒",
    title: "Place Your Order",
    description: "Order your favorite food in seconds.",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Receive fresh food at your doorstep.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-gray-500 mt-3">
            Order your favorite food in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="
    rounded-2xl
    border
    border-gray-200
    dark:border-gray-800
    bg-gray-50
    dark:bg-gray-900
    p-8
    text-center
    hover:shadow-xl
    transition
  "
            >
              <div className="text-6xl">{step.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}