"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  getFoodById,
  updateFood,
} from "@/services/food.service";
import { toast } from "react-toastify";


interface Food {
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
}


export default function EditFoodPage() {

  const params = useParams();

  const router = useRouter();


  const id = params.id as string;


  const [food, setFood] = useState<Food>({
    name: "",
    description: "",
    image: "",
    category: "",
    price: 0,
    quantity: 0,
  });


  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const loadFood = async () => {

      try {

        const response =
          await getFoodById(id);


        const data = response.data;


        setFood({

          name: data.name,

          description: data.description,

          image: data.image,

          category: data.category,

          price: data.price,

          quantity: data.quantity,

        });


      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };


    if (id) {
      loadFood();
    }


  }, [id]);



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFood({

      ...food,

      [e.target.name]:
        e.target.value,

    });

  };



  if (loading) {

    return (
      <div className="text-white p-8">
        Loading...
      </div>
    );

  }
  const handleUpdate = async () => {

    try {

      const token =
        localStorage.getItem("token");


      if (!token) {
        toast("Login required");
        return;
      }


      await updateFood(
        id,
        food,
        token
      );


      toast.success(
        "Food updated successfully"
      );


      router.push(
        "/dashboard/manage-foods"
      );


    } catch (error: unknown) {

      console.log(error);

      toast.error(
        (error as { response?: { data?: { message?: string } } }).response?.data?.message ||
        "Update failed"
      );

    }

  };



  return (

    <main className="
  min-h-screen
  flex
  flex-col
  justify-center
  items-center
  p-8
">

      <h1 className="text-3xl font-bold text-white mb-8">
        ✏️ Edit Food
      </h1>


      <div className="
  max-w-xl
  bg-slate-900
  p-6
  rounded-2xl
  space-y-5
">


        <input
          name="name"
          value={food.name}
          onChange={handleChange}
          placeholder="Food Name"
          className="
          w-full
          bg-slate-800
          text-white
          p-3
          rounded-lg
          "
        />


        <textarea
          name="description"
          value={food.description}
          onChange={handleChange}
          placeholder="Description"
          className="
          w-full
          bg-slate-800
          text-white
          p-3
          rounded-lg
          "
        />


        <input
          name="image"
          value={food.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="
          w-full
          bg-slate-800
          text-white
          p-3
          rounded-lg
          "
        />


        <input
          name="category"
          value={food.category}
          onChange={handleChange}
          placeholder="Category"
          className="
          w-full
          bg-slate-800
          text-white
          p-3
          rounded-lg
          "
        />


        <input
          type="number"
          name="price"
          value={food.price}
          onChange={handleChange}
          placeholder="Price"
          className="
          w-full
          bg-slate-800
          text-white
          p-3
          rounded-lg
          "
        />


        <input
          type="number"
          name="quantity"
          value={food.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="
          w-full
          bg-slate-800
          text-white
          p-3
          rounded-lg
          "
        />


        <button

          onClick={handleUpdate}

          className="
    w-full
    bg-blue-600
    hover:bg-blue-700
    text-white
    py-3
    rounded-lg
  "

        >
          Update Food
        </button>


      </div>


    </main>

  );

}