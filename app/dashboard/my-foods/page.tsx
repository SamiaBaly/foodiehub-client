"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Food {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
}


const MyFoodsPage = () => {

  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {

    const fetchMyFoods = async () => {

      try {

        const token = localStorage.getItem("token");


        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/foods/my-foods?page=${page}&limit=8`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        const data = await response.json();


        setFoods(data.data.foods);

        setTotalPages(
          data.data.pagination.totalPages
        );


      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };


    fetchMyFoods();


  }, [page]);
  const handleDelete = async (id: string) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this food?"
    );

    if (!confirmDelete) return;


    try {

      const token = localStorage.getItem("token");


      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/foods/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );


      const result = await response.json();


      if (!response.ok) {
        toast(result.message);
        return;
      }


      toast.success("Food deleted successfully");


      // remove deleted food from UI
      setFoods((prevFoods) =>
        prevFoods.filter(
          (food) => food._id !== id
        )
      );


    } catch (error) {

      console.log(error);

      toast.error("Something went wrong");

    }

  };



  if (loading) {
    return (
      <div className="text-center py-10">
        Loading...
      </div>
    );
  }



  return (
    <main className="min-h-screen bg-slate-950 p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-4xl font-bold text-white">
            🍔 My Foods
          </h1>

          <p className="text-slate-400 mt-2">
            Manage all your added foods
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-3">
          <p className="text-slate-400 text-sm">
            Total Foods
          </p>

          <h2 className="text-2xl font-bold text-blue-400">
            {foods.length}
          </h2>
        </div>

      </div>

      {foods.length === 0 ? (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center">

          <h2 className="text-2xl font-bold text-white">
            No Foods Found
          </h2>

          <p className="text-slate-400 mt-3">
            You havenot added any food yet.
          </p>

        </div>

      ) : (

        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {foods.map((food) => (

              <div
                key={food._id}
                className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:border-blue-500
                hover:-translate-y-1
                transition-all
                duration-300
              "
              >

                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <div className="flex justify-between items-center">

                    <h2 className="text-2xl font-bold text-white">
                      {food.name}
                    </h2>

                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      {food.category}
                    </span>

                  </div>

                  <p className="text-slate-400 mt-4 line-clamp-2">
                    {food.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-6">

                    <div className="bg-slate-800 rounded-xl p-4">

                      <p className="text-slate-400 text-sm">
                        Price
                      </p>

                      <h3 className="text-blue-400 text-xl font-bold">
                        ৳ {food.price}
                      </h3>

                    </div>

                    <div className="bg-slate-800 rounded-xl p-4">

                      <p className="text-slate-400 text-sm">
                        Quantity
                      </p>

                      <h3 className="text-white text-xl font-bold">
                        {food.quantity}
                      </h3>

                    </div>

                  </div>

                  <div className="flex gap-4 mt-8">

                    <Link
                      href={`/dashboard/my-foods/${food._id}/edit`}
                      className="
                      flex-1
                      text-center
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      font-semibold
                      py-3
                      rounded-xl
                      transition
                    "
                    >
                      ✏️ Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(food._id)}
                      className="
                      flex-1
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      font-semibold
                      py-3
                      rounded-xl
                      transition
                    "
                    >
                      🗑 Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Pagination */}
          {totalPages > 1 && (

            <div className="flex justify-center items-center gap-4 mt-10">

              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-5 py-2 rounded-lg bg-slate-800 text-white disabled:opacity-40"
              >
                Previous
              </button>

              <span className="text-white font-semibold">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-40"
              >
                Next
              </button>

            </div>

          )}

        </>

      )}

    </main>
  );

};


export default MyFoodsPage;