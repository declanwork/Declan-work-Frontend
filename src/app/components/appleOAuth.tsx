"use client"
import { FaApple } from "react-icons/fa";

export default function googleOAuth() {
    async function onAppleClick(){}
    return (
      <button type="button" onClick={onAppleClick} className="flex my-5 items-center justify-center w-full bg-transparent border text-black px-7 py-3 uppercase text-sm font-medium  active:shadow-lg transition duration-150 ease-in-out rounded">
         <FaApple className="text-2xl rounded-full mr-2" /> Sign Up with Apple
      </button>
    )
  }