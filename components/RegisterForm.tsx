"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { registerUser } from "@/services/auth.service";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";


const RegisterForm = () => {


  const router = useRouter();


  const [loading, setLoading] = useState(false);



  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
    confirmPassword: "",
  });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };





  const handleSubmit = async (
    e: React.FormEvent
  ) => {


    e.preventDefault();


    try {


      setLoading(true);



      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        photo: formData.photo,
        password: formData.password,
      });


      console.log(
        "Register Response:",
        response
      );



      toast.success("Registration Successful 🎉");



      router.push("/login");



    } catch (error: unknown) {



      if (axios.isAxiosError(error)) {


        toast.error(
          
          "Registration Failed"
        );


      } else {


        toast(
          "Something went wrong"
        );


      }


    } finally {


      setLoading(false);


    }


  };

  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse
  ) => {

    try {

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/google-login`,
        {
          credential: credentialResponse.credential,
        }
      );

      const data = res.data;

      // Save token
      localStorage.setItem("token", data.token);

      // Save user
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      toast.success("Google Login Successful 🎉");

      console.log("Before redirect");

      router.push("/");

      console.log("After redirect");

      // যদি redirect না হয়, এটা ব্যবহার করে test করতে পারো:
      // window.location.href = "/";

    } catch (error) {

      console.error(error);

      toast.error("Google Login Failed");

    }

  };


  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >



      {/* Username */}

      <div>

        <label className="text-slate-300 text-sm">
          Name
        </label>

        <input
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="
    mt-2
    w-full
    bg-slate-800
    border
    border-slate-700
    text-white
    rounded-xl
    px-4
    py-3
    outline-none
    focus:border-blue-500
  "
          required
        />

      </div>






      {/* Email */}

      <div>

        <label className="text-slate-300 text-sm">
          Email
        </label>


        <input

          type="email"

          name="email"

          placeholder="Enter email"

          value={formData.email}

          onChange={handleChange}

          className="
            mt-2
            w-full
            bg-slate-800
            border
            border-slate-700
            text-white
            rounded-xl
            px-4
            py-3
            outline-none
            focus:border-blue-500
          "

          required

        />

      </div>


      <div>
        <label className="text-slate-300 text-sm">
          Photo URL
        </label>

        <input
          type="text"
          name="photo"
          placeholder="https://example.com/photo.jpg"
          value={formData.photo}
          onChange={handleChange}
          className="
      mt-2
      w-full
      bg-slate-800
      border
      border-slate-700
      text-white
      rounded-xl
      px-4
      py-3
      outline-none
      focus:border-blue-500
    "
        />
      </div>







      {/* Password */}
      <div className="relative">

        <label className="text-slate-300 text-sm">
          Password
        </label>

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="
      mt-2
      w-full
      bg-slate-800
      border
      border-slate-700
      text-white
      rounded-xl
      px-4
      py-3
      pr-14
      outline-none
      focus:border-blue-500
    "
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
      absolute
      right-4
      top-[43px]
      text-slate-400
    "
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>
    
      <button

        type="submit"

        disabled={loading}

        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          disabled:opacity-50
          text-white
          font-semibold
          py-3
          rounded-xl
          transition
        "

      >

        {
          loading
            ? "Creating Account..."
            : "Register"
        }


      </button>
      <div className="mt-8">

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-700" />
          <span className="text-sm text-slate-400">
            OR
          </span>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        <div className="mt-6 flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => toast.error("Google Login Failed")}
            auto_select={ false}
            theme="outline"
            size="large"
            shape="rectangular"
            text="signup_with"
            width="350"
          />
        </div>

      </div>
      <div className="text-center pt-2">

        <span className="text-slate-400">
          Already have an account?
        </span>

        <Link
          href="/login"
          className="
      ml-2
      text-blue-500
      hover:text-blue-400
      font-semibold
    "
        >
          Login
        </Link>

      </div>




    </form>

  );

};


export default RegisterForm;