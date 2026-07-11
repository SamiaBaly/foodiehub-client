import Link from "next/link";


export default function Footer() {

  return (

    <footer
      className="
        bg-slate-950
        border-t
        border-slate-800
        py-12
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >


        <div
          className="
            grid
            md:grid-cols-4
            gap-8
          "
        >



          {/* Brand */}

          <div>

            <h2
              className="
                text-3xl
                font-bold
                text-white
              "
            >
              🍔 FoodieHub
            </h2>


            <p
              className="
                text-slate-400
                mt-4
                leading-relaxed
              "
            >
              Manage your favorite foods,
              explore delicious meals and
              enjoy a smart food experience.
            </p>

          </div>




          {/* Quick Links */}

          <div>

            <h3
              className="
                text-white
                font-bold
                text-lg
                mb-4
              "
            >
              Quick Links
            </h3>


            <div
              className="
                space-y-3
              "
            >

              <Link
                href="/"
                className="text-slate-400 hover:text-white"
              >
                Home
              </Link>


              <br />


              <Link
                href="/foods"
                className="text-slate-400 hover:text-white"
              >
                Foods
              </Link>


              <br />


              <Link
                href="/dashboard"
                className="text-slate-400 hover:text-white"
              >
                Dashboard
              </Link>

            </div>

          </div>





          {/* Features */}

          <div>

            <h3
              className="
                text-white
                font-bold
                text-lg
                mb-4
              "
            >
              Features
            </h3>


            <ul
              className="
                space-y-3
                text-slate-400
              "
            >

              <li>
                🍔 Food Management
              </li>

              <li>
                🔐 Secure Login
              </li>

              <li>
                📊 Analytics Dashboard
              </li>

            </ul>


          </div>





          {/* Contact */}

          <div>

            <h3
              className="
                text-white
                font-bold
                text-lg
                mb-4
              "
            >
              Contact
            </h3>


            <p className="text-slate-400">
              📧 support@foodiehub.com
            </p>


            <p className="text-slate-400 mt-2">
              📍 Bangladesh
            </p>


          </div>



        </div>





        <div
          className="
            border-t
            border-slate-800
            mt-10
            pt-6
            text-center
            text-slate-500
          "
        >

          © {new Date().getFullYear()} FoodieHub.
          All rights reserved.

        </div>



      </div>


    </footer>

  );

}