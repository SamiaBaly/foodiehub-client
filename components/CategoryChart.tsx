"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";


interface Food {
  category: string;
}


const COLORS = [
  "#2563eb",
  "#22c55e",
  "#eab308",
  "#ef4444",
  "#a855f7",
  "#06b6d4",
];


export default function CategoryChart({
  foods,
}: {
  foods: Food[];
}) {


  const categoryData = foods.reduce(
    (acc: any[], food) => {

      const exist = acc.find(
        (item) =>
          item.name === food.category
      );


      if (exist) {

        exist.value += 1;

      } else {

        acc.push({
          name: food.category,
          value: 1,
        });

      }


      return acc;

    },
    []
  );


  const total = foods.length;



  return (
    <div
      className="
        bg-gradient-to-br
        from-slate-900
        to-slate-800
        border
        border-slate-700
        rounded-3xl
        p-6
        h-[380px]
        shadow-xl
      "
    >

      <div className="flex justify-between items-center mb-4">

        <div>

          <h2 className="text-2xl font-bold text-white">
            📊 Food Categories
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Distribution of your foods
          </p>

        </div>


        <div
          className="
            bg-blue-600/20
            border
            border-blue-500/30
            px-4
            py-2
            rounded-xl
          "
        >

          <p className="text-xs text-slate-400">
            Total
          </p>

          <p className="text-xl font-bold text-blue-400">
            {total}
          </p>

        </div>


      </div>



      {
        categoryData.length === 0 ? (

          <div className="
            h-[250px]
            flex
            items-center
            justify-center
            text-slate-400
          ">
            No Data Available
          </div>

        ) : (

          <ResponsiveContainer
            width="100%"
            height="75%"
          >

            <PieChart>


              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={5}
                label
              >

                {
                  categoryData.map(
                    (_, index) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[index % COLORS.length]
                        }
                      />
                    )
                  )
                }

              </Pie>



              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  color: "white",
                }}
              />


              <Legend
                verticalAlign="bottom"
                height={30}
              />


            </PieChart>


          </ResponsiveContainer>

        )
      }


    </div>
  );
}