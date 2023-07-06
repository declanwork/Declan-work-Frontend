"use client";
import GoogleAuth from "../../components/googleOAuth";
import AppleAuth from "../../components/appleOAuth";
import NavbarJob from "../../components/NavbarJob";
import Header from "../../components/Header";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Link from "next/link";

export default function SignUp() {
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
    <div className="">
      <NavbarJob />
      <div className="px-14 max-w-2xl mx-auto">
        <Header 
            title="Post new Job" 
            subtitle="1/3" 
            nextTitle="Let’s Start with a strong Title." 
            nextSubtitle="This helps your Job post stand out to the right candidate. 
            It’s the first thing they’ll see. So make it count!"
        />
        <div className="my-9">
          <p className="font-semibold mb-3">Write a title for your Job Post</p>
          <textarea name="postContent" rows={6} cols={50} className="px-4 py-4 bg-white text-lg text-gray-700 border border-[#D9D9D9] rounded transition ease-in-out resize-none" />
          <p className="font-medium text-sm text-[#00EF8B] mb-3">We’ll match you with candidates that specialize in Web3 Design </p>
        </div>
        <Link
          href="/newJob/Content"
          className="rounded-full float-right text-sm font-semibold bg-[#00EF7C] p-2 px-5 text-[#00360C]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ADFFC8]"
        >
          Next Skill
        </Link>
      </div>
    </div>
  );
}
