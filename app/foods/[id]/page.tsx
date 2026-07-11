import Image from "next/image";
import { getFoodById } from "@/services/food.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}


const FoodDetailsPage = async ({
  params,
}: Props) => {


  const { id } = await params;


  const response = await getFoodById(id);


  const food = response.data;



  return (

    <main
      className="
        min-h-screen
        bg-slate-950
        px-5
        py-12
      "
    >


      <div
        className="
          max-w-6xl
          mx-auto
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          overflow-hidden
          shadow-2xl
          grid
          md:grid-cols-2
        "
      >



        {/* Image Section */}

        <div
          className="
            relative
            h-[500px]
          "
        >

          <Image

            src={food.image}

            alt={food.name}

            fill

            className="
              object-cover
            "

          />


          {/* Category */}

          <div
            className="
              absolute
              top-6
              left-6
            "
          >

            <span
              className="
                bg-blue-600
                text-white
                px-5
                py-2
                rounded-full
                font-semibold
                shadow-lg
              "
            >

              {food.category}

            </span>


          </div>


        </div>





        {/* Details Section */}


        <div
          className="
            p-8
            flex
            flex-col
            justify-center
          "
        >



          <h1
            className="
              text-4xl
              font-extrabold
              text-white
            "
          >

            {food.name}

          </h1>




          <p
            className="
              text-slate-400
              mt-5
              leading-relaxed
              text-lg
            "
          >

            {food.description}

          </p>





          <div
            className="
              mt-8
              space-y-4
            "
          >



            <div
              className="
                bg-slate-800
                rounded-xl
                p-4
              "
            >

              <p className="text-slate-400 text-sm">
                Price
              </p>

              <p
                className="
                  text-2xl
                  font-bold
                  text-blue-400
                "
              >
                ৳ {food.price}
              </p>

            </div>





            <div
              className="
                grid
                grid-cols-2
                gap-4
              "
            >


              <div
                className="
                  bg-slate-800
                  rounded-xl
                  p-4
                "
              >

                <p className="text-slate-400 text-sm">
                  Quantity
                </p>

                <p className="text-white font-bold text-xl">
                  {food.quantity}
                </p>


              </div>




              <div
                className="
                  bg-slate-800
                  rounded-xl
                  p-4
                "
              >

                <p className="text-slate-400 text-sm">
                  Status
                </p>


                <p
                  className="
                    text-green-400
                    font-bold
                  "
                >
                  Available
                </p>


              </div>



            </div>






            <div
              className="
    bg-slate-800
    rounded-xl
    p-4
  "
            >

              <p className="text-slate-400 text-sm">
                Food Owner
              </p>

              <p
                className="
      text-white
      font-semibold
    "
              >
                Verified Seller
              </p>

            </div>






            <div
              className="
                bg-slate-800
                rounded-xl
                p-4
              "
            >

              <p className="text-slate-400 text-sm">
                Created Date
              </p>


              <p className="text-white font-semibold">

                {
                  food.createdAt
                    ? new Date(
                      food.createdAt
                    ).toLocaleDateString()
                    : "N/A"
                }

              </p>


            </div>



          </div>




        </div>



      </div>



    </main>

  );

};


export default FoodDetailsPage;