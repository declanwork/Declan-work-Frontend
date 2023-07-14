"use client"
import { FcGoogle } from 'react-icons/fc';

export default function googleOAuth() {
  async function onGoogleClick(){}
  return (
    <button type="button" onClick={onGoogleClick} className="flex items-center justify-center w-full bg-[#5723F8] text-white px-7 py-3 uppercase text-sm font-medium active:shadow-lg transition duration-150 ease-in-out rounded">
       <FcGoogle className="text-2xl rounded-full mr-2" /> Sign Up with Google
    </button>
  )
}