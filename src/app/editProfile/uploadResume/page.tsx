"use client";
import Nav from "@/app/components/Nav";
import Link from "next/link";
import { FaUpload, FaLinkedinIn } from "react-icons/fa";

export default function uploadResume() {
  return (
    <div>
      <Nav />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-medium text-black mb-5">
          Land your dream job
        </h1>
        <h1 className="text-4xl font-medium text-black max-w-2xl mb-4">
          What would you like to tell the world about yourself?
        </h1>
        <p className="font-medium text-black">
          We need to know about your experience, your skills, portfolio and
          certification.
        </p>
        <div className="mt-16 mb-5">
          <label htmlFor="resume" className="text-center">
            <div className="flex items-center border rounded border-[#001E00] justify-start w-[30vw] p-3">
              <div className="mx-auto flex items-center">
              <FaUpload className="text-[#00EF7C] bg-black p-2 rounded-full" size={30} /> <span className="ml-2 font-medium">Upload Your Resume</span>
              </div>
            </div>
          </label>
            <input type="file" name="" id="resume" className="hidden mx-auto" />
        </div>
        <div className="mb-7">
          <label htmlFor="resume" className="text-center">
            <div className="flex items-center border rounded border-[#001E00] justify-start w-[30vw] p-3">
              <div className="mx-auto flex items-center">
              <FaLinkedinIn className="text-[#00EF7C]" size={20} /> <span className="ml-2 font-medium">Import From Linkedin</span>
              </div>
            </div>
          </label>
            <input type="file" name="" id="resume" className="hidden mx-auto" />
        </div>
        <Link href="/editProfile" className="py-4 px-[118px] rounded font-medium bg-[#00EF7C]">Fill Out Manually [15 Min]</Link>
      </div>
    </div>
  );
}
