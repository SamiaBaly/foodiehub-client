import RegisterForm from "@/components/RegisterForm";


const RegisterPage = () => {

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
            Create your account and start managing foods
          </p>


        </div>




        <RegisterForm />


      </div>


    </main>

  );

};


export default RegisterPage;