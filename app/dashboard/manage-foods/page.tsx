"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAllFoods, deleteFood } from "@/services/food.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface Food {
  _id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
}
export default function ManageFoodsPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const fetchFoods = async () => {
    try {
      const response = await getAllFoods();

      setFoods(response.data.foods || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    const loadFoods = async () => {

      try {

        const response = await getAllFoods();

        setFoods(
          response.data.foods || []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };


    loadFoods();

  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this food?"
    );

    if (!confirmDelete) return;

    try {
      await deleteFood(id);

      toast.success("Food deleted successfully");

      fetchFoods();
    } catch (error) {
      console.log(error);

      toast.error("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="text-center text-white py-10">
        Loading...
      </div>
    );
  }

  return (
    <main className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold text-white">
          🍔 Manage Foods
        </h1>

      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800">

        <table className="w-full">

          <thead className="bg-slate-900 text-white">

            <tr>

              <th className="p-4">Image</th>

              <th className="p-4 text-left">
                Food
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4">
                Price
              </th>

              <th className="p-4">
                Quantity
              </th>

              <th className="p-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {foods.map((food) => (

              <tr
                key={food._id}
                className="border-b border-slate-800 hover:bg-slate-900"
              >

                <td className="p-3">

                  <div className="w-16 h-16 overflow-hidden rounded-xl">
                    <Image
                      src={food.image}
                      alt={food.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                </td>

                <td className="text-white">
                  {food.name}
                </td>

                <td className="text-slate-300">
                  {food.category}
                </td>

                <td className="text-green-400 text-center">
                  ৳ {food.price}
                </td>

                <td className="text-blue-400 text-center">
                  {food.quantity}
                </td>

                <td className="text-center">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() =>
                        router.push(
                          `/dashboard/edit-food/${food._id}`
                        )
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(food._id)
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}