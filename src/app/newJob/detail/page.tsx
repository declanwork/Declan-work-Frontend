"use client";
import { BiSolidPencil } from 'react-icons/bi';
import { PiCaretDownBold } from 'react-icons/pi';
import Link from "next/link";
import { SubText } from "@/components/Header";
import NavbarJob from "@/components/NavbarJob";



export default function Payments() {

  return (
    <div>
      <NavbarJob />
      <div className="max-w-3xl mx-auto py-16">
            <div className="flex justify-between">
                <SubText 
                title="Job Detail" 
                subtitle="3/3"
                />
                <Link
                    href="/newJob/detail/verify"
                    className="rounded-full bg-[#00EF7C] px-4 py-2 h-9 text-sm font-semibold shadow-sm"
                >
                Post This Job
                </Link>
            </div>
            <div className="border border-[#D9D9D9] mt-10 h-fit rounded-xl">
                <div className="p-5 px-6 flex items-center justify-between border-b border-[#D9D9D9]">
                    <p className="w-[85%] font-semibold">We are looking for an experienced crypto marketer to develop strategy in the leadup to our ICO.</p>
                    <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
                </div>

                <div className="p-5 px-6 flex items-center justify-between border-b border-[#D9D9D9]">
                    <p className="w-[85%]">
                        Service provider personal information then<br />
                        the will be activated when they are properly verified by an Agent<br /> 
                        Name<br />
                        Email <br />
                        Phone Number<br /> 
                        State <br />
                        Category of Service<br /> 
                        Place of business Address(Optional)<br />
                        Personal Address<br />
                        Create Password <br />
                        Give a price range 10,000-15,000.<br />
                        If there is any extra fix, you will be charged extra 20% of the original cost.<br />
                    </p>
                    <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
                </div>

                <div className="p-5 px-6 flex items-center justify-between">
                    <div className="w-[85%] ">
                        <h1 className="font-bold">Category</h1>
                        <p className="text-sm">Web3 Design</p>
                    </div>
                    <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
                </div>

                <div className="p-5 px-6 flex items-center justify-between">
                    <div className="w-[70%]">
                        <h1 className="font-bold">Skills</h1>
                        <div className="flex justify-between text-sm">
                            <span className="bg-[#00EF7C] rounded-full p-2">Web3 Design</span>
                            <span className="bg-[#00EF7C] rounded-full p-2">Web3 Development</span>
                            <span className="bg-[#00EF7C] rounded-full p-2">Product Design</span>
                            <span className="bg-[#00EF7C] rounded-full p-2">UI/UX Design</span>
                        </div>
                    </div>
                    <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
                </div>

                <div className="p-5 px-6 flex items-center justify-between">
                    <div className="w-[85%] ">
                        <h1 className="font-bold">Scope</h1>
                        <p className="text-sm">Medium, More than 6 months Intermediate Level</p>
                    </div>
                    <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
                </div>

                <div className="p-5 px-6 flex items-center justify-between border-b border-[#D9D9D9]">
                    <div className="w-[85%] ">
                        <h1 className="font-bold">Budget</h1>
                        <p className="text-sm">$15,000 - $20,000/ hr</p>
                    </div>
                    <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
                </div>

                <div className="p-5 px-6 flex items-center justify-between">
                    <div className="w-[85%] ">
                        <h1 className="font-bold">Screening Questions (Optional)</h1>
                        <p className="text-sm">Narrow down your candidate</p>
                    </div>
                    <div className="text-[#878787]"><PiCaretDownBold /></div>
                </div>
            </div>
        

        

            <div className="mt-9 flex items-center justify-between gap-x-6">
                <Link href="/newJob/Title" className="text-sm font-semibold px-4 py-2 rounded-full border border-[#001E00] leading-6 text-gray-900">
                Back
                </Link>
                <div className="flex items-center space-x-3">
                    <Link href="#">Save as draft</Link>
                    <Link
                        href="/newJob/detail/verify"
                        className="rounded-full bg-[#00EF7C] px-4 py-2 text-sm font-semibold shadow-sm"
                    >
                    Post This Job
                    </Link>
                </div>
            </div>
      </div>
    </div>
  );
}
