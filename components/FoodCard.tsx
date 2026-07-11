import Image from "next/image";
import Link from "next/link";

import { Food } from "@/types/food";


interface Props {
  food: Food;
}


const FoodCard = ({
  food
}: Props) => {


  return (

    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        overflow-hidden
        shadow-xl
        hover:border-blue-500
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >



      {/* Image */}

      <div
        className="
          relative
          h-56
          overflow-hidden
        "
      >

        <Image

          src={food.image}

          alt={food.name}

          fill

          className="
            object-cover
            hover:scale-110
            transition
            duration-500
          "

        />


        {/* Category Badge */}

        <div
          className="
            absolute
            top-4
            left-4
          "
        >

          <span
            className="
              bg-blue-600
              text-white
              px-4
              py-1.5
              rounded-full
              text-sm
              font-semibold
              shadow-lg
            "
          >
            {food.category}
          </span>


        </div>


      </div>




      {/* Content */}

      <div className="p-6">


        <div
          className="
            flex
            justify-between
            items-start
            gap-3
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >

            {food.name}

          </h2>


          <span
            className="
              text-blue-400
              font-bold
              text-xl
              whitespace-nowrap
            "
          >

            ৳{food.price}

          </span>


        </div>




        <p
          className="
            text-slate-400
            mt-3
            line-clamp-2
            leading-relaxed
          "
        >

          {food.description}

        </p>




        {/* Info */}

        <div
          className="
            mt-5
            flex
            justify-between
            bg-slate-800
            rounded-xl
            p-4
          "
        >

          <div>

            <p className="text-slate-400 text-sm">
              Quantity
            </p>

            <p className="text-white font-bold">
              {food.quantity}
            </p>

          </div>



          <div>

            <p className="text-slate-400 text-sm">
              Available
            </p>

            <p className="text-green-400 font-bold">
              In Stock
            </p>

          </div>


        </div>




        {/* Button */}

        <Link

          href={`/foods/${food._id}`}

          className="
            block
            mt-6
            text-center
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-semibold
            py-3
            rounded-xl
            transition
            shadow-lg
          "

        >

          View Details →

        </Link>



      </div>


    </div>

  );

};


export default FoodCard;