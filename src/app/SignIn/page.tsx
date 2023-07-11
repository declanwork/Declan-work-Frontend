"use client";
import GoogleAuth from "../components/googleOAuth";
import AppleAuth from "../components/appleOAuth";
import Nav from "../components/Nav";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Link from "next/link";

export default function SignIn() {
  const [showPassword, setShowPassWord] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function onChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const { email, password } = formData;

  async function onSubmit() {}

  return (
    <div className="pb-20">
      <Nav />
      <div className="border border-[#001E005E] rounded-lg py-20 px-14 max-w-2xl mx-auto">
        <h1 className="text-black text-3xl md:text-4xl">Welcome Back.</h1>
        <AppleAuth />
        <GoogleAuth />
        <div className="my-9 flex items-center before:border-t  before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
          <p className="text-center font-semibold mx-4">OR</p>
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="Work Email Address"
            className="w-full px-4 py-2 bg-white text-xl text-gray-700 border border-[#D9D9D9] rounded transition ease-in-out mb-6"
          />
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              className="w-full px-4 py-2 bg-white text-xl text-gray-700 border border-[#D9D9D9]  rounded transition ease-in-out"
            />
            {showPassword ? (
              <AiFillEyeInvisible
                className="absolute
                right-3 top-3 text-xl cursor-pointer"
                onClick={() => setShowPassWord((prevState) => !prevState)}
              />
            ) : (
              <AiFillEye
                className="absolute
                right-3 top-3 text-xl cursor-pointer"
                onClick={() => setShowPassWord((prevState) => !prevState)}
              />
            )}
          </div>

          <button
            type="submit"
            className="mt-10 flex items-center justify-center w-full bg-[#00EF7C] text-[#001E00] px-7 py-3 capitalize font-bold  hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
          >
            {" "}
            Log Into Account
          </button>
        </form>
        <div className="whitespace-nowrap text-sm sm:text-lg text-center mt-12">
          <p className="mb-6">
            <Link
              href="#"
              className="text-[#00EF7C] transition duration-200 ease-in-out text-sm"
            >
              Forgot Password?
            </Link>
          </p>
          <p className="mb-6 text-sm">
            No Existing Account?
            <Link
              href="/signUp"
              className="ml-1 text-[#00EF7C] transition duration-200 ease-in-out"
            >
            Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
