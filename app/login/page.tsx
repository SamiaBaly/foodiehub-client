import LoginForm from "@/components/LoginForm";


const LoginPage = () => {

  return (

    <main
      className="
        min-h-screen
        bg-slate-950
        flex
        items-center
        justify-center
        px-5
        pt-20
      "
    >


      <div
        className="
          w-full
          max-w-md
        "
      >

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            shadow-2xl
            p-8
          "
        >


          {/* Header */}

          <div
            className="
              text-center
              mb-8
            "
          >

            <h1
              className="
                text-4xl
                font-extrabold
                text-white
              "
            >
              🍔 FoodieHub
            </h1>


            <p
              className="
                text-slate-400
                mt-3
              "
            >
              Login to manage your foods
            </p>


          </div>



          <LoginForm />


        </div>


      </div>


    </main>

  );

};


export default LoginPage;