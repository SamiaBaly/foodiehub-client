import Link from "next/link";

import FoodCard from "@/components/FoodCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";

import { getAllFoods } from "@/services/food.service";


interface Props {
  searchParams: Promise<{
    search?: string;
    category?: string;
    page?: string;
  }>;
}


const FoodsPage = async ({
  searchParams,
}: Props) => {


  const params = await searchParams;


  const query = new URLSearchParams();



  if (params.search) {
    query.set(
      "search",
      params.search
    );
  }



  if (params.category) {
    query.set(
      "category",
      params.category
    );
  }



  if (params.page) {
    query.set("page", params.page);
  }

  query.set("limit", "12");


  const response = await getAllFoods(
    query.toString()
      ? `?${query.toString()}`
      : ""
  );



  const foods = response?.data?.foods || [];

  const pagination = response?.data?.pagination || {
    page: 1,
    limit: 6,
    total: 0,
    totalPages: 1,
  };



  return (

    <main
      className="
        min-h-screen
        bg-slate-950
        py-12
      "
    >


      <div
        className="
    max-w-7xl
    mx-auto
    px-4
    sm:px-6
    lg:px-8
  "
      >



        {/* Header */}

        <div
          className="
            text-center
            
          "
        >

          <h1
            className="
    text-3xl
    sm:text-4xl
    lg:text-5xl
    font-extrabold
    text-white
  "
          >
            🍔 Explore Foods
          </h1>


          <p
            className="
    text-slate-400
    mt-4
    text-base
    sm:text-lg
  "
          >
            Discover delicious foods from our collection
          </p>


        </div>





        {/* Search & Category */}

        <div
          className="
    bg-slate-900
    border
    border-slate-800
    rounded-2xl
    sm:rounded-3xl
    p-4
    sm:p-6
    mb-8
    sm:mb-10
    shadow-xl
  "
        >

          <div className="mb-6">

            <SearchBar />

          </div>



          <CategoryFilter />


        </div>







        {
          foods.length === 0 ? (

            <div
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-16
                text-center
              "
            >

              <h2
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >
                😔 No Foods Found
              </h2>


              <p
                className="
                  text-slate-400
                  mt-3
                "
              >
                Try another search or category
              </p>


            </div>


          ) : (


            <>


              {/* Food Cards */}
                <div
                  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-5
    sm:gap-6
    lg:gap-8
  "
                >


                {
                  foods.map((food) => (

                    <div
                      key={food._id}
                      className="
                        hover:-translate-y-2
                        transition
                        duration-300
                      "
                    >

                      <FoodCard
                        food={food}
                      />


                    </div>

                  ))
                }


              </div>





              {/* Pagination */}


              {
                pagination.totalPages > 1 && (


                  <div
                    className="
                      flex
                      justify-center
                      items-center
                      gap-5
                      mt-12
                    "
                  >



                    <Link

                      href={
                        `/foods?${new URLSearchParams({
                          ...(params.search && {
                            search: params.search
                          }),

                          ...(params.category && {
                            category: params.category
                          }),

                          page: String(
                            pagination.page - 1
                          )

                        }).toString()}`
                      }


                      className={`
                        px-5
                        py-3
                        rounded-xl
                        bg-slate-800
                        text-white
                        hover:bg-slate-700
                        transition

                        ${pagination.page === 1
                          ? "pointer-events-none opacity-40"
                          : ""
                        }
                      `}

                    >

                      ← Previous

                    </Link>





                    <span
                      className="
                        px-5
                        py-3
                        rounded-xl
                        bg-slate-900
                        border
                        border-slate-800
                        text-white
                        font-semibold
                      "
                    >

                      Page {pagination.page} of {pagination.totalPages}

                    </span>






                    <Link


                      href={
                        `/foods?${new URLSearchParams({
                          ...(params.search && {
                            search: params.search
                          }),

                          ...(params.category && {
                            category: params.category
                          }),

                          page: String(
                            pagination.page + 1
                          )

                        }).toString()}`
                      }


                      className={`
                        px-5
                        py-3
                        rounded-xl
                        bg-blue-600
                        text-white
                        hover:bg-blue-700
                        transition

                        ${pagination.page === pagination.totalPages
                          ? "pointer-events-none opacity-40"
                          : ""
                        }
                      `}

                    >

                      Next →

                    </Link>



                  </div>


                )
              }



            </>

          )
        }




      </div>


    </main>

  );
};


export default FoodsPage;