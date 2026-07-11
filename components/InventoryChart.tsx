"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";


interface Food {
  name: string;
  quantity: number;
}


export default function InventoryChart({
  foods,
}: {
  foods: Food[];
}) {


  const chartData = foods.map((food) => ({
    name: food.name,
    quantity: food.quantity,
  }));


  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        h-[350px]
      "
    >

      <h2 className="text-2xl font-bold text-white mb-5">
        📦 Inventory Stock
      </h2>


      <ResponsiveContainer
        width="100%"
        height="85%"
      >

        <BarChart data={chartData}>

          <CartesianGrid
            strokeDasharray="3 3"
          />


          <XAxis
            dataKey="name"
            tick={{ fill: "#94a3b8" }}
          />


          <YAxis
            tick={{ fill: "#94a3b8" }}
          />


          <Tooltip />


          <Bar
            dataKey="quantity"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />


        </BarChart>

      </ResponsiveContainer>


    </div>
  );
}