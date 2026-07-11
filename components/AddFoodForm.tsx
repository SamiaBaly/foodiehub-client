"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createFood } from "@/services/food.service";
import { toast } from "react-toastify";

const AddFoodForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        toast("Please login first");
        return;
      }

      await createFood(
        {
          name: formData.name,
          description: formData.description,
          image: formData.image,
          category: formData.category,
          price: Number(formData.price),
          quantity: Number(formData.quantity),
        },
        token
      );

      toast.success("Food Added Successfully");

      router.push("/foods");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add food");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      shadow-xl
      p-8
      space-y-6
    "
    >

      <div>
        <h2 className="text-3xl font-bold text-white">
          ➕ Add New Food
        </h2>

        <p className="text-slate-400 mt-2">
          Create a new food item for your FoodieHub menu.
        </p>
      </div>


      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block text-slate-300 mb-2 font-medium">
            Food Name
          </label>

          <input
            name="name"
            placeholder="Chicken Burger"
            value={formData.name}
            onChange={handleChange}
            className="
            w-full
            bg-slate-800
            text-white
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
            required
          />
        </div>


        <div>
          <label className="block text-slate-300 mb-2 font-medium">
            Category
          </label>

          <input
            name="category"
            placeholder="Fast Food"
            value={formData.category}
            onChange={handleChange}
            className="
            w-full
            bg-slate-800
            text-white
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
            required
          />
        </div>

      </div>


      <div>
        <label className="block text-slate-300 mb-2 font-medium">
          Description
        </label>

        <textarea
          name="description"
          placeholder="Describe your food..."
          value={formData.description}
          onChange={handleChange}
          rows={5}
          className="
          w-full
          bg-slate-800
          text-white
          border
          border-slate-700
          rounded-xl
          px-4
          py-3
          outline-none
          resize-none
          focus:ring-2
          focus:ring-blue-500
        "
          required
        />

      </div>


      <div>
        <label className="block text-slate-300 mb-2 font-medium">
          Image URL
        </label>

        <input
          name="image"
          placeholder="https://image-url.com"
          value={formData.image}
          onChange={handleChange}
          className="
          w-full
          bg-slate-800
          text-white
          border
          border-slate-700
          rounded-xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
          required
        />

      </div>


      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block text-slate-300 mb-2 font-medium">
            Price
          </label>

          <input
            type="number"
            name="price"
            placeholder="250"
            value={formData.price}
            onChange={handleChange}
            className="
            w-full
            bg-slate-800
            text-white
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
            required
          />

        </div>


        <div>
          <label className="block text-slate-300 mb-2 font-medium">
            Quantity
          </label>

          <input
            type="number"
            name="quantity"
            placeholder="20"
            value={formData.quantity}
            onChange={handleChange}
            className="
            w-full
            bg-slate-800
            text-white
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
            required
          />

        </div>

      </div>


      <button
        type="submit"
        disabled={loading}
        className="
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-semibold
        py-3
        rounded-xl
        transition
        disabled:opacity-50
      "
      >
        {loading ? "Adding Food..." : "🍔 Add Food"}
      </button>


    </form>
  );
};

export default AddFoodForm;