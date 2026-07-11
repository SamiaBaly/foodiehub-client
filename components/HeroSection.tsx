"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center">

      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-indigo-500/10 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-blue-500/10
              border
              border-blue-500/30
              text-blue-400
              font-semibold
            "
          >
            🍔 FoodieHub
          </motion.span>

          <h1 className="mt-8 text-5xl lg:text-5xl font-black leading-tight text-white">

            Discover

            <br />

            <span className="text-blue-500">

              <TypeAnimation
                sequence={[
                  "Delicious Foods",
                  1500,
                  "Healthy Meals",
                  1500,
                  "Fresh Recipes",
                  1500,
                  "Best Restaurants",
                  1500,
                ]}
                wrapper="span"
                repeat={Infinity}
              />

            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-400 max-w-xl">

            Discover thousands of delicious foods,
            manage your own inventory,
            explore categories and experience
            the smartest Food Management platform.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              href="/foods"
              className="
                px-8
                py-4
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition
                font-semibold
                text-white
                shadow-xl
                shadow-blue-600/30
              "
            >
              Explore Foods →
            </Link>

            <Link
              href="/dashboard/add-food"
              className="
                px-8
                py-4
                rounded-xl
                border
                border-slate-700
                hover:border-blue-500
                hover:bg-slate-900
                transition
                text-white
                font-semibold
              "
            >
              Add Food
            </Link>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-14">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
            >
              <h2 className="text-3xl font-bold text-blue-500">
                500+
              </h2>

              <p className="text-slate-400 mt-2">
                Foods
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
            >
              <h2 className="text-3xl font-bold text-cyan-400">
                100+
              </h2>

              <p className="text-slate-400 mt-2">
                Categories
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
            >
              <h2 className="text-3xl font-bold text-green-400">
                24/7
              </h2>

              <p className="text-slate-400 mt-2">
                Service
              </p>
            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative flex justify-center"
        >

          {/* Floating Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[470px]
              h-[470px]
              rounded-full
              border
              border-blue-500/20
            "
          />

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              relative
              bg-slate-900
              border
              border-slate-800
              rounded-[40px]
              p-5
              shadow-2xl
              shadow-blue-600/20
            "
          >

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900"
              alt="Food"
              className="
                w-[430px]
                h-[430px]
                rounded-3xl
                object-cover
              "
            />

          </motion.div>

          {/* Floating Cards */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              absolute
              top-5
              -left-6
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              px-5
              py-4
              shadow-xl
            "
          >
            ⭐ 4.9 Rating
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-8
              -right-6
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              px-5
              py-4
              shadow-xl
            "
          >
            🔥 Trending Foods
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}