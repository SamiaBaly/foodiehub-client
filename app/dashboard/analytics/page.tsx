"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import api from "@/services/api";


interface Category {
  name: string;
  count: number;
}


interface AnalyticsData {

  totalUsers: number;

  totalFoods: number;

  totalAdmins: number;

  categories: Category[];

}

const COLORS = [
  "#6366F1", // Indigo
  "#06B6D4", // Cyan
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#F43F5E", // Rose
  "#8B5CF6", // Violet
  "#14B8A6", // Teal
  "#EC4899", // Pink
];



export default function AnalyticsPage() {


  const [data, setData] = useState<AnalyticsData | null>(null);



  useEffect(() => {

    const fetchAnalytics = async () => {

      try {

        const token = localStorage.getItem("token");


        const response = await api.get(
          "/analytics",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        console.log(
          "Analytics Response:",
          response.data
        );


        setData(
          response.data.data
        );


      } catch (error) {

        console.log(
          "Analytics Error:",
          error
        );

      }

    };


    fetchAnalytics();


  }, []);




  if (!data) {

    return (
      <div className="text-white p-8">
        Loading...
      </div>
    );

  }




  return (

    <main className="p-8 space-y-8">


      <h1 className="text-3xl font-bold text-white">
        📊 Analytics
      </h1>



      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-6">


        <div className="
          bg-slate-900
          p-6
          rounded-2xl
          text-white
        ">

          <h2 className="text-slate-400">
            Total Users
          </h2>

          <p className="text-4xl font-bold mt-3">
            {data.totalUsers}
          </p>

        </div>




        <div className="
          bg-slate-900
          p-6
          rounded-2xl
          text-white
        ">

          <h2 className="text-slate-400">
            Total Foods
          </h2>

          <p className="text-4xl font-bold mt-3">
            {data.totalFoods}
          </p>

        </div>




        <div className="
          bg-slate-900
          p-6
          rounded-2xl
          text-white
        ">

          <h2 className="text-slate-400">
            Total Admin
          </h2>

          <p className="text-4xl font-bold mt-3">
            {data.totalAdmins}
          </p>

        </div>


      </div>





      {/* Chart */}

      {/* Chart */}

      <div
        className="
    bg-slate-900
    rounded-2xl
    p-6
    h-[500px]
  "
      >

        <h2
          className="
      text-xl
      text-white
      font-semibold
      mb-6
    "
        >
          🍽 Food Categories Overview
        </h2>


        <ResponsiveContainer
          width="100%"
          height="90%"
        >

          <BarChart
            data={data.categories}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 50,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
            />


            <XAxis
              dataKey="name"
              tick={{
                fill: "white",
                fontSize: 12,
              }}
              angle={-35}
              textAnchor="end"
            />


            <YAxis
              tick={{
                fill: "white",
              }}
            />


            <Tooltip />


            <Bar
              dataKey="count"
              radius={[
                10,
                10,
                0,
                0
              ]}
            >

              {
                data.categories.map(
                  (item, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index % COLORS.length]
                      }
                    />
                  )
                )
              }

            </Bar>

          </BarChart>

        </ResponsiveContainer>


      </div>



    </main>

  );

}