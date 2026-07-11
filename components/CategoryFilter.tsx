"use client";


import {
  useRouter,
  useSearchParams
} from "next/navigation";


const categories = [
  "All",
  "Fast Food",
  "Pizza",
  "Burger",
  "Dessert",
  "Drinks"
];



const CategoryFilter = () => {


  const router = useRouter();

  const searchParams = useSearchParams();



  const activeCategory =
    searchParams.get("category") || "All";



  const handleCategory = (
    category: string
  ) => {


    const params = new URLSearchParams(
      searchParams.toString()
    );


    if (category === "All") {

      params.delete("category");

    } else {

      params.set(
        "category",
        category
      );

    }


    router.push(
      `/foods?${params.toString()}`
    );

  };



  return (

    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-4
        mt-6
      "
    >


      {
        categories.map(
          (category) => (

            <button

              key={category}

              onClick={() =>
                handleCategory(category)
              }


              className={`
                px-6
                py-2.5
                rounded-full
                border
                font-medium
                transition-all
                duration-300

                ${activeCategory === category

                  ?

                  `
                  bg-blue-600
                  border-blue-500
                  text-white
                  shadow-lg
                  shadow-blue-600/30
                  scale-105
                  `

                  :

                  `
                  bg-slate-800
                  border-slate-700
                  text-slate-300
                  hover:bg-slate-700
                  hover:text-white
                  `
                }

              `}

            >

              {category === "All" && "🍽️ "}
              {category === "Fast Food" && "🍔 "}
              {category === "Pizza" && "🍕 "}
              {category === "Burger" && "🍟 "}
              {category === "Dessert" && "🍰 "}
              {category === "Drinks" && "🥤 "}

              {category}

            </button>

          )
        )
      }


    </div>

  );

};


export default CategoryFilter;