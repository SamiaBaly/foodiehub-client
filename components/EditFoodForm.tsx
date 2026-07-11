"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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

export default function EditFoodForm({
  food,
}: {
  food: Food;
}) {
  const [formData, setFormData] = useState({
    name: food.name,
    description: food.description,
    image: food.image,
    category: food.category,
    price: food.price,
    quantity: food.quantity,
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/foods/${food._id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            ...formData,
            price: Number(formData.price),
            quantity: Number(formData.quantity),
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        toast(result.message);
        return;
      }

      toast.success("Food updated successfully.");

      router.push("/dashboard/my-foods");

      router.refresh();

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong.");

    }

  };

  return (
    <div className="max-w-6xl mx-auto">

      <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="bg-slate-900 text-white p-10 flex flex-col">

          <h2 className="text-4xl font-bold">
            ✏️ Edit Food
          </h2>

          <p className="text-slate-300 mt-2 mb-8">
            Update your food information.
          </p>

          <img
            src={formData.image}
            alt={formData.name}
            className="w-full h-[380px] rounded-2xl object-cover border-4 border-slate-700"
          />

          <div className="mt-8 rounded-2xl bg-white/10 backdrop-blur-md p-6 space-y-5">

            <div className="flex justify-between">
              <span className="text-slate-300">
                Category
              </span>

              <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-semibold">
                {formData.category}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-300">
                Price
              </span>

              <span className="text-blue-300 text-xl font-bold">
                ৳ {formData.price}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-300">
                Quantity
              </span>

              <span className="font-semibold">
                {formData.quantity}
              </span>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <form onSubmit={handleSubmit} className="bg-slate-900 p-10 space-y-6">

          <div>
            <label className="block mb-2 font-semibold text-slate-200">
              Food Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="
w-full
rounded-xl
border
border-slate-700
bg-slate-800
text-white
placeholder:text-slate-400
px-4
py-3
outline-none
transition
focus:border-blue-500
focus:ring-2
focus:ring-blue-500
"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-slate-200">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="
w-full
rounded-xl
border
border-slate-700
bg-slate-800
text-white
placeholder:text-slate-400
px-4
py-3
resize-none
outline-none
transition
focus:border-blue-500
focus:ring-2
focus:ring-blue-500
"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-slate-200">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="
w-full
rounded-xl
border
border-slate-700
bg-slate-800
text-white
placeholder:text-slate-400
px-4
py-3
outline-none
transition
focus:border-blue-500
focus:ring-2
focus:ring-blue-500
"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 font-semibold text-slate-200">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="
w-full
rounded-xl
border
border-slate-700
bg-slate-800
text-white
placeholder:text-slate-400
px-4
py-3
outline-none
transition
focus:border-blue-500
focus:ring-2
focus:ring-blue-500
"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-slate-200">
                Quantity
              </label>

              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="
w-full
rounded-xl
border
border-slate-700
bg-slate-800
text-white
placeholder:text-slate-400
px-4
py-3
outline-none
transition
focus:border-blue-500
focus:ring-2
focus:ring-blue-500
"
              />
            </div>

          </div>

          <div>
            <label className="block mb-2 font-semibold text-slate-200">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="
w-full
rounded-xl
border
border-slate-700
bg-slate-800
text-white
placeholder:text-slate-400
px-4
py-3
outline-none
transition
focus:border-blue-500
focus:ring-2
focus:ring-blue-500
"
            />
          </div>

          <button
            type="submit"
            className="
w-full
rounded-xl
bg-blue-600
hover:bg-blue-700
text-white
font-bold
py-4
transition-all
duration-300
shadow-lg
"
          >
            💾 Update Food
          </button>

        </form>

      </div>

    </div>
  );
}