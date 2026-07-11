"use client";

interface Food {
  name: string;
  price: number;
  quantity: number;
}


export default function DashboardStats({
  foods,
}: {
  foods: Food[];
}) {


  const totalStock = foods.reduce(
    (sum, food) => sum + food.quantity,
    0
  );


  const highestPriceFood =
    foods.length > 0
      ? foods.reduce((prev, current) =>
        prev.price > current.price
          ? prev
          : current
      )
      : null;



  const lowestPriceFood =
    foods.length > 0
      ? foods.reduce((prev, current) =>
        prev.price < current.price
          ? prev
          : current
      )
      : null;



  const lowStockFoods = foods.filter(
    (food) => food.quantity < 5
  );



  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">


      {/* Total Stock */}

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
          Total Stock
        </p>

        <h2 className="text-4xl font-bold text-blue-400 mt-3">
          {totalStock}
        </h2>

      </div>



      {/* Highest Price */}

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
          Highest Price
        </p>


        <h2 className="text-white font-bold mt-3">
          {highestPriceFood?.name || "N/A"}
        </h2>


        <p className="text-green-400 text-xl font-bold">
          ৳ {highestPriceFood?.price || 0}
        </p>


      </div>



      {/* Lowest Price */}

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
          Lowest Price
        </p>


        <h2 className="text-white font-bold mt-3">
          {lowestPriceFood?.name || "N/A"}
        </h2>


        <p className="text-yellow-400 text-xl font-bold">
          ৳ {lowestPriceFood?.price || 0}
        </p>


      </div>



      {/* Low Stock */}

      <div
        className="
          bg-slate-900
          border
          border-red-900
          rounded-2xl
          p-6
        "
      >

        <p className="text-slate-400">
          Low Stock Alert
        </p>


        <h2 className="text-4xl font-bold text-red-400 mt-3">
          {lowStockFoods.length}
        </h2>


        <p className="text-slate-400 text-sm mt-2">
          Items below 5 quantity
        </p>


      </div>


    </div>
  );
}