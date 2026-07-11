const features = [

  {
    icon: "🔐",
    title: "Secure Authentication",
    description:
      "Your account and food data stay protected with secure login system."
  },

  {
    icon: "🍔",
    title: "Easy Food Management",
    description:
      "Add, edit and manage your food items easily from dashboard."
  },

  {
    icon: "📊",
    title: "Smart Dashboard",
    description:
      "Track your inventory, categories and food statistics easily."
  },

];


export default function WhyChooseUs() {


  return (

    <section
      className="
        bg-slate-950
        py-20
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >


        <div
          className="
            text-center
            mb-12
          "
        >

          <h2
            className="
              text-4xl
              font-bold
              text-white
            "
          >
            ✨ Why Choose FoodieHub?
          </h2>


          <p
            className="
              text-slate-400
              mt-3
            "
          >
            Everything you need to manage food smarter
          </p>


        </div>



        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >


          {
            features.map((feature) => (

              <div
                key={feature.title}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  text-center
                  hover:border-blue-500
                  hover:-translate-y-2
                  transition
                "
              >

                <div
                  className="
                    text-5xl
                    mb-5
                  "
                >
                  {feature.icon}
                </div>


                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {feature.title}
                </h3>


                <p
                  className="
                    text-slate-400
                    mt-4
                    leading-relaxed
                  "
                >
                  {feature.description}
                </p>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}