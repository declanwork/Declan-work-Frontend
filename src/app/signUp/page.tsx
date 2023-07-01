"use client";
import GoogleAuth from "../components/googleOAuth";
import AppleAuth from "../components/appleOAuth";
import { useState, useMemo } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Select from "react-select";
import countryList from "react-select-country-list";
import Link from "next/link";

export default function SignUp() {
  const options = useMemo(() => countryList().getData(), []);
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassWord] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
  });
  function onChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const { firstName, lastName, email, password, country } = formData;

  async function onSubmit() {}

  return (
    <div className="py-20 px-3">
      <div className="border border-[#001E005E] rounded-lg py-20 px-10 max-w-4xl mx-auto">
        <h1 className="text-black text-3xl md:text-5xl">Start your Career right here.</h1>
        <AppleAuth />
        <GoogleAuth />
        <div className="my-9 flex items-center before:border-t  before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
          <p className="text-center font-semibold mx-4">OR</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="md:flex md:space-x-5">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="First Name"
              className="w-full px-4 py-2 bg-white text-xl text-gray-700 border border-[#D9D9D9] rounded transition ease-in-out mb-6"
            />
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Last Name"
              className="w-full px-4 py-2 bg-white text-xl text-gray-700 border border-[#D9D9D9] rounded transition ease-in-out mb-6"
            />
          </div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="Work Email"
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
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                padding: "4px",
                fontSize: "20px",
                lineHeight: "28px",
              }),
            }}
            options={options}
            id="country"
            value={country}
            onChange={onChange}
            placeholder={<div className="text-[#a0a6b2]">Select category</div>}
            className="w-full bg-white text-xl text-gray-700  rounded transition ease-in-out placeholder:text-black"
          />

          <div className="mt-5">
            <label>
              <input type="checkbox" checked={isChecked}  onChange={() => setIsChecked((prev) => !prev)} className="px-4 py-2 bg-white text-xl text-gray-700 border border-[#D9D9D9]  rounded transition ease-in-out mr-3" />
              <span className="text-sm text-black">Send me helpful messages about jobs that match my portfolio</span>
            </label>
          </div>
          <div className="mt-2">
          <label>
              <input type="checkbox" checked={isChecked}  onChange={() => setIsChecked((prev) => !prev)} className="px-4 py-2 bg-white text-xl text-gray-700 border border-[#D9D9D9]  rounded transition ease-in-out mr-3" />
              <span className="text-sm text-black">Yes, I understand and agree to <a href="/" className="text-[#19B200]">Declan&apos;s work terms and services</a> including the <a href="/" className="text-[#19B200]">user agreement</a> and <a href="/" className="text-[#19B200]">privacy policy</a>.</span>
            </label>
          </div>

          <button type="submit" className="mt-10 flex items-center justify-center w-full bg-[#00EF7C] text-[#001E00] px-7 py-3 uppercase text-sm font-medium  hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"> Create My Account
    </button>
        </form>
        <div className="whitespace-nowrap text-sm sm:text-lg text-center mt-12">
              <p className="mb-6">Already have an account? <Link href="/sign-in" className="text-[#00EF7C] transition duration-200 ease-in-out">Login</Link></p>
            </div>
      </div>
    </div>
  );
}
