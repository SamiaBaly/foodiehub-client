import Link from "next/link";
import FoodCard from "@/components/FoodCard";
import { getAllFoods } from "@/services/food.service";


export default async function FeaturedFoods() {


  const response = await getAllFoods(
    "?limit=6"
  );


  const foods = response.data.foods || [];



  return (

    <section
      className="
        bg-slate-950
        py-5
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >


        {/* Header */}

        <div
          className="
            flex
            justify-between
            items-center
            mb-10
          "
        >

          <div>

            <h2
              className="
                text-4xl
                font-bold
                text-white
              "
            >
              🍔 Featured Foods
            </h2>


            <p
              className="
                text-slate-400
                mt-3
              "
            >
              Explore our most delicious food items
            </p>

          </div>


          <Link
            href="/foods"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5
              py-3
              rounded-xl
              font-semibold
            "
          >
            View All →
          </Link>


        </div>




        {
          foods.length === 0 ? (

            <div
              className="
                text-center
                text-slate-400
                py-10
              "
            >
              No foods available
            </div>

          ) : (


            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
              "
            >

              {
                foods.slice(0, 3).map((food) => (

                  <FoodCard
                    key={food._id}
                    food={food}
                  />

                ))
              }


            </div>


          )
        }


      </div>


    </section>

  );
}