"use client";
import NavbarJob from "../../components/NavbarJob";
import { SubText } from "../../components/Header";
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import Link from "next/link";
import Form from "@/app/components/Form";

export default function SignUp() {

  // async function onSubmit() {}

  return (
    <div className="font-poppin">
      <NavbarJob />
      <div className="px-14 max-w-3xl mx-auto py-16">
        <SubText 
            title="Post new Job" 
            subtitle="2/3"
        />
        {/* Input Fields */}
        <div className="my-5 bg-[#00EF7C] p-3 rounded-lg w-full">
            <p className="text-[#001E00] text-sm">
                Filling out as many fields as possible increases your chances of finding the right candidate.
                Use this form only if you are looking to hire.
            </p>
        </div>
        <Form />
      </div>
    </div>
  );
}
