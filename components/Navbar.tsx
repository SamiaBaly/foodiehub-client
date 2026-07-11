"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  usePathname,
  useRouter,
} from "next/navigation";
import { SeparatorVertical } from "lucide-react";

interface User {
  name: string;
  email: string;
  photo?: string;
  role?: string;
}

export default function Navbar() {

  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const activeClass = (path: string) => {

    const isActive =
      path === "/"
        ? pathname === "/"
        : pathname.startsWith(path);

    return isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
      : "text-slate-300 hover:text-white transition";

  };

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    router.push("/login");

  };

  return (

    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-slate-950/90
        backdrop-blur-xl
        border-b
        border-slate-800
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
        "
      >



        {/* Logo */}

        <Link
          href="/"
          className="
            text-3xl
            font-extrabold
            text-white
          "
        >

          🍔

          <span className="text-blue-500">
            Foodie
          </span>

          Hub

        </Link>






        {/* Desktop */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >


          <Link
            href="/"
            className={activeClass("/")}
          >
            Home
          </Link>

          <Link
            href="/foods"
            className={activeClass("/foods")}
          >
            Foods
          </Link>

          {user && (
            <Link
              href="/dashboard"
              className={activeClass("/dashboard")}
            >
              Dashboard
            </Link>
          )}





          <div className="flex items-center gap-3">


            {
              user ? (

                <div className="flex items-center gap-4">


                  <SeparatorVertical />


                  <div className="flex items-center gap-3">

                    <img
                      src={user.photo || "/avatar.png"}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <span className="text-white font-semibold">
                      {user.name}
                    </span>

                    <button
                      onClick={handleLogout}
                      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
                    >
                      Logout
                    </button>

                  </div>



                </div>


              ) : (


                <Link

                  href="/login"

                  className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-5
                    py-2
                    rounded-xl
                  "

                >

                  Login

                </Link>


              )

            }





            {/* Always Show Register */}

            <Link

              href="/register"

              className="
                bg-green-600
                hover:bg-green-700
                text-white
                px-5
                py-2
                rounded-xl
              "

            >

              Register

            </Link>



          </div>



        </div>






        {/* Mobile Button */}

        <button

          onClick={() => setMenuOpen(!menuOpen)}

          className="
            md:hidden
            text-white
            text-3xl
          "

        >

          ☰

        </button>



      </div>








      {/* Mobile Menu */}


      {
        menuOpen && (

          <div
            className="
              md:hidden
              bg-slate-900
              border-t
              border-slate-800
              px-6
              py-5
              space-y-4
            "
          >


            <Link
              href="/"
              className="block text-slate-300"
            >
              Home
            </Link>



            <Link
              href="/foods"
              className="block text-slate-300"
            >
              Foods
            </Link>





            {
              user && (

                <Link
                  href="/dashboard"
                  className="block text-slate-300"
                >

                  Dashboard

                </Link>

              )
            }






            {
              user ? (

                <button

                  onClick={handleLogout}

                  className="
                    bg-red-600
                    text-white
                    px-5
                    py-2
                    rounded-xl
                  "

                >

                  Logout

                </button>


              ) : (


                <Link

                  href="/login"

                  className="
                    inline-block
                    bg-blue-600
                    text-white
                    px-5
                    py-2
                    rounded-xl
                  "

                >

                  Login

                </Link>


              )

            }




            {/* Mobile Register Always */}

            <Link

              href="/register"

              className="
                inline-block
                bg-green-600
                text-white
                px-5
                py-2
                rounded-xl
              "

            >

              Register

            </Link>



          </div>


        )
      }



    </nav>

  );

}