"use client";
<<<<<<< HEAD
import NavbarJob from "../../components/NavbarJob";
import { SubText } from "../../components/Header";
import Form from "@/app/components/Form";
=======
import NavbarJob from "../../../components/NavbarJob";
import { SubText } from "../../../components/Header";
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import Link from "next/link";
import Form from "@/components/Form";
>>>>>>> 9e6dd42fa826aebca0816362b81d5ce8e59a12ca

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
