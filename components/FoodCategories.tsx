"use client";

import { useRouter } from "next/navigation";


const categories = [
  {
    name: "Fast Food",
    icon: "🍔",
    description: "Burger, fries and quick bites"
  },
  {
    name: "Pizza",
    icon: "🍕",
    description: "Cheesy and delicious pizzas"
  },
  {
    name: "Burger",
    icon: "🍔",
    description: "Juicy burgers collection"
  },
  {
    name: "Dessert",
    icon: "🍰",
    description: "Sweet treats for everyone"
  },
  {
    name: "Drinks",
    icon: "🥤",
    description: "Refreshing beverages"
  },
];


export default function FoodCategories() {

  const router = useRouter();


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


        <div className="text-center mb-12">

          <h2
            className="
              text-4xl
              font-bold
              text-white
            "
          >
            🍽 Explore Categories
          </h2>


          <p
            className="
              text-slate-400
              mt-3
            "
          >
            Find your favorite food category
          </p>


        </div>



        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-6
          "
        >


          {
            categories.map((category) => (

              <button
                key={category.name}
                onClick={() =>
                  router.push(
                    `/foods?category=${category.name}`
                  )
                }

                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-6
                  text-left
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
                  {category.icon}
                </div>


                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {category.name}
                </h3>


                <p
                  className="
                    text-slate-400
                    text-sm
                    mt-2
                  "
                >
                  {category.description}
                </p>


              </button>

            ))
          }


        </div>


      </div>


    </section>

  );
}