"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "@/services/auth.service";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

      const response = await loginUser(formData);

      console.log("Login Response:", response);

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      toast.success("Login Successful 🎉");

      router.push("/dashboard");
      router.refresh();

    } catch (error: unknown) {

      if (axios.isAxiosError(error)) {

        toast.error("Login Failed");

      } else {

        toast.error("Something went wrong");

      }

    } finally {

      setLoading(false);

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Email */}

      <div>

        <label
          className="
            text-slate-300
            text-sm
            font-medium
          "
        >
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="
            mt-2
            w-full
            bg-slate-800
            border
            border-slate-700
            text-white
            placeholder:text-slate-500
            rounded-xl
            px-4
            py-3
            outline-none
            focus:border-blue-500
          "
          required
        />

      </div>

      {/* Password */}

      <div className="relative">

        <label
          className="
            text-slate-300
            text-sm
            font-medium
          "
        >
          Password
        </label>

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="
            mt-2
            w-full
            bg-slate-800
            border
            border-slate-700
            text-white
            placeholder:text-slate-500
            rounded-xl
            px-4
            py-3
            pr-12
            outline-none
            focus:border-blue-500
          "
          required
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(
              !showPassword
            )
          }
          className="
            absolute
            right-4
            top-[44px]
            text-slate-400
            hover:text-white
          "
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>

      {/* Login Button */}

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
        {loading
          ? "Logging in..."
          : "Login"}
      </button>

      {/* Register Link */}

      <div className="text-center">

        <span className="text-slate-400">
          Don't have an account?
        </span>

        <Link
          href="/register"
          className="
            ml-2
            text-blue-500
            hover:text-blue-400
            font-semibold
          "
        >
          Register
        </Link>

      </div>

    </form>
  );
};

export default LoginForm;