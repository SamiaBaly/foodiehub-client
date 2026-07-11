"use client";

import CategoryChart from "@/components/CategoryChart";
import InventoryChart from "@/components/InventoryChart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface Food {

  _id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;

}


interface UserPayload {

  id: string;
  email: string;
  role: "admin" | "user";

}



export default function DashboardPage() {


  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();



  useEffect(() => {


    const fetchFoods = async () => {


      const token = localStorage.getItem("token");


      if (!token) {

        router.push("/login");
        return;

      }



      try {


        const payload: UserPayload = JSON.parse(
          atob(token.split(".")[1])
        );



        const url =
          payload.role === "admin"
            ? `${process.env.NEXT_PUBLIC_API_URL}/foods`
            : `${process.env.NEXT_PUBLIC_API_URL}/foods/my-foods`;




        const response = await fetch(
          url,
          {
            headers: {

              Authorization: `Bearer ${token}`,

            },

          }
        );



        const data = await response.json();



        setFoods(
          data.data?.foods || []
        );



      } catch (error) {


        console.log(error);


      } finally {


        setLoading(false);


      }


    };



    fetchFoods();



  }, [router]);





  const totalFoods = foods.length;



  const categories = new Set(
    foods.map(
      (food) => food.category
    )
  ).size;



  const totalValue = foods.reduce(

    (sum, food) =>
      sum + food.price * food.quantity,

    0

  );





  if (loading) {


    return (

      <div
        className="
        min-h-screen
        bg-slate-950
        flex
        items-center
        justify-center
        text-white
        text-xl
        "
      >

        Loading Dashboard...

      </div>

    );

  }





  return (


    <main className="min-h-screen bg-slate-950 p-8">



      <div className="mb-5">


        <h1 className="text-4xl font-bold text-white">

          Welcome to FoodieHub 👋

        </h1>



        <p className="text-slate-400 mt-2">

          Manage your food items from dashboard.

        </p>


      </div>





      {/* Stats */}


      <div className="grid md:grid-cols-3 gap-3">



        <div
          className="
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          p-6
          "
        >

          <p className="text-slate-400">

            Total Foods

          </p>


          <h2 className="text-4xl font-bold text-blue-400 mt-3">

            {totalFoods}

          </h2>


        </div>





        <div
          className="
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          p-6
          "
        >


          <p className="text-slate-400">

            Categories

          </p>


          <h2 className="text-4xl font-bold text-green-400 mt-3">

            {categories}

          </h2>


        </div>





        <div
          className="
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          p-6
          "
        >


          <p className="text-slate-400">

            Inventory Value

          </p>


          <h2 className="text-3xl font-bold text-yellow-400 mt-3">

            ৳ {totalValue}

          </h2>


        </div>



      </div>






      {/* Recent Foods */}


      <div className="mt-10 grid lg:grid-cols-3 gap-3">



        <div
          className="
          lg:col-span-2
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          p-6
          "
        >



          <h2 className="text-2xl font-bold text-white mb-5">

            🍔 Recent Foods

          </h2>



          <div className="space-y-3">


            {
              foods.slice(0, 3).map(
                (food) => (


                  <div
                    key={food._id}
                    className="
                  flex
                  justify-between
                  items-center
                  bg-slate-800
                  rounded-xl
                  p-4
                  "
                  >


                    <div>

                      <h3 className="text-white font-semibold">

                        {food.name}

                      </h3>


                      <p className="text-slate-400 text-sm">

                        {food.category}

                      </p>


                    </div>



                    <p className="text-blue-400 font-bold">

                      ৳ {food.price}

                    </p>


                  </div>


                )
              )
            }



            {
              foods.length === 0 && (

                <p className="text-slate-400">

                  No food added yet.

                </p>

              )
            }


          </div>



        </div>





        <CategoryChart foods={foods} />



      </div>






      <div className="mt-10 grid lg:grid-cols-2 gap-6">



        <InventoryChart foods={foods} />





        <div
          className="
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          p-6
          "
        >


          <h2 className="text-2xl font-bold text-white mb-5">

            📌 Food Summary

          </h2>



          <div className="space-y-4">


            <div className="bg-slate-800 rounded-xl p-4">

              <p className="text-slate-400">

                Highest Stock Food

              </p>


              <p className="text-white font-bold mt-2">

                {
                  foods.length
                    ?
                    foods.reduce(
                      (prev, current) =>
                        prev.quantity > current.quantity
                          ? prev
                          : current
                    ).name
                    :
                    "No Data"
                }


              </p>


            </div>





            <div className="bg-slate-800 rounded-xl p-4">


              <p className="text-slate-400">

                Total Items

              </p>


              <p className="text-blue-400 text-2xl font-bold">

                {
                  foods.reduce(
                    (sum, food) =>
                      sum + food.quantity,
                    0
                  )
                }

              </p>


            </div>




            <div className="bg-slate-800 rounded-xl p-4">


              <p className="text-slate-400">

                Average Price

              </p>


              <p className="text-yellow-400 text-2xl font-bold">

                ৳ {
                  foods.length
                    ?
                    Math.round(
                      totalValue /
                      foods.reduce(
                        (sum, food) =>
                          sum + food.quantity,
                        0
                      )
                    )
                    :
                    0
                }


              </p>


            </div>



          </div>



        </div>



      </div>




    </main>


  );


}